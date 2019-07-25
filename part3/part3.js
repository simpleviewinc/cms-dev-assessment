Vue.component('part3', {
    template: `
    <div class="grid_container">
        <div class="header">
            <button type="button" id="prev" v-on:click="prevClicked($event)" class="toggle_button">Prev</button>
            <button type="button" id="next" v-on:click="nextClicked($event)" class="toggle_button">Next</button>
        </div>
        <div v-for="(item, index) in visible" class="listing_wrapper"
        :class="[ index % 6 == 0 || index % 6 == 5 ? (index % 6 == 0 ? 'listing_item_big1' : 'listing_item_big2') : 'listing_item_small']">
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
            visible: [],
            start_position: 0,
            end_position: 5,
            current_page: 0,
            layouts: [
                ['A','B','B','A','B'],
                ['C','C','D','C','C'],
                ['A','E','A'],
                ['E','E']
            ]
        }
    },
    methods: {
        setFallbackImageUrl(event) {
            event.target.src = "../comps/fallback.jpg"
        },
        nextClicked(event) {
            elements_on_page = this.layouts[this.current_page].length;
            this.current_page = (this.current_page + 1) % this.layouts.length;
            this.start_position = (this.start_position + elements_on_page) % this.listings.length;
            elements_on_page = this.layouts[this.current_page].length;
            this.end_position = (this.start_position + elements_on_page) % this.listings.length;
            if (this.end_position <= this.start_position) {
                this.visible = this.listings.slice(this.start_position).concat(this.listings.slice(0,this.end_position));
            }
            else {
                this.visible = this.listings.slice(this.start_position, this.end_position);
            }
        },
        prevClicked(event) {
            
        },
    },
    mounted () {
        axios
        .get('https://sv-reqres.now.sh/api/listings/?per_page=20')
        .then(response => {
            this.listings = response.data.data;
            this.visible = this.listings.slice(0,5);
        })
    },
})