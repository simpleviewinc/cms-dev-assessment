const getData = async () => {
    const response = await fetch(`https://sv-reqres.now.sh/api/listings/?per_page=9`)
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to get data')
    }
}

const getEvents = async () => {
    const response = await fetch(`https://sv-reqres.now.sh/api/events/?per_page=9`)
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to get data')
    }
}

const getOffers = async () => {
    const response = await fetch(`https://sv-reqres.now.sh/api/offers/?per_page=9`)
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to get data')
    }
}