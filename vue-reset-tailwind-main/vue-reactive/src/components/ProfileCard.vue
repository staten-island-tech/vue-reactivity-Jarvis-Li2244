<template>
    <div class="card w-[20vw] h-[29vw] bg-linear-65 rounded-xl flex flex-col justify-evenly items-center p-4 text-center font-serif text-sky-100 shadow-xl">
        <h1 class="text-[2vw]">{{ label }}</h1>
        <div class="w-1/2 h-1/3 bg-white p-2 rounded-lg shadow-xl">
            <a :href=link><img class="hover:cursor-pointer object-fill" :src="'../../public/images/' + image" :alt=label></a>
        </div>
        <h2 class="text-[1.5vw]">{{ title }}</h2>
        <h3 class="text-[1vw]">{{ info }}</h3>
    </div>
</template>

<script setup>

defineProps({
    link: String,
    image: String,
    title: String,
    info: String,
    label: String,
})


</script>

<style lang="css" scoped>

</style>