window.addEventListener("load", function(){

    var url = "https://sv-reqres.now.sh/";
    var listings = "api/listings/";
    var events = "api/events/";
    var offers = "api/offers/";
    var listingsUrl = url+listings;
    var eventsUrl = url+events;
    var offersUrl = url+offers;
    var count = 0;

    var vm = new Vue({
        el: '#app',
        data: {
            listings: [],
            events: [],
            offers: [],
            all: [],
            current: []
        },
        created: function(){
            this.getAllData();
        },
        methods: {
            getAllData: function(){
                axios.get(listingsUrl)
                    .then(function (res){
                        vm.all.length = 0;
                        vm.listings = res.data.data;
                        for(var i=0; i<vm.listings.length; i++){
                            vm.all.push(vm.listings[i]);
                        }
                        axios.get(eventsUrl)
                            .then(function(res){
                                vm.events = res.data.data;
                                for(var i=0; i<vm.events.length; i++){
                                    vm.all.push(vm.events[i]);
                                }
                                axios.get(offersUrl)
                                    .then(function(res){
                                        vm.offers = res.data.data;
                                        for(var i=0; i<vm.offers.length; i++){
                                            vm.all.push(vm.offers[i]);
                                        }
                                        var start = Math.floor(Math.random() * vm.all.length);
                                        var end = start + 5;
                                        vm.current = vm.all.slice(start, end);
                                    });
                            });
                    });
                    
            }
        }     
    });

});