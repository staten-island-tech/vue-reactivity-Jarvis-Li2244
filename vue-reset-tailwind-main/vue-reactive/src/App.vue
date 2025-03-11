<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    
    <div class="header flex h-[10vh] items-center shadow-xl">
      <RouterLink class="text-[2vw] text-emerald-500 rounded-lg bg-white mx-[2vw] px-[4vw] font-serif font-semibold underline shadow-xl" to="/">Home</RouterLink>
      <RouterLink class="text-[2vw] text-emerald-500 rounded-lg bg-white mx-[2vw] px-[4vw] font-serif font-semibold underline shadow-xl" to="/profile">Profile</RouterLink>
    </div>
      
    <RouterView/>

  </div>
</template>



<style lang="css" scoped>
.page{
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100vh;
}
.header{
  background-color: rgb(0, 146, 146);
}

</style>
