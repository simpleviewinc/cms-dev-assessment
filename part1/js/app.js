(function() {

    const apiURL = 'https://sv-reqres.now.sh/api/listings';

    function newListing(data) {
        const markup = `
            <div class="listing">
                <div class="listing_imageContainer">
                    <img class="listing_image" src="${data.mediaurl}" alt="${data.title} image" onError="this.src = 'img/fallback.jpg';" />
                </div>
                <div class="listing_content">
                    <h2 class="listing_title">${data.title}</h2>
                    <div class="listing_description">
                        <p>${data.description}</p>
                    </div>
                    <span class="listing_button button button-red">Read More</span>
                </div>
            </div>`;

        return markup;
    }

    async function getAndInsertData(url) {
        try {
            const response = await fetch(url);
            const responseJSON = await response.json();
            let data = responseJSON.data;

            for (let i = 0; i < data.length; i++) {
                $("#mainGrid").append(newListing(data[i]));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    getAndInsertData(apiURL);
})();