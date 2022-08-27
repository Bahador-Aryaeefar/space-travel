<script setup>
import { ref, computed } from "vue"

const state = ref(0)

setTimeout(() =>
{
    state.value = 1
}, 10);

const vehicle = {
    title: "LAUNCH VEHICLE",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
}
const port = {
    title: "SPACEPORT",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
}
const capsule = {
    title: "SPACE CAPSULE",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."

}

const technology = computed(() =>
{
    switch (state.value)
    {
        default: {
            return vehicle
        }
        case 2: {
            return port
        }
        case 3: {
            return capsule
        }
    }
})

</script>

<template>
    <div class="pl-[10.375rem] w-full max-w-[100rem] mx-auto flex justify-between
    tablet:px-0 tablet:flex-col">
        <div>
            <h5 class="text-white mt-[4.75rem] tablet:ml-[2.5rem] tablet:tablet:mt-10">
                <span class="text-white font-bold opacity-[0.25] mr-4">03</span>
                SPACE LAUNCH 101
            </h5>
            <div
                class="w-full overflow-hidden max-w-[48rem] h-[19.375rem] mx-auto relative mt-[3.75rem] hidden tablet:block">
                <img class="w-full rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 1) ? 'translate-x-0' : 'translate-x-[50rem]  opacity-0'"
                    src="../assets/mobile-vehicle.jpg" alt="">
                <img class="w-full rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 2) ? 'translate-x-0' : 'translate-x-[50rem]  opacity-0'"
                    src="../assets/mobile-port.jpg" alt="">
                <img class="w-full rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 3) ? 'translate-x-0' : 'translate-x-[50rem]  opacity-0'"
                    src="../assets/mobile-capsule.jpg" alt="">
            </div>
            <div class="flex mt-[8.563rem] tablet:flex-col tablet:mt-[3.5rem] tablet:mb-10">
                <div class="flex flex-col gap-8 mb-[13.313rem] text-[2rem] leading-[2.292rem] text-white font-Bellefair 
                    tablet:flex-row tablet:justify-center tablet:mb-[2.75rem]">
                    <button :class="(state == 1) ? 'bg-white text-space-black' : 'border-[1px]'" class="w-20 h-20 rounded-full border-[rgba(255,255,255,0.25)] hover:border-white
                        tablet:w-[3.75rem] tablet:h-[3.75rem] tablet:text-[1.5rem] tablet:leading-[1.719rem]"
                        @click="state = 1">
                        1
                    </button>
                    <button :class="(state == 2) ? 'bg-white text-space-black' : 'border-[1px]'" class="w-20 h-20 rounded-full border-[1px] border-[rgba(255,255,255,0.25)] hover:border-white
                        tablet:w-[3.75rem] tablet:h-[3.75rem] tablet:text-[1.5rem] tablet:leading-[1.719rem]"
                        @click="state = 2">
                        2
                    </button>
                    <button :class="(state == 3) ? 'bg-white text-space-black' : 'border-[1px]'" class="w-20 h-20 rounded-full border-[1px] border-[rgba(255,255,255,0.25)] hover:border-white
                        tablet:w-[3.75rem] tablet:h-[3.75rem] tablet:text-[1.5rem] tablet:leading-[1.719rem]"
                        @click="state = 3">
                        3
                    </button>
                </div>
                <div class="ml-20 w-[29.375rem] tablet:mx-auto tablet:text-center">
                    <p class="text-lg font-normal text-space-blue leading-[1.2rem] font-Condensed"
                        style="letter-spacing: 0.169rem">THE TERMINOLOGY…</p>
                    <h3 class="text-white mt-3 tablet:mt-4">{{ technology.title }}</h3>
                    <p class="mt-4 w-[27.75rem] font-Barlow font-normal text-lg leading-[2rem] text-space-blue
                    tablet:text-base tablet:leading-[1.75rem]">
                        {{ technology.info }}
                    </p>
                </div>
            </div>
        </div>
        <div class="grow flex items-center justify-center overflow-hidden tablet:hidden">
            <div class="relative w-[32.188rem] h-[32.938rem]">
                <img class="rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 1) ? 'translate-x-0' : 'translate-x-[50rem]  opacity-0'"
                    src="../assets/Vehicle.jpg" alt="">
                <img class="rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 2) ? 'translate-x-0' : 'translate-x-[50rem]  opacity-0'" src="../assets/Port.jpg"
                    alt="">
                <img class="rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 3) ? 'translate-x-0' : 'translate-x-[50rem]  opacity-0'"
                    src="../assets/Capsule.jpg" alt="">
            </div>
        </div>
    </div>
</template>