$(document).ready(() => {
  
  main();
  
  async function main() {
    // GET data from API for listings, events, and offers
    const listings = await $.get("https://sv-reqres.now.sh/api/listings");
    const events = await $.get("https://sv-reqres.now.sh/api/events");
    const offers = await $.get("https://sv-reqres.now.sh/api/offers");

    const res = [ listings.data, events.data, offers.data ];

    const data = [];

    // Nested for loop to get data into "data" array
    for (let i = 0; i < res.length; i++) {
      for (let y = 0; y < res[i].length; y++) {
        data.push(res[i][y]);
      }
    }

    // Use the title property of each iteration of the "data" array to assign each card a title
    for (let i = 0; i < data.length; i++) {
      $(`.box-title${i}`).text(data[i].title);
    }

    // Set currentPage to 1, since this will always be the default page when the site initially loads
    let currentPage = 1;

    // Fires whenever Next button is clicked
    $(".next-btn").on("click", function() {

      // Hide the grid of the page we're leaving
      $(`.grid${currentPage}`).css("display", "none");
      
      // If current page is not 4, increase it by 1 and show the grid of the new page
      if (currentPage !== 4) {

        $(`.grid${currentPage+1}`).css("display", "grid");
        
        currentPage++;

      // If current page is 4, change it to 1 and show the grid of the new page
      } else {

        $(`.grid1`).css("display", "grid");

        currentPage = 1;
      }
    });
    
    // Fires whenever Prev button is clicked
    $(".prev-btn").on("click", function() {

      // Hide the grid of the page we're leaving
      $(`.grid${currentPage}`).css("display", "none");

      // If current page is not 1, decrease it by 1 and show the grid of the new page
      if (currentPage !== 1) {

        $(`.grid${currentPage-1}`).css("display", "grid");
        
        currentPage--;
        
      // If current page is 1, change it to 4 and show the grid of the new page
      } else {

        $(`.grid4`).css("display", "grid");

        currentPage = 4;
      }      
    });
  };
});