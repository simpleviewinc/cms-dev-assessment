const apiUrl = "https://sv-reqres.now.sh/api/";

export const getListings = async (pageSize = 10) => {
  return fetch(`${apiUrl}listings?per_page=${pageSize}`)
    .then(res => {
      return res.json();
    })
    .then(listingsResponse => {
      const { data: listings, ...meta } = listingsResponse;
      return { listings, meta };
    });
};

export const getEvents = async () => {
  return fetch(`${apiUrl}events`)
    .then(res => {
      return res.json();
    })
    .then(eventsResponse => {
      const { data: events, ...meta } = eventsResponse;
      return {
        events,
        meta
      };
    });
};

export const getOffers = async () => {
  return fetch(`${apiUrl}offers`)
    .then(res => {
      return res.json();
    })
    .then(offersResponse => {
      const { data: offers, ...meta } = offersResponse;
      return {
        offers,
        meta
      };
    });
};
