<template>
  <div id="page">
    <div v-if="!state.showInfo">
   <div id="scroll-text">
    <p class="titles-gray" ref="text1">פעילות המכללה</p>
    <p class="blue-text" ref="text2">ברוכים הבאים וברוכות הבאות למכללה הלאומית לאיתנות ישראלית</p>
    <p class="simple-text" ref="text3">המכללה מכשירה מנהלים ומנהלות שיש להם תפקיד בשעת חירום ממשרדי הממשלה, רשויות ייעודיות, הרשויות המקומיות ובמפקדות צבאיות, לתפקוד מיטבי וניהול מצבי חירום כמו במצב מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה ועוד.
    </p>
    <img class="image-content" :src="ImgCollage" alt="Collage Image" ref="image1">
    <p class="simple-text" ref="text4">המכללה הוקמה בכדי להוות בית להכשרות בתחום ניהול מצבי החירום. בניין אחד המרכז את כל מחלקות פקע"ר בשיתוף פעולה עם רשות החירום הלאומית (רח"ל).</p>
    <p class='blue-text'  ref="text5">למכללה ארבע מגמות:</p>
    <p class="grey-bold"  ref="text6">1. מגמת הכשרות</p>
    <p class="simple-text"  ref="text7">אחראית להכשיר מנהלים ומנהלות של המכלולים ברשויות המקומיות. </p>
    <p class="grey-bold" ref="text8">2. מגמת משרדי ממשלה</p>
    <p class="simple-text" ref="text9">מגמה בהובלת רח"ל, האחראית על הכשרת מנהלים ומנהלות במשרדים לחירום. </p>
    <p class="grey-bold" ref="text10">3. מגמת אימוני מפקדות</p>
    <p class="simple-text" ref="text11">הרגל הצבאית שלנו, מכשירה, מאמנת וחונכת את כל בעלי התפקידים במפקדה צבאית של פיקוד העורף. </p>
    <p class="grey-bold" ref="text12">4. מגמת אימוני רשויות</p>
    <p class="simple-text" ref="text13">אחראית לממש את מה שנלמד בהכשרה - באימון לפי תרחיש ועל-פי תוכנית מותאמת. </p>
    <img class="image-content" :src="ImgCollage1" alt="Collage Image" ref="image2">
    <p  class="grey-bold" id="important-text" ref="text14">כך נוצר מעגל ההכשרה השלם, המאפשר לנו לפגוש בבית אחד כמה שיותר בעלי תפקידים המנהלים מצבי חירום בתחומם</p>
    <img class="gif-content" :src="collageGif"> 
    <p class="simple-text" ref="text15"> אנחנו מייצרים פה שפה אחודה ומקדמים שיתופי פעולה עם מובילים מקצועיים ממשרדי הממשלה השונים, מרכז השלטון המקומי והאזורי, ארגוני חירום והצלה, מוסדות אקדמאים וארגונים מהחברה האזרחית.
    </p>
              <img class="image-content" ref="image3" :src="infoCollage1">
              <p  class="simple-text" ref="text16">אנחנו גם מכשירים צוותי סע"ר (סיוע עצמי ראשוני) של הרשות המקומית ותלמידי כיתות י' לחילוץ קל - בכדי שיוכלו לסייע באירוע חילוץ בסביבה שלהם, כמו במקרה של רעידת אדמה. </p>
              <img class="image-content" ref="image4" :src="firefighters">
              <p class="simple-text" ref="text17">כיתות נבחרות מכל בתי הספר עוברות הכשרה של יומיים, בעוד צוותי הסע"ר לאחר ההכשרה, עוברים אימונים באתרי הרס בשיתוף ארגוני החירום הנוספים של הרשות. </p> 
                <p class="blue-text">מעניין, לא?</p>
                <p class="simple-text" ref="text18">את כל זה יש לנו גם בסרטון קצר ומגניב, אז בואו נראה קצת מספרים.
                       כדאי לנסות לזכור כמה שיותר פרטים, כי באיזשהו שלב תגיע שאלה..</p>
              <video id="video" src="../assets/media/videoCollage.mp4" controls ></video>
              <p class="grey-bold" id="important-text" ref="text5">בראשות המכללה ניצבת מפקדת בדרגת אל"ם ולרשותה מטה מקצועי המורכב ממשרתי קבע, מילואים ויועצים. סגל המרצים כולל מומחים מקצועיים מפיקוד העורף, רח"ל, משרדי הממשלה, המינהל הציבורי והאקדמיה.</p>
             
              <img  :src="nextBtn" id="next-btn"  @click="goToMenu">
              <p class="hide">hytgtgtgtgtgttggrthrth4h</p>



  </div>
</div>

  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import knowInfo from './knowInfo.vue';
import ImgCollage from '../assets/imgs/11ImgCollage.jpg';
import nextBtn from "../assets/imgs/blueNextBtn.png";
import ImgCollage1 from '../assets/imgs/22ImgCollage.jpg';
import collageGif from '../assets/imgs/collageGif.gif';
import infoCollage1 from "../assets/imgs/infoCollage1.jpg";
import firefighters from "../assets/imgs/firefighters.jpg";
import greyNextBtn from '../assets/imgs/greyNextBtn.png';
const emit = defineEmits(['go-menu']);

const state = reactive({ 
showInfo: false
});

const goToMenu = () =>{
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
const text10 = ref(null);
const text11= ref(null);
const text12= ref(null);
const text13= ref(null);
const text14= ref(null);
const text15= ref(null);
const text16= ref(null);
const text17= ref(null);
const text18= ref(null);
const image1 = ref(null);
const image3 = ref(null);
const image4 = ref(null);
// const nextT = ref(null);
const nextB = ref(null);


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
observer.observe(text10.value);
observer.observe(text11.value);
observer.observe(text12.value);
observer.observe(text13.value);
observer.observe(text14.value);
observer.observe(text15.value);
observer.observe(text16.value);
observer.observe(text17.value);
observer.observe(text18.value);
observer.observe(image1.value);
observer.observe(image3.value);
observer.observe(image4.value);
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
text-align: right;
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
font-size: 2.5em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "karantina";
color: rgb(89,89,89);
}
.titles-white {
font-size: 4em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "karantina";
color:aliceblue;
}

.simple-text {
width: 100%;
height: auto;
margin-bottom: 2vh;
font-family: "Heebo";
font-size: 1.2em;
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
font-size: 1.3em;
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
  height: 8vh;
  width: auto;
  animation: moveUpDown 2s infinite;
}

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
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
.gif-content{
  width:100%;
  height:auto;
}

#video{
width:90vw;
height: auto;
}
#important-text{
  text-align: center;
}
.next-btn{
  height:8vh;
  right: 50vw;
  transform: translateX(-35vw);
}
.hide{
  font-size: 5em;  
  color:transparent;
  
}
</style>