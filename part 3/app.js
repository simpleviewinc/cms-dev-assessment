(async function init() {
  const store = createStore({
    page: 1,
    data: [],
    resource: 'all',
    total_pages: null,
  }, (state, action) => {
    switch (action.type) {
      case 'SET_PAGE':
        return { ...state, page: action.payload };
      case 'SET_RESOURCE':
        return { ...state, resource: action.payload, page: 1 };
      case 'FETCH_RESOURCE':
        return {
          ...state,
          data: action.payload.data,
          total_pages: action.payload.total_pages
        };
      case 'NEXT_PAGE': {
        if (Number.isFinite(state.total_pages)) {
          return {
            ...state,
            page: Math.min(state.page + 1, state.total_pages),
          }
        }
        return {
          ...state,
          page: state.page + 1,
        };
      }
      case 'PREV_PAGE':
        return {
          ...state,
          page: Math.max(state.page - 1, 1)
        }
      default:
        return state;
    }
  });

  function request(...args) {
    return fetch(...args).then(resp => resp.json());
  }

  async function fetchAllResources(page = 1) {
    const [listings, offers, events] = await Promise.all([
      request(`https://sv-reqres.now.sh/api/listings?page=${page}`),
      request(`https://sv-reqres.now.sh/api/offers?page=${page}`),
      request(`https://sv-reqres.now.sh/api/events?page=${page}`),
    ]);
    console.log(listings.data, offers.data, events.data);
    store.dispatch({
      type: 'FETCH_RESOURCE',
      payload: {
        data: [...listings.data, ...offers.data, ...events.data],
        total_pages: listings.total_pages + offers.total_pages + events.total_pages,
      }
    })
  }

  async function fetchListings(page) {
    const listings = await request(`https://sv-reqres.now.sh/api/listings?page=${page}`);
    console.log(listings);
    store.dispatch({
      type: 'FETCH_RESOURCE',
      payload: listings,
    })
  }

  async function fetchEvents(page) {
    const events = await request(`https://sv-reqres.now.sh/api/events?page=${page}`);
    store.dispatch({
      type: 'FETCH_RESOURCE',
      payload: events
    })
  }

  async function fetchOffers(page) {
    const offers = await request(`https://sv-reqres.now.sh/api/offers?page=${page}`);
    store.dispatch({
      type: 'FETCH_RESOURCE',
      payload: offers,
    })
  }

  async function fetchResource(resource, page = 1) {
    switch (resource) {
      case 'all':
        return fetchAllResources(page);
      case 'listings':
        return fetchListings(page);
      case 'events':
        return fetchEvents(page);
      case 'offers':
        return fetchOffers(page)
    }
  }

  store.subscribe(({ resource }, { resource: prevResource }) => {
    if (resource !== prevResource) {
      fetchResource(resource);
    }
  });

  store.subscribe(({ resource, page }, { page: prevPage }) => {
    if (page !== prevPage) {
      fetchResource(resource, page);
    }
  });

  // render if not equal
  store.subscribe(({ data }, { data: prevData }) => {
    if (data.length !== prevData.length) {
      renderItems(data);
      return;
    }
    renderItems(data);
  });

  registerRadios(async (value) => {
    store.dispatch({
      type: 'SET_RESOURCE',
      payload: value,
    });
  });

  document.querySelector('button[data-action="next-page"]').addEventListener('click', () => {
    store.dispatch({
      type: 'NEXT_PAGE',
    })
  });

  document.querySelector('button[data-action="previous-page"]').addEventListener('click', () => {
    store.dispatch({
      type: 'PREV_PAGE',
    })
  });

  fetchResource('all');
})();
