(function() {

    const rootURL = 'https://sv-reqres.now.sh/api/';
    const API = {
        listings: `${rootURL}listings`,
        events: `${rootURL}events`,
        offers: `${rootURL}offers`
    };

    let currentPage = 1;
    const pageLimits = [5,5,3,2];

    async function getData()
    {
        let markup = ``;
        let itemNum = 0;

            // API Request
            const request = API.listings + `?per_page=15`;
            const result = await $.get(request);

            for (let p = 0; p < pageLimits.length; p++)
            {
                markup += `<div class="flexGrid page${p + 1}">`;

                // Populate grid with max number of results for this page
                for (let i = 0; i < pageLimits[p]; i++)
                {
                    let data = result.data[itemNum];
                    itemNum++;
                    markup += `
                        <div class="item">
                            <div class="item_header">
                                <span class="item_num">${itemNum.toString().length < 2 ? `0${itemNum}` : itemNum}.</span>
                                <h2 class="item_title">${data.title}</h2>
                            </div>
                            <div class="item_imageContainer">
                                <img class="item_image" src="${data.mediaurl}" alt="${data.title} image" onError="this.src = 'img/fallback.jpg';" />
                            </div>
                        </div>`;
                }

                markup += `</div>`;
            }

        // Append HTML to the main container
        $("#mainGrid").append(markup);

        // Hide all new grids once rendered
        $(".flexGrid").hide();
        $('.page' + currentPage).show();

    }

    function initEventListeners() {
            
        $("#prev").click(function(e){

            // Hide all other grids
            $(".flexGrid").hide();

            // If current page is 1, round-robin back to page 4, else nav to prev
            currentPage === 1 ? currentPage = 4 : currentPage--;

            $('.page' + currentPage).show();

        });

        $("#next").click(function(e){
            // Hide all other grids
            $(".flexGrid").hide();

            // If current page is 4, round-robin back to page 1, else nav to next
            currentPage === 4 ? currentPage = 1 : currentPage++;

            $('.page' + currentPage).show();
        });
    }

    // Initialize loading all
    getData();
    initEventListeners();
})();