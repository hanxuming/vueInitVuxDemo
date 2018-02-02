<template>
	<div class="demoListPageWrap commonPageWrap">
		<x-header>工程示例</x-header>
		<group gutter="0px">
		<router-link to="example?id=2">
			<cell title="1.切换示例" value="" is-link></cell>
			</router-link>
			<router-link to="form">
			<cell title="2.表单示例" value="" is-link></cell>
			</router-link>
			<router-link to="vuexTest">
			<cell title="3.vuex示例" value="" is-link></cell>
			</router-link>
			<router-link to="toggleClass">
			<cell title="4.toggleClass样式和过滤器" value="" is-link></cell>
			</router-link>
			<router-link to="allCheck">
			<cell title="5.全选" value="" is-link></cell>
			</router-link>
			<router-link to="listPage">
			<cell title="6.列表页" value="" is-link></cell>
			</router-link>
			<router-link to="scrollTest">
			<cell title="7.上拉加载，下拉刷新" value="" is-link></cell>
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
			Group,
			Cell
		},
		methods : {
			
		}
	}
</script>
<style type="text/css" lang="less">
	@import '../../styles/resetList.less';
	.demoListPageWrap{
		
	}
</style>