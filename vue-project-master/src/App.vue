<template>
  <div id="wrapper">
    
    <div class="container">
      <div class="col-sm-12">
        <!--<img src="./assets/logo.png">
        <hello></hello>-->
      </div>
      
    </div>
  </div>
  
  <!--<div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>-->
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
