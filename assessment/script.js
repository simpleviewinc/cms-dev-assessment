

function getAllData(){  
  $.ajax({
    url: "https://sv-reqres.now.sh/api/listings",
    method: "GET" 
  }).then(function(response) {
       // Arrays to hold classes 
       var titleArray = ["titleZero","titleOne","titleTwo","titleThree","titleFour","titleFive"];
       var paragraphArray = ["paragraphZero","paragraphOne","paragraphTwo","paragraphThree","paragraphFour","paragraph-tall"];

      console.log(response.data.length)
      for(let i = 0;i < response.data.length; i++){
      // $("#image-one").attr("src",response.data[0].mediaurl)
          $("." + titleArray[i]).text(response.data[i].title)
          $("." + paragraphArray[i]).text(response.data[i].description)
          // $(".paragraph-tall").text(response.data[i].description)
      }
  });
}

getAllData();

    function getListings(){  
        $.ajax({
          url: "https://sv-reqres.now.sh/api/listings",
          method: "GET" 
        }).then(function(response) {
             // Arrays to hold classes 
            
             var titleArray = ["titleZero","titleOne","titleTwo","titleThree","titleFour","titleFive"];
             var paragraphArray = ["paragraphZero","paragraphOne","paragraphTwo","paragraphThree","paragraphFour","paragraph-tall"];

            console.log(response.data.length)
            for(let i = 0;i < response.data.length; i++){
            // $("#image-one").attr("src",response.data[0].mediaurl)
                $("." + titleArray[i]).text(response.data[i].title)
                $("." + paragraphArray[i]).text(response.data[i].description)
                // $(".paragraph-tall").text(response.data[i].description)
            }
        });
        
      }
  
      $("#listing").on("click",getListings)



      function getEvent(){  
        $.ajax({
          url: "https://sv-reqres.now.sh/api/events",
          method: "GET" 
        }).then(function(response) {
            console.log(response) 
           

           // Arrays to hold classes 
           var titleArray = ["titleZero","titleOne","titleTwo","titleThree","titleFour","titleFive"];
           var paragraphArray = ["paragraphZero","paragraphOne","paragraphTwo","paragraphThree","paragraphFour","paragraph-tall"];

          console.log(response.data.length)
          for(let i = 0;i < response.data.length; i++){
          // $("#image-one").attr("src",response.data[0].mediaurl)
              $("." + titleArray[i]).text(response.data[i].title)
              $("." + paragraphArray[i]).text(response.data[i].description)
              // $(".paragraph-tall").text(response.data[i].description)
          }
        });
      }
  
      $("#event").on("click",getEvent)



      function getOffers(){  
        $.ajax({
          url: "https://sv-reqres.now.sh/api/offers",
          method: "GET" 
        }).then(function(response) {
            console.log(response)
            // Arrays to hold classes 
            var titleArray = ["titleZero","titleOne","titleTwo","titleThree","titleFour","titleFive"];
            var paragraphArray = ["paragraphZero","paragraphOne","paragraphTwo","paragraphThree","paragraphFour","paragraph-tall"];

           console.log(response.data.length)
           for(let i = 0;i < response.data.length; i++){
           // $("#image-one").attr("src",response.data[0].mediaurl)
               $("." + titleArray[i]).text(response.data[i].title)
               $("." + paragraphArray[i]).text(response.data[i].description)
               // $(".paragraph-tall").text(response.data[i].description)
           }
        });
      }
  
      $("#offers").on("click",getOffers)