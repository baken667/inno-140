import { defineStore } from 'pinia'

const useVideo = defineStore('video', {
  state: () => ({
    isPlay: false,
    location: null,
    rate: 1,
    muted: false,
    locations: [
      {
        title: 'Универсам',
        src: '/v1.mp4'
      },
      {
        title: 'Арай',
        src: '/v2.mp4'
      },
      {
        title: 'Левый берег',
        src: '/v3.mp4'
      }
    ],
    autoNext: false,
    currentTime: 0,
    duration: 0
  }),
  actions: {
    toggle() {
      this.isPlay = !this.isPlay
    },
    setSrc(src) {
      this.src = src
    }
  },
  getters: {
    currentVidIndex: (state) => {
      if (!state.location) return null

      return state.locations.findIndex((item) => item.src === state.location.src)
    },
    nextVidIndex: (state) => {
      if (!state.location) return 0
      const currentIndex = state.locations.findIndex((item) => item.src === state.location.src)
      if (!state.location || !state.locations[currentIndex + 1]) return 0
      return currentIndex + 1
    }
  }
})

export default useVideo
