<script setup>
import useVideo from '@/stores/video.store'
import { onMounted, ref } from 'vue'
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

const vid = ref()

function playVideo() {
  vid.value.playVideo()
}
function pauseVideo() {
  vid.value.pauseVideo()
}
</script>
<template>
  <Transition name="controller-drawer">
    <div
      v-if="isOpen"
      class="bg-neutral-950/70 px-8 py-6 fixed max-w-lg w-full right-0 bottom-0 z-50"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-4 text-white">
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
          <button
            @click="playVideo"
            class="text-white bg-neutral-100 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <svg
              class="fill-neutral-950"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                fill="current"
                d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"
              />
            </svg>
          </button>
          <button
            @click="pauseVideo"
            class="text-white bg-neutral-100 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <svg
              class="fill-neutral-950"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                fill="current"
                d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z"
              />
            </svg>
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
  <YouTube
    class="hidden"
    src="https://www.youtube.com/embed/jfKfPfyJRdk?si=MavHzkfecOp8emho"
    ref="vid"
  ></YouTube>
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
