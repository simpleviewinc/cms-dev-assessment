const buttons = document.querySelectorAll('.button')

function removeBorder() {
    buttons.forEach(item => item.classList.remove('active'));
}

function selectItem(e) {
    e.preventDefault()
    removeBorder();
    // Add border to current tab
    this.classList.add('active');
}

buttons.forEach(item => item.addEventListener('click', selectItem));

getData().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})