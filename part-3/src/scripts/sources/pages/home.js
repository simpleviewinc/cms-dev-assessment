const mainController = (function() {
    const cssClasses = {
        active: 'active',
        pagePrefix: 'homeGrid--page'
    };
    const els = {
        gridsWrp: document.querySelector('#gridsWrp'),
        prevPageBtn: document.querySelector('#prevPageBtn'),
        nextPageBtn: document.querySelector('#nextPageBtn')
    };
    const apiURL = 'https://sv-reqres.now.sh/api/';
    const urls = {
        proxy: 'https://cors-anywhere.herokuapp.com/',
        listings: `${apiURL}listings`,
        events: `${apiURL}events`,
        offers: `${apiURL}offers`
    };
    let data = {
        listings: fetch(urls.listings).then(response => response.json()),
        pages: {
            totalPages: 0,
            totalItems: 0,
            perPage: 0,
            pagePattern: [5, 5, 3, 2],
            apiPageData: new Object(),
            newPageData: new Object(),
            urls: new Array()
        }
    };
    const query = window.location.search;
    let searchParams = new URLSearchParams(query);
    let curPage = searchParams.get('page');

    function renderData(promiseArr) {
        Promise.all(promiseArr)
        .then(results => {
            let leftovers = new Array();

            for (let i = 0; i < results.length; i++) {
                let result = results[i];

                data.pages.apiPageData[i + 1] = result.data;
            }

            for (let key in data.pages.apiPageData) {
                let index = parseInt(key);
                let items = [...leftovers, ...data.pages.apiPageData[key]];

                data.pages.newPageData[key] = items.slice(0, (data.pages.pagePattern[index - 1]));

                leftovers = items.slice(data.pages.pagePattern[index - 1]);
            }

            while (leftovers.length > 0) {
                for (let i = 0; i < data.pages.pagePattern.length; i++) {
                    if (leftovers.length) {
                        let page = Object.keys(data.pages.newPageData).length + 1;
        
                        data.pages.newPageData[page] = leftovers.slice(0, data.pages.pagePattern[i]);
        
                        leftovers = leftovers.slice(data.pages.pagePattern[i]);
                    }
                    else {
                        break;
                    }
                }
            }

            data.pages.totalPages = Object.keys(data.pages.newPageData).length;

            createPageMarkup();

        })
        .catch(error => console.error(error));
    }

    function createData(thisData, dataURL) {
        Promise.resolve(thisData)
        .then(d => {
            data.pages.totalPages = d.total_pages;
            data.pages.totalItems = d.total;
            data.pages.perPage = d.per_page;

            for (let i = 0; i < data.pages.totalPages; i++) {
                data.pages.urls.push(fetch(`${dataURL}?page=${i + 1}`).then(response => response.json()));
            }
    
            renderData(data.pages.urls);
            
        })
        .catch(error => console.error(error));
    }

    function createPageMarkup() {
        let items = data.pages.newPageData[curPage];
        let titleNum = 0;
        let markup;

        for (let i = 1; i < curPage; i++) {
            titleNum += data.pages.newPageData[i].length;
        }

        markup = `
            <div class="homeGrid ${cssClasses.pagePrefix}${curPage}">
                ${items.map(cur => {
                    titleNum += 1;

                    return `
                        <div class="homeGrid__item">
                            <div class="homeGrid__titleCard">
                                <span class="homeGrid__titleNum">${titleNum.toString().length < 2 ? `0${titleNum}` : titleNum}.</span>
                                <h2 class="homeGrid__title">${cur.title}</h2>
                            </div>

                            <div class="homeGrid__imgWrp">
                                <img class="homeGrid__img" src="${cur.mediaurl}" alt="" onError="this.onerror = null; this.src = '/images/fallback.jpg';" />
                            </div>
                        </div>`
                }).join('')}
            </div>`;

        els.gridsWrp.insertAdjacentHTML('beforeend', markup);
    }

    function nextPage() {
        let nextPage = parseInt(curPage) + 1 > data.pages.totalPages ? 1 : parseInt(curPage) + 1;

        searchParams.set('page', nextPage);

        window.location.search = searchParams;
    }

    function prevPage() {
        let prevPage = parseInt(curPage) - 1 < 1 ? data.pages.totalPages : parseInt(curPage) - 1;

        searchParams.set('page', prevPage);

        window.location.search = searchParams;   
    }

    function setDefaultSearchParam() {
        if (curPage === null || curPage.length === 0) {
            searchParams.set('page', 1);

            window.location.search = searchParams;
        }
    }
    
    function eventListeners() {
        // move to previous page
        els.prevPageBtn.addEventListener('click', prevPage);

        // move to next page
        els.nextPageBtn.addEventListener('click', nextPage);
    }
    
    function init() {
        setDefaultSearchParam();
    
        createData(data.listings, urls.listings);
    
        eventListeners();
    }

    // -- INIT -- //
    init();

    // -- PUBLIC -- //
    return {
        data: () => data,
        nextPage,
        prevPage
    }
})();