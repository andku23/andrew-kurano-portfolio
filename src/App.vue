<script setup>
import NavBar from './components/navbar.vue';
import About from './components/about.vue';
</script>

<template>
  <div class = "main-page">
    <NavBar/>
    <About/>
  </div>
</template>

<style scoped lang='scss'>
@use "./sass/global-classes";

.main-page{
  position: relative;
  width: 100vw;
  height: auto;
  top: 0;
}

</style>
