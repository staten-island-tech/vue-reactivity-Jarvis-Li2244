<template>
    <div class="w-full h-[90vh] flex">
        <div class="w-5/14 h-[90vh] flex flex-wrap items-center justify-center text-emerald-600 font-serif">
            <div class="card w-2/3 h-2/7 rounded-xl flex flex-col justify-center items-left p-4">
                <h1 class="text-[1.5vw] font-semibold underline">Slot 1:</h1>
                <h2 class="status text-[1.25vw] m-2 p-1 bg-sky-100 rounded-lg">{{ Status1 }}</h2>
                <div class="w-full h-1/5 flex flex-wrap justify-evenly items-center mt-1">
                    <button @click=saveProfile(1) class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Save Profile</button>
                    <button @click=loadProfile(1) class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Load Profile</button>
                </div>
                <div class="w-full h-1/5 flex justify-center items-center mt-4">
                    <button @click=clearSlot(1) class="underline hover:cursor-pointer w-5/7 h-full items-center text-[1vw]">Clear Slot</button>
                </div>
            </div>

            <div class="card w-2/3 h-2/7 rounded-xl flex flex-col justify-center items-left p-4">
                <h1 class="text-[1.5vw] font-semibold underline">Slot 2:</h1>
                <h2 class="status text-[1.25vw] m-2 p-1 bg-sky-100 rounded-lg">{{ Status2 }}</h2>
                <div class="w-full h-1/5 flex flex-wrap justify-evenly items-center mt-1">
                    <button @click=saveProfile(2) class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Save Profile</button>
                    <button @click=loadProfile(2) class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Load Profile</button>
                </div>
                <div class="w-full h-1/5 flex justify-center items-center mt-4">
                    <button @click=clearSlot(2) class="underline hover:cursor-pointer w-5/7 h-full items-center text-[1vw]">Clear Slot</button>
                </div>
            </div>

            <div class="card w-2/3 h-2/7 rounded-xl flex flex-col justify-center items-left p-4">
                <h1 class="text-[1.5vw] font-semibold underline">Slot 3:</h1>
                <h2 class="status text-[1.25vw] m-2 p-1 bg-sky-100 rounded-lg">{{ Status3 }}</h2>
                <div class="w-full h-1/5 flex flex-wrap justify-evenly items-center mt-1">
                    <button @click=saveProfile(3) class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Save Profile</button>
                    <button @click=loadProfile(3) class="card hover:cursor-pointer w-3/7 h-full items-center rounded-md p-2 text-[1vw]">Load Profile</button>
                </div>
                <div class="w-full h-1/5 flex justify-center items-center mt-4">
                    <button @click=clearSlot(3) class="underline hover:cursor-pointer w-5/7 h-full items-center text-[1vw]">Clear Slot</button>
                </div>
            </div>

        </div>

        <div class="w-9/14 h-[90vh] flex justify-center items-center">

            <div class="card w-9/10 h-5/6 flex flex-wrap items-center rounded-xl p-2 font-serif">

                <div class="w-1/2 h-9/10 flex flex-col items-left justify-center p-4 text-emerald-600 font-semibold">
                    <InputBox 
                        v-for="(item, index) in inputs" 
                        :key="item.label" 
                        v-model="profile[Object.keys(profile)[index]]" 
                        :item="item"
                    />
                </div>

                <div class="w-1/2 h-9/10 flex justify-center items-center">
                    <ProfileCard 
                        :key="profileCard[0].label"
                        :card="profileCard[0]"
                        />
                </div>

                <div class="w-full h-1/10 flex justify-center items-center">
                    <button @click=clearProfile() class="card hover:cursor-pointer w-3/5 h-7/10 items-center rounded-lg p-2 text-[1.25vw] underline text-emerald-600 font-extrabold">Clear Profile</button>
                </div>

            </div>

        </div>   
    </div>
</template>

<script setup>
import ProfileCard from '../components/ProfileCard.vue';
import InputBox from '../components/InputBox.vue';
import { ref, reactive, watch } from 'vue';
import { cardList, profileKey, profileCard } from "../components/manyLists.js";


for (let i = 0; i < cardList.length; i++) {
    if (cardList[i].label == profileKey.value) {
        profileCard.value = [cardList[i]];
        if (localStorage.getItem("profile")) {
            localStorage.removeItem("profile")
        }
        localStorage.setItem("profile", JSON.stringify(profileCard.value))
    }
}

if (JSON.parse(localStorage.getItem("profile"))) {
    profileCard.value = JSON.parse(localStorage.getItem("profile"))
}
// important stuff above, do not change really
// below is up for updating

const Status1 = ref("")
const Status2 = ref("")
const Status3 = ref("")

const profile = reactive({
    name: '',
    age: '',
    gender: '',
    occupation: '',
    activity: ''
});

const inputs = ref([
  {label: 'Name:', type: 'text', placeholder: 'Your Name...' },
  {label: 'Age:', type: 'number', placeholder: 'Your Age...' },
  {label: 'Gender:', type: 'text', placeholder: 'Your Gender...' },
  {label: 'Occupation:', type: 'text', placeholder: 'Your Occupation...' },
  {label: 'Favorite Activity:', type: 'text', placeholder: 'Your Favorite Activity...' }
])

function clearProfile() {

    if (localStorage.getItem("profile")) {
        localStorage.removeItem("profile")
    }

    profileCard.value = [{ 
        title: '', 
        label: "", 
        image: '', 
        type: "", 
        info: "",
        link: ""
    }];

    Object.keys(profile)
    .forEach(key => {
        profile[key] = '';
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
        }
    });
}     

function updateProfile() {

    Object.keys(profile)
    .forEach(key => {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
        }
        localStorage.setItem(key, profile[key]);
    });

}

function loadSlot(number) {
    const savedProfile = JSON.parse(localStorage.getItem(`userProfile${number}`));
    const savedStatus = localStorage.getItem(`userStatus${number}`);
    
    if (savedProfile) {
        profileCard.value = savedProfile.profCard || [{ title: '', label: "", image: '', type: "", info: "", link: ""}];
        profile.name = savedProfile.name || '';
        profile.age = savedProfile.age || '';
        profile.gender = savedProfile.gender || '';
        profile.occupation = savedProfile.occupation || '';
        profile.activity = savedProfile.activity || '';;
    } else {
        clearProfile();
    }

    if (savedStatus) {
        if (number == 1) {
            Status1.value = savedStatus;
        } else if (number == 2) {
            Status2.value = savedStatus;
        } else if (number == 3) {
            Status3.value = savedStatus;
        }
    } else (
        loadStatus(number)
    )

    updateProfile();
}

function clearSlot(number) {
    if (localStorage.getItem(`userProfile${number}`)) {
        localStorage.removeItem(`userProfile${number}`);
    }
    if (localStorage.getItem(`userStatus${number}`)) {
        localStorage.removeItem(`userStatus${number}`);
    }
    loadStatus(number)
}


function saveSlot(number) {
    if (localStorage.getItem(`userProfile${number}`)) {
        localStorage.removeItem(`userProfile${number}`);
    }
    if (localStorage.getItem(`userStatus${number}`)) {
        localStorage.removeItem(`userStatus${number}`);
    }
    const savedCard = {
        name: name.value,
        age: age.value,
        gender: gender.value,
        occupation: occupation.value,
        activity: activity.value,
        profCard: profileCard.value
    };
    localStorage.setItem(`userProfile${number}`, JSON.stringify(savedCard));

    let Status = ""
    if (name.value == '' && JSON.stringify(profileCard.value) == JSON.stringify([{title: '', label: "", image: '', type: "", info: "", link: ""}])) {
        Status = "Empty Profile Card"
    } else if (name.value == '') {
        Status = `Anonymous - ${profileCard.value[0].title}`
    } else if (JSON.stringify(profileCard.value) == JSON.stringify([{title: '', label: "", image: '', type: "", info: "", link: ""}])) {
        Status = `${name.value} - No Personality Card`
    } else {
        Status = `${name.value} - ${profileCard.value[0].title}`
    }

    if (number == 1) {
        Status1.value = Status
    } else if (number == 2) {
        Status2.value = Status
    } else if (number == 3) {
        Status3.value = Status
    }

    localStorage.setItem(`userStatus${number}`, Status);
}

function loadVariables() {
    Object.keys(profile)
    .forEach(key => {
        if (localStorage.getItem(key)) {
            profile[key] = localStorage.getItem(key);
        }
    });
}

function loadStatus(number) {
    const savedStatus = localStorage.getItem(`userStatus${number}`);
    if (savedStatus) {
        if (number == 1) {
            Status1.value = savedStatus;
        } else if (number == 2) {
            Status2.value = savedStatus;
        } else if (number == 3) {
            Status3.value = savedStatus;
        }
    } else {
        if (number == 1) {
            Status1.value = "Empty Profile Card"
        } else if (number == 2) {
            Status2.value = "Empty Profile Card"
        } else if (number == 3) {
            Status3.value = "Empty Profile Card"
        }
    }
}

loadVariables();

loadStatus(1);
loadStatus(2);
loadStatus(3);

watch(() => profile, updateProfile, { deep: true });

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