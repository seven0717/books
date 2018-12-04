<template>
  <div id="home">
    <navs />
    <div class="nr">
      <router-view />
    </div>
   <footers />
  </div>
</template>

<script>
  import navs from '@/components/navs'
  import footers from '@/components/footers'

  export default {
    name: 'home',
    data() {
      return {
        inputs: ''
      }
    },
    components: {
      navs,
      footers
    }
  }
</script>

<style scoped>
  .nr{
    width: 80%;
    margin: 60px auto;


  }
</style>
