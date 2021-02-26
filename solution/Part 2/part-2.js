var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
let lArray = []; 
let eArray = []; 
let oArray = []; 

let all = true; 
let listings = false; 
let events = false; 
let offers = false; 

fetch('https://sv-reqres.now.sh/api/listings')
    .then(res => res.clone().json())
    .then(json => {
       lArray = json.data; 
       getEvents(); 
    })

const getEvents = () => fetch('https://sv-reqres.now.sh/api/events')
    .then(res => res.clone().json())
    .then(json => {
        eArray = json.data; 
        getOffers(); 
    })

const getOffers = () => fetch('https://sv-reqres.now.sh/api/offers')
    .then(res => res.clone().json())
    .then(json => {
        oArray = json.data; 
        $('#all').click(() => filter('all'));
        $('#listings').click(() => filter('listings'));
        $('#events').click(() => filter('events'));
        $('#offers').click(() => filter('offers'));
        change()
    })

const filter = (type) => {
    all = false; 
    listings = false;
    events = false;
    offers = false; 
    if(type === 'all'){
        all = true; 
    } else if(type === 'listings'){
        listings = true; 
    } else if(type === 'events'){
        events = true; 
    } else if(type === 'offers'){
        offers = true; 
    }
    $('#grid').empty(); 
    change(); 
}

const change = () => {
    let array; 
    if(all){
        array = lArray.concat(eArray.concat(oArray)); 
    } else if(listings){
        array = lArray; 
    } else if(events){
        array = eArray; 
    } else if(offers){
        array = oArray; 
    }
    array.map((ele, idx) => {
        if(idx % 3 === 0){
            $('#grid').append(
                $('<div/>')
                    .attr("id", `row-${idx/3}`)
                    .attr("class", `row`)
            );
        }
        $(`#row-${Math.floor(idx/3)}`).append(
            $('<div/>')
                .attr("class", `col-${idx % 6}`)
                .append(
                    $('<img/>')
                        .attr('src', `${ele.mediaurl}`)
                        .on('error', function () {
                            $(this).attr("src", '../../comps/fallback.jpg')
                        })
                )
                .append(
                    $('<div/>')
                        .append(
                            $('<h1/>')
                                .html(`${ele.title}`)
                        )
                        .append(
                            $('<p/>')
                                .html(`${ele.description}`)
                        )
                        .append(
                            $('<p/>')
                                .attr("class", `read-more`)
                                .append(
                                    $('<a/>')
                                        .attr("class", `button`)
                                        .attr("href", `#`)
                                        .html('Read More')
                                )
                        )
                )     
        )  
    })
}

