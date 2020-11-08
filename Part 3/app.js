const mediaContainer = document.querySelector('.media_container');
const navigationButtons = document.querySelector('.navigation');
let page = 0;

// Fetch listings data
const getData = (func, errorFunc) => {
    fetch('https://sv-reqres.now.sh/api/listings')
     .then(res => res.json())
     .then(listings => func(listings))
     .catch(error => errorFunc(error))
}

// Handle data
const handleData = (listings) => {
    card = '';

    listings.data.forEach(media => {
        card += `
        <div class="card">
            <h3 class="media_title">${media.title}</h3>
            <div class="card_media"></div>
        </div>`
    });

    mediaContainer.innerHTML = card;
}

// Handle "prev." and "next" buttons with event delegation
navigationButtons.addEventListener('click', (e) => {
    const button = e.target;

    // "Previous" button
    if (button.matches('.navigation_previous')) {
        page-= 1
    }

    // "Next" button
    if (button.matches('.navigation_next')) {
        page+= 1;
    }
})

// Handle error
const displayError = (error) => {
    console.log(error);
}

getData(handleData, displayError);