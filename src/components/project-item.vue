<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { motion, stagger, animate } from "motion-v";

const props = defineProps({
  projectData: Object,
  alignLeft: Boolean
});

const transition = {
  duration: 0.5,
  ease: "easeInOut"
}

const isRolesOpen = ref(false);
const roles = ref([]);

const getTransitionDirection = () => {
  return (props.alignLeft) ? "90%" : "-90%";
}

const openRoles = () => {
    console.log('open roles')
  isRolesOpen.value = true;
  roles.value = props.projectData?.responsibilities;
}

const onEnterTransition = async (el, done) => {

    await animate(el, { height: "contain" }, { delay: stagger(0.1) });
    done();
}

const linkout = (href) => {
  window.open(href, "_blank")
}

</script>

<template>
    <motion.div
        :transition="transition"
        :initial="{ opacity: 0, x: getTransitionDirection()}"
        :whileInView="{opacity: 1, x: '0%' }"
    >
        <div class = "project-item"  :style = "{backgroundColor: projectData?.bgcolor, color: projectData?.textcolor}">
            <div class = "top-area" :class = "{'align-left': alignLeft, 'align-right': !alignLeft}">
                <img class = "project-image" :src = "projectData?.image">
                <div class = "info-section">
                    <h1>{{projectData?.title}}</h1>
                    <p>{{projectData?.description}}</p>
                    <div class = "button-section">
                        <div class = "button" v-for = "button in projectData?.buttonLinks" @click = "linkout(button.url)">
                            <h1>{{button.name}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class = "responsibilities-section" @mouseenter="openRoles" 
            :class = "{'responsibilities-section-open': isRolesOpen}">
                <div class = "expand-button">
                    RESPONSIBILITIES
                    <img class = "arrow" src = "../../public/assets/imgs/chevron-down-icon.svg">
                </div>
                <TransitionGroup @enter="onEnterTransition" 
                tag="ul" :css="false">
                    <li v-for = "resp in roles" :key="resp">
                        {{resp}}
                    </li>
                </TransitionGroup>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 40px;
    font-size: 18px;

    .top-area{
        position: relative;
        width: 100%;
        box-sizing: border-box;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;

        @media only screen and (max-width: $tablet) {
            flex-direction: column !important;
        }
    }

    .project-image{
        position: relative;
        width: vw(700);
        border-radius: 8px;
        transition: all 0.3s ease-in-out;

        @media only screen and (max-width: $tablet) {
            width: 80%;
        }

        &:hover{
            scale: 1.03;
        }
    }

    .info-section{
        position: relative;
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        margin-left: 30px;
        margin-right: 30px;

        @media only screen and (max-width: $tablet) {
            width: 80%;
            margin-top: 20px;
        }

        p {
            font-size: 20px;
        }

        .button-section{
            position: relative;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: auto;

            .button{
                position: relative;
                width: auto;
                height: auto;

                pointer-events: auto;
                padding: 10px;
                background-color: #dedede;
                border-radius: 5px;
                margin: 5px;

                cursor: pointer;

                color: black;
                *{
                    font-size: 20px;
                }

                transition: all 0.5s;

                &:hover{
                    background-color: #8080ae;
                    color: #dedede;
                }

                &:active{
                    background-color: #000000;
                    color: #dedede;
                }
            }

        }
    }

    .responsibilities-section{
        width: 100%;
        height: contain;
        transition: all 0.5s ease;
        pointer-events: all;

       
        .expand-button{
            width: 100%;
            height: 50px;
            background-color: white;
            color: black;
            font-weight: bold;

            display: flex;
            justify-content: center;
            align-items: center;

            .arrow{
                width: 20px;
                margin: 10px;
            }
        }

        li{
            position: relative;
            height: contain;
        }
    }

    .responsibilities-section-open{
        //height: contain !important;
    }
}
</style>
