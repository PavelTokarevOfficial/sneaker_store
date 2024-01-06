<template>
  <p>{{this.item.id}}</p>
  <p>{{this.item.name}}</p>
  <p>{{this.item.price}}</p>
  <p>{{this.item.type}}</p>
  <img :src="this.item.url_img[0]" alt="">

</template>

<script>
export default {
  props:{
    item: Object,
  },
  created() {
    console.log(this.item)
  }

}
</script>

<style scoped lang="scss">

</style>