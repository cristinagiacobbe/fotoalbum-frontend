<script >
import axios from 'axios';
import { state } from './state.js'
import Loader from './components/Loader.vue';
import Modal_view from './components/Modal_view.vue';

export default{
  name: 'App',
  
  components: {
    Loader,
    Modal_view,
  },

data() {
        return {
            state
        }
    },


mounted(){
const photos_url = state.base_api_url+state.photos_endpoint
const categories_url = state.base_api_url+state.categories_endpoint

setTimeout(() => {
  state.call_api_photos(photos_url)
        }, 3000)
state.call_api_categories(categories_url)
}

}
</script>

<template>
  <h1>Share your fotoalbum</h1>

  <div class="m-4" v-if="state.loading">
    <Loader></Loader>
</div>


<div class="container d-flex">
<form @submit.prevent="state.filter()">
<label for="category">Select a category</label>
<select class="form-select m-3" aria-label="Default select example" v-model="state.filter_category" >    
  <option v-for="category in state.categories" :value="category.id">{{category.name}}</option> 
  <option selected>No category selected</option>  
</select>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value=" 'checked'? 1 : 0" id="In_evidence" v-model="state.checked_evidence">
  <label class="form-check-label" for="In_evidence">
   In evidence
  </label>
</div>

<button type="submit" class="btn btn-outline-primary" >Search</button>
</form>
</div>

 <section class="posts py-5" v-if="state.photos">
  

<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    <div class="col"  v-for="photo in state.photos.data">
      <div class="card" min-heigth= "500">

        <template v-if="photo.image && photo.image.startsWith('https://')" >
  <img class="card-img-top" :src="photo.image" alt="Photo image">  
        </template>
        <template v-else-if="photo.image && photo.image.startsWith('uploads')">
          <img class="card-img-top" :src="state.base_api_url+'storage/'+ photo.image" alt="Photo image">  
        </template>

        <div class="card-body">
    <h5 class="card-title">{{photo.title}}</h5>
    <p class="card-text">{{photo.description}}</p>
    <div v-if="photo.in_evidence == 1" >
      <i class="fa-solid fa-bookmark"></i>
    </div>    
        </div>
  
<div class="card-footer">
  <Modal_view :photo="photo"></Modal_view>

  
</div>


      </div>
    </div>
  </div>
</div>


</section>
</template>

<style >

.card{
  position: relative;
}
i{
  position: absolute;
  top:10px;
  right: 10px;
}
</style>
