const getData = async () => {
    const response = await fetch(`https://sv-reqres.now.sh/api/listings/?per_page=15`)
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to get data')
    }
}

