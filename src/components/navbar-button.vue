<script setup>
import { defineProps } from 'vue';

const props = defineProps({
name: String,
link: String,
});

const linkout = function () {
  window.open(link, "_blank");
};
</script>


<template>
  <div class = "nav-button flex-row flex-center" @click = "linkout">
    <h1>{{name}}</h1>
  </div>
</template>

<style lang="scss" scoped>

.nav-button {
    position: relative;
    width: auto;
    height: 100%;
    pointer-events: auto;

    font-size: vw(24);
    color: $main-text;
    background-color: $nav-bar-background;

    transition: all 0.5s ease-in-out;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;

    font-size: 14px;

    &:hover{
        background-color: $nav-bar-background-hover;
    }

    &:active{
        background-color: $nav-bar-background-active;
    }
}
</style>
