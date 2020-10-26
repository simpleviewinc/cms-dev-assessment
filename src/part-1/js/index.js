async function getData() {
  let url = 'https://sv-reqres.now.sh/api/listings';

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};


async function render() {
  let res = await getData();
  let listings = res.data;
  let imgStopGap = res.data[3];//how to check for 404 resource error!?
  let html = '';
  console.log(listings);
  listings.forEach(listing => {
    console.log(listing.mediaurl);
    let htmlCard = `
          <div class="listingsCard">
            <div class="listingsCard__innerWrap">
              <img class="listingsCard__img" src="${imgStopGap.mediaurl}" alt="${listing.title}" />
              <div class="listingsCard__contentWrap">
                <h2 class="listingsCard__title">${listing.title}</h2>
                <p class="listingsCard__copy">${listing.description}</p>
              </div>
            </div>
            <a class="listingsCard__link" href="${listing.weburl}">Read More</a>
          </div>`;

    html += htmlCard;
  });


  let container = document.querySelector('.listingsSection');
  container.innerHTML = html;
}

render();