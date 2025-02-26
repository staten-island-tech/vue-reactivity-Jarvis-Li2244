<template>
    <RouterLink :to="'/' + name" :class= color,orientation class="circleSection w-1/2 h-1/2 border-sky-100"/>
</template>

<script setup>

defineProps({
    color: String,
    orientation: String,
    name: String
})

</script>

<style lang="css" scoped>

</style>