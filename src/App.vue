<template>
  <div id="app">
      <!-- 使用transiton来规定页面切换时候的样式 ，可以 把router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的-->
      <transition name="slide-left">
        <router-view></router-view>
      </transition>  
  </div>
</template>
<script>
/***vuex状态管理器**/
import { mapState,mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  //提供方法
  computed: {
      ...mapState({
          showTabbar: state => state.common.showTabbar
      }),
      ...mapGetters([
          'showToast',
          'showAlert'
      ])
  }
}
</script>
<style lang="less">
/*~:webpack打包编译时指代当前项目下node_modules包里的样式文件*/
@import '~vux/src/styles/reset.less';
/*引入适配的less*/
@import './styles/rem.less';
.html-font-size(@design-font-size, @design-width);
  /*左滑动效*/
   .slide-left-enter-active {
     animation: slideLeft .3s;
   }
  /****自定义动画**/
  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);/*横坐标,纵坐标,z坐标*/
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
