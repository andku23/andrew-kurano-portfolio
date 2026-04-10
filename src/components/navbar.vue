<script setup>
import {onUnmounted, ref, onMounted, inject} from "vue";
import navbarLinks from "@/content/navbar-links.json"
import {useStore} from "vuex";
import NavbarButton from "./navbar-button.vue";

const store = useStore();

const navbarLinksRef = ref(navbarLinks.links);

onMounted(() => {
  
});

</script>

<template>
  <div class = "navbar flex-row">
    <div class = "links flex-row">
        <div v-for = "linkData in navbarLinksRef">
          <NavbarButton :name = "linkData.name" :link = "linkData.link"/>
        </div>
    </div>

    <div class = "built-by-area">
      <h2>Built with Vite/Vue</h2>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.navbar{
  background-color: black;
  position: relative;
  width: 100%;
  height: 66px;
  justify-content: flex-end;
  padding-left: 20px;
  padding-right: 20px;

  box-sizing: border-box;

  .built-by-area{
    position: absolute;
    left: 0;
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left: 20px;
  }

  .links{
    position: relative;
    justify-content: flex-end;
  }
}
</style>
