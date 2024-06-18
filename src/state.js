import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_api_url: 'http://127.0.0.1:8000/',
    photos_endpoint: 'api/photos',
    categories_endpoint: 'api/categories',
    photos: '',
    categories: '',
    filter_category: '',
    cheked_evidence: false,
    loading: true,

    call_api_photos(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);
                this.photos = response.data.results
            })
            .catch(err => {
                console.error(err)
            })
        this.loading = false
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
    filter() {
        this.photos = ''
        this.cheked_evidence = false;
        const photos_url = this.base_api_url + this.photos_endpoint
        const photos_filtered_url = this.base_api_url + this.photos_endpoint + `?search=${this.filter_category}&search=${this.checked_evidence}`
        if (this.filter_category == "No category selected" && this.check_evidence == false) {
            this.call_api_photos(photos_url)
        } else {
            this.call_api_photos(photos_filtered_url)
        }
        console.log(photos_filtered_url);
    },

})