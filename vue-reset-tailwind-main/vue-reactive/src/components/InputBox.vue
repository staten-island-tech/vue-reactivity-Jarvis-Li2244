<template>
    <h1 class="text-[1.5vw] underline">{{ item.label }}</h1>
    <input 
        class="bg-sky-100 w-full h-1/10 text-emerald-600 p-2 rounded-lg m-2 font-normal text-[1vw] placeholder:text-[1vw]" 
        :type="item.type"
        :placeholder="item.placeholder"

        :value="modelValue"
        @input="updateValue"
    />
</template>

<script setup>

const props = defineProps({
    item: Object,
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
    emit('update:modelValue', event.target.value)
}

</script>

<style lang="css" scoped>

</style>