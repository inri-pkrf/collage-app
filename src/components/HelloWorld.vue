<template>
  <div id="intro">
    <button id="skip" v-if="!state.isVideoEnded" @click="skipVideo">דלג/י>></button>
    <video id="video" v-if="!state.isVideoEnded" autoplay muted playsinline>
  <source src="../assets/media/introVid.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>    
<div  v-show="state.showIntro" class="intro-text-slide-in">
      <img :src="inriLogoSvg" alt="White Logo" id="white-logo" class="move-to-center">
      <h1 id="welcome-text">ברוך הבא או הבאה למשפחת המכללה</h1>
      <p id="introduction">בחצי שעה הקרובה תכירו ותלמדו על המכללה הלאומית לאיתנות ישראלית, במה אנחנו מתמחים, את מי אנחנו מכשירים, מאמנים ואיך כל זה קשור לשלטון העות'מאני. וכן, בארור שיש בוחן בסוף :) בהצלחה!</p>
      <img ref="nextBtn" :src="nextButton" id="next-wBtn" @click="moveNextPage">
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue';
import nextButton from "../assets/imgs/whiteNextBtn.png";
import inriLogoSvg from "../assets/imgs/inri-logo-white2.svg";

const { emit } = getCurrentInstance();

const state = reactive({
  isVideoEnded: false,
  showIntro: false,
});

function changeImageSourceAfterTimeout() {
  setTimeout(() => {
    state.isVideoEnded = true;
  }, 13000); 

  setTimeout(() => {
    state.showIntro = true;
  }, 13050); 
  
}

function moveNextPage() {
  emit("move-next");
}
function skipVideo(){
  state.isVideoEnded = true;
   state.showIntro = true;

}

onMounted(() => {
  changeImageSourceAfterTimeout();
});
</script>

<style scoped>
@font-face {
  font-family: "Heebo";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-VariableFont_wght.woff"), format("woff");
}

@font-face {
  font-family: "Karantina";
  font-weight: normal;
  src: url("../assets/fonts/Karantina-Regular.woff") format("woff");
}

@font-face { 
  font-family: "Heebo-Black";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-Black.woff"), 
       format("woff");
}


/* מראה*/
* {
  overflow: hidden;
  direction: rtl;
}

#intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/imgs/Bg1.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
}


#white-logo {
  position: absolute;
  width: 50vw;
  height: auto;
  z-index: 5;
  right: 50%;
  transform: translateX(50%);
  top: 5%;
}

#welcome-text {
  color: white;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  font-size: 4em;
  text-align: center;
  margin-top: -32vh;
  z-index: 5;
  width: 90vw;
  font-family: "karantina";
}

#introduction {
  position: absolute;
  color: white;
  right: 50%;
  transform: translateX(50%);
  width: 80vw;
  z-index: 5;
  margin-top: -10vh;
  font-size: 1.4em;
  font-family: "Heebo";
}


#next-wBtn {
  position: absolute;
  z-index: 5;
  right: 50%;
  transform: translateX(50%);
  bottom: 20vh;
  animation: bounce2 2s ease infinite;
  height: 10vh;
  width: auto;
}

.intro-text-slide-in {
  animation: slide-in-from-top 1.5s forwards;
}

@keyframes slide-in-from-top {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce2 {
  0% {
    bottom: 16vh;
  }
  50% {
    bottom: 15vh;
  }
  100% {
    bottom: 16vh;
  }
}
#video{
  position: absolute;
  height:100vh;
  
}
#skip{
  position: absolute;
  top:6%;
  left:2%;
  background-color: transparent;
  font-family: 'Heebo-black';
  font-size: 1em;
  color: black;
  z-index: 9999999;

}
.white-small{
  position: absolute;
  color: white;
  bottom:5%;
  font-family: "Heebo-black";
  text-align: right;
  width: 60vw;
  font-size: 14px;
}
</style>
