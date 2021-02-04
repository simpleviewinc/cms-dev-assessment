const fetchListingsData = () => {
    fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'}).then(res => {
        console.log("this is the listings res: ");
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log("this is the response in json data ");
        console.log(data.data);

        const html = data.data.map((item, index) => {
            return `
                        <h1>${item.city}</h1>
                        <p>${item.zip}</p>
                        <img src="${item.mediaurl}" 
                              height="400px" 
                              width="400px" 
                              onError="this.src = '../comps/fallback.jpg'"
                              ></img>
                    `;
        })
        .join("");
         console.log("this is the html", html);

         document.querySelector("#test").insertAdjacentHTML("afterbegin", html);
    }).catch((err) => {
        console.log("this is the error ", err);
    });
}

fetchListingsData();

