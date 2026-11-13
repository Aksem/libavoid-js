import { AvoidLib } from 'libavoid-js';

async function main() {
  // init Avoid module
  await AvoidLib.load();
  const Avoid = AvoidLib.getInstance();

  const router = new Avoid.Router(Avoid.RouterFlag.PolyLineRouting);

  const connRef = router.addConnector({ x: 1.2, y: 0.5 }, { x: 1.5, y: 4 });
  connRef.setCallback((conn) => {
    console.log(`Connector ${conn.id()} needs rerouting!`);
    const route = conn.displayRoute().map(({ x, y }) => `(${x}, ${y})`);
    console.log(`New path: ${route.join(' -> ')}`);
  });
  // Force initial callback:
  router.processTransaction();

  console.log('Adding a shape.');
  const shape = router.addShape([{ x: 1, y: 1 }, { x: 2.5, y: 1.5 }, { x: 1.5, y: 2.5 }]);
  router.processTransaction();

  console.log('Shifting endpoint.');
  connRef.setDest({ x: 6, y: 4.5 });
  // It's expected you know the connector needs rerouting, so the callback
  // isn't called.  You can force it to be called though, via:
  router.processTransaction();

  console.log('Moving shape right by 0.5.');
  router.moveShape(shape, 0.5, 0);
  router.processTransaction();

  // Frees the router and everything added to it.
  router.delete();
}

main();
