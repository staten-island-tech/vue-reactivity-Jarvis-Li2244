<template>
    <h1 class="text-[1.5vw] underline">{{ input.label }}</h1>
    <input 
        class="bg-sky-100 w-full h-1/10 text-emerald-600 p-2 rounded-lg m-2 font-normal text-[1vw] placeholder:text-[1vw]" 
        :type="input.type"
        v-model="input.value"
        :placeholder="input.placeholder"
        @input=updateProfile()
    />
</template>

<script setup>

defineProps({
    input: Object
})

function updateProfile() {
    Object.keys(profile)
    .forEach(key => {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
        }
        localStorage.setItem(key, profile[key]);
        console.log(key, profile[key])
    });
}


</script>

<style lang="css" scoped>

</style>