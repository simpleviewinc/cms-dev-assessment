const titleOfLocation = document.createElement('p');


fetch('https://sv-reqres.now.sh/api/listings', {
    method: 'GET',
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      // return information if response status is 200
      }
      throw new Error('Resource not found');
    // throw error if response status fails
    })
    .then((data) => {
     /* console.log(data)//create new function to use .forEach and display each location's info
      const listTitle = data.title;
      console.log(listTitle);
      // set content to variable for ease
      titleOfLocation.textContent = listTitle;
      // display content on page*/
      displayContent(data);
    });

    //add or default image
    function displayContent(data){
        let html= '';
        data.forEach(info => {
            <div class = "contentBox">
                
                <p class = "titles">`$(data.title)`</p> 
                <p class = "content">`$(data.description)`</p>
            </div>
        html += htmlSegment
        })
        /*change data. info to an object to be able to utilize and display
        doublecheck wol*/
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }