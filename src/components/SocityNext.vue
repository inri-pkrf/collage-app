<template>
  <div id="page">
   <div id="scroll-text">
    <img class="image-content" :src="carry">
  <p class="grey-bold">אז לסיכום, לייק ועוברים הלאה :)
קדימה, אנחנו מחכים..
</p>
  <span class="brands">
    <a href="https://www.facebook.com/ilResilience" target="_blank"><img class="brand" :src="faceBook" >
    </a>
    <a href="https://x.com/ILresilience" target="_blank"><img class="brand" :src="twitter" >
    </a>
    <a href="https://www.instagram.com/ilresilience/" target="_blank"><img class="brand" :src="instagram" >
    </a>
    <a href="https://il.linkedin.com/company/ilresilience?trk=similar-pages" target="_blank"><img class="brand" :src="linkedin" >
    </a>
  </span>
  <h1></h1>
  <img ref="nextB" :src="nextBtn" id="next-btn" @click="goToMenu">
  <p class="hide">fhfdhdfhd</p>
</div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/blueNextBtn.png";
import carry from "../assets/imgs/carry.gif";
import faceBook from "../assets/imgs/facebook.png";
import twitter from "../assets/imgs/twitter.png";
import instagram from "../assets/imgs/instagram.png";
import linkedin from "../assets/imgs/linkedin.png";
const emit = defineEmits(['go-menu']);

const goToMenu = () =>{
emit('go-menu');
}

const handleIntersect = (entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  entry.target.classList.add('animate');
  observer.unobserve(entry.target);
}
});
};

onMounted(() => {
const options = {
root: null,
rootMargin: '0px',
threshold: 0.5,
};


});

</script>


<style scoped>

@font-face { 
  font-family: "Heebo";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-VariableFont_wght.woff"), 
       format("woff");
}

@font-face { 
  font-family: "Heebo-Black";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-Black.woff"), 
       format("woff");
}


#page {
position: fixed;
top: 0;
left: 0;
width: 100vw;
background-color: rgb(229, 232, 235);
background-size: cover;
background-repeat: no-repeat;
padding: 0;
margin: 0;
overflow-x: hidden; /* Hide horizontal overflow */
overflow-y: scroll; /* Allow vertical scrolling */
}

#shape {
position: absolute;
left: 0;
top: 0;
height: 18vh;
}

#scroll-text {
/* Adjust positioning and dimensions */
position: absolute;
top: 15%;
left: 50%;
transform: translateX(-50%);
width: 90vw;
direction: rtl;
}

#page-header {
font-size: 2em;
color: rgb(31, 56, 100);
font-family: "Heebo";
text-align: center;
margin-top: 10vh;
direction: rtl;
}



.titles-red {
font-size: 2.5em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "karantina";
color:#e06666;
}

.simple-text {
width: 100%;
height: auto;
margin-bottom: 2vh;
font-family: "Heebo";
font-size: 1.2em;

}

.grey-text {
font-size: 1.2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:#e06666;
width: 95vw;
font-weight: 200;
}
.grey-bold {
font-size: 2em;
margin-bottom: 2vh;
direction: rtl;
text-align: center;
font-family: "Heebo-Black";
color: rgb(89,89,89);
}
.grey-big {
font-size: 2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:#e06666;
}
.animate {
animation: fadeIn 1s ease;
}


.animate {
animation: fadeIn 1s ease;
}

@keyframes fadeIn {
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

.image-content {
width: 100%;
height: auto;
margin-bottom: 5vh;
}
#video{
width:90vw;
height: auto;
}
.brand{
  margin-top: 5vh;
  height:auto;
  width:20vw
  
}
#next-btn {
  position: absolute;
  z-index: 5;
  left: 40%; /* Adjusted to center horizontally */
  height: 10vh;
  width: auto;
  margin-top: 7vh;
  animation: moveUpDown 2s infinite;
}

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3vh);
  }
}
.hide {
  font-size: 3em;
  color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
}

</style>