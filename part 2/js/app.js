$(document).ready(() => {

  // Run main function
  main();

  function main() {

    // Get all API data on page load
    getData("all");

    // Fires when a button at the top is clicked
    $(".button-tab").on("click", function(e) {

      let id = e.target.id;

      // Remove active class from previously active button
      $(".button-tab-active").removeClass("button-tab-active");

      // Add active class to newly active button
      $(`#${id}`).addClass("button-tab-active");
      // $(`#${e.target.id}`).parent.css({"color": "red"});

      // Get API data
      getData(id);

    });

    async function getData(category) {
      
      // If "all" button is clicked, respond with data from all categories
      if (category === "all") {
        // API calls for all three categories
        const listings = await $.get("https://sv-reqres.now.sh/api/listings");
        const events = await $.get("https://sv-reqres.now.sh/api/events");
        const offers = await $.get("https://sv-reqres.now.sh/api/offers");

        // Set res to array of arrays, each one containing data from each category
        const res = [ listings.data, events.data, offers.data ];

        // Empty all elements in grid
        $(".grid").empty();

        for (let i = 0; i < res.length; i++) {
          for (let y = 0; y < res[i].length; y++) {

            let card;

            // If y is not 5, create a card using the standard layout
            if (y !== 5) {
              card = `
              <div class="card card${y+1}">
              <img class="card-img" src="img/fallback.jpg" alt="fallback">
              <div class="btn-container-relative">
              <div class="read-more-btn-container">
              <button class="read-more-btn">Read More</button>
              </div>
              </div>
              <h4 class="card-title card-${y+1}-title">${res[i][y].title}</h4>
              <p class="card-${y+1}-description">${res[i][y].description}</p>
              </div>`;

            // If y is 5, create a card using the alternate layout
            } else {
              card = `
              <div class="card card6">
                <img class="card-img-skinny" src="img/fallback.jpg" alt="fallback">
                <div class="text-container">
                  <div class="btn-container-relative">
                    <div class="read-more-btn-container">
                      <button class="read-more-btn">Read More</button>
                    </div>
                  </div>
                  <h4 class="card-title card-6-title">${res[i][y].title}</h4>
                  <p class="card-6-description">${res[i][y].description}</p>
                </div>
              </div>`;
            }
            // Append card to grid
            $(".grid").append(card);
          }
        }
      
      // If a button other than "all" is clicked, respond with data based on the category that was clicked
      } else {
        // GET data from API
        const res = await $.get(`https://sv-reqres.now.sh/api/${category}`);
  
        // Empty all elements in the grid
        $(".grid").empty();

        for (let i = 0; i < res.data.length; i++) {

          // If y is not 5, create a card using the standard layout
          if (i !== 5) {
            card = `
            <div class="card card${i+1}">
              <img class="card-img" src="img/fallback.jpg" alt="fallback">
              <div class="btn-container-relative">
                <div class="read-more-btn-container">
                  <button class="read-more-btn">Read More</button>
                </div>
              </div>
              <h4 class="card-title card-${i+1}-title">${res.data[i].title}</h4>
              <p class="card-${i+1}-description">${res.data[i].description}</p>
            </div>`;

          // If y is 5, create a card using the alternate layout
          } else {
            card = `
            <div class="card card6">
              <img class="card-img-skinny" src="img/fallback.jpg" alt="fallback">
              <div class="text-container">
                <div class="btn-container-relative">
                  <div class="read-more-btn-container">
                    <button class="read-more-btn">Read More</button>
                  </div>
                </div>
                <h4 class="card-title card-6-title">${res.data[i].title}</h4>
                <p class="card-6-description">${res.data[i].description}</p>
              </div>
            </div>`;
          }

          // Append card to grid
          $(".grid").append(card);
        }
      }
    }
  }
});