<script>

import HomeBanner from "./components/HomeBanner.vue"
export default {
  components: {
    HomeBanner,
  }
}

</script>

<template>

<HomeBanner/>
<div class="main-wrapper">
  <RouterView />
</div>
  
</template>

<style scoped>
@media screen and (max-width:1200px){
  .main-wrapper{
    margin-top: 6rem;
  }
}
</style>
