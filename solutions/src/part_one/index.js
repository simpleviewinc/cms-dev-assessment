import './styles.css';
import fallbackImage from '../../../comps/fallback.jpg';
const homeTemplate = require('./home.handlebars');
const axios = require('axios');
const listingTemplate = require('./listing.handlebars');
const { getData } = require('./data');

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getData();

    const container = document.createElement('div');

    container.setAttribute('class', 'container');

    data.data.map(async (item, index) => {
        let imageUrl = item.mediaurl.match(/[^http://|https://]\w+\D+/g).join('');
        let image = await axios.get(`https://${imageUrl}`)
            .then(res => {
                console.log('response')
                return `https://${imageUrl}`;
            })
            .catch(err => {
                console.log(err, 'error')
                return fallbackImage;
            })
        console.log(image)
        const listing = document.createElement('div');
        listing.setAttribute('class', `listings listing-${index}`);
        listing.innerHTML = listingTemplate({
            image: await image,
            title: item.title,
            description: item.description
        });
        container.appendChild(listing);
    })


    document.body.appendChild(container);
})
