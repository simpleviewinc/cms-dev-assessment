$(document).ready(() => {

  // Run main function
  main();

  async function main() {

    // GET data from API
    const res = await $.get("https://sv-reqres.now.sh/api/listings");
    console.log(res);
    // Fill each card with data from API
    for (let i = 0; i < res.data.length; i++) {

      // The HTML elements that we need to target will have an ID containing a number. In this scenario, that number will always be one number higher than the current iteration, which is why we use i+1 as the expression in the template literals below

      $(`#card-${i+1}-title`).text(res.data[i].title);
      $(`#card-${i+1}-description`).text(res.data[i].description);
    }
  }
});