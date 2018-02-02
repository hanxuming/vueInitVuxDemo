<template>
	<div class="vuxListPageWrap commonPageWrap">
		<x-header>vux使用示例以及常用样式</x-header>
		<group gutter="0px">
			<router-link class="" :to="{name : 'goBack'}">
				<cell title="1.页面头部示例" value="" is-link></cell>
			</router-link>
		</group>
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
			Cell,
			Group
		},
		methods : {
			
		}
	}
</script>
<style type="text/css" lang="less">
@import '../../styles/resetList.less';
.vuxListPageWrap{

}
</style>