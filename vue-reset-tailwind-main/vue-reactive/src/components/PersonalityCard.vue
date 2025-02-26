<template>
    <div :class=color class="card w-[20vw] h-[29vw] bg-linear-65 rounded-xl flex flex-col justify-evenly items-center p-4 text-center font-serif text-sky-100 shadow-xl">
        <h1 class="text-[2vw]">{{ label }}</h1>
        <div class="w-1/2 h-1/3 bg-white p-2 rounded-lg shadow-xl">
            <a :href=link><img class="hover:cursor-pointer object-fill" :src="'/src/images/' + image" :alt=label></a>
        </div>
        <h2 class="text-[1.5vw]">{{ title }}</h2>
        <h3 class="text-[1vw]">{{ info }}</h3>
        <button @click=setProfile(label) class="hover:cursor-pointer text-[1vw] underline font-semibold">Set as Profile</button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { sectCirc, profileKey } from "./manyLists.js"

const route = useRoute()

defineProps({
    title: String,
    label: String,
    image: String,
    info: String,
    link: String,
})

const cardType = route.params.name;
let color = ref('')

for(let i = 0; i < sectCirc.length; i++) {
    if (sectCirc[i].name == cardType) {
        color = sectCirc[i].color
    }
}


function setProfile(label) {
    profileKey.value = [label]
}

</script>

<style lang="css" scoped>

.card{
    transition: transform 0.3s ease-in-out;
}
.card:hover{
    transform: scale(1.1);
}

</style>