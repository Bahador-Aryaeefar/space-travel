<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'

const loaded = ref(false)

window.addEventListener('load', () =>
{
  loaded.value = true
})

const router = useRouter()
router.push('/')


const borderState = ref(1)
const borderWidth = computed(() =>
{
  switch (borderState.value)
  {
    case 1: {
      return "w-[4.6rem] tablet:w-[2.25rem]"
    }
    case 2: {
      return "w-[8.35rem] tablet:w-[5.438rem]"
    }
    case 3: {
      return "w-[4.65rem] tablet:w-[2.3rem]"
    }
    default: {
      return "w-[8.4rem] tablet:w-[5.35rem]"
    }
  }
})
const borderLeft = computed(() =>
{
  switch (borderState.value)
  {
    case 1: {
      return "left-0"
    }
    case 2: {
      return "left-[7.65rem] tablet:left-[4.5rem]"
    }
    case 3: {
      return "left-[19.1rem] tablet:left-[12.188rem]"
    }
    default: {
      return "left-[26.863rem] tablet:left-[16.738rem]"
    }
  }
})
const backgroundImage = computed(() =>
{
  switch (borderState.value)
  {
    case 1: {
      return 'home'
    }
    case 2: {
      return 'destination'
    }
    case 3: {
      return 'crew'
    }
    default: {
      return 'technology'
    }
  }
})

function explore()
{
  borderState.value = 2
  router.push("/destination")
}

</script>

<template>
  <div class="w-0 h-0 hidden">
    <img src="./assets/Destination.jpg" alt="">
    <img src="./assets/Crew.jpg" alt="">
    <img src="./assets/Technology.jpg" alt="">
    <img src="./assets/Moon.png" alt="">
    <img src="./assets/Mars.png" alt="">
    <img src="./assets/Europa.png" alt="">
    <img src="./assets/Titan.png" alt="">
    <img src="./assets/Commander.png" alt="">
    <img src="./assets/Specialist.png" alt="">
    <img src="./assets/Pilot.png" alt="">
    <img src="./assets/Engineer.png" alt="">
    <img src="./assets/Vehicle.jpg" alt="">
    <img src="./assets/Port.jpg" alt="">
    <img src="./assets/Capsule.jpg" alt="">
    <img src="./assets/tablet-home.jpg" alt="">
    <img src="./assets/tablet-destination.jpg" alt="">
    <img src="./assets/tablet-crew.jpg" alt="">
    <img src="./assets/tablet-technology.jpg" alt="">
    <img src="./assets/mobile-vehicle.jpg" alt="">
    <img src="./assets/mobile-port.jpg" alt="">
    <img src="./assets/mobile-capsule.jpg" alt="">
  </div>
  <div class="h-[100vh] absolute top-0 left-0 w-full overflow-auto" :class="backgroundImage">
    <nav class="mx-auto w-full max-w-[100rem] flex justify-between items-center h-[6rem] pl-[3.438rem] mt-10 relative
    tablet:mt-0 tablet:pl-10">
      <div class="h-[2px] w-[50%] absolute top-[50%] left-[10.438rem] bg-white opacity-[0.25] tablet:hidden"></div>

      <svg class="w-12 h-12 relative" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17" />
      </svg>

      <div class="h-full bg-[rgba(255,255,255,0.04)] w-[calc(100%-3rem)] max-w-[51.875rem] pr-[1.313rem] backdrop-blur-[81.5485px] text-lg font-normal text-white leading-[1.2rem] font-Condensed flex justify-center space
      after:h-[2px] after:w-[50px] after:absolute after:top-[50%] after:left-0 after:bg-white after:opacity-[0.25]
      tablet:text-sm tablet:w-fit tablet:px-12 tablet:after:w-0">
        <div class="flex gap-[3.125rem] h-full relative tablet:gap-[2.25rem]">
          <div class="h-[3px] absolute bottom-0 bg-white transition-all" :class="`${borderWidth} ${borderLeft}`">
          </div>
          <router-link to="/" @click="borderState = 1"
            class="h-full pt-[2.438rem] relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
            <span class="font-bold tablet:hidden">00</span>
            HOME
          </router-link>
          <router-link to="/destination" @click="borderState = 2"
            class="h-full pt-[2.438rem] relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
            <span class="font-bold tablet:hidden">01</span>
            DESTINATION
          </router-link>
          <router-link to="/crew" @click="borderState = 3"
            class="h-full pt-[2.438rem] relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
            <span class="font-bold tablet:hidden">02</span>
            CREW
          </router-link>
          <router-link to="/technology" @click="borderState = 4"
            class="h-full pt-[2.438rem] relative after:h-[3px] after:w-full after:bg-white after:absolute after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-50">
            <span class="font-bold tablet:hidden">03</span>
            TECHNOLOGY
          </router-link>
        </div>
      </div>
    </nav>
    <router-view @explore="explore" />
  </div>
  <div
    class="h-[100vh] w-full absolute top-0 left-0 bg-space-black z-30 flex items-center justify-center gap-1 text-[4rem] font-Bellefair text-white waviy"
    :class="(loaded) ? 'hidden' : ''">
    <span style="--i:1">L</span>
    <span style="--i:2">O</span>
    <span style="--i:3">A</span>
    <span style="--i:4">D</span>
    <span style="--i:5">I</span>
    <span style="--i:6">N</span>
    <span style="--i:7">G</span>
  </div>
</template>

<style>
.home {
  background-image: url('./assets/Home.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.destination {
  background-image: url('./assets/Destination.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.crew {
  background-image: url('./assets/Crew.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.technology {
  background-image: url('./assets/Technology.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.waviy span {
  animation: waviy 1.8s infinite;
  animation-delay: calc(.2s * var(--i));
}

@keyframes waviy {

  20% {
    transform: translateY(-20px)
  }

  40% {
    transform: translateY(0)
  }

}

.space {
  letter-spacing: 0.169rem;
}

#app {}

h1 {
  font-family: 'Bellefair';
  font-weight: 400;
  font-size: 9.375rem !important;
  line-height: 10.75rem !important;
}

h2 {
  font-family: 'Bellefair';
  font-weight: 400;
  font-size: 6.25rem !important;
  line-height: 7.163rem !important;
}

h3 {
  font-family: 'Bellefair';
  font-weight: 400;
  font-size: 3.5rem !important;
  line-height: 4.011rem !important;
}

h4 {
  font-family: 'Bellefair';
  font-weight: 400;
  font-size: 2rem !important;
  line-height: 2.292rem !important;
}

h5 {
  font-family: 'Condensed';
  font-weight: 400;
  font-size: 1.75rem !important;
  line-height: 2.125rem !important;
  letter-spacing: 0.295rem;
}

@media(max-width: 1330px) {
  .home {
    background-image: url('./assets/tablet-home.jpg');
    background-position: left bottom;
  }

  .destination {
    background-image: url('./assets/tablet-destination.jpg');
  }

  .crew {
    background-image: url('./assets/tablet-crew.jpg');
  }

  .technology {
    background-image: url('./assets/tablet-technology.jpg');
  }

  .space {
    letter-spacing: 0.148rem;
  }

  h5 {
    font-size: 1.25rem !important;
    line-height: 1.5rem !important;
    letter-spacing: 0.211rem;
  }

  h1 {
    line-height: 9.375rem !important;
  }

  h2 {
    font-size: 5rem !important;
    line-height: 5.73rem !important;
  }

  h3 {
    font-size: 2.5rem !important;
    line-height: 2.865rem !important;
  }

  h4 {
    font-size: 1.5rem !important;
    line-height: 1.719rem !important;
  }
}
</style>
