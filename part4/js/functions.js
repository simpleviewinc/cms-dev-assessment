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

function randomizer(arr) {
    var i = arr.length;
    if (i == 0) return false;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempi = arr[i];
        var tempj = arr[j];
        arr[i] = tempj;
        arr[j] = tempi;

    }
}

function selectItem(e) {

    removeBorder();
    // Add border to current tab
    this.classList.add('active');
}

function getDetails() {
    getData("listings", 9).then((data) => {

        randomizer(data.data)
        document.querySelector("#content").innerHTML = "";

        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('content')
            div.innerHTML = "";
            div.innerHTML = `
            <div class="image"><img src="${item.mediaurl}" onerror="this.onerror=null;this.src='./img/fallback.jpg'"></div>
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
    getData("events", 9).then((data) => {
        randomizer(data.data)
        document.querySelector("#content").innerHTML = "";

        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('content')
            div.innerHTML = `
            <div class="image"><img src="${item.mediaurl}" onerror="this.onerror=null;this.src='./img/fallback.jpg'"></div>
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

function renderOffers() {

    getData("offers", 15).then((data) => {
        randomizer(data.data)
        document.querySelector("#content").innerHTML = "";

        data.data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('content')
            div.innerHTML = `
            <div class="image"><img src="${item.mediaurl}" onerror="this.onerror=null;this.src='./img/fallback.jpg'"></div>
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