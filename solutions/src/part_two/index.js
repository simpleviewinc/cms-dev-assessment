const filterTemplates = require('./templates/filters.handlebars');
import { Render } from './components/index';
import './filterBtns.css';

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('div');
    nav.setAttribute('class', 'filterBtns');
    nav.innerHTML = filterTemplates();
    document.body.prepend(nav);
    Render('https://sv-reqres.now.sh/api/listings');
    Render('https://sv-reqres.now.sh/api/events');
    Render('https://sv-reqres.now.sh/api/offers');
})