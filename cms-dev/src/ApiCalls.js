export const fetchListings = () => {
  return fetch('https://sv-reqres.now.sh/api/listings')
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}