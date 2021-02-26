var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let currentPage = 1;
let addedOnClick = false; 
let listingsObject = {};

const fetchAllPages = () => {
    let totalPages = 4;
    for (let i = 1; i <= totalPages; i++) {
        fetch(`https://sv-reqres.now.sh/api/listings?page=${i}`)
            .then(res => res.clone().json())
            .then(json => {
                console.log(json.data)
                listingsObject[json.page] = json.data;
                change();
            })
    }  
}

const change = () => {
    if(!addedOnClick) addEventListeners(); 
    if(Object.keys(listingsObject).length !== 4) return
    let array = createArray(); 
    array = shuffleArray(array); 
    for (let j = 0; j < array.length; j++) {
        $(`#pic-${j}`)
            .append(
                $('<div/>')
                    .append($('<div/>')
                        .html(`0${j + 1}.`)
                    )
                    .append($('<h2/>')
                        .html(`${array[j].title}`)
                    )
                    
                    .attr('class', 'title')
            )
            .append(
                $('<img/>')
                    .attr('src', `${array[j].mediaurl}`)
                    .on('error', function(){
                        $(this).attr("src", '../../comps/fallback.jpg')
                    })
            )
    }
}

const createArray = () => {
    let array = []; 
    let keys = Object.keys(listingsObject);
    for (let i = 0; i < keys.length; i++) {
        array = array.concat(listingsObject[keys[i]]);
    }
    return array; 
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array; 
}

const addEventListeners = () => {
    $('.next').click(() => changePage('next'));
    $('.prev').click(() => changePage('prev'));
    addedOnClick = true;
}

const changePage = (direction) => {
    change();
    $(`.page-${currentPage}`).css("display", "none");
    if (direction === 'next') {
        currentPage++;
    } else {
        currentPage--;
    }
    if (currentPage > 4) currentPage = 1;
    if (currentPage < 1) currentPage = 4;
    $(`.page-${currentPage}`).css("display", "flex")
}

fetchAllPages();

