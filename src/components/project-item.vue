<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { motion } from "motion-v";

const props = defineProps({
  projectData: Object,
  alignLeft: Boolean
});

const transition = {
  duration: 0.5,
  ease: "easeInOut"
}

</script>

<template>
    <motion.div
        :transition="transition"
        :initial="{ opacity: 0, x: '-100%'}"
        :whileInView="{opacity: 1, x: '0%' }"
    >
        <div class = "project-item" :class = "{'align-left': alignLeft, 'align-right': !alignLeft}" :style = "{backgroundColor: projectData?.bgcolor, color: projectData?.textcolor}">
            <img class = "project-image" :src = "projectData?.image">
            <div class = "info-section">
                <h1>{{projectData?.title}}</h1>
                <p>{{projectData?.description}}</p>
            </div>
        </div>
    </motion.div>

</template>

<style lang="scss" scoped>
@use "@/sass/fonts.scss";
@use "@/sass/constants.scss";

.align-left {
    flex-direction: row;
}

.align-right {
    flex-direction: row-reverse;
}

.project-item{
    position: relative;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;
    font-size: 18px;

    @media only screen and (max-width: $tablet) {
      flex-direction: column !important;
    }

    .project-image{
        position: relative;
        width: vw(700);
        border-radius: 5px;

        @media only screen and (max-width: $tablet) {
            width: 80%;
        }
    }

    .info-section{
        position: relative;
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        margin-left: 20px;
        margin-right: 20px;

        @media only screen and (max-width: $tablet) {
            width: 80%;
            margin-top: 20px;
        }
        
    }
}
</style>
