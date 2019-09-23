async function fetchListings() {
    const res = await fetch('https://sv-reqres.now.sh/api/listings');
    const data = await res.json();
    let output = '';
    data.data.forEach((listing) => {
        output += `
            <div class="grid-item">
                <img class="grid-item-img" src = ${listing.mediaurl} onerror="this.onerror=null;this.src='img/fallback.jpg';" >
                <div class="grid-item-content">
                    <h3>${listing.title}</h3>
                    <p>${listing.description}</p>
                </div>
                <div class="read-more"><a href="#">Read More</a></div>
            </div>
        `;
    });
    document.getElementById('output').innerHTML = output;
}

fetchListings();