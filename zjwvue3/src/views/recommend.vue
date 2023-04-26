<template>
  <div class="home">
    s
  </div>
</template>

<script>
import {getRecommend} from '@/service/recommend.js'

export default {
  name: 'HomeView',
  components: {
  },
  async created(){
    const info = await getRecommend()
  },
  
}
</script>
