let pageNo = 1;

function randomizeApi(array) {
	//Sort Mutable
	array.sort(() => Math.floor(Math.random() -0.5 ));
}

const apiCall = (e, name) => {
	fetch(
		`https://sv-reqres.now.sh/api/${
			e !== null ? e.target.id : name
		}?page=${pageNo}`
	)
		.then((response) => {
			console.log(response);
			if (!response.ok) {
				throw Error('Error');
			}
			return response.json();
		})
		.then((results) => {
			console.log(results);

			let resultsArray = results.data;

			randomizeApi(resultsArray);

			const mainEl = resultsArray.map((item) => {
				return `
                          <div
                class="child"
              >
				<img src=${item.mediaurl}  onerror="this.onerror=null;this.src='${window.location.origin}/images/fallback.jpg';" class="image" />
				<h4 style="margin: 0px;">${item.title}  </h4> 
                <div  >${item.description}  </div> 
              </div>
                        `;
			});

			document
				.getElementById('app')
				.insertAdjacentHTML('beforeend', mainEl);
		});
};

const getAndDisplayData = () => {
	document.addEventListener('click', (e) => buttonId(e));
	const buttonId = (e) => {
		if (e.target.id === 'all') {
			document.getElementById('app').innerHTML = '';
			apiCall(null, 'listings');
			apiCall(null, 'events');
			apiCall(null, 'offers');
		} else {
			document.getElementById('app').innerHTML = '';

			apiCall(e, null);
		}
	};
};

let btnPrev = document.getElementById('prevBtn');

// btnPrev.addEventListener('click', () => {
//   document.getElementById('app').innerHTML = '';
//   getAndDisplayData(pageNo--);
// });

let btnNext = document.getElementById('nextBtn');

// btnNext.addEventListener('click', () => {
//   document.getElementById('app').innerHTML = '';
//   getAndDisplayData(pageNo++);
// });

// On page Load
document.getElementById('app').innerHTML = '';
apiCall(null, 'listings');
apiCall(null, 'events');
apiCall(null, 'offers');

getAndDisplayData(pageNo);
