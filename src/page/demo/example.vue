<template>
	<div>
	  <x-header>2017年</x-header>
	  <tab>
	      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
	      <tab-item @on-item-click="onItemClick">未发货</tab-item>
	      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
	<keep-alive>
    	<component :is="currentView" :test="test"></component>
	</keep-alive>
    <!-- <h1>1.vux切换</h1>
    <h1>2.动态组件的使用</h1>
    <h1>3.循环列表的使用</h1>
    <h1>4.模拟数据的使用</h1> -->
	</div>
</template>
<script type="text/javascript">
	import { XHeader,Tab, TabItem } from 'vux'
	export default{
		data () {
			return {
				index:0,
				currentView:"",
				test : '22222'
			}
		},
		components : {
			Tab,
			TabItem,
			XHeader,
			'initOne':require('@/components/example/initOne.vue'),//@路径是webpack下配置的，在build下的webpack.base.conf.js里面可以查看相当于src/
		    'initTwo':require('@/components/example/initTwo.vue'),
		    'initThree':require('@/components/example/initThree.vue')
		},
		created(){
			 this.currentView = "initOne";
			 console.log(this.$route.query.id);
		},
		methods : {
			onItemClick (index) {
		        if(index==0){
		         //代办数据
		         this.currentView = "initOne";
		        }
		        if(index==1){
		         //待阅数据
		         this.currentView = "initTwo";
		        }
		        if(index==2){
		         //已办数据
		         this.currentView = "initThree";
		        }
		    }
		}
	}
</script>
<style type="text/css" scoped>
	
</style>