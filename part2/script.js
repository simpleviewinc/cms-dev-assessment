$(document).ready(function(){
    function createCard (item) {
        let gridItem = document.createElement('div');
        let img = document.createElement('img');
        let title = document.createElement('h1');
        let text = document.createElement('p');
        
        gridItem.setAttribute('class', 'grid-item column'); 
        img.setAttribute('src', item.mediaurl);
        img.setAttribute('onError', 'this.onerror=null; this.src="./Assets/img/fallback.jpg";');            
        title.textContent = item.title;
        text.textContent = item.description;

        $('.grid-container').append(gridItem);

        gridItem.append(img);
        gridItem.append(title);
        gridItem.append(text);
    };

    let listingUrl= "https://sv-reqres.now.sh/api/listings";
    let eventsUrl= "https://sv-reqres.now.sh/api/events";
    let offersUrl= "https://sv-reqres.now.sh/api/offers";

    function listings (){
        $.ajax({
            url: listingUrl,
            method: 'GET'
        }).then(function (res) {
            res.data.forEach(createCard);
            console.log(res.data);
        });
    };

    function events (){
        $.ajax({
            url: eventsUrl,
            method: 'GET'
        }).then(function (res) {
            res.data.forEach(createCard);
            console.log(res.data);
        });
    };

    function offers() {
        $.ajax({
            url: offersUrl,
            method: 'GET'
        }).then(function (res) {
            res.data.forEach(createCard);
            console.log(res.data);
        });
    };

    let list = document.createElement('button');
    list.textContent = 'Listings';
    $('.navbar').append(list);

    let event = document.createElement('button');
    event.textContent = 'Events';
    $('.navbar').append(event);

    let offer = document.createElement('button');
    offer.textContent = 'Offers';
    $('.navbar').append(offer);

    let all = document.createElement('button');
    all.textContent = 'All';
    $('.navbar').append(all);

    list.addEventListener('click', function () {
        $('.grid-container').empty();
        listings();
    });

    event.addEventListener('click', function () {
        $('.grid-container').empty();
        events();
    });

    offer.addEventListener('click', function () {
        $('.grid-container').empty();
        offers();
    });

    all.addEventListener('click', function () {
        $('.grid-container').empty();
        listings();
        events();
        offers();
    });

    listings();
    events();
    offers();

});