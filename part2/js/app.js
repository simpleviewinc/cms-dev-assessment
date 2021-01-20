(function() {

    const rootURL = 'https://sv-reqres.now.sh/api/';
    const API = {
        listings: `${rootURL}listings`,
        events: `${rootURL}events`,
        offers: `${rootURL}offers`
    };

    async function getData(type)
    {
        // Initialize blank markup
        let markup = ``;

        if (type === "all")
        {
            // API Requests
            const listings = await $.get(API.listings);
            const events = await $.get(API.events);
            const offers = await $.get(API.offers);

            const results = [ listings.data, events.data, offers.data ];

            // Empty the main container
            $("#mainGrid").empty();

            for (let i = 0; i < results.length; i++)
            {
                // Create a parent flexGrid to hold results from each request
                markup += `<div class="flexGrid">`;

                // Populate grid with results
                for (let x = 0; x < results[i].length; x++)
                {
                    let data = results[i][x];
                    markup += `
                    <div class="item">
                        <div class="item_imageContainer">
                            <img class="item_image" src="${data.mediaurl}" alt="${data.title} image" onError="this.src = 'img/fallback.jpg';" />
                        </div>
                        <div class="item_content">
                            <h2 class="item_title">${data.title}</h2>
                            <div class="item_description">
                                <p>${data.description}</p>
                            </div>
                            <span class="item_button button button-red">Read More</span>
                        </div>
                    </div>`
                }
                markup += `</div>`;
            }
        }
        else
        {
            // API Request
            const result = await $.get(API[type]);

            // Empty the main container
            $("#mainGrid").empty();

            markup += `<div class="flexGrid">`;

            // Populate grid with results
            for (let i = 0; i < result.data.length; i++)
            {
                let data = result.data[i];
                    markup += `
                    <div class="item">
                        <div class="item_imageContainer">
                            <img class="item_image" src="${data.mediaurl}" alt="${data.title} image" onError="this.src = 'img/fallback.jpg';" />
                        </div>
                        <div class="item_content">
                            <h2 class="item_title">${data.title}</h2>
                            <div class="item_description">
                                <p>${data.description}</p>
                            </div>
                            <span class="item_button button button-red">Read More</span>
                        </div>
                    </div>`;
            }
            markup += `</div>`;
        }

        // Append HTML to the main container
        $("#mainGrid").append(markup);

    }

    function initEventListeners() {
        $(".filter").click(function(e){

            // Get ID of target which is a string of the API category
            let id = e.target.id;

            // Remove active class from current filter button
            $(".active").removeClass("active");

            // Add active class to clicked filter button
            $(`#${id}`).addClass("active");

            // Get data for active filter
            getData(id);
          });
    }

    // Initialize loading all
    getData("all");
    initEventListeners();
})();