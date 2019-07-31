const buttons = document.querySelectorAll('.button'),
    divs = document.querySelectorAll('.content'),
    showBtn = document.querySelector('read-more')


function removeBorder() {
    buttons.forEach(item => item.classList.remove('active'));
}

buttons.forEach(item => item.addEventListener('click', selectItem));
divs.forEach(item => {
    item.addEventListener('click', e => {
        document.querySelector('.read-btn').style.display = 'block';
    })
})

getDetails()


all.addEventListener('click', getDetails);
listings.addEventListener('click', getDetails);
events.addEventListener('click', renderEvents);
offers.addEventListener('click', renderOffers);



