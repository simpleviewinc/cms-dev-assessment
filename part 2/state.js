/**
 * Top-level state
 * when changed decides how to re-render the app
 */
var state = (function () {
  return new Proxy({
    filter: 'all',
    listings: [],
    events: [],
    offers: [],
  }, {
    set(obj, target, value) {
      const isSet = Reflect.set(obj, target, value);
      if (isSet && target === 'filter') {
        const { listings, events, offers } = obj;
        switch (value) {
          case 'listings':
            renderItems(listings);
            break;
          case 'events':
            renderItems(events);
            break;
          case 'offers':
            renderItems(offers);
            break;
          case 'all':
            renderItems([...listings, ...events, ...offers]);
            break;
          default:
            console.log('Shouldnt happen');
        }
      }
      return isSet;
    }
  })
})();