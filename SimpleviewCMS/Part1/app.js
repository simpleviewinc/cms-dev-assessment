async function getPlaces() {
    let url = 'https://sv-reqres.now.sh/api/listings';

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

//Create Columns for each value in the array
async function renderPlaces() {
    let places = await getPlaces(),
        placesArr = places.data,
        count = 0,
        row = document.createElement('div');

    row.className = "row";

    placesArr.forEach((listing, i) => {
        newCol(i);
    });

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center'
        console.log(placesArr[i].title)
        console.log(count)
        col.id = "column" + count;
        col.innerHTML = `<img class="placeImage" src="${placesArr[i].mediaurl}" onerror="this.src='fallback.png'" >
    <h2>${placesArr[i].title}</h2>
    <p>${placesArr[i].description}</p><p class="read read-more" onclick="readMore()"><a class="read-button" href="#">Read More</a></p>`;

        if (count <= 2) {
            document.getElementById('firstRow').appendChild(col);
        } else {
            document.getElementById('secondRow').appendChild(col);
        }

        count++;
    }

}

renderPlaces();

//Create "Read More" effect
function readMore() {
    const link = document.querySelector('.read');
    link.classList.toggle('read-more');
    const column = document.querySelector('.column');
    column.classList.toggle('col');
}