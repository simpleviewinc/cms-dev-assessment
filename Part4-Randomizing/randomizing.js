
function randomizing(array) {
  if (array.length !== 0) {
    for (let i = array.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempValue = array[i];
      array[i] = array[j];
      array[j] = tempValue;
    }
  }
  return array;
};

randomizing(allData.events)
randomizing(allData.listings)
randomizing(allData.offers)

console.log(allData);
