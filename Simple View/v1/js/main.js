// Navbar - a active
const links = document.querySelectorAll('.navbar li');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {

        // Current active link
        const current = document.querySelector('.navbar .active');

        const linkSelected = links[i];

        // Remove last active
        current.classList.remove('active');

        // Set active
        linkSelected.classList = 'active';
    });
};

// Fetch API data
const loadData = async () => {
    try {

        // Listings
        const fetchListings = await axios.get('https://sv-reqres.now.sh/api/listings');
        const listings = fetchListings.data.data;
        for (let i = 0; i < listings.length; i++) {
            // Set title
            document.getElementById(`title-${i}`).innerHTML = listings[i].title;

            // Set description
            document.getElementById(`description-${i}`).innerHTML = listings[i].description;
        }


        // Events
        const fetcEvents = await axios.get('https://sv-reqres.now.sh/api/events');
        const events = fetcEvents.data.data;

        let count = 5;

        for (let i = 0; i < events.length; i++) {
            count++;

            // Set title
            document.getElementById(`title-${count}`).innerHTML = events[i].title;

            // Set description
            document.getElementById(`description-${count}`).innerHTML = events[i].description;
        }

        // Offerts
        const fetchOfferts = await axios.get('https://sv-reqres.now.sh/api/offers');
        const offerts = fetchOfferts.data.data;

        count = 11;

        for (let i = 0; i < events.length; i++) {
            count++;

            // Set title
            document.getElementById(`title-${count}`).innerHTML = offerts[i].title;

            // Set description
            document.getElementById(`description-${count}`).innerHTML = offerts[i].description;
        };

    } catch(err) {
        console.error('Internal error - Load data');
    }
};
