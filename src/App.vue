<script >
import axios from 'axios';

export default{
  name: 'App',
  data(){
    return{
      base_api_url: 'http://127.0.0.1:8000/',
      photos_endpoint: 'api/photos',
      photos: null,
    }
 },
 mounted(){
const photos_url = this.base_api_url+this.photos_endpoint

axios
.get(photos_url)
.then(response =>{
console.log(response);
this.photos=response.data.results.data
console.log(this.photos);
}
)
.catch(err =>{
  console.error(err)
})

 }

}
</script>

<template>
  <h1>photos</h1>
  
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Search</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
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
