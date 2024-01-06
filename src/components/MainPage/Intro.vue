<template>
  <div class="intro">
    <video ref="videoRef" src="../../assets/video.mp4" muted autoplay class="w-100 video"></video>
    <div class="video_buttons">
      <button @click="toggleMute">
        <i :class="isVolume ? 'bi bi-volume-up' : 'bi bi-volume-mute-fill'"/>
      </button>
      <button @click="togglePlayPause">
        <i :class="isPaused ? 'bi bi-play' : 'bi bi-pause-fill'"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPaused: false,
      isVolume: true,
    };
  },
  methods: {
    toggleMute() {
      const video = this.$refs.videoRef;
      video.muted = !video.muted;
      this.isVolume = video.muted;
    },
    togglePlayPause() {
      const video = this.$refs.videoRef;
      video.paused ? video.play() : video.pause();
      this.isPaused = video.paused;
    },
  },
};
</script>

<style scoped lang="scss">
.intro {
  position: relative;
  video{
    border-radius: 20px;
  }
  .video_buttons{
    position: absolute;
    bottom: 40px;
    right: 40px;
    button{
      border: none;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      margin: 10px;
    }
  }
}
</style>
