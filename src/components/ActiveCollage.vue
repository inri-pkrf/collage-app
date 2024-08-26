<template>
  <div id="page">
    <div>
   <div id="scroll-text">
    <p class="titles-red" ref="text1">המכללה בחרבות ברזל </p>
    <p class="red-bold" ref="text2">7 באוקטובר</p>
    <p class="red-text" ref="text3">עם פרוץ המלחמה והכרזת 'מצב מיוחד בעורף', עברה המכללה להפעלה במצב חירום. 
    </p>
    <p class="simple-text" ref="text4">נתחיל עם סרטון שיעשה רעש ויעלה את הדופק, ומשם נפרט קצת מה עשינו כדי שתהיו בעניינים - </p>
    <video id="video" src="../assets/media/war.mp4" controls ></video>

    
    <p class='simple-text'  ref="text5"> במסגרת מאמצי הפיקוד, הובילה המכללה שני מוקדי סיוע לאומיים - המרס"ל (מרכז סיוע לאזרח) שמקדם תהליך של מיצוי יכולות בתוך פקע"ר בהתאם להכוונת הסיוע לרשויות המקומיות, והשני, משל"ט ינאי, שריכז את משימת המפונים והמתפנים בבתי המלון וסיפק תמונת מצב לאומית.
    </p>
    <img class="image-content" ref="image1" :src="warImage1">
    <p class="image-discription">ביקור נשיא המדינה ורעייתו במרס"ל</p>
    </img>
    <p class="red-bold" ref="text1">מרס"ל
    </p>
    <p class="simple-text" ref="text6"> המרס"ל (מרכז סיוע לאזרח) מרכז במרחב משותף את מחוזות פקע"ר, ארגוני ההתנדבות ונציגים מהמגזר העסקי, המייצג כ-2,000,000 עובדים במשק. מנגנון הפעולה מאפשר למחוזות פיקוד העורף להעלות בקשות לסיוע ובמקרה ולא נמצא להן מענה אחר במרחבן, עולה הבקשה לרמה הפיקודית, לטיפול במשאבים לאומיים.
</p>
    <p class="simple-text" ref="text7">במהלך הפעלת המרס"ל מאוקטובר 2023 עד פברואר 2024, טיפלו במרס"ל בלמעלה מ-700 פניות שעלו מהמחוזות בתחומים שונים כמו אספקת מנות מזון, חיתולים, מטרנה, מתנדבים, שינוע תרופות ועוד משימות ייחודיות וערכיות, שלא ניתן להן כל מענה ממקורות אחרים.
    </p>
    <img class="image-content" ref="image2" :src="warImage2">
    <p class="image-discription">ביקור הרמטכ"ל במשל"ט</p>

    <p class="red-bold" ref="text8">משלט ינאי
    </p>
    <p class="simple-text" ref="text9">אפשר לומר שחוץ מראש הממשלה כולם הגיעו לבקר - מהנשיא ורעייתו, הרמטכ"ל, שרים, מנכ"לי משרדי ממשלה, אלופי המטכ"ל ועוד. 
המשל"ט ניהל, ריכז ותכלל את תמונת המצב של המפונים בבתי המלון עם למעלה מרבע מיליון ישראלים שיצאו מביתם, 97 יישובים מתפנים ו-456 מלונות בשיא. 
</p>
<p class="red-bold" ref="text10"> המכללה בחירום
</p>
    <p class="simple-text" ref="text4"> לצד שתי המשימות הלאומיות, המכללה המשיכה להכשיר בחירום קורסים לבעלי תפקידים שהיו נחוצים בשטח, הנגשנו תוכן מקצועי ומתוקף לבעלי התפקידים ברשויות, ביצענו 'זמן יקר' במפקדות, הפצנו תוכן דיגיטלי לצוותי הצח"י ומנהלי המכלולים, ערכנו אבחון לקריית שמונה לסיוע בהתמודדות הרשות עם אתגרי הפינוי ופיצול הרשות ועוד פעולות רבות כחלק מהמאמץ המלחמתי בעורף.
    </p>
    <img ref="nextB" :src="nextBtn" id="next-btn" @click="goToMenu">
    <p class="white-bold">hytgtgtgtgtgttggrthrth4h</p>
  </div>


</div>
  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/blueNextBtn.png";
import warImage1 from "../assets/imgs/warImage1.jpg";
import warImage2 from "../assets/imgs/warImage2.jpg";

const emit = defineEmits(['go-menu']);





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
const image1 = ref(null);
const image2 = ref(null);

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
observer.observe(image1.value);
observer.observe(image2.value);


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



.titles-red {
font-size: 3.5em;
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
color: rgb(89,89,89);


}

.red-text {
font-size: 1.2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:#e06666;
width: 95vw;
font-weight: 200;
}
.red-bold {
font-size: 1.4em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:#e06666;
}
.white-bold {
font-size: 4em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "Heebo-Black";
color:transparent;
top:150vh;
}
.red-big {
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


@keyframes bounceUpDown {
  0%, 100% {
    top: 310vh; /* Start and end position */
  }
  50% {
    top: 315vh; /* Peak position */
  }
}


#next-btn {
  position: absolute;
  margin-top: 4.3vh;
  z-index: 5;
  z-index: 7;
  left: 40%; /* Adjusted to center horizontally */
  height: 8vh;
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
#video{
width:90vw;
height: auto;
}
.image-discription{
  position: absolute;
  text-align: center;
  margin-top: -5%;
  color: aliceblue;
  background-color: rgb(89,89,89);
  width:80vw;
  right:50%;
  transform: translateX(50%);
  font-family: "Heebo";
}
</style>