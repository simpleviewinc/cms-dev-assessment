const dataUrl = "https://sv-reqres.now.sh/api/events  ";


async function getData([url = dataUrl, data = {}]) {
  const response = await fetch(url, {
    method: 'POST', 
    cache: 'no-cache', 
    headers: {
      'Content-Type': 'application/json'
      
    }
   
  });
  return response.json(); 
}