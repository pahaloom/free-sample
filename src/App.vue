<template>
  <div id="app">
    <img alt="Rüütli Keldri logo" src="./assets/logo.png">
    <Promo/>
    <Contacts/>
    <Carousel/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Contacts from './components/Contacts.vue'
import Promo from './components/Promo.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Contacts,
    Promo
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
.promo {
  font-size: 3em;
  font-weight: 500;
  margin-bottom: 3em;
}
.contacts {
  font-size: 2.6em;
  font-weight: 250;
  margin: 1em 0em;
}
</style>
