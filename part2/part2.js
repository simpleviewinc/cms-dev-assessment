Vue.component('part1', {
    template: `
    <div id="listings" class="grid_container">
        <div class="header">
            <button type="button" v-on:click="getData($event,'all')">All</button>
            <button type="button" v-on:click="getData($event,'listings')">Listings</button>
            <button type="button" v-on:click="getData($event,'events')">Events</button>
            <button type="button" v-on:click="getData($event,'offers')">Offers</button>
        </div>
        <div v-for="(listing, index) in listings" class="listing_wrapper"
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
            listings: []
        }
    },
    mounted () {
        axios
        .get('https://sv-reqres.now.sh/api/listings/?per_page=15')
        .then(response => (this.listings = response.data.data))
    },
    methods: {
        getData: function(event, type) {
            axios
            .get('https://sv-reqres.now.sh/api/' + type + '/?per_page=15')
            .then(response => (this.listings = response.data.data))
        }
    }
})