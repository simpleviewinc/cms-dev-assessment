const slider1 = document.querySelector('.slider1'),
    slider2 = document.querySelector(".slider2"),
    slider3 = document.querySelector(".slider3"),
    slider4 = document.querySelector(".slider4")

function getItems() {
    getData("listings", 16).then((data) => {
        const theData = data.data;
        for (let i = 0; i <= theData.length; i++) {

            if (i >= 0 && i < 5) {
                const div = document.createElement('div');
                div.classList.add('content');
                div.innerHTML = `
            <div class="image"><img src="${theData[i].mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${i + 1}. ${theData[i].title}</h3>
            </div>`
                slider1.appendChild(div)
            } else if (i >= 5 && i < 10) {
                const div = document.createElement('div');
                div.classList.add('content');
                div.innerHTML = `
            <div class="image"><img src="${theData[i].mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${i + 1}. ${theData[i].title}</h3>
            </div>`
                slider2.appendChild(div)
            } else if (i >= 10 && i <= 13) {
                const div = document.createElement('div');
                div.classList.add('content');
                div.innerHTML = `
            <div class="image"><img src="${theData[i].mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${i + 1}. ${theData[i].title}</h3>
            </div>`
                slider3.appendChild(div)
            } else if (i >= 14) {
                const div = document.createElement('div');
                div.classList.add('content');
                div.innerHTML = `
            <div class="image"><img src="${theData[i].mediaurl}" onerror="this.onerror=null;this.src='../img/fallback.jpg'"></div>
            <div class='text-content'>
            <h3>${i + 1}. ${theData[i].title}</h3>
            </div>`
                document.querySelector('.slider4').appendChild(div)
            } else { }
        }
    }).catch((err) => {
        console.log(err)
    })
}

getItems()

document.querySelector('.next').addEventListener('click', e => {
    slider1.style.display = 'grid'
    if (slider2.style.display === 'grid') {
        slider1.style.display = 'none';
        slider2.style.display = 'none';
        slider3.style.display = 'grid';
        slider4.style.display = 'none';
    } else if (slider3.style.display === 'grid') {
        slider1.style.display = 'none';
        slider2.style.display = 'none';
        slider3.style.display = 'none';
        slider4.style.display = 'grid';

    } else if (slider4.style.display === 'grid') {
        slider1.style.display = 'grid';
        slider2.style.display = 'none';
        slider3.style.display = 'none';
        slider4.style.display = 'none';
    }
    else if (slider1.style.display === 'grid') {
        slider1.style.display = 'none';
        slider2.style.display = 'grid';
        slider3.style.display = 'none';
        slider4.style.display = "none";

    } else {
        slider1.style.display = 'grid'
    }
})

document.querySelector('.previous').addEventListener('click', e => {
    slider1.style.display = 'grid'
    if (slider2.style.display === 'grid') {
        slider1.style.display = 'grid';
        slider2.style.display = 'none';
        slider3.style.display = "none";
        slider4.style.display = 'none';
    } else if (slider3.style.display === 'grid') {
        slider1.style.display = 'none';
        slider2.style.display = 'grid';
        slider3.style.display = "none";
        slider4.style.display = 'none';
    } else if (slider4.style.display === 'grid') {
        slider1.style.display = 'none';
        slider2.style.display = 'none';
        slider3.style.display = "grid";
        slider4.style.display = 'none';
    } else if (slider1.style.display === 'grid') {
        slider1.style.display = 'none';
        slider2.style.display = 'none';
        slider3.style.display = "none";
        slider4.style.display = 'grid';
    } else {
        slider1.style.display = 'grid';
    }
})