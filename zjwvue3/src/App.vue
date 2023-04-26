<template>
  <div>
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
  
  <!-- <router-view/> -->
</template>

<script>
import Header from '@/components/header/header.vue'
import Tab from '@/components/tab/tab'
  export default {
    components:{
      MHeader:Header,
      Tab
    }
  }
</script>
<style lang="scss">

</style>


