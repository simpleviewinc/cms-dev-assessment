(function() {
    const els = {
        homeGrid: document.querySelector('#homeGrid')
    };
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'https://sv-reqres.now.sh/api/';
    const listings = `${apiURL}listings`;
    const events = `${apiURL}events`;
    const offers = `${apiURL}offers`;

    function gridItemTemplate(data) {
        const markup = `
            <div class="homeGrid__item">
                <div class="homeGrid__imgWrp">
                    <img class="homeGrid__img" src="${data.mediaurl}" alt="${data.title} image" onError="this.onerror = null; this.src = '/images/fallback.jpg';" />
                </div>

                <div class="homeGrid__content">
                    <h2 class="homeGrid__heading">${data.title}</h2>

                    <div class="homeGrid__desc">
                        <p>${data.description}</p>
                    </div>
                </div>
            </div>`;

        return markup;
    }

    const renderData = function(data) {
        for (let i = 0; i < data.length; i++) {
            let cur = data[i];

            els.homeGrid.insertAdjacentHTML('beforeend', gridItemTemplate(cur));
        }
    }
    
    const getAndRenderData = async function(url) {
        try {
            const response = await fetch(url);
            const responseJSON = await response.json();
            let data = responseJSON.data;

            renderData(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    // -- INIT -- //
    getAndRenderData(listings);
})();