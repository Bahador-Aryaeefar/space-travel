<script setup>
</script>

<template>
  <div class="flex justify-between w-full max-w-[100rem] mx-auto mt-[15.625rem] pl-[10.438rem] pr-[10.313rem] mb-[8.25rem]
    tablet:flex-col tablet:items-center tablet:mt-[6.625rem]">
    <div class="w-[28.125rem]">
      <h5 class="text-space-blue tablet:text-center">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 class="text-white mt-6 tablet:text-center">SPACE</h1>
      <p class="mt-6 font-Barlow font-normal text-lg leading-[2rem] text-space-blue 
      tablet:text-center tablet:text-base tablet:leading-[1.75rem]">Let’s face it;
        if you want to go to
        space, you might
        as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because
        we’ll give you a truly out of this world experience!</p>
    </div>

    <button style="letter-spacing: 2px;" @click="$emit('explore')" class="w-[17.125rem] h-[17.125rem] rounded-full bg-white font-Bellefair text-[2rem] z-[2] mt-[6.75rem] relative
    after:w-[28.125rem] after:h-[28.125rem] after:absolute after:-top-[5.5rem] after:-left-[5.5rem] after:bg-white after:opacity-10 after:rounded-full after:z-[1] after:pointer-events-none after:scale-0 hover:after:scale-100 after:transition-all
    tablet:w-[15.125rem] tablet:h-[15.125rem] tablet:after:w-[26.125rem] tablet:after:h-[26.125rem]">
      EXPLORE
    </button>
  </div>
</template>