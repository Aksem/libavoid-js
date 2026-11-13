// Raw embind layer of libavoid-js.
//
// The public JS API is installed on top of these bindings by src/api.js. Conventions:
//  - Methods starting with `_` are raw: numbers, handles and packed coordinates
//    only, no validation. They are not part of the typings; call them only
//    from src/api.js, which validates arguments first (the module aborts on
//    exceptions thrown inside wasm).
//  - Polygons cross the boundary as packed coordinates [x0, y0, x1, y1, ...]:
//    a JS number array in, a Float64Array out.
//  - Single points and boxes are returned as value_objects ({x, y} and
//    {min, max}).
//  - Objects created through the router (shapes, junctions, connectors, pins)
//    are owned by it and returned as raw pointers. src/api.js tracks which
//    handle owns which, and redirects .delete() through the owner.
#include <libavoid/libavoid.h>

#include <emscripten/bind.h>
#include <emscripten/val.h>

#include <vector>

using namespace emscripten;

namespace {

Avoid::Polygon polygonFromCoords(const val& coords) {
    const std::vector<double> c = convertJSArrayToNumberVector<double>(coords);
    Avoid::Polygon poly(static_cast<int>(c.size() / 2));
    for (size_t i = 0; i < poly.size(); ++i) {
        poly.ps[i] = Avoid::Point(c[2 * i], c[2 * i + 1]);
    }
    return poly;
}

val coordsFromPolygon(const Avoid::PolygonInterface& poly) {
    static const val Float64Array = val::global("Float64Array");
    std::vector<double> c;
    c.reserve(poly.size() * 2);
    for (size_t i = 0; i < poly.size(); ++i) {
        const Avoid::Point& p = poly.at(i);
        c.push_back(p.x);
        c.push_back(p.y);
    }
    // new_ copies the view, so the temporary vector may go away.
    return Float64Array.new_(typed_memory_view(c.size(), c.data()));
}

// Top-left corner plus size, like the public RectLike.
Avoid::Rectangle rectangleFrom(double x, double y, double width, double height) {
    return Avoid::Rectangle(Avoid::Point(x, y), Avoid::Point(x + width, y + height));
}

void setEnd(Avoid::ConnRef& conn, bool isSource, const Avoid::ConnEnd& end) {
    if (isSource) {
        conn.setSourceEndpoint(end);
    } else {
        conn.setDestEndpoint(end);
    }
}

void setCallback(Avoid::ConnRef& conn, val jsCallback) {
    // Called without arguments: src/api.js passes the user's own ConnRef
    // handle, so no new handle is created per call and identity is kept.
    conn.setCallbackFunction([jsCallback](uintptr_t) { jsCallback(); }, 0);
}

}  // namespace


EMSCRIPTEN_BINDINGS(libavoid) {
    value_object<Avoid::Point>("Point")
        .field("x", &Avoid::Point::x)
        .field("y", &Avoid::Point::y);

    value_object<Avoid::Box>("Box")
        .field("min", &Avoid::Box::min)
        .field("max", &Avoid::Box::max);

    // -----------------------------------------------------------------------
    // Enums

    enum_<Avoid::RouterFlag>("RouterFlag", enum_value_type::number)
        .value("PolyLineRouting", Avoid::RouterFlag::PolyLineRouting)
        .value("OrthogonalRouting", Avoid::RouterFlag::OrthogonalRouting);

    enum_<Avoid::RoutingOption>("RoutingOption", enum_value_type::number)
        .value("nudgeOrthogonalSegmentsConnectedToShapes", Avoid::RoutingOption::nudgeOrthogonalSegmentsConnectedToShapes)
        .value("improveHyperedgeRoutesMovingJunctions", Avoid::RoutingOption::improveHyperedgeRoutesMovingJunctions)
        .value("penaliseOrthogonalSharedPathsAtConnEnds", Avoid::RoutingOption::penaliseOrthogonalSharedPathsAtConnEnds)
        .value("nudgeOrthogonalTouchingColinearSegments", Avoid::RoutingOption::nudgeOrthogonalTouchingColinearSegments)
        .value("performUnifyingNudgingPreprocessingStep", Avoid::RoutingOption::performUnifyingNudgingPreprocessingStep)
        .value("improveHyperedgeRoutesMovingAddingAndDeletingJunctions", Avoid::RoutingOption::improveHyperedgeRoutesMovingAddingAndDeletingJunctions)
        .value("nudgeSharedPathsWithCommonEndPoint", Avoid::RoutingOption::nudgeSharedPathsWithCommonEndPoint);

    enum_<Avoid::RoutingParameter>("RoutingParameter", enum_value_type::number)
        .value("segmentPenalty", Avoid::RoutingParameter::segmentPenalty)
        .value("anglePenalty", Avoid::RoutingParameter::anglePenalty)
        .value("crossingPenalty", Avoid::RoutingParameter::crossingPenalty)
        .value("clusterCrossingPenalty", Avoid::RoutingParameter::clusterCrossingPenalty)
        .value("fixedSharedPathPenalty", Avoid::RoutingParameter::fixedSharedPathPenalty)
        .value("portDirectionPenalty", Avoid::RoutingParameter::portDirectionPenalty)
        .value("shapeBufferDistance", Avoid::RoutingParameter::shapeBufferDistance)
        .value("idealNudgingDistance", Avoid::RoutingParameter::idealNudgingDistance)
        .value("reverseDirectionPenalty", Avoid::RoutingParameter::reverseDirectionPenalty);

    enum_<Avoid::ConnType>("ConnType", enum_value_type::number)
        .value("ConnType_None", Avoid::ConnType_None)
        .value("ConnType_PolyLine", Avoid::ConnType_PolyLine)
        .value("ConnType_Orthogonal", Avoid::ConnType_Orthogonal);

    enum_<Avoid::ConnDirFlag>("ConnDirFlag", enum_value_type::number)
        .value("ConnDirNone", Avoid::ConnDirNone)
        .value("ConnDirUp", Avoid::ConnDirUp)
        .value("ConnDirDown", Avoid::ConnDirDown)
        .value("ConnDirLeft", Avoid::ConnDirLeft)
        .value("ConnDirRight", Avoid::ConnDirRight)
        .value("ConnDirAll", Avoid::ConnDirAll);

    // -----------------------------------------------------------------------
    // Polygon utilities (PolygonInterface methods as free functions)

    function("_offsetPolygon", optional_override([](const val& coords, double offset) {
        return coordsFromPolygon(polygonFromCoords(coords).offsetPolygon(offset));
    }));
    function("_boundingRectPolygon", optional_override([](const val& coords) {
        return coordsFromPolygon(polygonFromCoords(coords).boundingRectPolygon());
    }));
    function("_offsetBoundingBox", optional_override([](const val& coords, double offset) {
        return polygonFromCoords(coords).offsetBoundingBox(offset);
    }));

    // -----------------------------------------------------------------------
    // Router

    class_<Avoid::Router>("Router")
        .constructor<unsigned int>()
        .function("processTransaction", &Avoid::Router::processTransaction)
        .function("printInfo", &Avoid::Router::printInfo)
        .function("setRoutingParameter", &Avoid::Router::setRoutingParameter)
        .function("setRoutingOption", &Avoid::Router::setRoutingOption)
        .function("deleteShape", &Avoid::Router::deleteShape, allow_raw_pointers())
        .function("deleteJunction", &Avoid::Router::deleteJunction, allow_raw_pointers())
        .function("deleteConnector", &Avoid::Router::deleteConnector, allow_raw_pointers())
        .function("_addShapeRect", optional_override([](Avoid::Router& router, double x, double y, double width, double height, unsigned int id) {
            Avoid::Rectangle rect = rectangleFrom(x, y, width, height);  // ShapeRef takes a non-const Polygon&
            return new Avoid::ShapeRef(&router, rect, id);
        }), allow_raw_pointers())
        .function("_addShapePoly", optional_override([](Avoid::Router& router, const val& coords, unsigned int id) {
            Avoid::Polygon poly = polygonFromCoords(coords);
            return new Avoid::ShapeRef(&router, poly, id);
        }), allow_raw_pointers())
        .function("_moveShapeRect", optional_override([](Avoid::Router& router, Avoid::ShapeRef* shape, double x, double y, double width, double height) {
            router.moveShape(shape, rectangleFrom(x, y, width, height));
        }), allow_raw_pointers())
        .function("_moveShapePoly", optional_override([](Avoid::Router& router, Avoid::ShapeRef* shape, const val& coords) {
            router.moveShape(shape, polygonFromCoords(coords));
        }), allow_raw_pointers())
        .function("_moveShapeDelta", select_overload<void(Avoid::ShapeRef*, double, double)>(&Avoid::Router::moveShape), allow_raw_pointers())
        .function("_addJunction", optional_override([](Avoid::Router& router, double x, double y, unsigned int id) {
            return new Avoid::JunctionRef(&router, Avoid::Point(x, y), id);
        }), allow_raw_pointers())
        .function("_moveJunctionTo", optional_override([](Avoid::Router& router, Avoid::JunctionRef* junction, double x, double y) {
            router.moveJunction(junction, Avoid::Point(x, y));
        }), allow_raw_pointers())
        .function("_moveJunctionBy", select_overload<void(Avoid::JunctionRef*, double, double)>(&Avoid::Router::moveJunction), allow_raw_pointers())
        .function("_addConnector", optional_override([](Avoid::Router& router, unsigned int id) {
            return new Avoid::ConnRef(&router, id);
        }), allow_raw_pointers());

    // -----------------------------------------------------------------------
    // Obstacles. polygon/position/routingBox are bound once here: position()
    // is virtual, and re-binding them on ShapeRef/JunctionRef would shadow the
    // public methods src/api.js installs on Obstacle.prototype.

    class_<Avoid::Obstacle>("Obstacle")
        .function("id", &Avoid::Obstacle::id)
        .function("_polygon", optional_override([](const Avoid::Obstacle& obstacle) {
            return coordsFromPolygon(obstacle.polygon());
        }))
        .function("_position", &Avoid::Obstacle::position)
        .function("_routingBox", &Avoid::Obstacle::routingBox);

    class_<Avoid::ShapeRef, base<Avoid::Obstacle>>("ShapeRef")
        .function("_addPin", optional_override([](Avoid::ShapeRef& shape, unsigned int classId, double xOffset, double yOffset,
                                                  bool proportional, double insideOffset, unsigned int directions) {
            return new Avoid::ShapeConnectionPin(&shape, classId, xOffset, yOffset, proportional, insideOffset, directions);
        }), allow_raw_pointers());

    class_<Avoid::JunctionRef, base<Avoid::Obstacle>>("JunctionRef")
        .function("setPositionFixed", &Avoid::JunctionRef::setPositionFixed)
        .function("positionFixed", &Avoid::JunctionRef::positionFixed)
        .function("_recommendedPosition", &Avoid::JunctionRef::recommendedPosition)
        .function("_addPin", optional_override([](Avoid::JunctionRef& junction, unsigned int classId, unsigned int directions) {
            return new Avoid::ShapeConnectionPin(&junction, classId, directions);
        }), allow_raw_pointers());

    // Owned by its shape or junction. Its destructor detaches it from the
    // parent and from connector ends, so the embind .delete() is kept.
    class_<Avoid::ShapeConnectionPin>("ShapeConnectionPin")
        .function("setConnectionCost", &Avoid::ShapeConnectionPin::setConnectionCost)
        .function("_position", optional_override([](const Avoid::ShapeConnectionPin& pin) {
            return pin.position();  // C++ default argument: the parent's current polygon
        }))
        .function("directions", &Avoid::ShapeConnectionPin::directions)
        .function("setExclusive", &Avoid::ShapeConnectionPin::setExclusive)
        .function("isExclusive", &Avoid::ShapeConnectionPin::isExclusive)
        .function("_updatePosition", optional_override([](Avoid::ShapeConnectionPin& pin, double x, double y) {
            pin.updatePosition(Avoid::Point(x, y));
        }));

    // -----------------------------------------------------------------------
    // Connectors

    class_<Avoid::ConnRef>("ConnRef")
        .function("id", &Avoid::ConnRef::id)
        .function("routingType", &Avoid::ConnRef::routingType)
        .function("setRoutingType", &Avoid::ConnRef::setRoutingType)
        .function("setHateCrossings", &Avoid::ConnRef::setHateCrossings)
        .function("doesHateCrossings", &Avoid::ConnRef::doesHateCrossings)
        .function("hasValidRoute", &Avoid::ConnRef::hasValidRoute)
        .function("hasCrossingObstacles", &Avoid::ConnRef::hasCrossingObstacles)
        .function("_setCallback", &setCallback)
        .function("_setEndPoint", optional_override([](Avoid::ConnRef& conn, bool isSource, double x, double y, unsigned int directions) {
            setEnd(conn, isSource, Avoid::ConnEnd(Avoid::Point(x, y), directions));
        }))
        .function("_setEndPin", optional_override([](Avoid::ConnRef& conn, bool isSource, Avoid::ShapeRef* shape, unsigned int classId) {
            setEnd(conn, isSource, Avoid::ConnEnd(shape, classId));
        }), allow_raw_pointers())
        .function("_setEndJunction", optional_override([](Avoid::ConnRef& conn, bool isSource, Avoid::JunctionRef* junction) {
            setEnd(conn, isSource, Avoid::ConnEnd(junction));
        }), allow_raw_pointers())
        .function("_displayRoute", optional_override([](Avoid::ConnRef& conn) {
            return coordsFromPolygon(conn.displayRoute());
        }))
        // Checkpoints are packed as [x, y, arrivalDirections, departureDirections, ...].
        .function("_setCheckpoints", optional_override([](Avoid::ConnRef& conn, const val& packed) {
            const std::vector<double> c = convertJSArrayToNumberVector<double>(packed);
            std::vector<Avoid::Checkpoint> checkpoints;
            checkpoints.reserve(c.size() / 4);
            for (size_t i = 0; i + 3 < c.size(); i += 4) {
                checkpoints.emplace_back(Avoid::Point(c[i], c[i + 1]),
                                         static_cast<Avoid::ConnDirFlags>(c[i + 2]),
                                         static_cast<Avoid::ConnDirFlags>(c[i + 3]));
            }
            conn.setRoutingCheckpoints(checkpoints);
        }))
        .function("_checkpoints", optional_override([](const Avoid::ConnRef& conn) {
            static const val Float64Array = val::global("Float64Array");
            const std::vector<Avoid::Checkpoint> checkpoints = conn.routingCheckpoints();
            std::vector<double> c;
            c.reserve(checkpoints.size() * 4);
            for (const Avoid::Checkpoint& cp : checkpoints) {
                c.push_back(cp.point.x);
                c.push_back(cp.point.y);
                c.push_back(cp.arrivalDirections);
                c.push_back(cp.departureDirections);
            }
            return Float64Array.new_(typed_memory_view(c.size(), c.data()));
        }));
}
