<template>
<div class="dataWrap commonPageWrap">
		<x-header class="xheaderStyle"  :left-options='{preventGoBack:true,showBack: true}'>
			vue示例工程
			<a href="javascript:;" class="xheaderBackBtn" onclick="MobileBackNative()"></a>
		</x-header>
		<group gutter="0px">
			<!-- 在router-link内通过名称引用路径需要向to属性传人一个对象显式声明路由的名称，
			需要注意使用命名路由引用时，采用的是 :to 而不是 to ，因为这个时候向router-link传入的
			是一个对象 {name : 'goBack'};而不是字符串 -->
			<!-- router-link:组件默认渲染成带有正确链接的a标签。其实我们并不需要输出a元素标记，因为我们并没有具体的链接地址，
			router-link：可以通过配置  tag 属性生成的别的标签。例如 tag="li" -->
			<router-link class="" :to="{name : 'vuxList'}">
			<cell title="1.vux使用示例以及常用样式" value="" is-link></cell>
			</router-link>
			<router-link to="demoList">
			<cell title="2.案例及工程示例" value="" is-link></cell>
			</router-link>
			<router-link to="methodList">
			<cell title="3.常用方法库" value="" is-link></cell>
			</router-link>
		</group>
</div>
</template>
<script type="text/javascript">
	import {XHeader,InlineCalendar,Group,Cell,CellBox } from 'vux'
	//引入业务
	import {Meeting} from '../../service/getData'
	//export default 的用处是用来导出的,相当于暴露了一个接口给外界,export default和export的区别是 前者只能导出一个 ，后者可以导出若干个
	export default {
		methods:{

		},
		data () {
	    return {

	    	}
	  	},
		components:{
			XHeader,
			InlineCalendar,
			Group,
			Cell,
			CellBox
		}
	}
</script>
<style type="text/css" lang="less">
@import '../../styles/resetList.less';
.dataWrap{

}
</style>