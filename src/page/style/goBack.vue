<template>
	<div>
	<x-header>2017年</x-header>
	</div>
</template>
<script type="text/javascript">
	import { XHeader } from 'vux'
	export default{
		data () {
			return {
				index:0
			}
		},
		created () {
			//注意是 route
			// const paramsId = this.$route.params.id;
			// console.log(paramsId);
			//  this.$vux.loading.show({
			// 	text: 'Loading'
			//  })
			//  this.$vux.loading.hide();
		},
		components : {
			XHeader
		},
		methods : {
			
		}
	}
</script>
<style type="text/css" scoped>
	
</style>