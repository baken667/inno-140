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

const { playing, rate, muted, currentTime, duration } = useMediaControls(vid, {
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
  <div class="relative w-full h-full">
    <video
      ref="vid"
      class="w-full h-full object-cover object-center video-js"
      webkit-playsinline
      playsinline
    ></video>
  </div>
</template>
