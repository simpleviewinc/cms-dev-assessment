"use strict";

(function(){

  const container = document.querySelector(".container");

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
    let htmlRender = ""
    data.forEach(infoListings => {
      infoListings.data.forEach((info, idx) => {
        idx += 1
        if(idx % 6 === 1) {
          htmlRender += createItem('wide', info)
        } else if(idx % 6 === 0) {
          htmlRender += createItem('tall', info)
        } else {
          htmlRender += createItem('reg', info)
        }
      })
    })
    container.innerHTML = htmlRender
  }).catch(err => {
    console.error(err)
  })


  const createItem = function(styleType, info){
    return `<div class="item item-${styleType}"><div class="img-container"> <img src=${info.mediaurl} onerror="this.onerror=null;this.src='../comps/fallback.jpg'" alt="farmland"></div><div class="item-content"><h2 class="heading2">${info.title}</h2><p>${info.description}</p></div><button class="readMoreBtn" aria-label="Read more">Read More</button></div>`
  }

})()