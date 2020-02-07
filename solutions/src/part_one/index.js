import './styles.css';
const homeTemplate = require('./home.handlebars');
const listingTemplate = require('./listing.handlebars');
const { getData } = require('./data');

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getData();

    const container = document.createElement('div');

    container.setAttribute('class', 'container');

    data.data.map((item, index) => {
        const listing = document.createElement('div');
        listing.setAttribute('class', `listings listing-${index}`);
        // listing.setAttribute('style', `grid-area: ${index}`)
        listing.innerHTML = listingTemplate({
            image: item.mediaurl,
            title: item.title,
            description: item.description
        });
        container.appendChild(listing);
    })


    document.body.appendChild(container);
})
