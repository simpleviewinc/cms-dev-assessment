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
  //May have some unused data
  data: {
    api: {},
    // apiAll: [],
    randomApi: [],
    // singleChunk: [],
    fallbackImg: "img/fallback.jpg",
    selectedFilter: "listings",
    page: 1,
    loadPage: 1,
    totalPages: 0,
    numItems: 5,
    // layoutPattern: 1,
    loadBusy: false
  },
  methods: {
    //Fallback image when IMG is not found
    fallBackimage: function(e){
      e.target.src = this.fallbackImg;
    },
    //Randomize between min and max
    randomize: function(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    //Randomize width and height of screenshot
    randomizeSrc: function(w, h){
      let one = this.randomize(w, h);
      let two = this.randomize(w, h);
      return `https://loremflickr.com/${one}/${two}`;
    },
    //Randomize column size
    randomizeCol: function(mi, mx){
      let wid = this.randomize(mi, mx);
      return `col-${wid}`;
    },
    //Shuffle values in array
    shuffleArr: function(arr){
          var j, x, i;
          for (i = arr.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              x = arr[i];
              arr[i] = arr[j];
              arr[j] = x;
          }
         return arr;
    },
    //Chunk arrays
    chunkIt: function(arr, size, cache = []){
        const tmp = [...arr]
        while (tmp.length) cache.push(tmp.splice(0, size))
        return cache
    },
    //Call API from Simpleview endpoints
    //Generate Random
    nextBtn: function(){
      var vm = this;
      vm.page++;
      vm.loadPage++;
      if(vm.loadPage > 3){
        vm.loadPage = 1;
      }
      vm.callAPI();
    },
    //Prev button
    prevBtn: function(){
      var vm = this;
      if(vm.page >= 1){
        vm.page--;
      }
      if(vm.loadPage >= 1){
        vm.loadPage--;
      }
    },
    //Call API functiom
    callAPI(){
      let vm = this;
      let checkData;
      //Request API Data with a variable which filter is selected.
        axios.get(`https://sv-reqres.now.sh/api/listings/?per_page=6&page=${vm.loadPage}`)
          .then(function (response) {
            // Handle success
            vm.api = response.data;
            vm.randomApi.push(vm.shuffleArr(vm.api.data));
            console.log(response);
          })
          .catch(function (error) {
            // Handle error
            console.log(error);
          })
          .then(function () {
            // Otherwise... whatever after this response
          });
      },
    },
  computed: {
  },
  //When page is ready
  mounted: function(){
    this.callAPI();
  }
})
