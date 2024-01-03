<template>
  <div class="scene">
    <Spline
        :scene="scene"

    />
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import Spline from 'spline-vue/v3';

export default defineComponent({
  name: 'App',
  components: {
    Spline,
  },
  data() {
    return {
      scene: 'https://prod.spline.design/5N00RXIsFyO9MIFf/scene.splinecode',
    };
  },
});
</script>

<style scoped lang="scss">

</style>

