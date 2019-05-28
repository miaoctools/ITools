<template>
  <div class="home">
<!-- 
    <router-link to="/index">One</router-link>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <x-header>iTools</x-header>
    <tabbar>
      <tabbar-item selected >
        <img slot="icon" src="../assets/img/detail.svg">
        <span slot="label">iTools</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/img/person.svg">
        <span slot="label">detail</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import { XHeader, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'home',
  components: {
    Tabbar,
    TabbarItem,
/*     HelloWorld, */
    XHeader
  }
}
</script>
<style lang="scss">
$backColor: #49AAEE;
$headFontColor:#ffffff;
.home{
  /*--------------修改标签样式---------------*/
  p{
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
  /*-------------修改vux封装样式------------*/
  .vux-header{
    background-color: $backColor;
  }
  .vux-header .vux-header-left a{
    color: $headFontColor;
  }
  .vux-header .vux-header-left .left-arrow:before{
    border-color: $headFontColor;
  }
}
</style>


