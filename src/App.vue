<template>
  <div id="app">
   <div class="container">
     <div class="navbar">
       <ul>
         <router-link to="/" tag="li">Home</router-link>
       </ul>
     </div>
     <router-view></router-view>  
   </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
