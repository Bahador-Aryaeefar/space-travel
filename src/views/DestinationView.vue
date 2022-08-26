<script setup>
import { ref, computed } from "vue"

const state = ref(0)

setTimeout(() =>
{
    state.value = 1
}, 10);

const borderWidth = computed(() =>
{
    switch (state.value)
    {
        default: {
            return 2.85
        }
        case 2: {
            return 2.75
        }
        case 3: {
            return 4.05
        }
        case 4: {
            return 3
        }
    }
})
const borderLeft = computed(() =>
{
    switch (state.value)
    {
        default: {
            return 0
        }
        case 2: {
            return 5.1
        }
        case 3: {
            return 10
        }
        case 4: {
            return 16.28
        }
    }
})

const moon = {
    title: "MOON",
    info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS"
}
const mars = {
    title: "MARS",
    info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS"

}
const europa = {
    title: "EUROPA",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS"
}
const titan = {
    title: "TITAN",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS"
}
const planet = computed(() =>
{
    switch (state.value)
    {
        default: {
            return moon
        }
        case 2: {
            return mars
        }
        case 3: {
            return europa
        }
        case 4: {
            return titan
        }
    }
})

</script>

<template>
    <div class="flex justify-between pl-[10.375rem] pr-[10.188rem] mt-[4.75rem] mb-[7rem]">
        <div class="">
            <h5 class="text-white">
                <span class="text-white font-bold opacity-[0.25] mr-4">01</span>
                PICK YOUR DESTINATION
            </h5>
            <div class="relative mt-[6.063rem] ml-[3.375rem] w-[27.813rem] h-[27.813rem]">
                <div class="absolute top-0 left-0 transition-all duration-500 overflow-hidden rounded-full"
                    :class="(state == 1) ? 'translate-x-0' : '-translate-x-[50rem]  opacity-0'">
                    <img class="rotating" src="../assets/Moon.png" alt="Moon">
                    <div
                        class="absolute top-[2rem] left-[0.5rem] w-[60rem] h-[60rem] blur-[4rem] rounded-full bg-space-black">
                    </div>
                </div>
                <div class="absolute top-0 left-0 transition-all duration-500 overflow-hidden rounded-full"
                    :class="(state == 2) ? 'translate-x-0' : '-translate-x-[50rem]  opacity-0'">
                    <img class="rotating" src="../assets/Mars.png" alt="Mars">
                    <div
                        class="absolute top-[2rem] left-[0.5rem] w-[60rem] h-[60rem] blur-[4rem] rounded-full bg-space-black">
                    </div>
                </div>
                <div class="absolute top-0 left-0 transition-all duration-500 overflow-hidden rounded-full"
                    :class="(state == 3) ? 'translate-x-0' : '-translate-x-[50rem]  opacity-0'">
                    <img class="rotating" src="../assets/Europa.png" alt="Europa">
                    <div
                        class="absolute top-[2rem] left-[0.5rem] w-[60rem] h-[60rem] blur-[4rem] rounded-full bg-space-black">
                    </div>
                </div>
                <div class="absolute top-0 left-0 transition-all duration-500 overflow-hidden rounded-full"
                    :class="(state == 4) ? 'translate-x-0' : '-translate-x-[50rem]  opacity-0'">
                    <img class="rotating" src="../assets/Titan.png" alt="Titan">
                    <div
                        class="absolute top-[2rem] left-[0.5rem] w-[60rem] h-[60rem] blur-[4rem] rounded-full bg-space-black">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul class="flex gap-[2.25rem] text-lg font-normal text-space-blue leading-[1.2rem] font-Condensed h-[2.125rem] mt-[6.125rem] relative"
                style="letter-spacing: 0.169rem">
                <div class="absolute bottom-0 h-[3px] bg-white transition-all"
                    :style="`width: ${borderWidth}rem; left: ${borderLeft}rem;`"></div>
                <li @click="state = 1" :class="(state == 1) ? 'text-white' : ''"
                    class="cursor-pointer relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
                    MOON</li>
                <li @click="state = 2" :class="(state == 2) ? 'text-white' : ''"
                    class="cursor-pointer relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
                    MARS</li>
                <li @click="state = 3" :class="(state == 3) ? 'text-white' : ''"
                    class="cursor-pointer relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
                    EUROPA</li>
                <li @click="state = 4" :class="(state == 4) ? 'text-white' : ''"
                    class="cursor-pointer relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
                    TITAN</li>
            </ul>
            <h2 class="mt-[2.313rem] text-white">
                {{ planet.title }}
            </h2>
            <p class="mt-[0.875rem] w-[27.75rem] font-Barlow font-normal text-lg leading-[2rem] text-space-blue">
                {{ planet.info }}
            </p>
            <hr class="mt-[3.375rem] border-t-[1px] border-[#383B4B]" />
            <ul class="mt-[1.75rem] font-normal flex gap-[5rem]">
                <li>
                    <div class="text-sm leading-[1.05rem] text-space-blue font-Condensed"
                        style="letter-spacing: 0.148rem">AVG.
                        DISTANCE</div>
                    <div class="text-[1.75rem] leading-[2.006rem] font-Bellefair mt-3 text-white">{{ planet.distance }}
                    </div>
                </li>
                <li>
                    <div class="text-sm leading-[1.05rem] text-space-blue font-Condensed"
                        style="letter-spacing: 0.148rem">EST. TRAVEL TIME</div>
                    <div class="text-[1.75rem] leading-[2.006rem] font-Bellefair mt-3 text-white">{{ planet.time }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.rotating {
    animation: spin 60s linear infinite;
}



@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>