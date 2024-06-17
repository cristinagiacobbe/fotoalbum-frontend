<script >
import { state } from '../state.js'

export default{
  name: 'Modal_view',  
  props:{
    photo: Object
  },
data() {
        return {
            state
        }
    },
}
</script>

<template>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" >
    View
</button>
      
<div class="modal fade" :id="`post-${photo.id}`" tabindex="-1" 
    data-bs-keyboard="false" role="dialog" :aria-labelledby="`modal-title-${photo.id}`" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                      <h5 class="modal-title" :id="`modal-title-${photo.id}`">
                        {{ photo.title }}
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body">               

                        <img class="img-fluid w-100"
                          :src="photo.image.startsWith('https://') ? photo.image : state.base_api_url + '/storage/' + photo.image"
                          alt="">                      
                      {{ photo.description }}

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                    </div>
            </div>
        </div>
</div>
</template>
