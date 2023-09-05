<template>
  <main>
    <div class="image"></div>
    <div class="inputbut">
      <input v-model="search" type="search" name="" id="">
      <button @click="getMovies">search</button>
    </div>

  

    <div class="movies-list">
      <div class="move" v-for="movie in movie" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="link-movie">
          <div class="images">
            <img :src="movie.Poster" alt="Movie Poster">
            <div class="movie-type">{{ movie.Type }}</div>
          </div>
          <div>
            <div class="movie-detail">
              <h3>{{ movie.Title }}</h3>
              <p>Year: {{ movie.Year }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue'

const search = ref('')
const movie = ref([])

const getMovies = () => {
  if (search.value !== '') {
    fetch(`http://www.omdbapi.com/?apikey=4fc450c6&s=${search.value}`)
      .then(response => response.json())
      .then(data => movie.value = data.Search)
  }
}
</script>


<style scoped>

</style>
