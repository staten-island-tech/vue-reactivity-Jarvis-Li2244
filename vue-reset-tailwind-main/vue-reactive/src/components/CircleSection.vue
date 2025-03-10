<template>
    <RouterLink :to="'/' + sect.name" :class= sect.color,sect.orientation class="circleSection w-1/2 h-1/2 border-sky-100"/>
</template>

<script setup>

defineProps({
    sect: Object
})

</script>

<style lang="css" scoped>

</style>