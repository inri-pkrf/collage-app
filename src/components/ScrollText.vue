<template>
  <div class="scrollable-text-box">
    <div class="content" ref="content">
      <p class="main-text">{{ innerText }}</p>
      <img class="image-content" :src="imageSrc" alt="Collage Image">
      <p class="image-description">{{ innerText2 }}</p>
      <img class="image-content" :src="imageSrc1" alt="Collage Image">
      <p class="image-description">{{ innerText3 }}</p>


    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import collageImg1 from '../assets/imgs/collageImg1.png';
import collageImg2 from '../assets/imgs/collageImg2.jpg';
import collageImg3 from '../assets/imgs/collageImg3.png';
import collageImg4 from '../assets/imgs/collageImg4.png';
import collageImg5 from '../assets/imgs/collageImg5.jpg';
import collageImg6 from '../assets/imgs/collageImg6.jpg';
import collageImg7 from '../assets/imgs/collageImg7.png';


import ImgCollage1 from '../assets/imgs/1ImgCollage.jpg'
import ImgCollage2 from '../assets/imgs/2ImgCollage.jpg'
import ImgCollage3 from '../assets/imgs/3ImgCollage.jpg'
import ImgCollage4 from '../assets/imgs/4ImgCollage.jpg'
import ImgCollage5 from '../assets/imgs/5ImgCollage.jpg'
import ImgCollage6 from '../assets/imgs/6ImgCollage.jpg'
import ImgCollage7 from '../assets/imgs/7ImgCollage.jpg'

export default {
  props: {
    innerText: String,
    innerText2: String,
    innerText3: String,
    imageNumber: Number
  },
  setup(props) {
    const content = ref(null);
    const imageSrc = ref('');
    const imageSrc1=ref('');

    // Watch for changes in text content to adjust scroll
    watchEffect(() => {
      const el = content.value;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    });

    // Set image source based on image number prop
    const setImageSrc = () => {
      switch (props.imageNumber) {
        case 1:
          imageSrc.value = collageImg1;
          imageSrc1.value = ImgCollage1;
          break;
        case 2:
          imageSrc.value = collageImg2;
          imageSrc1.value = ImgCollage2;

          break;
        case 3:
          imageSrc.value = collageImg3;
          imageSrc1.value = ImgCollage3;

          break;
        case 4:
          imageSrc.value = collageImg4;
          imageSrc1.value = ImgCollage4;

          break;
        case 5:
          imageSrc.value = collageImg5;
          imageSrc1.value = ImgCollage5;

          break;
        case 6:
          imageSrc.value = collageImg6;
          imageSrc1.value = ImgCollage6;

          break;
        case 7:
          imageSrc.value = collageImg7;
          imageSrc1.value = ImgCollage7;

          break;
        default:
          imageSrc.value = '';
          break;
      }
    };

    // Initially set the image source
    setImageSrc();

    return {
      content,
      imageSrc,
      imageSrc1
    };
  }
};
</script>
<style scoped>
@font-face { 
  font-family: "Heebo";
  src: url("../assets/fonts/Heebo-VariableFont_wght.ttf"), 
  format("truetype");
  font-weight: bold;
} 
.scrollable-text-box {
  width: 90vw;
  height: 60vh;
  overflow-y: auto;
  border: 1px solid #ccc;
  direction: ltr; /* Set text direction to left-to-right */
  font-size: 24px;
  border-radius: 9px;

}

.content {
  padding: 10px;
}

.main-text {
  text-align:right ;
  margin-bottom: 5vh; /* Add margin of 20px below the main text */
  direction: rtl ;
  font-family: "Heebo";

}

.image-description {
  margin-top: 5vh;
  direction: rtl ;
  text-align:right ;
  font-family: "Heebo";


   /* Add margin of 20px above the image description */
}
.image-content {
  width: 100%; /* Set width to 100% to fill the container */
  height: auto; /* Set height to auto for dynamic height */
  object-fit: cover; /* Ensure the image covers the entire container */
}

/* Customize scrollbar */
::-webkit-scrollbar {
  width: 12px; /* Width of the scrollbar */
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Color of the scrollbar track */
  border-radius: 50px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: RGB(31,56,100); /* Color of the scrollbar thumb */
  border-radius: 50px; /* Make the scrollbar thumb elliptical */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #555555; 
}




</style>