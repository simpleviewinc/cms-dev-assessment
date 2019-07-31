const listings = document.querySelector('#listings'),
    events = document.querySelector('#events'),
    all = document.querySelector('#all')

$(document).ready(function () {
    $(document).on('mouseenter', '.content', function () {
        $(this).find(".read-btn").show();
    }).on('mouseleave', '.content', function () {
        $(this).find(".read-btn").hide();
    });
});

function selectItem(e) {
    e.preventDefault()
    removeBorder();
    // Add border to current tab
    this.classList.add('active');
}

function getDetails() {
    getData().then((data) => {
        console.log(data)
        document.querySelector("#content").innerHTML = "";

        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('content')
            div.innerHTML = "";
            div.innerHTML = `
            <div class="image"><img src="${item.mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p class='read-more'><a href='#' class='button read-btn'>Read More</a></p>
            </div>`
            document.querySelector("#content").appendChild(div)
        })
    }).catch((err) => {
        console.log(err)
    })
}

function renderEvents() {

    getEvents().then((data) => {
        console.log(data)
        document.querySelector("#content").innerHTML = "";

        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('content')
            div.innerHTML = `
            <div class="image"><img src="${item.mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            </div>`

            document.querySelector("#content").appendChild(div)
        })
    }).catch((err) => {
        console.log(err)
    })
}

function renderOffers() {

    getOffers().then((data) => {
        console.log(data)
        document.querySelector("#content").innerHTML = "";

        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('content')
            div.innerHTML = `
            <div class="image"><img src="${item.mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            </div>`
            document.querySelector("#content").appendChild(div)
        })
    }).catch((err) => {
        console.log(err)
    })
}