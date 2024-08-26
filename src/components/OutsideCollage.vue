<template>
  <div id="page">
   <div id="scroll-text">
    <p class="titles-gray" ref="text1"> קש"ח - קשרי חוץ  
    </p>
    <p class="blue-text">אנחנו לגמרי בינלאומיים!</p>
    <p class="simple-text" ref="text2">מעת לעת אנחנו מארחים משלחות ובעלי תפקידים בממשלות וצבאות מרחבי העולם, הבאים ארצה ללמוד על חוסנה של מדינת ישראל וניהול העורף בשעת חירום.
    </p>
    <img :src="spain" class="image-content" >

    <p class="simple-text" ref="text3">כבר יצא לנו להיפגש עם שישה גנרלים מספרד, ראשת FEMA (רח"ל האמריקאית), נציגים בכירים ממשטרת שבדיה, קהילות יהודיות מרחבי העולם וגורמים נוספים, שבאים מכל היבשות לשמוע על קידום המוכנות ברשויות המקומיות, ההכשרות והאימונים - מכיתה י' ועד משרדי הממשלה. 
    </p>
    <p class="blue-text" ref="text4"> עם איזה מדינות נפגשנו?</p>
      <p class="simple-text" ref="text5">שימו לב לדגלים בתנועה, זהו את הדגלים וכמות המדינות ואולי אפילו תרשמו לכם בצד -</p>
      <img src="../assets/imgs/flags.gif" class="image-content">
      <p class="grey-bold" id="center-text">בטוח ספרת טוב? (זאת לגמרי שאלה שנשאל בבוחן סיום)</p>
    <img :src="nextBtn" id="next-btn" @click="backToMenu" >
    <p class="hide"> rgegregregreg</p>

  </div>
  </div>
  </template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/blueNextBtn.png";
import spain from "../assets/imgs/spain.jpg";
const emit = defineEmits(['go-menu']);


const backToMenu = () =>{
    emit('go-menu');
}

const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const text4 = ref(null);
const text5 = ref(null);

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
height: 100vh;
width: 100vw;
background-color: aliceblue;
background-size: cover;
background-repeat: no-repeat;
padding: 0;
margin: 0;
overflow-x: hidden; 
overflow-y: scroll;
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
#next-btn {
  position: absolute;
  z-index: 5;
  left: 40%; /* Adjusted to center horizontally */
  height: 9vh;
  width: auto;
  margin-top: 5vh;
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
#site-link{
  font-size:1.3em; ;
  font-family: "Heebo";
  color:rgb(28, 180, 227);
  text-decoration: underline; /* Add underline */
}
#video{
width:90vw;
height: auto;
}

.button{
  background-color: rgb(28, 180, 227);
  border-radius: 50px;
  width:60vw;
  height:7vh;
  font-size: 1.5em;
  font-family: "Heebo-black";
}
#link{
  color:white
}
#center-text{
  text-align: center;
}
.hide{
  font-size: 3rem;
  color:transparent;
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
}
</style>