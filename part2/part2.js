Vue.component('part1', {
    template: `
    <div id="listings" class="grid_container">
        <div class="header">
            <button type="button" v-on:click="filter($event,'all')">All</button>
            <button type="button" v-on:click="filter($event,'listings')">Listings</button>
            <button type="button" v-on:click="filter($event,'events')">Events</button>
            <button type="button" v-on:click="filter($event,'offers')">Offers</button>
        </div>
        <div v-for="(listing, index) in visible" class="listing_wrapper"
        :class="[ index % 6 == 0 || index % 6 == 5 ? (index % 6 == 0 ? 'listing_item_big1' : 'listing_item_big2') : 'listing_itemx_small']">
            <img class="thumbnail" :src="listings.mediaurl || '../comps/fallback.jpg'">
            <div class="listing_item">
                <p><strong>{{listing.title}}</strong></p>
                <p>{{ listing.description }}</p>
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
        getListings: function() {
            return axios.get('https://sv-reqres.now.sh/api/listings/?per_page=3')
        },
        getEvents: function() {
            return axios.get('https://sv-reqres.now.sh/api/events/?per_page=3')
        },
        getOffers: function() {
            return axios.get('https://sv-reqres.now.sh/api/offers/?per_page=3')
        },
        filter: function(event, display) {
            switch(display) {
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