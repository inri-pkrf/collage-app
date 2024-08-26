<template>
  <div id="page">
    <div id="scroll-text">
      <p class="titles-gray" ref="text1">מה נמצא איפה?</p>
      <p class="simple-text">רגע לפני סיום, קצת אוריינטציה בתוך בסיס הפיקוד, במשחק שצריך לתפוס ולגרור בו את שם המיקום לנקודות המתאימות במפה -</p>
      <button class="button" @click="backToMenu"> מוכנים? </button>
      <p id="text">dfdgdg</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";

const emit = defineEmits(['go-menu']);

const backToMenu = () => {
    emit('go-menu');
};
</script>

<style scoped>
#page {
position: fixed;
top: 0;
left: 0;
/* Adjust the height dynamically based on content */
height: 100vh;
width: 100vw;
/* background-image: url("../assets/imgs/Bg2.png"); */
background-color: aliceblue;
background-size: cover;
background-repeat: no-repeat;
padding: 0;
margin: 0;
overflow-y: scroll; 
overflow-x: hidden; 
}

#scroll-text {
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  direction: rtl;
  height: auto; /* Adjust height as needed */
}

.titles-gray {
  font-size: 2.8em;
  margin-bottom: 2vh;
  direction: rtl;
  text-align: center;
  font-family: "karantina";
  color: rgb(89, 89, 89);
}

.simple-text {
  width: 100%;
  height: auto;
  margin-bottom: 2vh;
  font-family: "Heebo";
  font-size: 1.2em;
  text-align: center;
  color: rgb(89, 89, 89);
}

#next-btn {
  width: auto;
  height: auto;
  cursor: pointer;
  /* Add any other styles you need */
}

.map {
  position: absolute;
  z-index: -1; /* Ensure proper z-index to be behind other content */
}

#text {
  position: absolute;
  top: 400vh;
  color: transparent;
  -webkit-user-select: none; /* Safari/Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard */
}
.button{
  background-color: rgb(28, 180, 227);
  border-radius: 50px;
  width:50vw;
  height:6vh;
  font-size: 1.5em;
  font-family: "Heebo-black";
  color:white;
  text-align: center;
  padding: 0%;
}
</style>
