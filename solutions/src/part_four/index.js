import Carousel from './components/Carousel';
import fallbackImage from '../../../comps/fallback.jpg';
import { getData } from './components/data';
import './styles.css';

const axios = require('axios');
const { buttons, imageContainer } = require('./templates/index');

document.addEventListener('DOMContentLoaded', async () => {
    const data = [];
    const carouselContainer = document.createElement('div');
    const btns = document.createElement('div');

    btns.setAttribute('class', 'buttons');
    btns.innerHTML = buttons({});
    carouselContainer.setAttribute('class', 'carousel');

    for (let i = 0; i <= 3; i++) {
        let url = '';
        if (i === 3) {
            url = `https://sv-reqres.now.sh/api/listings?per_page=2&page=${Math.floor(Math.random() * 10) + 1}`;
        } else if (i === 2) {
            url = `https://sv-reqres.now.sh/api/listings?per_page=3&page=${Math.floor(Math.random() * 7) + 1}`;
        } else {
            url = `https://sv-reqres.now.sh/api/listings?per_page=5&page=${Math.floor(Math.random() * 4) + 1}`;
        }
        const resData = await getData(url)
        data.push(resData.data);
    }

    data.map((arr, index) => {
        const div = document.createElement('div');
        div.setAttribute('class', `imageContainer container${index}`);
        arr.map(async (listing, index) => {
            await axios.get(listing.mediaurl)
                .catch(err => {
                    return listing.mediaurl = fallbackImage;
                })
            const innerDiv = document.createElement('div');
            innerDiv.setAttribute('class', `images img${index}`)
            innerDiv.innerHTML = imageContainer({
                message: listing.address1,
                image: await listing.mediaurl,
            })
            div.appendChild(innerDiv);
        })
        carouselContainer.appendChild(div);
    })

    carouselContainer.appendChild(btns);
    document.body.appendChild(carouselContainer);

    new Carousel(carouselContainer);

});