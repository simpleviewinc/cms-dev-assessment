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
                                        vm.current = vm.all.slice(0,5);
                                    });
                            });
                    });
                    
            },
            pageNext: function(){
                var grid = document.querySelector(".grid");
                var c = event.currentTarget.dataset.count;
                if(c == 0){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(0,5);
                    var grid = document.querySelector(".grid");
                    grid.classList.remove("p4");
                    grid.classList.remove("p3");
                    grid.classList.remove("p2");
                    grid.classList.add("p1");
                    event.currentTarget.dataset.count = 1;
                }
                if(c == 1){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(5,10);
                    var grid = document.querySelector(".grid");
                    grid.classList.remove("p1");
                    grid.classList.remove("p3");
                    grid.classList.remove("p4");
                    grid.classList.add("p2");
                    event.currentTarget.dataset.count = 2;
                }
                if(c == 2){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(10, 13);
                    grid.classList.remove("p2");
                    grid.classList.remove("p1");
                    grid.classList.remove("p4");
                    grid.classList.add("p3");
                    event.currentTarget.dataset.count = 3;
                }
                if(c == 3){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(13,15);
                    grid.classList.remove("p3");
                    grid.classList.remove("p1");
                    grid.classList.remove("p2");
                    grid.classList.add("p4");
                    event.currentTarget.dataset.count = 0;
                }
            },
            pagePrev: function(){
                var grid = document.querySelector(".grid");
                var c = event.currentTarget.dataset.count;
                if(c == 0){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(13,15);
                    var grid = document.querySelector(".grid");
                    grid.classList.remove("p1");
                    grid.classList.remove("p2");
                    grid.classList.remove("p3");
                    grid.classList.add("p4");
                    event.currentTarget.dataset.count = 1;
                }
                if(c == 1){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(10,13);
                    var grid = document.querySelector(".grid");
                    grid.classList.remove("p1");
                    grid.classList.remove("p2");
                    grid.classList.remove("p4");
                    grid.classList.add("p3");
                    event.currentTarget.dataset.count = 2;
                }
                if(c == 2){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(5,10);
                    grid.classList.remove("p1");
                    grid.classList.remove("p3");
                    grid.classList.remove("p4");
                    grid.classList.add("p2");
                    event.currentTarget.dataset.count = 3;
                }
                if(c == 3){
                    vm.current.length = 0;
                    vm.current = vm.all.slice(0,5);
                    grid.classList.remove("p2");
                    grid.classList.remove("p3");
                    grid.classList.remove("p4");
                    grid.classList.add("p1");
                    event.currentTarget.dataset.count = 0;
                }
            }
        }     
    });

});