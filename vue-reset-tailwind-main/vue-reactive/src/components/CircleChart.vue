<template>
  <div class="circle bg-sky-100 rounded-[50%] w-[40vw] h-[40vw] m-6 flex justify-evenly items-center flex-wrap shadow-xl">
      <button @click=colorChange(sectCirc) class="spin-button hover:cursor-pointer bg-linear-65 from-purple-700 via-pink-400 to-orange-300 border-18 border-sky-100 rounded-[50%] w-[14vw] h-[14vw] absolute">
        <img class="spinner object-fill" src="../../public/images/spinning.png" alt="CircleCenter">
      </button>
      <CircleSection
        v-for="sect in sectCirc" 
        :key="sect.name" 
        :sect="sect"
      />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import CircleSection from './CircleSection.vue';
import { sectCirc } from './manyLists.js';


function colorChange (sectCirc) {
  let firstSect = [sectCirc[0].color, sectCirc[0].name]
  let secondSect = [sectCirc[1].color, sectCirc[1].name]
  let thirdSect = [sectCirc[2].color, sectCirc[2].name]
  let fourthSect = [sectCirc[3].color, sectCirc[3].name]

  sectCirc[0].color = thirdSect[0] 
  sectCirc[0].name = thirdSect[1]

  sectCirc[1].color = firstSect[0] 
  sectCirc[1].name = firstSect[1]

  sectCirc[2].color = fourthSect[0] 
  sectCirc[2].name = fourthSect[1]

  sectCirc[3].color = secondSect[0]
  sectCirc[3].name = secondSect[1]
}


</script>

<style lang="css" scoped>


.spinner{
  animation: 20s linear infinite spin;
}


@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


</style>