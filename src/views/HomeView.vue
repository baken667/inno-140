<script setup>
import AppController from '@/components/AppController.vue'
import LocationTitle from '@/components/LocationTitle.vue'
import VideoContainer from '@/components/VideoContainer.vue'
import useVideo from '@/stores/video.store'
import { watch, ref } from 'vue'

const videoStore = useVideo()

watch(
  () => videoStore.location,
  () => {
    if (videoStore.autoNext) return

    videoStore.isPlay = false
  }
)

watch(
  () => videoStore.currentTime,
  (value) => {
    if (videoStore.autoNext && value === videoStore.duration) {
      videoStore.location = videoStore.locations[videoStore.nextVidIndex]
      videoStore.isPlay = true
    }
  }
)

const controllerDrawerState = ref(true)
</script>

<template>
  <LocationTitle @drawer-toggle="controllerDrawerState = !controllerDrawerState" />
  <AppController :isOpen="controllerDrawerState" />
  <VideoContainer
    :key="videoStore.location?.src"
    v-if="videoStore.location?.src"
    :src="videoStore.location?.src"
  />
</template>
