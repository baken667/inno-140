<script setup>
import useVideo from '@/stores/video.store'

const videoStore = useVideo()

defineEmits(['drawer-toggle'])
</script>
<template>
  <div
    class="fixed top-0 left-0 w-screen w-full z-40 title-container px-4 py-4 flex flex-row justify-between"
  >
    <div>
      <h1 class="text-white font-bold text-2xl lg:text-3xl">{{ videoStore.location?.title }}</h1>
    </div>

    <button
      @click="$emit('drawer-toggle')"
      class="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center group z-50"
    >
      <svg
        class="w-5 h-5 fill-neutral-500 group-hover:fill-neutral-900 transition-colors duration-200"
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <path
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
        />
      </svg>
    </button>
  </div>
</template>
<style scoped>
.title-container {
  background: rgb(10, 10, 10);
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.8) 10%, rgba(0, 212, 255, 0) 100%);
}
</style>
