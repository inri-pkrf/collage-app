<template>
  <div id="page">
    <p class="simple-text">יש לתפוס את הפריט ולאחר מכן לגרור אותו</p>
    <img class="game-board" src="../assets/imgs/collageMap.jpeg">
    <div class="container">
      <div
        v-for="item in currentItem"
        :key="item.id"
        :id="item.id"
        class="draggable-item"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
    
      >
        {{ item.name }}
      </div>
    </div>

    <div class="container1">
      <div
        v-for="(container, index) in containers"
        :key="container.id"
        :id="container.id"
        class="dropzone"
        @dragover.prevent
        @drop="drop"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
       
      >
      </div>
    </div>

    <FlashCard v-if="correctPlace" class="flash-card" :title="titles[currentItemIndex]" :info="infos[currentItemIndex]" @close="closeCard"></FlashCard>

    <div v-if="showSuccessMessage" class="success-message">
      הצלחת ! כל הכבוד
      <button class="button" @click=finishGame>המשך</button>
    </div>
  </div>
</template>

<script>
import FlashCard from './FlashCard.vue';

export default {
  data() {
    return {
      items: [
        { id: 'item1', name: 'מכללה' },
        { id: 'item2', name: 'לשכת אלוף' },
        { id: 'item3', name: 'כוורת' },
        { id: 'item4', name: 'מאמ"פ' },
        { id: 'item5', name: 'אולם פיקודי' },
        { id: 'item6', name: 'גן אירועים' },
        { id: 'item7', name: 'חדר אוכל פיקודי' },
        { id: 'item8', name: 'הוצל"א' }
      ],
      containers: [
        { id: 'container1' },
        { id: 'container2' },
        { id: 'container3' },
        { id: 'container4' },
        { id: 'container5' },
        { id: 'container6' },
        { id: 'container7' },
        { id: 'container8' }
      ],
      currentItemIndex: 0,
      titles: [
        'המכללה לאיתנות',
        'אלופים אתם !',
        'גם אנחנו חושבים עכשיו על האייסקפה',
        'כל הכבוד!',
        'יפה מאוד!',
        'מצאת!',
        'הצלחת!',
        'אכן זו ההוצל"א'
      ],
      infos:[
        'כאן נמצאת המכללה הלאומית לאיתנות ישראלית, צמודה לבסיס פיקוד העורף',
        'במבנה זה, בקומה השנייה, נמצאת לשכת האלוף וגם לשכת רמ"ט (ראש מטה) הפיקוד',
        ' ',
        'מגמת אימוני מפקדות (מאמ"פ) ממוקמת במבנה מחוץ לבניין המכללה ובתוך הבסיס. מוזר, אנחנו יודעים, אבל לרוב כולם נפגשים בארוחת הצהריים',
        'חשוב להכיר היטב את מיקומו של האולם הפיקודי, אירועים שונים מתקיימים בו',
        ` 'ברחבי הבסיס ניתן לראות מבנים היסטוריים מהתקופה העות'מאנית, בני יותר ממאה שנה. עם התאורה הנכונה ועם מדשאה מטופחת, המבנים מספקים רקע ייחודי לטקסים, כנסים ואירועים יוצאי דופן בפיקוד'
        ` ,
       'כאן נמצא חדר האוכל הצבאי לחיילים וקצינים, אם רוצים לגוון מהאוכל במכללה',
        'כאן נמצאת ההוצל"א (הוצאה לאור) בית הדפוס הפיקודי בניהולו של עמוס דוגמא'
      ],
      correctPlace: false,
      showSuccessMessage: false // New state to control success message
    };
  },
  computed: {
    currentItem() {
      return [this.items[this.currentItemIndex]];
    }
  },
  methods: {
    dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);

    // Remove the 'incorrect-drop' class from all drop zones
    const dropzones = document.querySelectorAll('.dropzone');
    dropzones.forEach(dropzone => {
      dropzone.classList.remove('incorrect-drop');
    });
  },
    dragEnd(event) {
      event.target.classList.remove('dragging');
    },
    drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/plain');
  const draggedItem = document.getElementById(itemId);
  const dropZoneId = event.target.id;

  // Check if the dragged item can be dropped into the target container
  if (itemId === `item${dropZoneId.slice(-1)}`) {
    // Remove the element from its original parent
    draggedItem.parentNode.removeChild(draggedItem);
    // Append the element to the drop zone
    event.target.appendChild(draggedItem.cloneNode(true));

    // Set correctPlace to true
    this.correctPlace = true;

    // Remove the dragover event listener
    event.target.removeEventListener('dragover', () => {
      event.target.classList.remove('incorrect-drop');
    });
  } else {
    // Add a class to the drop zone to indicate an incorrect drop
    event.target.classList.add('incorrect-drop');
  }
},
    dragEnter(event) {
      event.target.classList.add('dragover');
    },
    dragLeave(event) {
      event.target.classList.remove('dragover');
    },
   
        closeCard() {
      if (this.currentItemIndex !== 7) {
        this.correctPlace = false;
        this.currentItemIndex++;
      } else {
        this.correctPlace = false;
        this.showSuccessMessage = true;
      }
    },
    finishGame(){
      this.$emit('go-menu');
    }

  },
  components: {
    FlashCard
  }
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
  font-family: "Heebo-Black";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-Black.woff"), 
       format("woff");
}
body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: aliceblue;
  padding: 0%;
}

#page {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow:hidden;
}

.game-board {
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 0;
  right: 0;
  top: 10%;
}

.draggable-item {
  padding: 20px; /* Increased padding for larger touch target */
  background-color:darkorange;
  border: 1px solid #0d0d0d;
  border-radius: 500px;
  width: 20vw; /* Increased width for larger touch target */
  cursor: grab;
  margin-bottom: 15px; /* Increased margin for separation */
  color: white;
}

.dropzone {
  padding-bottom: 12px;
  border: 2px dashed black;
  border-radius: 500px;
  width: 23vw; /* Increased width for larger touch target */
  height: 5vh; /* Increased height for larger touch target */
  cursor: pointer;
}

.dragging {
  opacity: 0.5;
}

.dragover {
  background-color: #c0c0c0;
}

.container {
  position: absolute;
  left: 6%;
  top: 40%;
  gap: 2%;
  z-index: 10;
  justify-content: center;
}

.container1 {
  position: absolute;
  width: 30%; /* Adjusted width for smaller screens */
  right: 5%; /* Adjusted right position */
  top: 10%; /* Adjusted top position */
  z-index: 10;
}
.flash-card{
    position:absolute;
    z-index:1000;
  }
  .success-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2em;
  font-weight: bold;
  background-color: rgba(0, 255, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Heebo-Black";

}
.incorrect-drop {
  background-color: rgba(240, 128, 128,0.6);
}
@media screen and (max-width: 768px) {
  /* Additional adjustments for smaller screens */
  .container {
    position: absolute;
    top:18%;
    z-index: 10;
    display: flex;
    align-items: right;
    justify-content:start;
    width: 100vw;
    right:20vw;
  }

  .container1 {
    position: absolute;
    width: 30%; /* Adjusted width for smaller screens */
    right: 7%; /* Adjusted right position */
    top: 0%; /* Adjusted top position */
    z-index: 10;
  }

  .game-board {
    top: 25%;
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 0;
    right: 0;
  }

  .dropzone {
    width: 35vw;
    height: 5vh;
  }

  .draggable-item {
    width: 30vw;
    touch-action: none;

  }

  /* Adjust positions of containers */
  #container1 {
    position:relative;
    right:7vw;
    top: 28vh;
  }
  #container2 {
    position:relative;
    right:15vw;
    top: 32vh;
  }
  #container3 {
    position:relative;
    left: -62vw;
    top: 20vh;

  }
  #container4 {
    position:relative;
    left: -42vw;
    top:60vh;
    
  }
  #container5 {
    position:relative;
    left: -38vw;
    top: 22vh;
  
  }
  #container6 {
    position:relative;
    left: -2vw;
    top:18vh;
    
  }
  #container7 {
    position:relative;
    left: -22vw;
    top: 24vh;
  }
  #container8 {
    position:relative;

    left: -60vw;
    top: 9vh;
  }
  .flash-card{
    position:absolute;
    z-index:1000;
  }
  .success-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size:36px;
  font-weight: bold;
  background-color: rgb(5, 194, 242);
  padding: 20px;
  border-radius: 10px;
  width: 80vw;
  height:20vh;
  z-index:10000;
  display: flex;
  flex-wrap: wrap;
  color: aliceblue;
  font-family: "Heebo-black";
}

.incorrect-drop {
  background-color: red;
  border: 2px dashed red;
}
.button{
  width:40vw;
  height: 7vh;
  font-size: 24px;
  padding: 2px;
  color: aliceblue;
  background-color: darkorange;
  border: solid white 5px;
}
.simple-text {
position: absolute;
width: 80%;
height: auto;
margin-bottom: 2vh;
font-family: "Heebo-black";
font-size: 1.5em;
color: rgb(89,89,89);
top:7%;
right:5%;
text-align: right;


}

}

</style>

