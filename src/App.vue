<template>
  <div id="app">
    <img alt="Rüütli Keldri logo" src="./assets/logo.png">
    <MCPromo/>
    <MCContacts/>
    <MCCarousel/>
    <MCChat/>
  </div>
</template>

<script>
import MCCarousel from './components/MCCarousel.vue'
import MCContacts from './components/MCContacts.vue'
import MCPromo from './components/MCPromo.vue'
import MCChat from './components/MCChat.vue'

export default {
  name: 'App',
  components: {
    MCCarousel,
    MCContacts,
    MCPromo,
    MCChat
  },
  metaInfo: {
    title: "Rüütli Kelder"
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
