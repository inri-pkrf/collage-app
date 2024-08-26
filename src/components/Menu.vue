
<template>
  <div id="page">
    <h1 id="main-title">עמוד הבית</h1>
    <div class="text">
    <p id="intro1">אנחנו ממליצים ללכת לפי הסדר, למרות שאפשר איך שרוצים.</p>
    <p id="intro"> כל נושא מכיל הסבר קצר, אולי יהיה שם וידאו, בטוח יהיו תמונות ואפילו יש איזה משחק.
תבלו :)</p>
</div>
    <div class="button-container">
      <button
        v-for="(subject, index) in subjects"
        :key="index"
        @click.once="moveToPage(index)"
        :class="{ 
          'btn-class': states[index] === 0, 
          'active-btn': states[index] === 1, 
          'selected-btn': visitedMenuPage.includes(index),
          'disabled-btn': visitedMenuPage.includes(index) // הוספת סגנון לכפתורים שכבר לחצנו עליהם
        }"
        :disabled="visitedMenuPage.includes(index)"
        >
        {{ subject }}
      </button>
      <p class="survey">יש הערות על הממשק?
יש מחמאות? מלאו את השאלון וצרו איתנו קשר
<a id="link" href="https://docs.google.com/forms/d/e/1FAIpQLSflGabIbTG0fNDp_MGmI64a9xzg4AHkJNyH7DovtxicCIuIhw/viewform" target="_blank">
      בקישור הבא
      </a>
</p>

    </div>
    <h1 class="margin-class">thgrthrthrthrthtrhrth</h1>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from 'vue';

const { visitedMenuPage } = defineProps(['visitedMenuPage']);
const emit = defineEmits(['go-next']);


const subjects = [
  'מי זאת המכללה',
  'המכללה בחרבות ברזל',
  'נכסים דיגיטליים',
  'הספרייה הלאומית לחירום',
  'קש"ח',
  ' מה נמצא איפה?'];
  
const states = reactive(subjects.map(() => 0));

const moveToPage = (index) => {
  states[index] = 1;
  emit('go-next',  index + 1);
};

</script>

<style scoped>
@font-face { 
  font-family: "Heebo";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-VariableFont_wght.woff"), 
       format("woff");
}

@font-face { 
  font-family: "Karantina";
  font-weight: normal;
  src: url("../assets/fonts/Karantina-Regular.woff"), 
  format("woff");
} 
@font-face { 
  font-family: "Heebo-Black";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-Black.woff"), 
       format("woff");
}


#page {
  position: absolute;
  top: 0%;
  right: 50%;
  transform: translateX(50%);
  height: 100vh;
  width: 100vw;
  /* background-image: url("../assets/imgs/Bg2.png"); */
  background-color: aliceblue;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0%;
 overflow-y: scroll;
 overflow-x: hidden;
 
}


.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 58vh;
  right: 50%;
  transform: translateX(50%);
  z-index: 10000;
  font-family: "Heebo";
  direction: rtl;

}

.btn-class {
  font-size: 1.5em;
  margin-top: 2vh; /* Adjusted margin */
  width: 80vw; /* Fixed width for all buttons */
  height: auto; /* Allow height to adjust based on content */
  text-align: center;
  padding: 3vh 0; /* Adjusted padding */
  background-color: rgb(23,90,133);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  margin-bottom:2vh ;
  font-family: "Heebo";

}

.active-btn {
  font-size: 1.5em;
  margin-top: 2vh; /* Adjusted margin */
  width: 60vw; /* Fixed width for all buttons */
  height: auto; /* Allow height to adjust based on content */
  text-align: center;
  padding: 1.5vh 0; /* Adjusted padding */
  background-color: rgb(97, 97, 99);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  opacity: 0.6;
  font-family: "Heebo";

}

#main-title{
  position: absolute;
  color: rgb(89, 89, 89);
  font-size: 5em;
  top: 5vh;
  transform: translateX(50%);
  right:50%;
  width:100%;
  text-align: center;
  font-family: "Karantina";

}
#intro, #intro1 {
  position: absolute;
  width: 70vw;
  left: 50%;
  top:30vh;
  transform: translateX(-50%);
  font-family: "Heebo";
  font-size: 1.2em;
  direction: rtl;
  font-weight: 700;
  color: rgb(89, 89, 89);
  margin: 0;
}


#intro {
  font-family: "Heebo-Black";
  margin-top: 20%;
}
.selected-btn {
    background-color: grey;
}
.disabled-btn {
  opacity: 0.6; /* קיבולת נמוכה - פיהוק רב */
  cursor: not-allowed; /* אסור לחיצה */
}
.margin-class{
  position: absolute;
    color: transparent;
    margin-top: 162vmax;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.survey{
  width: 71vw;
  position: absolute;
  margin-top: 94vmax;
  right: 50%;
  transform: translateX(50%);
  font-family: 'Heebo';
  font-size: 1.3em;
  color: rgb(23, 90, 133);
}
#link{
  color: rgb(23, 90, 133);
  text-decoration: underline;
}
</style>