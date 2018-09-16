new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  methods: {
    PlaceHolderImg: function(e) {
      e.target.src="assets/placeholderimg.jpg";
    }
  },
  mounted () {
    axios
      .get('https://sv-reqres.now.sh/api/listings/?per_page=6.json')
      .then(response => (this.info = response.data.data))
  }
});