<template>
  <div class="listSneakers">
    <h2 class="text-center">Кросовки</h2>
    <ListSneakers/>
  </div>
</template>

<script>
import ListSneakers from './ListSneakers.vue'
export default {
  components:{
    ListSneakers
  }
}

</script>

<style scoped lang="scss">
.listSneakers {
  padding-top: 80px;
  min-height: 100vh;
}
</style>