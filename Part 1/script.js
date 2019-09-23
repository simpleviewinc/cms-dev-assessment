fetch('https://cors-anywhere.herokuapp.com/https://sv-reqres.now.sh/api/listings')
.then((res) => res.json())
.then((data) => {
    let output = '';
    data.data.forEach(function(listing, id){
        let index = id%6;
        console.log(index);
        output += `
            <div class="grid-item grid-item-${index}">
                <img class="grid-item-img grid-item-img-${index}" src = ${listing.mediaurl} onerror="this.onerror=null;this.src='img/fallback.jpg';" >
                <div class="grid-item-content grid-item-content-${index}">
                    <h3>${listing.title}</h3>
                    <p>${listing.description}</p>
                </div>
                <div class="button"><a href="#">Read More</a></div>
            </div>
        `;
    });
    document.getElementById('output').innerHTML = output;
})