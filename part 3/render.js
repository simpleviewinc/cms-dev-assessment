function renderItems(data) {
  // console.log(data);
  // const template = document.querySelector('template[name="listing"]').cloneNode();
  document.querySelector('.cards').innerHTML = '';
  data.forEach(datum => {
    const template = document.querySelector('template[name="listing"]').content.cloneNode(true);
    template.querySelector('img').setAttribute('src', datum.mediaurl);
    template.querySelector('h3').innerHTML = datum.title;
    template.querySelector('p.description').innerHTML = datum.description;
    document.querySelector('.cards').appendChild(template);
  });
}