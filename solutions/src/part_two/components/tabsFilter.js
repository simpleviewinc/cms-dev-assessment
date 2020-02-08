export default function tabsFilter() {
    const resize = window.matchMedia('(max-width: 640px)').matches ? 'flex' : 'grid';
    const tabs = Array.from(document.querySelectorAll('.tab'));
    let filter = '';
    let containers = Array.from(document.querySelectorAll('.container'));
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.value.includes('active-tab')) {
            filter = tabs[i].children[0].dataset.tab;
        }
    }
    if (filter === 'all') {
        containers.map(container => {
            container.style.display = resize;
        })
    } else {
        containers.map(container => {
            container.style.display = 'none';
        })
        containers = Array.from(document.querySelectorAll(`.container[data-tab=${filter}]`))
        containers.map(container => {
            container.style.display = resize;
        })
    }
}