<template>
  <div id="page">
    <h1 id="page-header"> מי זאת המכללה </h1>
    <p id="user-massage">לחצו כאן על התשובה הנכונה</p>
    <div id="question">
      <p id="text-q">{{ currentQuestion }}</p>
      <button id="button1" :disabled="state.responseSubmitted" class="bule-btn" @click="handleButton('נכון')">נכון</button>
      <button id="button2" :disabled="state.responseSubmitted" class="bule-btn" @click="handleButton('לא נכון')">לא נכון</button>

      <p id="message" v-if="state.showMessage" :style="{ color: state.messageColor }">{{ state.message }}</p>
      <div id="go-next" v-if="state.showNextButton"> 
        <p id=next-t>שאלה הבאה</p>
        <img :src="nextBtn" id="next-btn"  @click="nextQuestion">
      </div>
      <div id="go-next" v-if="state.showNextSub"> 
        <p id=next-t>המשך לנושא הבא </p>
        <img :src="nextBtn" id="next-btn"   @click="backToMenu">
      </div>
   
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed , defineEmits } from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";

const emit = defineEmits(['menuBack']);
const question = ['ב2022 היו 503 מופעים במכללה', 'ב 2022 היו 155 הכשרות', 'בלה בלה'];
const correctAns = ['נכון', 'לא נכון', 'נכון'];

const state = reactive({
  showQuestion: false,
  currentQuestionIndex: 0,
  showMessage: false,
  showNextButton: false,
  message: '',
  messageColor: '',
  userAnswer: '',
  showNextSub:false,
  responseSubmitted: false 
});

const currentQuestion = computed(() => question[state.currentQuestionIndex]);

const handleButton = (answer) => {
  const correctAnswer = correctAns[state.currentQuestionIndex];

  if (answer !== correctAnswer) {
    state.responseSubmitted = false;
    state.userAnswer = answer;
  } else {
    state.responseSubmitted = true;
  }

  const buttonText = answer === correctAnswer ? 'נכון' : 'לא נכון';
  const clickedButton = event.target;
  const otherButton = clickedButton.id === 'button1' ? document.getElementById('button2') : document.getElementById('button1');

  clickedButton.classList.remove('greenButton', 'redButton');
  clickedButton.classList.add(answer === correctAnswer ? 'greenButton' : 'redButton');
  otherButton.classList.remove('greenButton', 'redButton');

  state.showMessage = true;
  state.message = answer === correctAnswer ? 'כל הכבוד לחץ כאן לשאלה הבאה' : 'טעית נס/י שוב';
  state.messageColor = answer === correctAnswer ? 'rgb(34, 106, 91)' : 'red';
  if (state.currentQuestionIndex < 2 && answer === correctAnswer) {
    state.showNextButton = true;
  } else if (answer === correctAnswer && state.currentQuestionIndex >= 2) {
    state.showNextSub = true;
  }
};


const nextQuestion = () => {
  state.currentQuestionIndex++;
  state.showNextButton = false;
  state.showMessage = false;
  state.responseSubmitted = false;
  state.message = '';
  state.messageColor = '';

  // איפוס הצבעים של הכפתורים לצבע המקורי
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  button1.classList.remove('greenButton', 'redButton');
  button2.classList.remove('greenButton', 'redButton');

};

const backToMenu =()=>{
  console.log('backMenu in the question component');
  emit('menuBack');

}


</script>



<style scoped>
@font-face { 
    font-family: "Heebo";
    font-weight: normal;
    src: url("../assets/fonts/Heebo-VariableFont_wght.woff"), 
         format("woff");
}

* {
  overflow: hidden;
  direction: rtl;
}

#page {
  position: absolute;
  top: 0%;
  right: 50%;
  transform: translateX(50%);
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/imgs/Bg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0%;
}

#page-header{
    position: absolute;
    top:5vh;
    right: 50%;
    transform: translateX(50%);
    font-size: 2.5em;
    width: 90vw;
    text-overflow: none;
    color:rgb(31,56,100);
    font-family: "Heebo";
    text-align: center;
}

#user-massage{
    position: absolute;
    color:rgb(31,56,100);
    font-size: 1.5em;
    width:80vw;
    right:50%;
    transform: translateX(50%);
    top:15%;
    font-family: "Heebo";
    text-align: center;
}

#go-next{
  font-size: 1.3em;
  color:rgb(31,56,100);
  height:10vh;

}
#next-btn{
  position: absolute;
  right:50%;
  transform: translateX(50%);
  transform: rotate(50%);
  bottom:0%;
}
#next-t{
  position: absolute;
  right:50%;
  transform: translateX(50%);
  bottom:8%;
  font-weight: bold;

}
#question{
    position: absolute;
    top:30%;
    right: 50%;
    transform: translateX(50%);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Heebo";
    text-align: center;
}   
#text-q{
    font-size: 1.5em;
    color:rgb(31,56,100);
    font-weight: bolder;
    }
.bule-btn {
  width: 90vw;
  padding: 0.5vh; 
  height: 5vh;
  margin-bottom: 1vh; 
  font-size: 1.5em;
  background-color:rgb(31,56,100);
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.greenButton{
  background-color:rgb(34, 106, 91);
}
.redButton{
  background-color:rgb(187, 36, 44);
}
#message{
  font-size: 1.2em;
  font-weight: bold;
}
</style>