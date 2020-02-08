import fallbackImage from '../../../../comps/fallback.jpg';
import { getData } from './index';
import '../styles.css';
const axios = require('axios');
const listingTemplate = require('../templates/listing.handlebars');

export default async function Render(url, dataset) {
    const data = await getData(url);
    const container = document.createElement('div');

    container.setAttribute('class', 'container');
    container.setAttribute('data-tab', dataset);

    data.data.map(async (item, index) => {
        let imageUrl = item.mediaurl.match(/[^http://|https://]\w+\D+/g).join('');
        let image = await axios.get(`https://${imageUrl}`)
            .then(res => {
                return `https://${imageUrl}`;
            })
            .catch(err => {
                return fallbackImage;
            })
        const listing = document.createElement('div');
        listing.setAttribute('class', `cards card-${index}`);
        listing.innerHTML = listingTemplate({
            image: await image,
            title: item.title,
            description: item.description
        });
        container.appendChild(listing);

        listing.addEventListener('mouseenter', e => {
            if (e.target.className.includes('cards')) {
                const btn = e.target.lastElementChild.lastElementChild.firstElementChild;
                btn.classList.remove('removeAnimation');
                btn.classList.add('addAnimation');
            }
        })

        listing.addEventListener('mouseleave', e => {
            if (e.target.className.includes('cards')) {
                const btn = e.target.lastElementChild.lastElementChild.firstElementChild;
                btn.classList.remove('addAnimation');
                btn.classList.add('removeAnimation');
            }
        })
    })

    document.body.appendChild(container);
}