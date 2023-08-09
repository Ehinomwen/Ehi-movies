<template>
  <main>
    <h1>Lastest Movies</h1>
    <div class="inputbut">
      <input v-model="search" type="search" name="" id="">
      <button @click="getPosts">search</button>
    </div>
    <div>
      <ul v-if="post.length">
        <li v-for="movie in post" :key="movie.imdbID">
          <img v-if="movie.Poster !== 'N/A'" :src="movie.Poster" alt="Movie Poster">
          <div>
            <h3>{{ movie.Title }}</h3>
            <p>Year: {{ movie.Year }}</p>
            <p>Plot: {{ movie.Plot }}</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const post = ref([])

const getPosts = () => {
  if (search.value !== '') {
    fetch(`http://www.omdbapi.com/?apikey=4fc450c6&s=${search.value}`)
      .then(response => response.json())
      .then(data => post.value = data.Search)
  }
}
</script>

<style scoped>

</style>
