window.addEventListener("load", function(){

    var url = "https://sv-reqres.now.sh/";
    var listings = "api/listings/";
    var events = "api/events/?per_page=2";
    var offers = "api/offers/?per_page=2";
    var btns;

    var vm = new Vue({
        el: '#app',
        data: {
            results: []
        },
        created: function(){
            this.getListings();
        },
        methods: {
            getListings: function(){
                var listingsUrl = url+listings;
                axios.get(listingsUrl)
                    .then(function (res){
                        vm.results = res.data.data;
                    });
            },
            toggleContent: function(){
                var p = event.currentTarget.parentNode.parentNode;
                if(p.classList.contains("active")){
                    p.classList.remove("active");
                }else{
                    p.classList.add("active");
                }
            }
        }     
    });

    function toggleContent(el){
        var p = el.parentNode.parentNode;
        console.log(p)
    }

});