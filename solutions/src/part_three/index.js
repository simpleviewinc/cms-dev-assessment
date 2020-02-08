import Carousel from './components/Carousel';
import { getData } from './components/data';
const { buttons, carousel, imageContainer } = require('./templates/index');

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
            url = `https://sv-reqres.now.sh/api/listings?per_page=${2}&page=7`;
        } else if (i === 2) {
            url = `https://sv-reqres.now.sh/api/listings?per_page=${3}&page=4`;
        } else {
            url = `https://sv-reqres.now.sh/api/listings?per_page=5&page=${i + 1}`;
        }
        const resData = await getData(url)
        data.push(resData.data);
    }
    console.log(data)

    data.map(arr => {
        arr.map(listing => {
            const div = document.createElement('div');
            div.setAttribute('class', `imageContainer img${i}`);
            div.innerHTML = imageContainer({
                message: listing.address1,
                image: listing.mediaurl,
            })

        })
    })

    carouselContainer.appendChild(btns);
    document.body.appendChild(carouselContainer);

    new Carousel(carouselContainer);
});