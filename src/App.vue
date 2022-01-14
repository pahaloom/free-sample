<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Contacts/>
    <Carousel/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Contacts from './components/Contacts.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Contacts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
