<script setup>
import NavBar from './components/navbar.vue';
import About from './components/about.vue';
import projectList from '@/content/projects.json'
import ProjectItem from './components/project-item.vue';

const pipeIndex = (index) => {
  return index;
}

</script>

<template>
  <div class = "main-page">
    <NavBar/>
    <About/>
    <ProjectItem v-for = "(projectData, index) in projectList" :align-left = "pipeIndex(index)%2==0" :project-data="projectData" />
  </div>
</template>

<style lang='scss'>
@use "./sass/global-classes";

.main-page{
  position: relative;
  width: 100vw;
  height: auto;
  top: 0;
}

body{
  margin: 0px;
}

</style>
