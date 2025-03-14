<template>

    <div class="card w-2/3 h-2/7 rounded-xl flex flex-col justify-center items-left p-4">


        <h1 class="text-[1.5vw] font-semibold underline">{{ slot.title }}</h1>

        <h2 class="status text-[1.25vw] m-2 p-1 bg-sky-100 rounded-lg">{{ slot.saved }}</h2>

        <div class="w-full h-1/5 flex flex-wrap justify-evenly items-center mt-1">
            <button @click=saveSlot() class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Save Profile</button>
            <button @click=loadSlot() class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Load Profile</button>
        </div>

        <div class="w-full h-1/5 flex justify-center items-center mt-4">
            <button @click=clearSlot() class="underline hover:cursor-pointer w-5/7 h-full items-center text-[1vw]">Clear Slot</button>
        </div>


    </div>

</template>

<script setup>

const props = defineProps({
    slot: Object,
})

const emit = defineEmits(['save', 'load', 'clear'])

function saveSlot() {
    emit('save', props.slot.number)
}

function loadSlot() {
    emit('load', props.slot.number)
}

function clearSlot() {
    emit('clear', props.slot.number)
}

</script>

<style lang="css" scoped>
.card{
  background-color: rgba(64, 198, 198, 0.442);
}
.status{
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;

}
::-webkit-scrollbar {
    height: 4px;
}

::-webkit-scrollbar-thumb {
    background-color: oklch(0.951 0.026 236.824);  
    border-radius: 10px; 
       
}

::-webkit-scrollbar-track {
    background-color: oklch(0.951 0.026 236.824); 
    border-radius: 10px;         
}

::-webkit-scrollbar-button {
    width: none;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #ababab; 
}
</style>