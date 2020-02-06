const homeTemplate = require('./home.handlebars');

const { getData } = require('./data');

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getData();

    const div = document.createElement('div');

    div.setAttribute('class', 'home');

    div.innerHTML = homeTemplate({
        message: 'Handlebar works',
        hello: 'welcome to the best'
    });

    document.body.appendChild(div);
})
