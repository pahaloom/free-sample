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
a {
  color: #6b7888;
}
a:active {
  color: #9fadbd;
}
a:visited {
  color: #80646f;
}
.promo {
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 3em;
}
.promo > hr {
  border-top: 1px solid #2c3e50;
  width: 72%;
}
div.promo {
  margin-bottom: 3em;
}
.contacts {
  font-size: 2.6em;
  font-weight: 250;
  margin: 2em 0em;
}
</style>
