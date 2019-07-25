Vue.component('part2', {
    template: `
    <div class="grid_container">
        <div class="header">
            <button type="button" id="all" v-on:click="toggleClicked($event,'all')" class="toggle_button selected_button">All</button>
            <button type="button" id="listings" v-on:click="toggleClicked($event,'listings')" class="toggle_button">Listings</button>
            <button type="button" id="events" v-on:click="toggleClicked($event,'events')" class="toggle_button">Events</button>
            <button type="button" id="offers" v-on:click="toggleClicked($event,'offers')" class="toggle_button">Offers</button>
        </div>
        <div v-for="(item, index) in visible" class="listing_wrapper"
        :class="[ index % 6 == 0 || index % 6 == 5 ? (index % 6 == 0 ? 'listing_item_big1' : 'listing_item_big2') : 'listing_itemx_small']">
            <img v-if="item.mediaurl" :src="item.mediaurl" class="thumbnail" alt="Featured Image" @error="setFallbackImageUrl"/>
            <img v-else src="../comps/fallback.jpg" />

            <div class="listing_item">
                <p><strong>{{item.title}}</strong></p>
                <p>{{ item.description }}</p>
            </div>
            <button class="read_more" type="button">Read More</button>
        </div>
    </div>
    `,
    data() {
        return {
            listings: [],
            events: [],
            offers: [],
            all: [],
            visible: []
        }
    },
    methods: {
        setFallbackImageUrl(event) {
            event.target.src = "../comps/fallback.jpg"
          },
        getListings: function() {
            return axios.get('https://sv-reqres.now.sh/api/listings/?per_page=6')
        },
        getEvents: function() {
            return axios.get('https://sv-reqres.now.sh/api/events/?per_page=6')
        },
        getOffers: function() {
            return axios.get('https://sv-reqres.now.sh/api/offers/?per_page=6')
        },
        toggleClicked: function(event, type) {
            this.toggleButtonClass(type);
            switch(type) {
                case 'all':
                    this.visible = this.all;
                    break;
                case 'listings':
                    this.visible = this.listings;
                    break;
                case 'events':
                    this.visible = this.events;
                    break;
                case 'offers':
                    this.visible = this.offers;
                    break;
            }
        },
        toggleButtonClass(type) {
            document.getElementsByClassName("selected_button")[0].classList.toggle("selected_button");
            document.getElementById(type).classList.toggle("selected_button");
        }
    },
    mounted () {
        axios.all([this.getListings(), this.getEvents(),this.getOffers()])
        .then(axios.spread((listings, events, offers) => {
            this.listings = listings.data.data;
            this.events = events.data.data;
            this.offers = offers.data.data;
            this.all = this.listings.concat(this.events).concat(this.offers);
            this.visible = this.all;
        }))
    },
})