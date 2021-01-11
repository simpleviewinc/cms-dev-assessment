(function() {
    const cssClasses = {
        active: 'active',
        filterBtn: 'button--filter',
        homeGrid: 'homeGrid',
        homeGridNoBorder: 'homeGrid--noBorder'
    };
    const els = {
        filterBtns: Array.from(document.querySelectorAll(`.${cssClasses.filterBtn}`)),
        gridsWrp: document.querySelector('#gridsWrp')
    };
    const apiURL = 'https://sv-reqres.now.sh/api/';
    const urls = {
        proxy: 'https://cors-anywhere.herokuapp.com/',
        listings: `${apiURL}listings`,
        events: `${apiURL}events`,
        offers: `${apiURL}offers`
    };
    const dataTypes = {
        all: 'all',
        listings: 'listings',
        events: 'events',
        offers: 'offers'
    };
    let data = {
        listings: fetch(urls.listings).then(response => response.json()),
        events: fetch(urls.events).then(response => response.json()),
        offers: fetch(urls.offers).then(response => response.json())
    };
    const dataAttr = 'data-type';
    let dataJson = new Object();

    function renderData(dataObj) {
        let dataArr = new Array();
        let keyArr = new Array();

        for (var key in dataObj) {
            keyArr.push(key);
            dataArr.push(dataObj[key]);
        }

        Promise.all(dataArr)
        .then(arr => {
            for (let i = 0; i < arr.length; i++) {
                dataJson[keyArr[i]] = arr[i];
            }

            for (var key in dataJson) {
                createMarkup(dataJson[key].data, key);
            }
        })
        .catch(error => console.error(error));
    }

    function createMarkup(data, dataType) {
        const markup = `
            <div class="homeGrid" ${dataAttr}="${dataType}">
                ${data.map(cur => {
                    return `
                        <div class="homeGrid__item">
                            <div class="homeGrid__imgWrp">
                                <img class="homeGrid__img" src="${cur.mediaurl}" alt="${cur.title} image" onError="this.onerror = null; this.src = '/images/fallback.jpg';" />
                            </div>

                            <div class="homeGrid__content">
                                <h2 class="homeGrid__heading">${cur.title}</h2>

                                <div class="homeGrid__desc">
                                    <p>${cur.description}</p>
                                </div>
                                
                                <span class="homeGrid__itemBtn button button--primary">Read More</span>
                            </div>

                        </div>`
                }).join('')}
            </div>`;

        els.gridsWrp.insertAdjacentHTML('beforeend', markup);
    }
    
    function eventListeners() {
        // click event for filter buttons
        els.filterBtns.forEach(cur => cur.addEventListener('click', () => {
            let grids = Array.from(document.querySelectorAll(`.${cssClasses.homeGrid}`));
            let activeBtn = document.querySelector(`.${cssClasses.filterBtn}.${cssClasses.active}`);
            let thisCat;

            // remove active class from active button
            activeBtn.classList.remove(cssClasses.active);

            // add active class to clicked button
            cur.classList.add(cssClasses.active);

            // if this is not the "all" button, show the category and hide the others
            if (cur.getAttribute(dataAttr) !== dataTypes.all) {
                thisCat = grids.filter(g => g.getAttribute(dataAttr) === cur.getAttribute(dataAttr))[0];
                
                grids.forEach(g => g.style.display = 'none');

                thisCat.removeAttribute('style');
                thisCat.classList.add(cssClasses.homeGridNoBorder);
            }
            // otherwise, show all categories
            else {
                grids.forEach(g => {
                    g.removeAttribute('style');
                    g.classList.remove(cssClasses.homeGridNoBorder);
                });
            }
        }));
    }

    // -- INIT -- //
    renderData(data);

    eventListeners();
})();