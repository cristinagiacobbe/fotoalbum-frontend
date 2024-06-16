<script >
import axios from 'axios';

export default{
  name: 'App',
  data(){
    return{
      base_api_url: 'http://127.0.0.1:8000/',
      photos_endpoint: 'api/photos',
      categories_endpoint: 'api/categories',
      photos: '',
      categories: '',
      filter_category: '',
      chekced_evidence: 0
    }
 },

methods: {
call_api_photos(url){
axios
.get(url)
.then(response =>{
  console.log(response);
this.photos = response.data.results.data
console.log(this.photos.data);
})
.catch(err =>{
  console.error(err)
})
},
call_api_categories(url){
  axios
.get(url)
.then(response =>{
this.categories = response.data.results
console.log(this.categories);
})
.catch(err =>{
  console.error(err)
})
},
search_category(){
  const photos_url = this.base_api_url+this.photos_endpoint
  const photos_filtered_categories_url = this.base_api_url+this.photos_endpoint+`?search=`+this.filter_category+`?search=`+this.se
  if (this.filter_category == "No category selected") {
    this.call_api_photos(photos_url)
  } else{
     this.call_api_photos(photos_filtered_categories_url)
  } 
  console.log(photos_filtered_categories_url);
}
} ,
mounted(){
const photos_url = this.base_api_url+this.photos_endpoint
const categories_url = this.base_api_url+this.categories_endpoint
this.call_api_photos(photos_url)
this.call_api_categories(categories_url)
}

}
</script>

<template>
  <h1>Share your fotoalbum</h1>

<div class="container d-flex">
<form @submit.prevent="search_category()">
<label for="category">Select a category</label>
<select class="form-select m-3" aria-label="Default select example" v-model="filter_category" >    
  <option v-for="category in categories" :value="category.id">{{category.name}}</option> 
  <option selected>No category selected</option>  
</select>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="In_evidence" v-model="chekced_evidence">
  <label class="form-check-label" for="In_evidence">
   In evidence
  </label>
</div>


<button type="submit" class="btn btn-outline-primary" >Search</button>
</form>

</div>

 <section class="posts py-5" v-if="photos">
  

<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    <div class="col" v-for="photo in photos">
      <div class="card">

<template v-if="photo.image && photo.image.startsWith('https://')" >
  <img class="card-img-top" :src="photo.image" alt="Photo image">  
</template>
<template v-else-if="photo.image && photo.image.startsWith('uploads')">
  <img class="card-img-top" :src="base_api_url+'storage/'+ photo.image" alt="Photo image">  
</template>


<div class="card-body">
    <h5 class="card-title">{{photo.title}}</h5>
    <p class="card-text">{{photo.description}}</p>
    <a href="#" class="btn btn-primary">View single photo</a>
</div>
  
      </div>


    </div>
  </div>
</div>


</section>



</template>

<style >

</style>
