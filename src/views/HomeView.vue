<script setup>
</script>

<template>
  <div class="flex justify-between mt-[15.625rem] pl-[10.438rem] pr-[10.313rem] mb-[8.25rem]">
    <div class="w-[28.125rem]">
      <h5 class="text-space-blue">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 class="text-white mt-6">SPACE</h1>
      <p class="mt-6 font-Barlow font-normal text-lg leading-[2rem] text-space-blue">Let’s face it; if you want to go to
        space, you might
        as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because
        we’ll give you a truly out of this world experience!</p>
    </div>

    <button @click="$emit('explore')"
      class="w-[17.125rem] h-[17.125rem] rounded-full bg-white font-Bellefair text-[2rem] z-[2] mt-[6.75rem] relative
    after:w-[28.125rem] after:h-[28.125rem] after:absolute after:-top-[5.5rem] after:-left-[5.5rem] after:bg-white after:opacity-10 after:rounded-full after:z-[1] after:pointer-events-none after:scale-0 hover:after:scale-100 after:transition-all">
      EXPLORE
    </button>
  </div>
</template>