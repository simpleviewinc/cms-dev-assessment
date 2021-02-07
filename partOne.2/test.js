
/*api provided wont populate*/
var dataUrl = "https://jsonplaceholder.typicode.com/users/";

async function getListings() {
    return (await fetch(dataUrl)).json();
};

function logData() {
    var data = getData
    console.log(data)
};

async function getListingsTest() {
    return await fetch(dataUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
}

