<template>
  <div id="page">
   <div id="scroll-text">
    <p class="titles-gray" ref="text1"> הספרייה הלאומית לחירום
    </p>
    <p class="blue-text" ref="text2">מאגר ידע לאומי לחירום
לחיזוק האיתנות של מדינת ישראל</p>
    <p class="simple-text" ref="text3">אתר המכללה מרכז בתוכו גם את הספרייה הלאומית לחירום - מאגר ידע להיערכות, התערבות ושיקום.
    </p>
    <img class="image-content" :src="libraryImage">
    <p class="simple-text" ref="text4">הספרייה היא מאגר ידע דיגיטלי מעודכן וכולל כ-1,500 פרטי מידע, חוקים ותקנות, נהלים ותדריכים, תוכניות מענה, מאמרים ומחקרים, סרטים, קישורים ופודקאסטים.
    </p>
    <p class="blue-text" ref="text5">מובילי הידע
    </p>
    <p class="simple-text" ref="text6">הנגשת הידע ללא מגבלות מתגשם בזכות שיתוף פעולה פורה עם למעלה מ-75 ארגונים מהמגזר הציבורי כמו משרדי הממשלה, רשויות ייעודיות, הרשויות המקומיות, ארגוני חירום והצלה, אקדמיה ומכוני מחקר ופעילות המגזר השלישי. 
    </p>
    <img class="image-content" :src="libraryComp">
    <p class="simple-text" ref="text7">.בהתאם לצורך, ניתן לחפש קבצים בספרייה, לצפות, להוריד או לשתף
    צפו בסרטון הממש מגניב שלנו שמסביר בקצרה על הספרייה
    </p>
    <video id="video" src="../assets/media/library.mp4" controls ></video>
    <p class="blue-text-center" ref="text8">כדאי לשמור את הקישור
    </p>
    <p class="simple-text" id="text-center" ref="text9">תמצאו בספרייה הרבה חומרים מקצועיים שבטוח תצטרכו בשגרה ובחירום. 
    </p>
      <a id="link" href="https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/" target="_blank">
        מעבר לספרייה
      </a>
    <img :src="nextBtn" id="next-btn" @click="backToMenu" >
    <p class="hide">trgrgrregregrgrregre</p>

  </div>
  </div>
  </template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/blueNextBtn.png";
import libraryImage from "../assets/imgs/7ImgCollage.jpg";
import libraryComp from "../assets/imgs/libraryComp.png";
const emit = defineEmits(['go-menu']);


const backToMenu = () =>{
    emit('go-menu');
}

const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const text4 = ref(null);
const text5 = ref(null);
const text6 = ref(null);
const text7 = ref(null);
const text8 = ref(null);
const text9 = ref(null);

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
const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(text1.value);
observer.observe(text2.value);
observer.observe(text3.value);
observer.observe(text4.value);
observer.observe(text5.value);
observer.observe(text6.value);
observer.observe(text7.value);
observer.observe(text8.value);
observer.observe(text9.value);

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
height: 190vh;
}

#page-header {
font-size: 2em;
color: rgb(31, 56, 100);
font-family: "Heebo";
text-align: center;
margin-top: 10vh;
direction: rtl;
}

.titles-gray {
font-size: 2.8em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "karantina";
color: rgb(89,89,89);
text-align: right;
}

.simple-text {
width: 100%;
height: auto;
margin-bottom: 2vh;
font-family: "Heebo";
font-size: 1.2em;
text-align: right;
color: rgb(89,89,89);
}

.blue-text {
font-size: 1.4em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:rgb(28, 180, 227);
width: 95vw;
}
.blue-text-center {
font-size: 1.4em;
margin-top: 3vh;
margin-bottom: 2vh;
direction: rtl;
text-align: center;
font-family: "Heebo-Black";
color:rgb(28, 180, 227);
width: 95vw;
}
.white-text {
font-size: 4em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:aliceblue;
width: 95vw;
}

.grey-bold {
font-size: 1.2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color: rgb(89,89,89);
}
.grey-big {
font-size: 2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color: rgb(89,89,89);
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
margin-bottom: 2vh;
}
.brand{
  height:auto;
  width:15vw
}

#video{
width:90vw;
height: auto;
}


#link{
  background-color: rgb(28, 180, 227);
  border-radius: 50px;
  font-size: 1.5em;
  font-family: "Heebo-black";
  text-align: center;
  color:white;
  padding-right:20%;
  padding-left:20%;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-top: 5vh;
}

#next-btn {
  position: absolute;
  z-index: 5;
  left: 40%; /* Adjusted to center horizontally */
  height: 10vh;
  width: auto;
  margin-top: 15vh;
  margin-bottom: 4vh;
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


.hide{
  font-size: 4em;
  color:transparent;
  -webkit-user-select: none; /* Safari/Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard */
}
#text-center{
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}


</style>