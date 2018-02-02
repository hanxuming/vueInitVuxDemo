<template>
	<div class="commonPageWrap">
		<x-header>常用方式库</x-header>
		
	</div>
</template>
<script type="text/javascript">
	import { XHeader,Group,Cell } from 'vux'
	export default{
		data () {
			return {
				index:0
			}
		},
		mounted () {

		},
		components : {
			XHeader,
			Group,
			Cell
		},
		methods : {
			
		}
	}
</script>
<style type="text/css" lang="less">
	@import '../../styles/resetList.less';
</style>