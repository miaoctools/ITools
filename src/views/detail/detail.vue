<template>
    <div class="detail">
        <x-header>
            <span>Detail</span>
            <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
        <grid :cols="3" :show-lr-borders="false">
            <grid-item v-for="(value, i) in iconList" :key="i" :link="{ path: value.router }">
                <svg class="icon" slot="icon" aria-hidden="true">
                  <use :xlink:href="value.icon"></use>
                </svg>
                <span slot="label">{{value.name}}</span>
            </grid-item>
        </grid>
        <tabbar>
            <tabbar-item link="/">
                <img slot="icon" src="../../assets/img/detail.svg">
                <span slot="label">iTools</span>
            </tabbar-item>
            <tabbar-item selected link="/detail">
                <img slot="icon" src="../../assets/img/person.svg">
                <span slot="label">detail</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import { Grid, GridItem, GroupTitle, XHeader, Tabbar, TabbarItem } from 'vux'
export default {
    name: 'detail',
    components: {
        Grid,
        GridItem,
        GroupTitle,
        Tabbar,
        TabbarItem,
        XHeader
    },
    data(){
      return {
        iconList:[]
      }
    },
    created(){
      this.axios({
        method: 'get',
        url: '/json/detail.json',
        dataType: "json",
        crossDomain: true,
        cache: false
      }).then(res => {
        this.iconList=res.data;
      }).catch(error => {
        console.log('异常');
      })
    },
    methods:{

    }
}
</script>
<style lang="scss">
$backColor: #49AAEE;
$headFontColor:#ffffff;
.detail{
  /*--------------修改标签样式---------------*/
  position: relative;
  p{
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
  /*-------------修改vux封装样式------------*/
  .vux-header{
    position: fixed;
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
  a{
    text-decoration: none;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
   }
   .weui-grids {
    background-color: #fff;
   }
   .weui-tabbar {
    position:fixed;
  }
  .weui-grids {
    margin-bottom: 65px;
    padding-top: 46px;
  }
}
</style>
