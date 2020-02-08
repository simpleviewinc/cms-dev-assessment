const axios = require('axios');

export const getData = url => {
    let response = axios.get(url)
        .then(res => {
            return response = res.data;
        })
        .catch(err => {
            return response = err;
        })

    return response;
}