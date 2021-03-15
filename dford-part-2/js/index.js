let elements, buttons
window.onload = function() {
  elements = {
    LISTINGS: document.getElementById('listings'),
    EVENTS: document.getElementById('events'),
    OFFERS: document.getElementById('offers'),
  }

  buttons = {
    ALL: document.getElementById('showAllButton'),
    LISTINGS: document.getElementById('showListingsButton'),
    EVENTS: document.getElementById('showEventsButton'),
    OFFERS: document.getElementById('showOffersButton'),
  }
}

const filterTypes = {
  all: 'ALL',
  listings: 'LISTINGS',
  events: 'EVENTS',
  offers: 'OFFERS',
}

let state = filterTypes.all

function filterReducer(action) {
  switch(action) {
    case filterTypes.all:
      Object.values(elements).map((element) => {
        element.style.display = 'flex'
      })
      buttons[state].classList.remove('selected')
      buttons[action].classList.add('selected')
      state=action
      break
    default:
      if (state !== action) {
        buttons[state].classList.remove('selected')
        buttons[action].classList.add('selected')
        if (state === filterTypes.all) {
          Object.values(elements).map((element) => {
            element.style.display = 'none'
          })
          elements[action].style.display = 'flex'
        } else {
          elements[state].style.display = 'none'
          elements[action].style.display = 'flex'
        }
        state = action
      }
  }
}

async function getListings() {
  let listings
  await fetch('https://sv-reqres.now.sh/api/listings')
    .then((response) => response.json())
    .then((data) => listings = data)
  return listings
}

async function getEvents() {
  let listings
  await fetch('https://sv-reqres.now.sh/api/events')
    .then((response) => response.json())
    .then((data) => listings = data)
  return listings
}

async function getOffers() {
  let listings
  await fetch('https://sv-reqres.now.sh/api/offers')
    .then((response) => response.json())
    .then((data) => listings = data)
  return listings
}

function showButton(id) {
  document.getElementById(id).style.visibility = 'visible'
}

function hideButton(id) {
  document.getElementById(id).style.visibility = 'hidden'
}

function createCard({
  width,
  image,
  title,
  content,
  buttonId,
  isVertical = false,
}) {
  return `
    <div
      class="${isVertical ? 'card vertical' : 'card'}"
      style="width: ${width}rem;"
    >
      <img
        src="${image}"
        alt="${title}"
        style="width: ${isVertical ? width / 2 : width}rem; height: ${isVertical ? 35 : 17.5}rem; object-fit: cover; margin-bottom: 1rem;"
        onerror="this.src='img/fallback.jpg';this.onerror='';"
      />
      <div>
        <h1 class='h6'>${title}</h1>
        <p>
          ${content}
        </p>
      </div>
      <button
        id="${buttonId}"
        class="read-more-button"
        style="right: ${isVertical ? (width / 2 / 2) -4 : (width / 2) - 4}rem"
      >
        Read More
      </button>
    </div>
  `
}
