<template>
  <div class="home">
<!-- 
    <router-link to="/index">One</router-link>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <x-header>
      <span>iTools</span>
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <swiper auto :aspect-ratio="400/800" dots-position="center" class="rolling">
      <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      <swiper-item class="black"><h2 class="title fadeInUp animated">做些改变</h2></swiper-item>
    </swiper>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p class="pClear">一切为了天明</p></swiper-item>
      <swiper-item><p class="pClear">放弃我们仅有的生命</p></swiper-item>
      <swiper-item><p class="pClear">战胜那可怕的敌人</p></swiper-item>
      <swiper-item><p class="pClear">我们终将胜利</p></swiper-item>
      <swiper-item><p class="pClear">你好啊，小姐姐</p></swiper-item>
      <swiper-item><p class="pClear">苏聪聪妈的智障</p></swiper-item>
    </swiper>
    <tabbar>
      <tabbar-item selected >
        <img slot="icon" src="../../assets/img/detail.svg">
        <span slot="label">iTools</span>
      </tabbar-item>
      <tabbar-item link="/detail">
        <img slot="icon" src="../../assets/img/person.svg">
        <span slot="label">detail</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import { Swiper, SwiperItem, XHeader, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'home',
  components: {
    Tabbar,
    TabbarItem,
    Swiper,
    SwiperItem,
    XHeader
  }
}
</script>
<style lang="scss">
$backColor: #49AAEE;
$headFontColor:#ffffff;
.home{
  /*--------------修改标签样式---------------*/
  position: relative;
  p{
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
  h2{
    color:$headFontColor
  }
  /*-------------修改vux封装样式------------*/
  .vux-header{
    position: fixed;
    top: 0px;
    z-index: 500;
    width: 100%;
    background-color: $backColor;
  }
  .vux-header .vux-header-left a{
    color: $headFontColor;
  }
  .vux-header .vux-header-left .left-arrow:before{
    border-color: $headFontColor;
  }
  .weui-tabbar a{
    text-decoration: none;
  }
  .weui-tabbar{
    position:fixed;
  }
  .weui-grids{
    margin-bottom: 65px;
    padding-top: 46px;
  }
  /*---------滚屏显示---------*/
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #49AAEE;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
  .rolling{
    margin-top:46px;
  }

  /*-------中间数据滚动条-------*/
  .pClear{
    margin-block-start: 0em;
  }
}
</style>


