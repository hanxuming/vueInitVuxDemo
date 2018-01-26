<template>
	<div>
	<group label-width="6em" gutter="0">
      <cell v-for="(item,index) in list" primary="content" :title="item.name" :value=item.key></cell>
    </group>
	</div>
</template>
<script type="text/javascript">
	import {Cell,Group} from 'vux'
	import {InitOne} from '@/service/getData'
	export default{
		props : {
			test : String
		},
		data () {
			return {
				index:0,
				list:[]
			}
		},
		components : {
			Cell,
			Group
		},
		mounted () {
			console.log(this.test);
			InitOne().then(res =>{
				this.list = res.data;

			}).catch(error => {
				alert("请求数据出错！");
			})
		},
		methods : {
			
		}
	}
</script>
<style type="text/css" scoped>
	
</style>