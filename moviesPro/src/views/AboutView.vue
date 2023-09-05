<template>
  <div class="about-movie">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img  :src="movie.Poster" alt="Movie Poster" class="about-img">
    <p>{{ movie.Plot }}</p>
    
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';


  
    const movie = ref({});
    const route = useRoute();


    onBeforeMount (() =>{
      fetch(`http://www.omdbapi.com/?apikey=4fc450c6&i=${route.params.id}&plot=full`)
      .then(response => response.json())
      
      .then(data => movie.value = data)

    });

  

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
