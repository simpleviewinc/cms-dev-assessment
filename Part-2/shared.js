window.addEventListener("load", function(){

    var url = "https://sv-reqres.now.sh/";
    var listings = "api/listings/";
    var events = "api/events/";
    var offers = "api/offers/";
    var listingsUrl = url+listings;
    var eventsUrl = url+events;
    var offersUrl = url+offers;
    var btns = document.querySelector(".options");

    var vm = new Vue({
        el: '#app',
        data: {
            listings: [],
            events: [],
            offers: [],
            all:[]
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
                                    });
                            });
                    });
                    
            },
            getListings: function(){
                axios.get(listingsUrl)
                    .then(function (res){
                        vm.all.length = 0;
                        vm.listings = res.data.data;
                        for(var i=0; i<vm.listings.length; i++){
                            vm.all.push(vm.listings[i]);
                        }
                    });
                    
            },
            getEvents: function(){
                axios.get(eventsUrl)
                    .then(function (res){
                        vm.all.length = 0;
                        vm.events = res.data.data;
                        for(var i=0; i<vm.events.length; i++){
                            vm.all.push(vm.events[i]);
                        }
                    });
                    
            },
            getOffers: function(){
                axios.get(offersUrl)
                    .then(function (res){
                        vm.all.length = 0;
                        vm.offers = res.data.data;
                        for(var i=0; i<vm.offers.length; i++){
                            vm.all.push(vm.offers[i]);
                        }
                    });
                    
            },
            toggleContent: function(){
                var p = event.currentTarget.parentNode.parentNode;
                if(p.classList.contains("active")){
                    p.classList.remove("active");
                }else{
                    p.classList.add("active");
                }
            },
            toggleStyle: function(evt){
                var t = evt.target;
                for(var i=0; i<event.currentTarget.children.length; i++){
                    if(event.currentTarget.children[i].classList.contains("active")){
                        event.currentTarget.children[i].classList.remove("active");
                    }
                    t.classList.add("active");
                }
            }
        }     
    });

});