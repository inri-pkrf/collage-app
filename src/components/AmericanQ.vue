<template>
  <div id="page">
    <div v-if="state.showResults" class="results-container">
      <p class="blue-title">{{ points }}</p>
      <p class="grey-big">{{ congratsMessage }}</p>
      <div class="share-buttons" v-if="points >= 70">
        <button id="share-button" @click="captureAndShare()">שיתוף</button>
        <button id="restart-button" @click="goAgain()">חזרה להתחלה</button>
        <p class="survey-text">נשמח למשוב ממך על החוויה. דעתך חשובה ותעזור לנו להשתפר ולפתח מוצרים נוספים.
השאלון קצר וביום טוב לוקח פחות מדקה למילוי</p>
        <button class="survey-button" @click="answerSurvuy()">משוב</button>
      </div>
      <p class='black-small'>@2024 developed by Avital Hamburg</p>

      <div class="retry-button" v-if="points < 70">
        <button id="share-button" @click="retryQuiz()">נסו שוב</button>
      </div>
    </div>
    <div v-if="!state.showFinalScreen" class="container">
      <p class="question-number">{{ currentIndex + 1 }}/10</p>
      <div class="progress-bar">
        <div class="progress-bar-inner" :style="{ width: progressBarWidth }"></div>
      </div>
      <p  id="question">{{ currentQuestion }}</p>
      <div class="answers">
          <button
            v-for="(answer, index) in currentAnswers"
            :key="index"
            @click="handleButtonClick(answer, index)"
            :class="[
              'answer-button',
              { 'selected-answer': selectedAnswerIndexes[currentIndex] === index }
            ]"
            :disabled="state.showResults"
            :id="`answer-button-${index}`"
          >
      {{ answer }}
    </button>
  </div>
  <div id="navigation-buttons" v-if="!state.showFinalScreen">
      <button
        id="next-button"
        @click="nextQuestion"
        :disabled="selectedAnswerIndexes[currentIndex] === null"
      >
        שאלה הבאה
      </button>
      <button
        id="prev-button"
        @click="prevQuestion"
        :disabled="currentIndex === 0"
      >
        שאלה קודמת
      </button>
    </div>
    </div>
  
    <p id="hide-text" v-if="!state.showFinalScreen"> העולם כולו גשר צר מאוד</p>
    <div v-if="pointsVisible">
      <p>נקודות: {{ points }}</p>
    </div>
    <!-- מסך סיום עם קלט של השם וכפתור להצגת הציון -->
    <div v-if="state.showFinalScreen && !state.showResults" class="final-screen">
      <p class="grey-bold">כדי לקבל ציון ותיעוד לסיום, יש להזין את השם הפרטי ושם המשפחה</p>
      <div class="name-input">
        <input type="text" v-model="firstName" placeholder="שם פרטי">
        <input type="text" v-model="lastName" placeholder="שם משפחה">
      </div>
      <button @click="showScore()" :disabled="!firstName || !lastName">הצג ציון</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive, onMounted, watch, defineEmits } from 'vue';

const emit = defineEmits(['go-again']);

const props = defineProps({
  pageHeader: String,
  questions: Array,
  answers1: Array,
  answers2: Array,
  answers3: Array,
  answers4: Array,
  correctAnswers: Array,
});

const state = reactive({
  showResults: false,
  showFinalScreen: false,
});

const currentIndex = ref(0);
const points = ref(0);
const maxPoints = props.questions.length * 10;
const extraAnswer = ref("ה.כל התשובות נכונות");
let isExtraAnswerAdded = false;

const currentQuestion = ref(props.questions[currentIndex.value]);
const currentAnswers = ref([
  props.answers1[currentIndex.value],
  props.answers2[currentIndex.value],
  props.answers3[currentIndex.value],
  props.answers4[currentIndex.value],
]);

const selectedAnswerIndexes = ref(Array.from({ length: props.questions.length }, () => null));
const firstName = ref("");
const lastName = ref("");
const congratsMessage = ref("");
const userAnswers = ref(Array.from({ length: props.questions.length }, () => [null, false]));

const updateQuestionData = () => {
  currentQuestion.value = props.questions[currentIndex.value];
  currentAnswers.value = [
    props.answers1[currentIndex.value],
    props.answers2[currentIndex.value],
    props.answers3[currentIndex.value],
    props.answers4[currentIndex.value],
  ];

  if (currentIndex.value === 7 && !isExtraAnswerAdded) {
    currentAnswers.value.push(extraAnswer.value);
    isExtraAnswerAdded = true;
  } else {
    isExtraAnswerAdded = false;
  }

  selectedAnswerIndexes.value[currentIndex.value] = null; // Reset selected answer for the new question
};

const handleButtonClick = (answer, index) => {
  if (!userAnswers.value[currentIndex.value][1]) {
    userAnswers.value[currentIndex.value] = [answer, true];
    const correctAnswer = props.correctAnswers[currentIndex.value];
    if (answer === correctAnswer) {
      points.value = Math.min(points.value + 10, maxPoints);
    }
  }
  selectedAnswerIndexes.value[currentIndex.value] = index;
};

const answerSurvuy =() =>{
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSflGabIbTG0fNDp_MGmI64a9xzg4AHkJNyH7DovtxicCIuIhw/viewform?usp=sf_link', '_blank');

}
const nextQuestion = () => {
  if (currentIndex.value < props.questions.length - 1) {
    // Save current answer before moving to the next question
    if (selectedAnswerIndexes.value[currentIndex.value] !== null) {
      userAnswers.value[currentIndex.value] = [
        currentAnswers.value[selectedAnswerIndexes.value[currentIndex.value]],
        true,
      ];
    }
    currentIndex.value++;
    updateQuestionData();
  } else if (currentIndex.value === props.questions.length - 1) {
    state.showFinalScreen = true;
  }
};

const prevQuestion = () => {
  if (currentIndex.value > 0) {
    // Save current answer before moving to the previous question
    if (selectedAnswerIndexes.value[currentIndex.value] !== null) {
      userAnswers.value[currentIndex.value] = [
        currentAnswers.value[selectedAnswerIndexes.value[currentIndex.value]],
        true,
      ];
    }
    currentIndex.value--;
    updateQuestionData();

    // Update selected answer highlight for the previous question
    selectedAnswerIndexes.value[currentIndex.value] =
      userAnswers.value[currentIndex.value][0]
        ? currentAnswers.value.findIndex(
            answer => answer === userAnswers.value[currentIndex.value][0]
          )
        : null;
  }
};


const pointsVisible = ref(false);
const progressBarWidth = ref('0%');

const updateProgressBar = () => {
  const progress = ((currentIndex.value + 1) / props.questions.length) * 100;
  progressBarWidth.value = `${progress}%`;
};

const showScore = () => {
  congratsMessage.value = points.value >= 70 ? `כל הכבוד! ${firstName.value} עברת את השאלון!` : `לא נורא ${firstName.value}, אפשר לנסות שוב`;
  state.showResults = true;
};

const captureAndShare = () => {
  const currentDate = new Date().toLocaleDateString('he-IL'); 
  const captureTime = new Date().toLocaleTimeString('he-IL');

  const message = `
בוחן מסכם להיכרות המכללה
${firstName.value} ${lastName.value}: ציון ${points}!
תאריך: ${currentDate}
שעה: ${captureTime}
 
🧡משפחת המכללה`;

  navigator.share({ text: message })
    .then(() => console.log('הודעה שותפה בהצלחה'))
    .catch(error => console.error('שגיאה בשיתוף:', error));
};

const retryQuiz = () => {
  currentIndex.value = 0;
  points.value = 0;
  userAnswers.value = userAnswers.value.map(() => [null, false]);
  firstName.value = "";
  lastName.value = "";
  congratsMessage.value = "";
  state.showResults = false;
  state.showFinalScreen = false;
};

const goAgain = () => {
  emit('go-again');
};

onMounted(() => {
  updateProgressBar();
});

watch(currentIndex, () => {
  updateProgressBar();
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
@font-face {
  font-family: "Karantina";
  font-weight: normal;
  src: url("../assets/fonts/Karantina-Regular.woff"),
  format("woff");
}

.container {
  position: absolute;
    margin-top: 21vh;
    z-index: 0;
}

.results-container {
  position: relative;
  text-align: center;
  font-size: 1.5em;
  color: rgb(31, 56, 100);
  font-family: "Heebo";
}

.answer-button {
  width: 80%;
  padding: 10px;
  margin-top: 2vh;
  background-color: rgb(255, 253, 253);
  color: rgb(89, 89, 89);
  border: solid black;
  border-radius: 50px;
  font-size: 1.2em;
  font-family: "Heebo";
  z-index: 0;
  text-align: center;
  word-wrap: break-word;
}

.selected-answer {
  background-color: rgb(116, 142, 172);
  color: white;
}
#navigation-buttons {
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 9999;
  margin-top: 5vmax;
  margin-bottom: 11vmax;
}

#prev-button {
  background-color: rgb(255, 140, 0);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1.2em;
  margin-right: 4vw; /* עדכון טיפה יותר קטן מהמרחק הקודם */
  font-family: "Heebo";
}

#next-button {
  background-color: rgb(28, 180, 227);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1.2em;
  margin-left: 4vw; /* עדכון טיפה יותר קטן מהמרחק הקודם */
  margin-right: 16vw;
  font-family: "Heebo";
}


#prev-button:disabled,
#next-button:disabled {
  background-color: grey;
}

#question {
  font-size: 1.4em;
    font-family: "Heebo";
    color: rgb(0 0 0);
    font-weight: bold;
    direction: rtl;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    width: 100vw;
}

#page-header {
  position: absolute;
  top: 8vh;
  right: 50%;
  transform: translateX(50%);
  font-size: 2em;
  width: 90vw;
  text-overflow: none;
  color: rgb(31, 56, 100);
}

.grey-big {
  font-size: 1.5em;
    direction: rtl;
    font-family: "Heebo";
    color: rgb(89, 89, 89);
    position: absolute;
    margin-top: 25vh;
}

.progress-bar {
  position: relative;
  margin-top: 9%;
  background-color: #c0c0c0;
  height: 0.5rem;
  width: 90%;
  left: 5%;
  border-radius: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.progress-bar-inner {
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: rgb(28, 180, 227);
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: width 0.3s ease;
}

.final-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.name-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.name-input input {
  padding: 10px;
  margin: 5px 0;
  font-size: 1.5em;
  border-radius: 50px;
  width: 60vw;
  height: 6vh;
  border: 1px solid #ccc;
  background-color: rgb(71, 71, 71);
  color: white;
  font-family: "Heebo";
  text-align: center;
}

.name-input input:focus {
  outline: none;
  background-color: rgb(28, 180, 227);
}

.final-screen button {
  padding: 10px 20px;
  background-color: rgb(28, 180, 227);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
  font-family: "Heebo";
}

.name-input input::placeholder {
  text-align: center;
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Heebo";
}

.final-screen button:hover {
  background-color: rgb(20, 140, 180);
}

.grey-bold {
  font-size: 1.5em;
  margin-bottom: 2vh;
  direction: rtl;
  text-align: center;
  width: 80vw;
  font-family: "Heebo-Black";
  color: rgb(89, 89, 89);
}

.blue-title{
    font-family: "Karantina";
    color: rgb(20, 140, 180);
    font-size: 3.7em;
    margin-bottom: 5vh;
    position: absolute;
    margin-top: 10vh;
    right: 50%;
    transform: translateX(50%);
}
.question-number {
  position: absolute;
  font-family: "Karantina";
  color: rgb(89, 89, 89);
  font-size: 4.5em;
  top: -45vmin;
  right: 50%;
  transform: translateX(50%);
}
#hide-text{
  position: absolute;
  margin-top: 118vmax;
  color: transparent;

}
.black-small{
  position: absolute;
  color: rgb(7, 7, 7);
  font-family: "Heebo-black";
  text-align: right;
  width: 60vw;
  font-size: 14px;
  margin-top: 91vh;
  left: -10%;
}

.share-buttons{
  position: absolute;
  right: 1%;
  width: 90vw;
}
#share-button {
  background-color: rgb(28, 180, 227);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.2em;
    font-family: "Heebo";
    position: absolute;
    right: 55%;
    transform: translateX(50%);
    margin-top: 42vh;

}
#restart-button {
  background-color: rgb(28, 180, 227);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.2em;
    margin-top: 53vh;
    font-family: "Heebo";
    position: absolute;
    right: 55%;
    transform: translateX(50%);
    width: 60vw;
}
.survey-button {
  background-color: rgb(28, 180, 227);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.2em;
    position: absolute;
    margin-top: 80vh;
    right: 55%;
    transform: translateX(50%);
    font-family: "Heebo";
}
.survey-text {
  position: absolute;
    font-family: 'Heebo-black';
    text-align: center;
    font-size: 0.75em;
    right: 0.25vw;
    width: 98vw;
    margin-top: 63vh;
}

.grey-big-q{
  position: absolute;
    margin-top: 5vh;
    margin-bottom: 5vh;
    right: 50%;
    transform: translateX(50%);
    width: 100vw;
    font-family: 'HEEBO';
    color: black;
}
.answers{
  margin-top: 11vh;
}
</style>