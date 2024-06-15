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
 <section class="posts py-5" v-if="photos">

<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    <div class="col" v-for="photo in photos">
      <div class="card">
        <div class="card-body">
              {{ photo.title }}
        </div>
      </div>
    </div>
  </div>
</div>


</section>



</template>

<style >

</style>
