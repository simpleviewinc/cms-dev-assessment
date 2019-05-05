
$(document).ready(function(){

  let url="https://sv-reqres.now.sh/api/listings"
  let fallback="./css/images/fallback.jpg"
    /*Api call that returns listing data from simpleview's test api*/
  $.getJSON(url,function(data){

    let viewData=data.data;
    let url="https://sv-reqres.now.sh/api/listings"
    /*String variables that will be used to post to the DOM*/
    let str1="";
    let str2="";
    let str3="";
    let idNum=0;
    /*cycles through each entry in the data array from the api call*/
    for(let i=0;i<viewData.length;i++){
      idNum++;
      /*Separate certain data output to separate panels*/
      if(idNum<5){
        str1+=`

        <div class="outputDisplay" id="index${idNum}">
        <img class="listImage" src=${viewData[i].mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
      >


          <div class="text-field">
          <h2>${idNum}. ${viewData[i].title}</h2>
            <div class="shadow"></div>
            ${viewData[i].description}

          </div>
          <p class="read-more">Read More</p>

      </div>
      `
      }
      else if(4<idNum && idNum<7){
        str2+=`<div class="outputDisplay" id="index${idNum}">
        <img class="listImage" src=${viewData[i].mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
      >


          <div class="text-field">
          <h2>${idNum}. ${viewData[i].title}</h2>
            <div class="shadow"></div>
            ${viewData[i].description}

          </div>
          <p class="read-more">Read More</p>

      </div>
      `

      }else{
        str3+=`<div class="outputDisplay" id="index${idNum}">
        <img class="listImage" src=${viewData[i].mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
      >


          <div class="text-field">
          <h2>${idNum}. ${viewData[i].title}</h2>
            <div class="shadow"></div>
            ${viewData[i].description}

          </div>
          <p class="read-more">Read More</p>

      </div>
      `

      }


  }
  /*Posts api call data to the dom*/
  document.getElementById("slidePanel1").innerHTML = str1;
  document.getElementById("slidePanel2").innerHTML = str2;
  document.getElementById("slidePanel3").innerHTML = str3;
  /*Eventlistener for when a user mouses over a text field which the option to read more. the option to read more is not functional at the moment*/
  $(".text-field").mouseover(function(){
    $(this).siblings(".read-more").show(200)
  })
  $(".text-field").mouseleave(function(){
      $(this).siblings(".read-more").hide(200)
  })
  })
  /*Eventlistener for the filter optiosn that recalls thee API when they are selected*/
  $('a').on("click",function(){
    var $button = $(this);
    /*Ensures that only the clicked filter option in currently highlighted*/
    $button.siblings('a').removeClass('active');
    $(this).addClass('active');

    let currentSelection=$button.text().toLowerCase()
    /*Sets the correct based on what filter option was clicked*/
    if (currentSelection=="all"){
      url='https://sv-reqres.now.sh/api/listings'
    }
    if(currentSelection=="listings"){
      url='https://sv-reqres.now.sh/api/listings'
    }
    if (currentSelection=="events"){
      url='https://sv-reqres.now.sh/api/events'
    }
    if(currentSelection=="offers"){
      url='https://sv-reqres.now.sh/api/offers'
    }
    /*cycles through each entry in the data array from the api call*/
    $.getJSON(url,function(data){

      let viewData=data.data;

      let str1="";
      let str2="";
      let str3="";
      let idNum=0;

      for(let i=0;i<viewData.length;i++)
  {idNum++
        if(idNum<5){
          str1+=`

          <div class="outputDisplay" id="index${idNum}">
          <img class="listImage" src=${viewData[i].mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
        >


            <div class="text-field">
            <h2>${idNum}. ${viewData[i].title}</h2>
              <div class="shadow"></div>
              ${viewData[i].description}

            </div>
            <p class="read-more">Read More</p>

        </div>



        `

        }
        else if(4<idNum && idNum<7){
          str2+=`<div class="outputDisplay" id="index${idNum}">
          <img class="listImage" src=${viewData[i].mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
        >


            <div class="text-field">
            <h2>${idNum}. ${viewData[i].title}</h2>
              <div class="shadow"></div>
              ${viewData[i].description}

            </div>
            <p class="read-more">Read More</p>

        </div>
        `

        }else{
          str3+=`<div class="outputDisplay" id="index${idNum}">
          <img class="listImage" src=${viewData[i].mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
        >
            <div class="text-field">
            <h2>${idNum}. ${viewData[i].title}</h2>
              <div class="shadow"></div>
              ${viewData[i].description}

            </div>
            <p class="read-more">Read More</p>

        </div>
        `

        }


    }

    document.getElementById("slidePanel1").innerHTML = str1;
    document.getElementById("slidePanel2").innerHTML = str2;
    document.getElementById("slidePanel3").innerHTML = str3;

    $(".text-field").mouseover(function(){

      $(this).siblings(".read-more").show(200)

    })
    $(".text-field").mouseleave(function(){

        $(this).siblings(".read-more").hide(200)

    })
    })

  })
  /*Slide panels the change when either the previous or next icons are clicked on*/
  let slideIndex=0;
  let slides = document.getElementsByClassName("slides");
  showSlides(slideIndex)

  function showSlides(n) {
  /*Ensures that the slide panels wrap around when it reached the end*/
  if (n > slides.length-1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for ( let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "flex";
}
/*Event listerner that causes the the slide to move to the next or previous panel by calling the showSlides function*/
  $('button').on('click',function(){
    let slideMove = $(this).text();
    if(slideMove=="Next"){
      slideIndex++;
      showSlides(slideIndex)
    }
    if($(this).text()=="Previous"){
      slideIndex--;
      showSlides(slideIndex)
    }

  })

})
