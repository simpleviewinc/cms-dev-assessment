const dataUrl = "https://sv-reqres.now.sh/api/listings";

async function getData() {
    const response = await fetch(dataUrl, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache', 
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'https://localhost:3000',
        'Access-Control-Allow-Credentials':'true'
      }
    
    });
    return response.json(); 
}

function logData(){
  console.log("test")
  console.log(getData2())
}

function getData2(){
  var data;

  fetch(dataUrl)
    .then((resp) => resp.json())
    .then(json => data = json)
    .catch(err => console.log(err));
  return data;
}

