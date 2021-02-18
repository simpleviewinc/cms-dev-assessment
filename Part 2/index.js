"use strict";

(function(){

  const container = document.querySelector('.container');
  const nav = document.querySelector('.nav-list');

  //fetch all API
  Promise.all([
    fetch('https://sv-reqres.now.sh/api/listings'),
    fetch('https://sv-reqres.now.sh/api/events'),
    fetch('https://sv-reqres.now.sh/api/offers')
  ]).then(responses => {
    return Promise.all(responses.map(res => {
      return res.json()
    }))
  }).then(data => {
    container.innerHTML = renderSelectedInfo('all', data)
    nav.addEventListener('click', (event) => {
      let selectedButton = event.target;
      if(event.target.nodeName === 'BUTTON' && selectedButton ) {
        container.innerHTML = renderSelectedInfo(selectedButton.id, data);
        if(document.querySelector('.nav-item.active') !== null) {
          document.querySelector('.nav-item.active').classList.remove('active');
        }
        selectedButton.parentNode.classList.add('active');
      }
    })
  }).catch(err => {
    console.error(err)
  })

  //create item view
  const createItem = function(styleType, info){
    return `<div class="item item-${styleType}"><div class="img-container"> <img src=${info.mediaurl} onerror="this.onerror=null;this.src='../comps/fallback.jpg'" alt="farmland"></div><div class="item-content"><h2 class="heading2">${info.title}</h2><p>${info.description}</p></div><button class="readMoreBtn" aria-label="Read more">Read More</button></div>`
  }

  //render all info
  const renderSelectedInfo = function(infoType, data){
    let selectedInfoType = 'navAll';
    if(infoType === 'navListings'){
      selectedInfoType = data[0];
    } else if(infoType === 'navEvents') {
      selectedInfoType = data[1];
    } else if(infoType === 'navOffers') {
      selectedInfoType = data[2];
    } else {
      let htmlRender = ''
      data.forEach(item => {
        htmlRender += renderSingleInfo(item)
      })
      return htmlRender;
    }
    return renderSingleInfo(selectedInfoType)
  }

  const renderSingleInfo = function(selectedInfoType){
    let htmlRender = '';
    selectedInfoType.data.forEach((info, idx) => {
      idx += 1
      if(idx % 6 === 1) {
        htmlRender += createItem('wide', info)
      } else if(idx % 6 === 0) {
        htmlRender += createItem('tall', info)
      } else {
        htmlRender += createItem('reg', info)
      }
    })
    return htmlRender;
  }

})()