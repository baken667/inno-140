<script setup>
import { onMounted, ref, watch } from 'vue'
import { useMediaControls } from '@vueuse/core'
import useVideo from '@/stores/video.store'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const videoStore = useVideo()
const vid = ref()

const { playing, rate, muted, currentTime, duration, waiting, seeking } = useMediaControls(vid, {
  src: props.src
})

onMounted(() => {
  if (videoStore.autoNext) {
    playing.value = videoStore.isPlay
  }
  watch(
    () => currentTime.value,
    (value) => {
      videoStore.currentTime = value
    }
  )

  watch(
    () => duration.value,
    (value) => {
      videoStore.duration = value
    }
  )

  watch(
    () => videoStore.isPlay,
    (value) => {
      console.log(value)
      playing.value = value
    }
  )

  watch(
    () => videoStore.rate,
    (value) => {
      rate.value = value
    }
  )

  watch(
    () => videoStore.muted,
    (value) => {
      muted.value = value
    }
  )
})
</script>
<template>
  <div class="relative w-full h-full flex items-center justify-center bg-neutral-500">
    <div
      v-if="waiting || seeking"
      class="w-1/4 aspect-square h-auto rounded-full border-4 absolute border-transparent border-t-white animate-spin"
    ></div>
    <video
      ref="vid"
      class="w-full h-full object-cover object-center video-js"
      webkit-playsinline
      playsinline
    ></video>
  </div>
</template>
