(async function init() {
    function request(...args) {
        return fetch(...args)
            .then(resp => resp.json());
    }

    const [listings, offers, events] = await Promise.all([
        request('https://sv-reqres.now.sh/api/listings'),
        request('https://sv-reqres.now.sh/api/offers'),
        request('https://sv-reqres.now.sh/api/events'),
    ]);

    state.listings = listings.data;
    state.offers = offers.data;
    state.events = events.data;

    renderItems([...state.listings, ...state.offers, ...state.events]);
})();
