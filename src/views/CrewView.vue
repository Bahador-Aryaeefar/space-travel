<script setup>
import { ref, computed } from "vue"

const state = ref(0)

setTimeout(() =>
{
    state.value = 1
}, 10);

const commander = {
    title: "COMMANDER ",
    name: "DOUGLAS HURLEY",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
}
const specialist = {
    title: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
}
const pilot = {
    title: "PILOT",
    name: "VICTOR GLOVER",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."

}
const engineer = {
    title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."

}
const crew = computed(() =>
{
    switch (state.value)
    {
        default: {
            return commander
        }
        case 2: {
            return specialist
        }
        case 3: {
            return pilot
        }
        case 4: {
            return engineer
        }
    }
})

</script>


<template>
    <div class="flex w-full max-w-[100rem] mx-auto pl-[10.375rem]
    tablet:px-0 tablet:flex-col">
        <div>
            <h5 class="text-white mt-[4.75rem] tablet:ml-[2.5rem] tablet:tablet:mt-10">
                <span class="text-white font-bold opacity-[0.25] mr-4">02</span>
                MEET YOUR CREW
            </h5>
            <h4 class="text-white opacity-50 mt-[9.625rem] tablet:mt-[3.75rem] tablet:text-center">{{ crew.title }}</h4>
            <h3 class="text-white mt-4 truncate tablet:text-center tablet:mt-2">{{ crew.name }}</h3>
            <p class="mt-[1.688rem] w-[27.75rem] h-[8rem] font-Barlow font-normal text-lg leading-[2rem] text-space-blue
                tablet:text-center tablet:text-base tablet:leading-[1.75rem] tablet:mx-auto tablet:mt-4">
                {{ crew.info }}</p>
            <ul class="mt-[7.5rem] mb-[5.875rem] flex gap-6 tablet:mb-10 tablet:justify-center tablet:mt-10">
                <li class="w-4 h-4 rounded-full bg-white cursor-pointer tablet:w-[0.625rem] tablet:h-[0.625rem]"
                    :class="(state == 1) ? '' : 'opacity-[0.17] hover:opacity-50'" @click="state = 1"></li>
                <li class="w-4 h-4 rounded-full bg-white cursor-pointer tablet:w-[0.625rem] tablet:h-[0.625rem]"
                    :class="(state == 2) ? '' : 'opacity-[0.17] hover:opacity-50'" @click="state = 2"></li>
                <li class="w-4 h-4 rounded-full bg-white cursor-pointer tablet:w-[0.625rem] tablet:h-[0.625rem]"
                    :class="(state == 3) ? '' : 'opacity-[0.17] hover:opacity-50'" @click="state = 3"></li>
                <li class="w-4 h-4 rounded-full bg-white cursor-pointer tablet:w-[0.625rem] tablet:h-[0.625rem]"
                    :class="(state == 4) ? '' : 'opacity-[0.17] hover:opacity-50'" @click="state = 4"></li>
            </ul>
        </div>
        <div class="flex-grow flex justify-center items-end overflow-hidden tablet:w-full">
            <div
                class="relative w-[38.5rem] tablet:w-full h-full tablet:h-[36rem] border-b-[2px] border-[#383B4B] tablet:mx-8">
                <img class="tablet:h-[35.75rem] tablet:right-0 tablet:mx-auto absolute bottom-0 left-0 transition-all duration-500"
                    :class="(state == 1) ? 'translate-x-0' : 'translate-x-[50rem] opacity-0'"
                    src="../assets/Commander.png" alt="Commander">
                <img class="tablet:h-[33.25rem] tablet:right-0 tablet:mx-auto absolute bottom-0 left-0 transition-all duration-500"
                    :class="(state == 2) ? 'translate-x-0' : 'translate-x-[50rem] opacity-0'"
                    src="../assets/Specialist.png" alt="Commander">
                <img class="tablet:h-[33.25rem] tablet:right-0 tablet:mx-auto absolute bottom-0 left-0 transition-all duration-500"
                    :class="(state == 3) ? 'translate-x-0' : 'translate-x-[50rem] opacity-0'" src="../assets/Pilot.png"
                    alt="Commander">
                <img class="tablet:h-[33.25rem] tablet:right-0 tablet:mx-auto absolute bottom-0 left-0 transition-all duration-500"
                    :class="(state == 4) ? 'translate-x-0' : 'translate-x-[50rem] opacity-0'"
                    src="../assets/Engineer.png" alt="Commander">
            </div>
        </div>
    </div>
</template>