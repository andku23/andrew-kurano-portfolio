<script setup>
import About from './components/about.vue';
</script>

<template>
  <div class = "main-page">
    <About/>
  </div>
</template>

<style scoped lang='scss'>
@use "./sass/global-classes";

.main-page{
  position: relative;
  width: 100vw;
  height: auto;
  background-color: red;
 top: 0;
}

</style>
