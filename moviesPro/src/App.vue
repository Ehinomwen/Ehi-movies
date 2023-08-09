<template>

      <nav>
        <div class="navbar">
        <RouterLink tag="li" class="col" to="/">Home</RouterLink>
        <RouterLink tag="li" class="col" to="/about">About</RouterLink>
      </div>
      </nav>
    
  
<div class="container">
 <RouterView></RouterView>
</div>
</template>
<script>

</script>

<style>
*{
  padding: 0;
    margin: 0;
    text-decoration: none;
    scroll-behavior: smooth;
    list-style: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
nav{
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  
}
.navbar .col{
  padding: 5px;
  font-size: 20px;
  color: #ffffff; 
  font-weight: 300;
  transition: all 0.5s ease ;
  margin-right: 20px;
  background-color: blue;
}
</style>