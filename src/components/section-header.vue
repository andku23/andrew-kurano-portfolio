<template>
  <div class = "section-header">
    <h1>{{props.title}}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>

<style lang="scss" scoped>
.section-header{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
</style>
