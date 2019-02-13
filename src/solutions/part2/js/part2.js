//Create Vue.js Instance
new Vue({
  // Target element
  el: "main",
  //Collect data
  data: {
    api: {},
    apiAll: [],
    singleChunk: [],
    fallbackImg: "img/fallback.jpg",
    selectedFilter: "all",
    load: "loading...",
    itemsPerRow:5
  },
  methods: {
    //Fallback image when IMG is not found
    fallBackimage: function(e){
      e.target.src = this.fallbackImg;
    },
    //Chunk arrays
    chunkIt: function(arr, size){
        var chunked = [];
        for(var i=0,len=arr.length; i<len; i+=size)
          chunked.push(arr.slice(i,i+size));
        return chunked;
    },
    //Select filter function
    selectFilter: function(e){
      this.api = {};
      this.apiAll = [];
      this.selectedFilter = e;
      this.callAPI();
    },
    //Call API from Simpleview endpoints
    callAPI(){
      let vm = this;
      //Request API Data with a variable which filter is selected.
      if(this.selectedFilter === "all"){
        axios.all([
          axios.get(`https://sv-reqres.now.sh/api/listings/?page=1`),
          axios.get(`https://sv-reqres.now.sh/api/events/?page=1`),
          axios.get(`https://sv-reqres.now.sh/api/offers/?page=1`)
        ])
        .then(axios.spread((listRes, eventRes, offerRes) => {
          //console.log(listRes)
          //vm.api = {...listRes.data, ...eventRes.data, ...offerRes.data};
          vm.apiAll.push(listRes.data);
          vm.apiAll.push(eventRes.data);
          vm.apiAll.push(offerRes.data);
          // do something with both responses
          })
        );
      }
      else{
        axios.get(`https://sv-reqres.now.sh/api/${vm.selectedFilter}/?page=1`)
          .then(function (response) {
            // Handle success
            vm.api = response.data;
            vm.singleChunk = vm.chunkIt(vm.api.data, 6);
            console.log(response);
          })
          .catch(function (error) {
            // Handle error
            console.log(error);
          })
          .then(function () {
            // Otherwise... whatever after this response
          });
        }
      },
    },
  //Get array with chunks
  computed: {
    chunkedApiSingle: function(){
       //var vm = this;
       return this.singleChunk;
    },
  //Do chunks for retrieved data
    chunkedApiAll: function(){
      var goblinArrayGrabber = [];
      //var tesArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
      var vm = this;
      vm.apiAll.forEach(function(arr){
        arr.data.forEach(function(arr2){
          goblinArrayGrabber.push(arr2);
        })
      });
      return vm.chunkIt(goblinArrayGrabber, 6);
    },
  },
  //When page is ready
  mounted: function(){
    //Request API Data function (Changed from solution 1 to avoid repeat function)
    this.callAPI();
  }
})
