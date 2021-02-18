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
    console.log(data)
    container.innerHTML = 'Loading...';
    // render view
    container.innerHTML = renderSelectedInfo('all', data)
    // add click event for nav sorting
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
  // gray out link if no web url?
  const createItem = function(styleType, info){
    return `<div class="item item-${styleType}"><div class="img-container"> <img src=${info.mediaurl} onerror="this.onerror=null;this.src='../comps/fallback.jpg'" alt="farmland"></div><div class="item-content"><h2 class="heading2">${info.title}</h2><p>${info.description}</p></div><a class="readMoreLink" href=${info.weburl ? info.weburl : "javascript:void(0)"} aria-label="Link to read more">Read More</a></div>`
  }

  //render info by selected info type
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

  //helper function for creating each info type
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