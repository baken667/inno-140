<script setup>
import useVideo from '@/stores/video.store'
import { onMounted } from 'vue'
import PauseIcon from './icons/PauseIcon.vue'
import PlayIcon from './icons/PlayIcon.vue'
import VolumeHigh from './icons/VolumeHigh.vue'
import VolumeOff from './icons/VolumeOff.vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const videoStore = useVideo()

onMounted(() => {
  videoStore.location = videoStore.locations[0]
})
</script>
<template>
  <Transition name="controller-drawer">
    <div
      v-if="isOpen"
      class="bg-neutral-950/70 px-8 py-6 fixed max-w-lg w-full right-0 bottom-0 z-50"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-4">
          <button
            @click="videoStore.isPlay = !videoStore.isPlay"
            class="text-white bg-neutral-100 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <PauseIcon class="fill-neutral-950" v-if="videoStore.isPlay" />
            <PlayIcon class="fill-neutral-950" v-else />
          </button>
          <button
            @click="videoStore.muted = !videoStore.muted"
            class="text-white bg-neutral-100 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <VolumeOff class="fill-neutral-950" v-if="videoStore.muted" />
            <VolumeHigh class="fill-neutral-950" v-else />
          </button>
        </div>
        <div>
          <label class="flex flex-col gap-1">
            <span class="text-white">Орынды таңдаңыз:</span>
            <select
              v-model="videoStore.location"
              name="location"
              id="location"
              class="w-full block font-medium bg-neutral-200 rounded-sm focus:outline-none px-2 py-1 text-neutral-900"
            >
              <option v-for="(location, i) in videoStore.locations" :key="i" :value="location">
                {{ location.title }}
              </option>
            </select>
          </label>
        </div>
        <div>
          <label class="flex flex-col gap-1">
            <span class="text-white">Көліктің жылдамдығы:</span>
            <select
              v-model="videoStore.rate"
              name="video-rate"
              id="video-rate"
              class="w-full block font-medium bg-neutral-200 rounded-sm focus:outline-none px-2 py-1 text-neutral-900"
            >
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
              <option value="5">5x</option>
            </select>
          </label>
        </div>
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="videoStore.autoNext" class="w-4 h-4" />
            <span class="text-white">Автоматты ауыстыру</span>
          </label>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style>
.controller-drawer-enter-active,
.controller-drawer-leave-active {
  transition: opacity 0.3s ease;
}

.controller-drawer-enter-from,
.controller-drawer-leave-to {
  opacity: 0;
}
</style>
