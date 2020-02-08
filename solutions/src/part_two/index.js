const filterTemplates = require('./templates/filters.handlebars');
import tabsFilter from './components/tabsFilter';
import { Render } from './components/index';
import './filterBtns.css';

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('div');
    nav.setAttribute('class', 'filterBtns');
    nav.innerHTML = filterTemplates();
    document.body.prepend(nav);

    window.addEventListener('resize', () => {
        tabsFilter();
    })

    nav.firstChild.addEventListener('click', e => {
        if (e.target.classList.value !== 'tabs') {
            let target;

            if (e.target.classList.value === '') {
                target = e.target.parentElement;
            } else {
                target = e.target;
            }

            if (target.classList.value === 'tab') {
                const tabs = Array.from(document.querySelectorAll('.tab'));

                tabs.forEach(tab => {
                    tab.classList.remove('active-tab');
                })

                target.classList.add('active-tab');
                tabsFilter();
            }
        }
    })

    Render('https://sv-reqres.now.sh/api/listings', 'listings');
    Render('https://sv-reqres.now.sh/api/events', 'events');
    Render('https://sv-reqres.now.sh/api/offers', 'offers');
})