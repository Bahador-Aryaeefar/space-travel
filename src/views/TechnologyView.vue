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
    <div class="pl-[10.375rem] flex justify-between">
        <div>
            <h5 class="text-white mt-[4.75rem]">
                <span class="text-white font-bold opacity-[0.25] mr-4">03</span>
                SPACE LAUNCH 101
            </h5>
            <div class="flex mt-[8.563rem]">
                <div
                    class="flex flex-col gap-8 mb-[13.313rem] text-[2rem] leading-[2.292rem] text-white font-Bellefair">
                    <button :class="(state == 1) ? 'bg-white text-space-black' : 'border-[1px]'"
                        class="w-20 h-20 rounded-full border-[rgba(255,255,255,0.25)] hover:border-white"
                        @click="state = 1">
                        1
                    </button>
                    <button :class="(state == 2) ? 'bg-white text-space-black' : 'border-[1px]'"
                        class="w-20 h-20 rounded-full border-[1px] border-[rgba(255,255,255,0.25)] hover:border-white"
                        @click="state = 2">
                        2
                    </button>
                    <button :class="(state == 3) ? 'bg-white text-space-black' : 'border-[1px]'"
                        class="w-20 h-20 rounded-full border-[1px] border-[rgba(255,255,255,0.25)] hover:border-white"
                        @click="state = 3">
                        3
                    </button>
                </div>
                <div class="ml-20 w-[29.375rem]">
                    <p class="text-lg font-normal text-space-blue leading-[1.2rem] font-Condensed"
                        style="letter-spacing: 0.169rem">THE TERMINOLOGY…</p>
                    <h3 class="text-white mt-3">{{ technology.title }}</h3>
                    <p class="mt-4 w-[27.75rem] font-Barlow font-normal text-lg leading-[2rem] text-space-blue">
                        {{ technology.info }}
                    </p>
                </div>
            </div>
        </div>
        <div class="grow flex items-center justify-center overflow-hidden">
            <div class="relative w-[32.188rem] h-[32.938rem]">
                <img class="rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 1) ? 'translate-x-0' : 'translate-x-[50rem]'" src="../assets/Vehicle.jpg" alt="">
                <img class="rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 2) ? 'translate-x-0' : 'translate-x-[50rem]'" src="../assets/Port.jpg" alt="">
                <img class="rounded-xl absolute top-0 left-0 transition-all duration-500"
                    :class="(state == 3) ? 'translate-x-0' : 'translate-x-[50rem]'" src="../assets/Capsule.jpg" alt="">
            </div>
        </div>
    </div>
</template>