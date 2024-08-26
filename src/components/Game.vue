<template>
  <div id="page">
    <div class="scroll-text" v-if="!state.showGame">
      <p class="blue-text">כל הכבוד על האיתנות! הגעת לסיום! גם של המשחק וגם של ההיכרות הראשונית עם המכללה</p>
      <p class="grey-big">שנעבור לבדוק מה הצלחת לזכור?</p>
      <button class="button" @click="showTheGame">קדימה לבוחן!</button>
      <p class="grey-big">עליך להשיג לפחות ציון של 70 בכדי לקבל תעודת סיום, בהצלחה!</p>
    </div>
    <AmericanQ
      class="quiz"
      v-if="state.showGame"
      :pageHeader="pageHeader"
      :questions="questions"
      :answers1="answers1"
      :answers2="answers2"
      :answers3="answers3"
      :answers4="answers4"
      :correctAnswers="correctAnswers"
      @go-next="handleGoNext"
      @go-again="restartApp"
    />
  </div>
</template>

<script setup>
import AmericanQ from './AmericanQ.vue';
import { reactive, defineEmits } from 'vue';


const emit = defineEmits(['restart']);
const state = reactive({
  showGame: false
});

const showTheGame = () => {
  state.showGame = true;
};

const handleGoNext = () => {
  alert('Quiz finished! You will be redirected to your certificate.');
};

const pageHeader = "Quiz Time!";
const questions = [
  "מה אפשר לעשות באתר המכללה?",
  "כמה פרטי מידע יש בספרייה הלאומית לחירום?",
  "מהו 'מעגל ההכשרה השלם'?",
  "כמה זמן נמשכת הכשרת סע\"ר לכיתות י'?",
  "מהן ראשי התיבות רח\"ל?",
  "לפי כמות הדגלים שהופיעו בפרק הקש\"ח, נציגים מכמה מדינות ביקרו אצלינו?",
  "כמה גנרלים ספרדים היו פה?",
  "מה עשתה המכללה בזמן המלחמה?",
  "כמה מלונות ניהל משל\"ט ינאי בשיא במהלך מלחמת 'חרבות ברזל?",
  "מה הסלוגן של נווה איתנים?"
];
const answers1 = [
  "א. להירשם להכשרות",
  "א. כ-1,000 פריטים",
  "א. מעגל שאם מסתובבים בו מספיק פעמים, גשם מתחיל לרדת",
  "א. יום אחד",
  "א. רשת חירום לישראל",
  "א. 6",
  "א. ארבעה",
  "א. ביצוע 'זמן יקר' במפקדות",
  "א. 465",
  "א. הכי מוכנה בארץ"
];
const answers2 = [
  "ב. ללמוד על פעילויות המכללה",
  "ב. כ-1,250",
  "ב. מעגל ההכשרות שעוברות על מנהלי המכלולים שמגיעים למכללה",
  "ב. 11 שעות",
  "ב. רשת חברים לאומית",
  "ב. 7",
  "ב. חמישה",
  "ב. הפצת שיעור דיגיטלי של הצח\"י",
  "ב. 564",
  "ב. איתנים ונהנים"
];
const answers3 = [
  "ג. לחפש תוכן מקצועי",
  "ג. כ-1,500",
  "ג. המעגל שעובר דרך התורה, ההכשרה ואימון במכללה והיכולת ללמוד מהשטח ולהשתפר תו\"כ תנועה",
  "ג. שני ימי הכשרה",
  "ג. רשות החירום הלאומית",
  "ג. 9",
  "ג. שישה",
  "ג. התנדבה בקטיף זיתים",
  "ג. 456",
  "ג. הכי מוכנים לחירום"
];
const answers4 = [
  "ד. כל התשובות נכונות",
  "ד. מעל 1,700",
  "ד. כל מגמה בנפרד על מעגל הכשרה אחד, כשכל אחד משפיע רק בתחומו",
  "ד. חצי יום בלחץ",
  "ד. רשות החירום לישראל",
  "ד. 11",
  "ד. הם היו אמריקאים, לא מספרד",
  "ד. אירחה את שר התיירות, שר המדע ואת כל נציגי וועדת חוץ וביטחון",
  "ד. 546",
  "ד. הכי מוכנים במדינה"
];
const correctAnswers = [
  "ד. כל התשובות נכונות",
  "ג. כ-1,500",
  "ג. המעגל שעובר דרך התורה, ההכשרה ואימון במכללה והיכולת ללמוד מהשטח ולהשתפר תו\"כ תנועה",
  "ג. שני ימי הכשרה",
  "ג. רשות החירום הלאומית",
  "ד. 11",
  "ג. שישה",
  "ה.כל התשובות נכונות",
  "ג. 456",
  "ד. הכי מוכנים במדינה"
];
const restartApp=()=>{
  emit('restart');

}

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
overflow: auto; /* Add overflow to enable scrolling */
}

#shape {
position: absolute;
left: 0;
top: 0;
height: 18vh;
}

.scroll-text {
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
font-size: 2.5em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family: "karantina";
color: rgb(89,89,89);
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
font-size: 1.6em;
margin-bottom: 2vh;
direction: rtl;
text-align: center;
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
font-size: 1.5em;
margin-bottom: 2vh;
direction: rtl;
font-family: "Heebo";
color: rgb(89,89,89);
}
.animate {
animation: fadeIn 1s ease;
}


@keyframes bounce2 {
0% {
    top: 180vh; /* Adjusted initial position */
}
50%{
  top: 185vh; /* Adjusted midpoint position */
}
100%{
  top: 180vh; /* Adjusted final position */
}
}

#next-wBtn{
position:absolute;
z-index: 5;
right:50%;
transform: translateX(50%);
top:150vh; /* Adjusted position */
animation: bounce2 2s ease infinite; 
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

.button{
background-color: rgb(28, 180, 227);
border-radius: 50px;
width:60vw;
height:7vh;
font-size: 1.5em;
font-family: "Heebo-black";
text-align: center;
display: flex;
justify-content: center;
align-items: center;
color: white;
margin-right: 15%;
}

.grey-bold {
font-size: 1.3em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
font-family:"Heebo-Black";
color: rgb(89,89,89);
}

</style>
