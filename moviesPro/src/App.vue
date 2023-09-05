<template>

      <header>
        <router-link to="/">
          <h3><span>Ehi</span>Movies</h3>
          
        </router-link>
        <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/movie/:id">About Movie</router-link>
         </nav>
      </header>
      <main>
      <router-view/>
      </main>
</template>