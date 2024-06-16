import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_api_url: 'http://127.0.0.1:8000/',
    photos_endpoint: 'api/photos',
    categories_endpoint: 'api/categories',
    photos: '',
    categories: '',
    filter_category: '',
    chekced_evidence: 0,

    call_api_photos(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);
                this.photos = response.data.results.data
                console.log(this.photos.data);
            })
            .catch(err => {
                console.error(err)
            })
    },
    call_api_categories(url) {
        axios
            .get(url)
            .then(response => {
                this.categories = response.data.results
                console.log(this.categories);
            })
            .catch(err => {
                console.error(err)
            })
    },
    search_category() {
        const photos_url = this.base_api_url + this.photos_endpoint
        const photos_filtered_categories_url = this.base_api_url + this.photos_endpoint + `?search=` + this.filter_category + `?search=` + this.se
        if (this.filter_category == "No category selected") {
            this.call_api_photos(photos_url)
        } else {
            this.call_api_photos(photos_filtered_categories_url)
        }
        console.log(photos_filtered_categories_url);
    }

})