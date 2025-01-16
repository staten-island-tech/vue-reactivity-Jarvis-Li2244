<template>
    <div>
        <form action="submit" @submit.prevent="logInfo(user)">
            <p>Username: <input type="text" v-model="user.username" required :disabled="loggedIn"></p>
            <p>Password: <input type="password" v-model="user.password" required :disabled="loggedIn"></p>
            <button @click="logInfo()">Login</button>
        </form>
        <h2 v-if="loggedIn">Hello {{user.username}}</h2>
        <h2 v-else>Please Login</h2>
        <button @click="logOut()">Log Out</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {reactive} from 'vue'

const loggedIn = ref(false)
const user = reactive({username: '', password: ''})

function logInfo(user) {
    loggedIn.value = true
    console.log(user)
}

function logOut() {
    loggedIn.value = false
    user.username = ''
    user.password = ''
}


</script>

<style lang="scss" scoped>

</style>