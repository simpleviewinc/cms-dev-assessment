const apiUrl = "https://sv-reqres.now.sh/api/";

export const getListings = async () => {
  return fetch(`${apiUrl}listings`)
    .then(res => {
      return res.json();
    })
    .then(listingsResponse => {
      return {
        listings: listingsResponse.data,
        meta: {
          page: listingsResponse.page,
          per_page: listingsResponse.per_page,
          total: listingsResponse.total,
          total_pages: listingsResponse.total_pages
        }
      };
    });
};
