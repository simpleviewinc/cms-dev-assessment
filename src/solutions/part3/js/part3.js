//Custom component for img loader
Vue.component('image-loader', {
  props: [
    'src',
    'loadSrc',
    'hSize',
    'imgSet',
    'caption'
  ],
  data: function () {
    return {
      imageSrc: this.loadSrc,
      isLoaded: false,
      setClass: "",
      setCaption: ""
    }
  },
  template: '<transition-group name="fade"><img class="img-fluid loader" :class="[hSize, setClass]" :src=imageSrc v-on:load="loadedImage" :key="imageSrc" alt="Picture"></img></transition-group>',
  methods: {
    loadedImage: function(){
      var vm = this;
      var img;
      img = new Image();
          img.onload = function(){
              vm.isLoaded = true;
              vm.imageSrc = vm.src;
              vm.setClass = vm.imgSet;
              vm.setCaption = vm.caption;
          }
      img.src = this.src;
    }
  },
})

//Create Vue.js Instance
new Vue({
  // Target element
  el: "main",
  //Collect data
  //May have some unsued data
  data: {
    api: {},
    apiAll: [],
    singleChunk: [],
    fallbackImg: "img/fallback.jpg",
    selectedFilter: "listings",
    page: 1,
    totalPages: 0,
    numItems: 5,
    layoutPattern: 1,
    loadBusy: false
  },
  methods: {
    //Fallback image when IMG is not found
    fallBackimage: function(e){
      e.target.src = this.fallbackImg;
    },
    //Chunk arrays
    chunkIt: function(arr, size, cache = []){
        const tmp = [...arr]
        while (tmp.length) cache.push(tmp.splice(0, size))
        return cache
    },
    //Next button
    nextBtn: function(){
      var vm = this;
      if(vm.page >= vm.totalPages){
        vm.page = 1;
      }
      else{
        vm.page+=1;
      }
      if(vm.layoutPattern >= 5){
        vm.layoutPattern = 1;
      }
      else{
        vm.layoutPattern++;
      }
    },
    //Previous Button
    prevBtn: function(){
      var vm = this;
      if(vm.page <= 1){
        vm.page = vm.totalPages;
      }
      else{
        vm.page-=1;
      }
      if(vm.layoutPattern <= 1){
        vm.layoutPattern = 5;
      }
      else{
        vm.layoutPattern -= 1;
      }
    },
    //Call API from Simpleview endpoints
    callAPI(){
      let vm = this;
      let checkData;
      //Request API Data with a variable which filter is selected.
        axios.get(`https://sv-reqres.now.sh/api/listings/?per_page=20`)
          .then(function (response) {
            // Handle success
            vm.api = response.data;
            checkData = response.data;
            vm.singleChunk = vm.chunkIt(vm.api.data, 5);
            vm.totalPages = vm.singleChunk.length;
            console.log(response);
          })
          .catch(function (error) {
            // Handle error
            console.log(error);
          })
          .then(function () {
            //For testing purposes
            if(checkData.data.length === 0){
              //alert("Empty data!");
              //vm.currentPage = 1;
              //vm.callAPI();
            }
            // Otherwise... whatever after this response
          });
      },
    },
    //Return some arrays
  computed: {
    chunkedApiSingle: function(){
       return this.singleChunk;
    },
    fetchValue: function(){
      return this.singleChunk[this.page-1];
    }
  },
  //When page is ready
  mounted: function(){
    this.callAPI();
  }
})
