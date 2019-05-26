<template>
  <div class="home">
    <x-header>123</x-header>
    <router-link to="/index">One</router-link>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { XHeader } from 'vux'
export default {
  name: 'home',
  components: {
    HelloWorld,
    XHeader
  }
}
</script>
