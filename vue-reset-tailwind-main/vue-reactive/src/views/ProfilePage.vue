<template>
    <div class="w-full h-[90vh] flex">
        <div class="w-5/14 h-[90vh] flex flex-wrap items-center justify-center text-emerald-600 font-serif">
            
            <ProfileSlot
                v-for="slot in slots"
                :key="slot.number"
                :slot="slot"
                @save="saveSlot"
                @load="loadSlot"
                @clear="clearSlot"
            />

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
import ProfileSlot from '../components/ProfileSlot.vue';
import { ref, reactive, watch } from 'vue';
import { cardList, profileKey, profileCard } from "../components/manyLists.js";

for (let i = 0; i < cardList.length; i++) {
    if (cardList[i].label == profileKey.value) {
        profileCard.value = [cardList[i]];
        updateProfileCard()
    }
}

if (JSON.parse(localStorage.getItem("profile"))) {
    profileCard.value = JSON.parse(localStorage.getItem("profile"))
}

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

const slots = ref([
    {title: 'Slot 1:', saved: 'Empty Profile Slot', number: 1 },
    {title: 'Slot 2:', saved: 'Empty Profile Slot', number: 2 },
    {title: 'Slot 3:', saved: 'Empty Profile Slot', number: 3 },
])

function clearProfile() {
    localStorage.removeItem("profile")
    
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
        localStorage.removeItem(key)
    });
}     

function updateProfile() {
    Object.keys(profile)
    .forEach(key => {
        localStorage.setItem(key, profile[key]);
    });
}

function updateProfileCard() {
    localStorage.setItem("profile", JSON.stringify(profileCard.value))
}

function saveSlot(number) {
    const savedCard = {
        name: profile.name,
        age: profile.age,
        gender: profile.gender,
        occupation: profile.occupation,
        activity: profile.activity,
        profCard: profileCard.value
    };
    localStorage.setItem(`userProfile${number}`, JSON.stringify(savedCard));

    let empty = true
    let StatusA = ''
    let StatusB = ''
    Object.keys(savedCard)
    .forEach(key => {
        if (typeof(savedCard[key]) != 'object') {
            if (savedCard[key] != "") {
                empty = false
            }
        } else {
            if (JSON.stringify(savedCard[key]) != JSON.stringify([{title: '', label: "", image: '', type: "", info: "", link: ""}])) {
                empty = false
            }
        }
        
    })

    if (empty) {
        slots.value[number - 1].saved = "Empty Profile Card"
    } else {
        if (profile.name == '') {
            StatusA = 'Anonymous'
        } else {
            StatusA = profile.name
        }

        if (JSON.stringify(profileCard.value) == JSON.stringify([{title: '', label: "", image: '', type: "", info: "", link: ""}])) {
            StatusB = 'No Personality Card'
        } else {
            StatusB = profileCard.value[0].title
        }
        
        slots.value[number - 1].saved = `${StatusA} - ${StatusB}`
    }

    localStorage.setItem(`userStatus${number}`, slots.value[number - 1].saved);
}

function loadSlot(number) {
    const savedProfile = JSON.parse(localStorage.getItem(`userProfile${number}`));
    
    if (savedProfile) {
        profileCard.value = savedProfile.profCard
        Object.assign(profile, {
            name: savedProfile.name,
            age: savedProfile.age,
            gender: savedProfile.gender,
            occupation: savedProfile.occupation,
            activity: savedProfile.activity
        });
    } else {
        clearProfile();
    }

    updateProfileCard()
    updateProfile();
}

function clearSlot(number) {
    localStorage.removeItem(`userProfile${number}`);
    localStorage.removeItem(`userStatus${number}`);

    loadStatus(number)
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
        slots.value[number - 1].saved = savedStatus
    } else {
        slots.value[number - 1].saved = "Empty Profile Card"
    }
}

loadVariables();

for (let i = 0; i < slots.value.length; i++) {
    loadStatus(slots.value[i].number)
}

watch(() => profile, updateProfile, { deep: true });

</script>

<style lang="css" scoped>
.card{
  background-color: rgba(64, 198, 198, 0.442);
}
</style>