<script setup>
import common from "@/content/common.json";
import about from "@/content/about.json";
</script>

<template>
  <div class = "about">
    <img class = "portrait-image" src = "/assets/imgs/headshot.jpg">
    <div class = "info-section">
      <h1>{{common.name}}</h1>
      <p>{{about.body0}}</p>
      <p>{{about.body1}}</p>
    </div>
  </div>
</template>

<style scoped lang = "scss">

@use "../sass/constants.scss";

.about{
    position: relative;
    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;

    @media only screen and (max-width: $tablet) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .portrait-image{
      position: relative;
      width: vw(800);
      height: auto;
      border-radius: 8px;

      @media only screen and (max-width: $tablet) {
        width: 80%;
      }
    }

    .info-section{
      position: relative;
      width: vw(800);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      flex-grow: 1;
      margin-left: 30px;

      @media only screen and (max-width: $tablet) {
        width: 80%;
      }

      h1{
        font-size: 54px;
      }
      
      p{
        font-size: 24px;
        letter-spacing: 0.5px;
      }
    }
}
</style>
