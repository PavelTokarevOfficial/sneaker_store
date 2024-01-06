<template>
  <div class="container-fluid px-2 py-2">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  components:{
    Footer,
    Header,
  }
}
</script>

<style lang="scss">
#app{
  min-height: 100vh;
}
</style>

