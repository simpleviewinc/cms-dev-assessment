$(document).ready(function(){
    let listingUrl= "https://sv-reqres.now.sh/api/listings";
    
    function card (){

        $.ajax({
            url: listingUrl,
            method: 'GET'
        }).then(function (res) {
            res.data.forEach(createCard);
            console.log(res.data);
        });

        function createCard (item) {

            let img = document.createElement('img');
            let title = document.createElement('h1');
            let text = document.createElement('p');
    
            img.setAttribute('src', item.mediaurl);
            img.setAttribute('onError', 'this.onerror=null; this.src="./Assets/img/fallback.jpg";');            
            title.textContent = item.title;
            text.textContent = item.description;

            $('.grid-container').append(img);
            $('.grid-container').append(title);
            $('.grid-container').append(text);

        };
    
    };
    card();
});