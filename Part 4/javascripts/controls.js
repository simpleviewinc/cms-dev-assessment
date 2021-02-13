//Timeout
const setTimeoutPromise = (timeout) =>
    new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });

async function pageControls(pageWrapper) {
    //*****IMPORTANT THIS MUST RUN SO THAT DATA CAN BE FETCHED BY index.js BEFORE THE FOLLOWING CODE IS EXECUTED******** 
    await setTimeoutPromise(1000);

    //Declare page control variables
    let previousPage;
    let currentPage;
    let nextPage;

    //Select our pages and control variables
    const pages = pageWrapper.querySelector(".page-grid-container");
    const previousButton = pageWrapper.querySelector(".prev");
    const nextButton = pageWrapper.querySelector(".next");

    function startPages() {
        //set default starting pages
        currentPage = document.querySelector(".page-0");
        previousPage = document.querySelector(".page-3");
        nextPage = document.querySelector(".page-1")
    }//end startPages

    function editClasses() {
        //These classes are being used to identify their elements for further shifting on and off screen
        currentPage.classList.add("current");
        previousPage.classList.add("previous");
        nextPage.classList.add("next");
    }//end editClasses()

    function changePages(direction) {
        //default CSS classes to current page by removing "current", "previous", and "next"
        const removeClasses = ["previous", "current", "next"];

        previousPage.classList.remove(...removeClasses);
        currentPage.classList.remove(...removeClasses);
        nextPage.classList.remove(...removeClasses);

        //change the page
        if(direction === "prev") {
            [previousPage, currentPage, nextPage] = [previousPage.previousElementSibling || pages.lastElementChild, previousPage, currentPage];
        } else {
            [previousPage, currentPage, nextPage] = [currentPage, nextPage, nextPage.nextElementSibling || pages.firstElementChild];
        }//end if/else

    //edit classes for new page status
    editClasses()
    }//end changeDirection()



    //When this file is loaded run startPages() and apply correct CSS classes
    startPages();
    editClasses();

    //Arrow control eventListeners
    previousButton.addEventListener("click", () => changePages("prev"));
    nextButton.addEventListener("click", () => changePages("next"));

}//end pageControls()

//Select the page-wrapper from index.html and pass it to pageControls() for parsing and functionality
const pageWrapper = document.querySelector(".page-wrapper");
pageControls(pageWrapper);