
<template>
    <div class="w-full h-[90vh] flex justify-evenly items-center">
        <PersonalityCard 
            v-for="card in cards" 
            :key="card.title" 
            :title="card.title"
            :label="card.label"
            :image="card.image"
            :info="card.info"
            :link="card.link"/>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PersonalityCard from './PersonalityCard.vue';
import { cardList } from './manyLists.js';

const route = useRoute()
const cards = reactive([]);


onMounted(() => {
    const cardType = route.params.name;
    cardList
        .filter(item => item.type === cardType)
        .forEach(item => cards.push(item))
});
</script>

<style scoped>

</style>
  