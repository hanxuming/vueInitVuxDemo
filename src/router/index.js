import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import date from '../page/demo/date.vue'
import hasShipped from '../page/children/hasShipped.vue'
import noShipped from '../page/children/noShipped.vue'
import allShipped from '../page/children/allShipped.vue'

//vux使用示例以及常用样式部分--style
import goBack from '../page/style/goBack.vue'

//案例及工程示例部分--demo
import example from '../page/demo/example.vue'
import form from '../page/demo/form.vue'
import vuexTest from '../page/demo/vuexTest.vue'
import toggleClass from '../page/demo/toggleClass.vue'
import allCheck from '../page/demo/allCheck.vue'
import listPage from '../page/demo/listPage.vue'
import scrollTest from '../page/demo/scrollTest.vue'

//常用方法库使用部分--method


//列表页面部分
import index from '../page/list/index.vue'
import demoList from '../page/list/demoList.vue'
import methodList from '../page/list/methodList.vue'
import vuxList from '../page/list/vuxList.vue'

//异步加载组件
// const date = r => require.ensure([], () => r(require('../page/demo/date.vue')), 'chunkname1')
// const vuxlogin = r => require.ensure([], () => r(require('../page/vux/login')), 'chunkname1')

// 动态路由参数：将参数融入到路由的路径定义之内成为路径的一部分，使之更具有可读性，我们称这种参数为”动态路径参数“，具体的做法是在参数名
// 之前加上 : ，然后将参数写在路由的path内。
// 这样vue-router会自动匹配所有 goBack/id/name 形式的路由模式，因为这样定义的路由的数量是不确定的，所以也被称为”动态路由“
// 在router-link中加入一个 params 的属性来指定具体的参数值。


//用ui组件
export default new Router({
    // mode:"history",
  //路由配置
  routes: [
     /***测试首页 */
    {
    path: '/',
    component: index,
    name:'index'
    },
    {
    path: '/demoList',
    component: demoList,
    name:'demoList'
    },
    {
    path: '/methodList',
    component: methodList,
    name:'methodList'
    },
    {
    path: '/vuxList',
    component: vuxList,
    name:'vuxList'
    },
    {
     path: '/date',
     component: date
     },
     {
     path: '/example',
     component: example,
     name:'example'
     },
     {
     path: '/form',
     component: form,
     name:'form',
     meta : {title : "表单页", description : "form"}
     },
     {
     path: '/goBack/',
     component: goBack,
     name:'goBack'
     },
     {
     path: '/vuexTest',
     component: vuexTest,
     name:'vuexTest'
     },
     {
     path: '/toggleClass',
     component: toggleClass,
     name:'toggleClass'
     },
     {
      path: '/allCheck',
      component: allCheck,
      name:'allCheck'
     },
     {
      path: '/listPage',
      component: listPage,
      name:'listPage',
      children : [
        {"name" : 'hasShipped',path:'hasShipped',component : hasShipped},
        {"name" : 'noShipped',path:'noShipped',component : noShipped},
        {"name" : 'allShipped',path:'allShipped',component : allShipped} 
      ]
     },
     {
      path: '/scrollTest',
      component: scrollTest,
      name:'scrollTest'
     }
    ]
  })
