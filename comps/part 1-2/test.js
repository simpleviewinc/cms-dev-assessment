function handleError(err) {
	console.log('Hard Fail!');
	console.log(err);
}
// Reaching out to the API 
const endpoint = 'https://sv-reqres.now.sh/api/listings';

// one by one pieced together how to access each item one at a time 
// this was not what I had intended but I was able to access SOME data from the API
const itemImageOne = document.querySelector('.first .item-image');
const itemTitleOne = document.querySelector('.first .title');
const itemDescriptionOne = document.querySelector('.first .description');

const itemImageTwo = document.querySelector('.second .item-image');
const itemTitleTwo = document.querySelector('.second .title');
const itemDescriptionTwo = document.querySelector('.second .description');

const itemImageThree = document.querySelector('.third .item-image');
const itemTitleThree = document.querySelector('.third .title');
const itemDescriptionThree = document.querySelector('.third .description');

const itemImageFour = document.querySelector('.fourth .item-image');
const itemTitleFour = document.querySelector('.fourth .title');
const itemDescriptionFour = document.querySelector('.fourth .description');

const itemImageFive = document.querySelector('.fifth .item-image');
const itemTitleFive = document.querySelector('.fifth .title');
const itemDescriptionFive = document.querySelector('.fifth .description');

const itemImageSix = document.querySelector('.sixth .item-image');
const itemTitleSix = document.querySelector('.sixth .title');
const itemDescriptionSix = document.querySelector('.sixth .description');

const robPromise = fetch(endpoint);
robPromise.then(response => {
	return response.json();
}).then(data => {
	console.log(data);
	//you can see here how I am attempting to access the data inside the return and the only way I could manage to do that was 
	//one at a time which is why there is so much repetition here. 
	console.log(data.data[0].mediaurl);
	console.log(data.data[0].title);
	console.log(data.data[0].description);

    //this is where I started to piece together items into the html one at a time. I understand there are far more efficient ways to do this
    //however this is my attempt. 
	itemImageOne.src = `${data.data[0].mediaurl}`;
	itemTitleOne.textContent = `${data.data[0].title}`;
	itemDescriptionOne.textContent = `${data.data[0].description.substring(0, 250)}`;
	
	itemTitleTwo.textContent = `${data.data[1].title}`;
	itemDescriptionTwo.textContent = `${data.data[1].description.substring(0, 250)}`;

	itemImageThree.src = `${data.data[2].mediaurl}`;
	itemTitleThree.textContent = `${data.data[2].title}`;
	itemDescriptionThree.textContent = `${data.data[2].description.substring(0, 250)}`;

	itemImageFour.src = `${data.data[3].mediaurl}`;
	itemTitleFour.textContent = `${data.data[3].title}`;
	itemDescriptionFour.textContent = `${data.data[3].description.substring(0, 250)}`;

	itemImageFive.src = `${data.data[4].mediaurl}`;
	itemTitleFive.textContent = `${data.data[4].title}`;
	itemDescriptionFive.textContent = `${data.data[4].description.substring(0, 250)}`;

	itemImageSix.src = `${data.data[5].mediaurl}`;
	itemTitleSix.textContent = `${data.data[5].title}`;
	itemDescriptionSix.textContent = `${data.data[5].description.substring(0, 250)}`;


}).catch(handleError)
