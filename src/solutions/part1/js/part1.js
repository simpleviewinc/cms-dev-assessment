//Create Vue.js Instance
new Vue({
  // Target element
  el: "main",
  //Collect data
  data: {
    api: {},
    singleChunk: [],
    fallbackImg: "img/fallback.jpg"
  },
  //Call functions by user
  methods: {
    //Fallback image when IMG is not found
    fallBackimage: function(e){
      console.log(e);
      e.target.src = this.fallbackImg;
    },
    //Chunk arrays
    chunkIt: function(arr, size){
        var chunked = [];
        for(var i=0,len=arr.length; i<len; i+=size)
          chunked.push(arr.slice(i,i+size));
        return chunked;
    },
  },
  //Get chunked array
  computed: {
    chunkedApiSingle: function(){
       //var vm = this;
       return this.singleChunk;
    }
  },
  //When page is ready
  mounted: function(){
    let vm = this;
    //Request API Data
    axios.get('https://sv-reqres.now.sh/api/listings/?per_page=18')
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
})
