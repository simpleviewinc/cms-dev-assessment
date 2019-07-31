const getData = async (theType, num) => {
    const response = await fetch(`https://sv-reqres.now.sh/api/${theType}/?per_page=${num}`)
    if (response.status === 200) {
        const data = await response.json()
        return data;
    } else {
        throw new Error('Unable to get data')
    }
}


