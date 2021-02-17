const data = {"page":1,"per_page":6,"total":20,"total_pages":4,"data":[{"zip":"85719","address1":"303 University Blvd.","region":"East","description":"Located just north of Scottsdale in the scenic foothills of Carefree, Arizona, is the Carefree Resort and Villas. This 400+ room resort features spacious guest rooms, casitas and luxuriously appointed one-and two-bedroom vacation villas, all with private patios or balconies. In addition, the Resort offers more than 30,000 square feet of meeting and event space including the Grand Opera House, a highlight among the many unique meeting venues offered by the Resort. The Grand Opera House is ideal for catered events, meetings and convention groups, and features a combination Santa Fe-style architecture of Arizona's territorial days with the technical features of a modern studio sound stage. Carefree's very own western-themed venue, Stagecoach Pass, is located just outside the Opera House and provides a wonderful opportunity to experience the \"Old West\" in a historic frontier town setting. The Resort offers an abundance of recreation options including three sparkling pools, a full service spa, 5 tennis courts, all lit for night play, three restaurants and an authentic 1800's saloon with billiards, darts and big-screen TV. The Carefree Resort & Villas is partnered with the Legend Trail Golf Club and Golf Digest School only minutes from the Resort with golf packages and golf school vacations. and and and","city":"Tucson","state":"AZ","recid":313,"weburl":"http://www.starwoodhoteleast.com","phone":"520-897-7371","title":"Starwood Hotel East","category":{"subcatname":"Guest Ranch","catname":"Accommodations"},"mediaurl":"http://crm.rd.simpleviewinc.com/images/listings/original_Trident0.JPG","qualityScore":-4},{"zip":"85711","address1":"445 S. Alvernon Way","region":"Downtown","description":"In the heart of Scottsdale, within walking distance to great shopping, restaurants, entertainment, golf, Chaparral Suites Resort offers 311 two-room suites. Each suite has a private bedroom, spacious living room and includes two vanities, two remotecontrol TVs, microwave, refrigerator, coffee maker, iron/board, hair dryer, safe, voice messaging, complimentary in-room high-speed Internet, in-room movies. Play tennis, swim in two oversized pools, enjoy a whirlpool, or workout in our fitness center. Signature amenities include complimentary full cooked-to-order breakfast, evening reception, airport transportation, USA Today delivered to your room. Restaurant, Concierge Desk, car rental desk, gift shop, business center, laundry services.","city":"Tucson","state":"AZ","recid":360,"weburl":"http://www.thistlehoteldowntown.com","phone":"520-567-8582","title":"Thistle Hotel Downtown","category":{"subcatname":"Apparel","catname":"Shopping"},"mediaurl":"http://crm.rd.simpleviewinc.com/images/listings/thumb_simpleview-Logo15010.jpg","qualityScore":-4},{"zip":"85704","address1":"5910 N. Oracle Rd.","region":"West","description":"Full range of relocation services, including free area information packets, rental assistance, employment information, home finding and home sales assistance for individuals and corporations moving to or from Metro Phoenix.","city":"Tucson","state":"AZ","recid":419,"weburl":"http://www.towerhotelwest.com","phone":"520-403-8846","title":"Tower Hotel West","category":{"subcatname":"Automobile & RV Rentals","catname":"Transportation"},"mediaurl":"https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg","qualityScore":-4},{"zip":"85705-","address1":"1101 W. Prince Rd.","region":"South","description":"AAA approved, 2-Diamond property. All rooms with refrigerator, microwave, in-room coffee service, hair dryer, iron boards. New jacuzzi suites with fireplaces available. Free deluxe continental breakfast, modem dataports and WiFi, free shuttle to Mayo Clinic, golf packages, meeting room, outdoor pool/spa.","city":"Tucson","state":"AZ","recid":429,"weburl":"http://www.summerfieldsuitessouth.com","phone":"520-637-4523","title":"Summerfield Suites South","category":{"subcatname":"Bakeries & Delis","catname":"Dining"},"mediaurl":"https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg","qualityScore":-4},{"zip":"85706","address1":"7001 S. Tucson Blvd.","description":"This award winning Comfort Inn is located in the geographical middle of Scottsdale with very easy access to the Valley's loop freeway system. All rooms have coffeemakers and refrigerators and offer free high-speed Internet access. Wireless access is available in the lobby, breakfast area and on the patio. Included in the guestroom rate is a complimentary 24-item continental breakfast bar. USA Today newspaper, HBO and free local telephone calls. This conveniently located hotel also offers a large heated pool and whirlpool, as well as a complimentary exercise room and business center. Shuttle service is provided within a 5 mile radius of the hotel. Over 20 restaurants are located within walking distance of the hotel.","city":"Tucson","state":"AZ","recid":430,"weburl":"http://www.suttonplacehotelnorth.com","phone":"520-663-5324","title":"Sutton Place Hotel North","category":{"subcatname":"Biking","catname":"Attractions"},"mediaurl":"https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg","qualityScore":-4},{"zip":"85712","address1":"5118 E. Pima St.","description":"Has Yelp reviews associated with Howard Johnson in Tucson. Situated in the heart of Scottsdale and adjacent to Fashion Square Mall, the Days Inn offers Scottsdale style at Days Inn value. Clients call it one of the best kept secrets in Scottsdale. With over 80 restaurants and night clubs within walking distance, there's something to please everyone.","city":"Tucson","state":"AZ","recid":526,"weburl":"http://www.howardjohnson'snorth.com","phone":"520-622-5871","title":"Howard Johnson's North","category":{"subcatname":"Continental","catname":"Dining"},"mediaurl":"http://crm.rd.simpleviewinc.com/images/listings/Mario_Vasquez10.jpg","qualityScore":-4}]};

// const fallback = "../../comps/fallback.jpg";
const fallback = "../../fallback.jpg";
const listings = document.querySelector('.articles-container');
const bottom = document.querySelector('.bottom');

function imageChecker(image, item) {
    if (image.includes('res.cloudinary.com')) {
        console.log('good url')
        listings.appendChild(createListings(item.title, item.description, item.mediaurl));
    } else {
        console.log('bad url')
        newImage = fallback;
        listings.appendChild(createListings(item.title, item.description, newImage));        
    }
}

// Just for development 
// items = data.data;
// items.length = 5;

// items.map(item => {
//     imageChecker(item.mediaurl, item);
//     })

// Random Number functions

// generates random number between 2 and 5
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// console.log(randomInt(2, 6))

let currentPage = 1;
let nextPage;

// To actually turn in
axios
    .get(`https://sv-reqres.now.sh/api/listings?per_page=${randomInt(2,6)}&page=1`)
    .then(response => {
        console.log(response.data);
        maxPages = response.maxPages;
        items = response.data.data;

        items.map(item => {
            imageChecker(item.mediaurl, item)
            // Below doesn't work with the error handling for images, it just replaces ALL of the images. (Figure out the issue later)
            // listings.appendChild(createListings(item.title, item.description, item.mediaurl));

        })
    })

const getPage = (perPage, pageNumber) => {
    console.log(pageNumber, perPage, 'a;osdifjoeiaj;osjdf')
    axios
    .get(`https://sv-reqres.now.sh/api/listings?per_page=${perPage}&page=${pageNumber}`)
    .then(response => {
        console.log(response.data);
        maxPages = response.maxPages;
        items = response.data.data;

        items.map(item => {
            imageChecker(item.mediaurl, item)
            // Below doesn't work with the error handling for images, it just replaces ALL of the images. (Figure out the issue later)
            // listings.appendChild(createListings(item.title, item.description, item.mediaurl));

        })
    })
}

const resetArr = (arr) => {
    arr.length = 0;
}

function createPagination() {
    const paginationDiv = document.createElement('div');
    const previousButton = document.createElement('button');
    const nextButton = document.createElement('button');

    paginationDiv.classList.add('bottom-buttons');

    bottom.appendChild(paginationDiv);
    paginationDiv.appendChild(previousButton);
    paginationDiv.appendChild(nextButton);

    previousButton.textContent = "Prev";
    nextButton.textContent = "Next";

    previousButton.addEventListener('click', () => {
        console.log('hello');
        if (currentPage === 1) {
            // nextPage = 6;
            getPage(randomInt(2, 6), 6)
        }else if (currentPage > 1) {
            nextPage = currentPage - 1;
            getPage( randomInt(2, 6), nextPage);
            currentPage -= 1;

        }
   

    })
}

createPagination();

function css(e, styles) {
    for (let property in styles) {
        e.style[property] = styles[property];
    }
}

function createListings(title, description, image) {
    const listing = document.createElement('div');
    const listingImage = document.createElement('img');
    const textContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const listingTitle = document.createElement('h2');
    const listingDescription = document.createElement('p');
    const listingButton = document.createElement('button');

    // Sets class names
    listing.classList.add('listing');
    listingButton.classList.add('expand-button');
    textContainer.classList.add('text-div');
    imageContainer.classList.add('image-div');

    // Sets up structure
    listing.appendChild(imageContainer);
    imageContainer.appendChild(listingImage);
    listing.appendChild(textContainer);
    textContainer.appendChild(listingTitle);
    textContainer.appendChild(listingDescription);
    listing.appendChild(listingButton);

    // Sets text content
    listingImage.src = image;
    listingTitle.textContent = title;
    listingDescription.textContent = description;
    listingButton.textContent = 'More Info';

    let first = document.querySelector('.listing:nth-child(3)');

    if (items.length === 5) {
        css(listings, {gridTemplateColumns: '1fr 1fr 2fr'});
        listing.classList.add('five');
    } else if (items.length === 4) {
        css(listings, {gridTemplateColumns: '1fr 1fr'});
    } else if (items.length === 3) {
        css(listings, {gridTemplateColumns: '2fr 2fr'});
        listing.classList.add('three');
    } else if (items.length === 2) {
        css(listings, {gridTemplateColumns: '1fr 1fr'});
    }

    // Event Listeners
    listing.addEventListener('mouseover', () => {
        // console.log('mouse entered');
        listingButton.classList.toggle('more-info');

    })

    listing.addEventListener('mouseout', () => {
        // console.log('mouse left');
        listingButton.classList.remove('more-info');
    })

    // listingButton.addEventListener('click', () => {
    //     console.log('clicked');
    //     listing.classList.toggle('expanded-listing');
    //     listing.classList.toggle('listing');

    // })

    return listing;
}
