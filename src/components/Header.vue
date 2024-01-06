<template>
  <header class="header">
    <div class="row d-flex justify-content-between align-items-center p-3">
      <router-link to="/" class="col-auto link"><img src="../assets/logo.png" alt="logo" class="logo"></router-link>

      <nav class="col-auto">
        <router-link to="/" class="px-3 link">главная</router-link>
        <router-link to="/list-sneakers" class="px-3 link">кросы</router-link>
      </nav>

      <div class="col-auto">
          <router-link to="/list-sneakers" class="px-3 link"><i class="bi bi-box-arrow-in-right"/></router-link>
          <router-link to="/list-sneakers" class="px-3 link"><i class="bi bi-list"></i></router-link>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style scoped lang="scss">
.header{
  position: fixed;
  top: 10px;
  right: 10px;
  left: 10px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  .logo{
    width: 100px;
  }
  .link{
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }

}
</style>