const axios = require('axios');

export const getData = () => {
    let response = axios.get('https://sv-reqres.now.sh/api/listings')
        .then(res => {
            return response = res.data;
        })
        .catch(err => {
            return response = err;
        })
    return response;
}