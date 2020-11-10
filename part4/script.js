    $(document).ready(function(){
        let listingUrl= "https://sv-reqres.now.sh/api/listings";
        
        function createCard (item) {
            let gridItem = document.createElement('div');
            let img = document.createElement('img');
            let title = document.createElement('h1');
            let text = document.createElement('p');
            
            gridItem.setAttribute('class', 'grid-item column'); 
            img.setAttribute('src', item.mediaurl);
            img.setAttribute('onError', 'this.onerror=null; this.src="./Assets/img/fallback.jpg";');            
            title.textContent = item.title;
            text.textContent = item.description;

            $('.grid-container').append(gridItem);

            gridItem.append(img);
            gridItem.append(title);
            gridItem.append(text);
        };

        function listings() {
            $.ajax({
                url: listingUrl,
                method: 'GET'
            }).then(function (res) {
               let randNum = random(); 
               res.data.slice(randNum[0], randNum[1]).forEach(createCard);
                }
            );
        };
        
        function random() {
            let numOne;
            let numTwo;
            do {
                numOne = Math.floor(Math.random() * Math.floor(6));
                numTwo = Math.floor(Math.random() * Math.floor(6));
            } while (numOne >= numTwo);
            return [numOne, numTwo];
        };

        listings(1);
        let pageNum = 1;

    function prevPage() {
        $('.grid-container').empty();
        if (pageNum === 1) {
            listings(3);
            pageNum = 3;
        } else {
            pageNum--;
            listings(pageNum);
        }
    }

    function nextPage() {
        $('.grid-container').empty();
        if (pageNum === 3) {
            listings(1);
            pageNum = 1; 
        } else {
            pageNum++;
            listings(pageNum);
        }
    }
    
        let btnNext = document.getElementById('btnNext');
        let btnPrev = document.getElementById('btnPrev');

        btnNext.addEventListener('click', function () {
            nextPage();
        });

        btnPrev.addEventListener('click', function () {
            prevPage();
        });
});