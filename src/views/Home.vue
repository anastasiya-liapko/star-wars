<template>
  <div class="home">
    <app-preloader v-if="loading"></app-preloader>
    <app-search></app-search>
    <app-cards></app-cards>
  </div>
</template>

<script>
// import axios from 'axios'
import Preloader from '@/components/Preloader.vue'
import Search from '@/components/Search.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  data () {
    return {
      loading: false
    }
  },
  created () {
    // var context = this

    // axios.interceptors.request.use(config => {
    //   // perform a task before the request is sent
    //   console.log('Request was sent', config);
    //   context.loading = true
    //   return config;
    // }, error => {
    //   // handle the error
    //   return Promise.reject(error);
    // });

    // axios.interceptors.response.use((response) => {
    //   // do something with the response data
    //   console.log('Response was received');
    //   context.loading = false
    //   return response;
    // }, error => {
    //   // handle the response error
    //   return Promise.reject(error);
    // });
  },
  components: {
    'app-preloader': Preloader,
    'app-search': Search,
    'app-cards': Cards
  }
}
</script>

<style lang="sass">
.home
  flex-grow: 1
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  min-height: calc(100vh - 240px)
  padding: 45px 24px 96px
  border: 1px solid red

@media (min-width: 768px)
  .home
    min-height: calc(100vh * 2 / 3)
    padding-bottom: 9.444vw

@media (min-width: 1440px)
  .home
    min-height: calc(100vh * 2 / 3)
    padding-bottom: 136px
</style>
