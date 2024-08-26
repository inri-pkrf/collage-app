<template>
  <div id="card">
    <div class="close-button" @click="closeCard">×</div>
    <h1>{{ title }}</h1>
    <p>{{ info }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  info: String
});

const emit = defineEmits(['close']);

const closeCard = () => {
  emit('close');
};
</script>

<style scoped>
@font-face {
  font-family: 'Heebo';
  font-weight: normal;
  src: url('../assets/fonts/Heebo-VariableFont_wght.woff') format('woff');
}

@font-face {
  font-family: 'Heebo-Black';
  font-weight: normal;
  src: url('../assets/fonts/Heebo-Black.woff') format('woff');
}

#card {
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translateX(50%);
  width: 90vw;
  min-height: auto;
  direction: rtl;
  background-color: rgb(28, 180, 227);
  border: none;
  border-radius: 50px;
  padding: 20px; /* Add padding for better visual separation */
  box-sizing: border-box; /* Ensure padding is included in width/height */
}

h1 {
  font-size: 1.8em;
  color: white;
  font-family: 'Heebo-Black';
}
p{
  font-size: 1.3em;
  color: white;
  font-family: "Heebo";
}

.close-button {
  position: absolute;
  top: 9%;
  right: 9%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 3em;
  color: white;
}


</style>