<template>
    <div :class=color class="card w-[20vw] h-[29vw] bg-linear-65 rounded-xl flex flex-col justify-evenly items-center p-4 text-center font-serif text-sky-100 shadow-xl">
        <h1 class="text-[2vw]">{{ card.title }}</h1>
        <div class="w-1/2 h-1/3 bg-white p-2 rounded-lg shadow-xl">
            <a :href=card.link><img class="hover:cursor-pointer object-fill" :src="'../../public/images/' + card.image" :alt=card.label></a>
        </div>
        <h2 class="text-[1.5vw]">{{ card.title }}</h2>
        <h3 class="text-[1vw]">{{ card.info }}</h3>
        <button @click=setProfile(card.label) class="hover:cursor-pointer text-[1vw] underline font-semibold">Set as Profile</button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { sectCirc, profileKey } from "./manyLists.js"

defineProps({
    card: Object
})

const route = useRoute()

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