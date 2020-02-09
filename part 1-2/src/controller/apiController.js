export const fetchListings = () => {
    return fetch('https://sv-reqres.now.sh/api/listings')
    .then(res => res.json())
    .then(res => res)
    .catch(err => err.message)
}

export const fetchEvents = () => {
    return fetch('https://sv-reqres.now.sh/api/events')
    .then(res => res.json())
    .then(res => res)
    .catch(err => err.message)
}

export const fetchOffers = () => {
    return fetch('https://sv-reqres.now.sh/api/offers')
    .then(res => res.json())
    .then(res => res)
    .catch(err => err.message)
}