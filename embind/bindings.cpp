#include <libavoid/libavoid.h>

#include <emscripten/bind.h>

using namespace emscripten;


void setConnRefCallback(Avoid::ConnRef& conn, emscripten::val jsCallback) {
    // Pass the ConnRef by pointer: passing it by value would make embind
    // copy-construct a ConnRef (leaking it, and aborting on .delete()).
    conn.setCallbackFunction(
        [jsCallback](uintptr_t userData) {
            auto* connRef = reinterpret_cast<Avoid::ConnRef*>(userData);
            jsCallback(val(connRef, allow_raw_pointers()));
        },
        reinterpret_cast<uintptr_t>(&conn));
}


EMSCRIPTEN_BINDINGS(my_module) {
    class_<Avoid::Router>("Router")
    .constructor<unsigned long>()
    .function("processTransaction", &Avoid::Router::processTransaction)
    .function("printInfo", &Avoid::Router::printInfo)
    .function("deleteConnector", &Avoid::Router::deleteConnector, allow_raw_pointers())
    .function("moveShape_poly", select_overload<void(Avoid::ShapeRef*, const Avoid::Polygon&, const bool)>(&Avoid::Router::moveShape), allow_raw_pointers())
    .function("moveShape_delta", select_overload<void(Avoid::ShapeRef*, double, double)>(&Avoid::Router::moveShape), allow_raw_pointers())
    .function("deleteShape", &Avoid::Router::deleteShape, allow_raw_pointers())
    .function("moveJunction_point", select_overload<void(Avoid::JunctionRef*, const Avoid::Point&)>(&Avoid::Router::moveJunction), allow_raw_pointers())
    .function("moveJunction_delta", select_overload<void(Avoid::JunctionRef*, double, double)>(&Avoid::Router::moveJunction), allow_raw_pointers())
    .function("deleteJunction", &Avoid::Router::deleteJunction, allow_raw_pointers())
    .function("setRoutingParameter", &Avoid::Router::setRoutingParameter)
    .function("setRoutingOption", &Avoid::Router::setRoutingOption);

    emscripten::enum_<Avoid::RouterFlag>("RouterFlag", enum_value_type::number)
    .value("PolyLineRouting", Avoid::RouterFlag::PolyLineRouting)
    .value("OrthogonalRouting", Avoid::RouterFlag::OrthogonalRouting);

    emscripten::enum_<Avoid::RoutingOption>("RoutingOption", enum_value_type::number)
    .value("nudgeOrthogonalSegmentsConnectedToShapes", Avoid::RoutingOption::nudgeOrthogonalSegmentsConnectedToShapes)
    .value("improveHyperedgeRoutesMovingJunctions", Avoid::RoutingOption::improveHyperedgeRoutesMovingJunctions)
    .value("penaliseOrthogonalSharedPathsAtConnEnds", Avoid::RoutingOption::penaliseOrthogonalSharedPathsAtConnEnds)
    .value("nudgeOrthogonalTouchingColinearSegments", Avoid::RoutingOption::nudgeOrthogonalTouchingColinearSegments)
    .value("performUnifyingNudgingPreprocessingStep", Avoid::RoutingOption::performUnifyingNudgingPreprocessingStep)
    .value("improveHyperedgeRoutesMovingAddingAndDeletingJunctions", Avoid::RoutingOption::improveHyperedgeRoutesMovingAddingAndDeletingJunctions)
    .value("nudgeSharedPathsWithCommonEndPoint", Avoid::RoutingOption::nudgeSharedPathsWithCommonEndPoint);


    emscripten::enum_<Avoid::RoutingParameter>("RoutingParameter", enum_value_type::number)
    .value("segmentPenalty", Avoid::RoutingParameter::segmentPenalty)
    .value("anglePenalty", Avoid::RoutingParameter::anglePenalty)
    .value("crossingPenalty", Avoid::RoutingParameter::crossingPenalty)
    .value("clusterCrossingPenalty", Avoid::RoutingParameter::clusterCrossingPenalty)
    .value("fixedSharedPathPenalty", Avoid::RoutingParameter::fixedSharedPathPenalty)
    .value("portDirectionPenalty", Avoid::RoutingParameter::portDirectionPenalty)
    .value("shapeBufferDistance", Avoid::RoutingParameter::shapeBufferDistance)
    .value("idealNudgingDistance", Avoid::RoutingParameter::idealNudgingDistance)
    .value("reverseDirectionPenalty", Avoid::RoutingParameter::reverseDirectionPenalty);

    class_<Avoid::Point>("Point")
    .constructor<>()
    .constructor<double, double>()
    .function("equal", &Avoid::Point::operator==)
    .property("x", &Avoid::Point::x)
    .property("y", &Avoid::Point::y)
    .property("id", &Avoid::Point::id)
    .property("vn", &Avoid::Point::vn);

    register_vector<Avoid::Point>("PointVector");

    class_<Avoid::Box>("Box")
    .constructor<>()
    .property("min", &Avoid::Box::min)
    .property("max", &Avoid::Box::max)
    .function("length", &Avoid::Box::length)
    .function("width", &Avoid::Box::width)
    .function("height", &Avoid::Box::height);

    class_<Avoid::PolygonInterface>("PolygonInterface")
    .function("clear", &Avoid::PolygonInterface::clear)
    .function("empty", &Avoid::PolygonInterface::empty)
    .function("size", &Avoid::PolygonInterface::size)
    .function("id", &Avoid::PolygonInterface::id)
    .function("at", &Avoid::PolygonInterface::at, allow_raw_pointers()) // returns const Point&
    .function("boundingRectPolygon", &Avoid::PolygonInterface::boundingRectPolygon)
    .function("offsetBoundingBox", &Avoid::PolygonInterface::offsetBoundingBox)
    .function("offsetPolygon", &Avoid::PolygonInterface::offsetPolygon);

    class_<Avoid::Polygon, base<Avoid::PolygonInterface>>("Polygon")
    .constructor<>()
    .constructor<long>()
    .property("ps", &Avoid::Polygon::ps)
    .function("setPoint", &Avoid::Polygon::setPoint)
    .function("size", &Avoid::Polygon::size);

    class_<Avoid::Rectangle, base<Avoid::Polygon>>("Rectangle")
        .constructor<const Avoid::Point&, double, double>()
        .constructor<const Avoid::Point&, const Avoid::Point&>();

    class_<Avoid::Obstacle>("Obstacle")
        .function("id", &Avoid::Obstacle::id)
        .function("polygon", &Avoid::Obstacle::polygon)
        .function("position", &Avoid::Obstacle::position)
        .function("setNewPoly", &Avoid::Obstacle::setNewPoly)
        .function("routingBox", &Avoid::Obstacle::routingBox);

    class_<Avoid::ShapeRef, emscripten::base<Avoid::Obstacle>>("ShapeRef")
    .constructor<Avoid::Router*, Avoid::Polygon&>()
    .constructor<Avoid::Router*, Avoid::Polygon&, long>()
    .function("polygon", &Avoid::ShapeRef::polygon)
    .function("position", &Avoid::ShapeRef::position)
    .function("setNewPoly", &Avoid::ShapeRef::setNewPoly);

    class_<Avoid::JunctionRef, emscripten::base<Avoid::Obstacle>>("JunctionRef")
    // Embind has no default arguments; the 2-arg overload uses the C++
    // default id = 0, which makes libavoid assign a unique id.
    .constructor<Avoid::Router*, Avoid::Point>()
    .constructor<Avoid::Router*, Avoid::Point, unsigned long>()
    .function("position", &Avoid::JunctionRef::position)
    .function("setPositionFixed", &Avoid::JunctionRef::setPositionFixed)
    .function("positionFixed", &Avoid::JunctionRef::positionFixed)
    .function("recommendedPosition", &Avoid::JunctionRef::recommendedPosition);

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

    class_<Avoid::Checkpoint>("Checkpoint")
    .constructor<const Avoid::Point&>()
    .constructor<const Avoid::Point&, Avoid::ConnDirFlags, Avoid::ConnDirFlags>();

    register_vector<Avoid::Checkpoint>("CheckpointVector");

    class_<Avoid::ConnRef>("ConnRef")
    .constructor<Avoid::Router*, const Avoid::ConnEnd&, const Avoid::ConnEnd&>()
    .constructor<Avoid::Router*, const Avoid::ConnEnd&, const Avoid::ConnEnd&, unsigned long>()
    .function("id", &Avoid::ConnRef::id)
    .function("setCallback", &setConnRefCallback)
    .function("setSourceEndpoint", &Avoid::ConnRef::setSourceEndpoint)
    .function("setDestEndpoint", &Avoid::ConnRef::setDestEndpoint)
    .function("routingType", &Avoid::ConnRef::routingType)
    .function("setRoutingType", &Avoid::ConnRef::setRoutingType)
    .function("setRoutingCheckpoints", &Avoid::ConnRef::setRoutingCheckpoints, allow_raw_pointers())
    .function("routingCheckpoints", &Avoid::ConnRef::routingCheckpoints)
    .function("displayRoute", &Avoid::ConnRef::displayRoute, allow_raw_pointers())
    .function("setHateCrossings", &Avoid::ConnRef::setHateCrossings)
    .function("doesHateCrossings", &Avoid::ConnRef::doesHateCrossings)
    .function("hasValidRoute", &Avoid::ConnRef::hasValidRoute)
    .function("hasCrossingObstacles", &Avoid::ConnRef::hasCrossingObstacles);

    class_<Avoid::ConnEnd>("ConnEnd")
    .constructor<const Avoid::Point&>()
    .constructor<Avoid::ShapeRef*, unsigned long>()
    .class_function("createConnEndFromJunctionRef", &Avoid::ConnEnd::createConnEndFromJunctionRef, allow_raw_pointers());

    class_<Avoid::ShapeConnectionPin>("ShapeConnectionPin")
    .constructor<Avoid::ShapeRef*, unsigned long, double, double, bool, double, Avoid::ConnDirFlags>()
    .constructor<Avoid::ShapeRef*, unsigned long, double, double, double, Avoid::ConnDirFlags>()
    .constructor<Avoid::JunctionRef*, unsigned long, Avoid::ConnDirFlags>()
    .function("setConnectionCost", &Avoid::ShapeConnectionPin::setConnectionCost)
    // Embind has no default arguments; the 0-arg overload uses the C++
    // default (an empty Polygon), which means "the parent's current polygon".
    .function("position", optional_override([](const Avoid::ShapeConnectionPin& self) {
        return self.position();
    }))
    .function("position", &Avoid::ShapeConnectionPin::position)
    .function("directions", &Avoid::ShapeConnectionPin::directions)
    .function("setExclusive", &Avoid::ShapeConnectionPin::setExclusive)
    .function("isExclusive", &Avoid::ShapeConnectionPin::isExclusive)
    .function("updatePosition", &Avoid::ShapeConnectionPin::updatePosition);
}
