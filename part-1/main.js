const fetchListingsData = () => {
    fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'}).then(res => {
        console.log("this is the listings res: ");
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log("this is the response in json data ");
        console.log(data.data);

        let boxCount = 1;
     
        const html = data.data.map((item, index) => {
            let toInsert;
            const descriptionStart = item.description.substring(0, 75);
            const descriptionEnd = item.description.substring(75);
            if(boxCount === 1) {
                toInsert =  `
                <div class="col-6">
                <img src="${item.mediaurl}" 
                      onError="this.src = '../comps/fallback.jpg'"
                ></img>
                <h1>${item.title}</h1>
                <p>${descriptionStart}</p>
                </div>
            `;
            } 
            else if(boxCount === 6){
                `
                <div class="col-3">
                    <img src="${item.mediaurl}" 
                        onError="this.src = '../comps/fallback.jpg'"
                        ></img>
                </div>
                <div class="col-3">
                    <h1>${item.title}</h1>
                    <p>${descriptionStart}</p>
                 </div>
            `;
            } else {
                toInsert =  `
                <div class="col-3">
                <img src="${item.mediaurl}" 
                      onError="this.src = '../comps/fallback.jpg'"
                ></img>
                <h1>${item.title}</h1>
                <p>${descriptionStart}</p>
                </div>
            `;
            }
            console.log("this is the boxCount ", boxCount);
            if(boxCount === 6){
                boxCount = 1;
            } else {
                boxCount++;
            }
            return toInsert;
        })
        .join("");
         console.log("this is the html", html);

         document.querySelector(".row").insertAdjacentHTML("afterbegin", html);
    }).catch((err) => {
        console.log("this is the error ", err);
    });
}

fetchListingsData();

