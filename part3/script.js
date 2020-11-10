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

        function listings(page) {
            $.ajax({
                url: listingUrl,
                method: 'GET'
            }).then(function (res) {
                if (page === 1) {
                    createCard(res.data[0])
                } else if (page === 2) {
                    res.data.slice(1,3).forEach(createCard);
                } else {
                    res.data.slice(3).forEach(createCard);
                }
            });
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