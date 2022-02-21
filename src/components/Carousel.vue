<template>
<div class="carousel">
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader />
   </template>

   <template v-slot:caption>
      <flux-caption />
   </template>

   <template v-slot:controls>
      <flux-controls />
   </template>

   <template v-slot:pagination>
      <flux-pagination />
   </template>

   <template v-slot:index>
      <flux-index />
   </template>
</vue-flux>

<div class="controls">
   <button @click="$refs.slider.show('prev')">Eelmine</button>
   <button @click="$refs.slider.show('next')">Järgmine</button>
</div>
</div>
</template>

<script>

import * as glry from '../assets/js/glry';

import {
   VueFlux,
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
   FluxPreloader
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxIndex,
      FluxPagination,
      FluxPreloader,
   },

   data: () => ({
      vfOptions: {
         autoplay: true
      },
      vfImages: glry.getImages(),
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
      vfCaptions: glry.getCaptions(),
   }),

   mounted() {
      this.mounted = true;
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.carousel {
   margin: 2em;
}
.controls {
   margin-left: .7em;
   margin-right: .7em;
   margin-top: .7em;
   margin-bottom: 6em;
}
</style>
