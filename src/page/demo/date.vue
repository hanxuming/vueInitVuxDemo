<template>
<div class="dataWrap">
		<x-header class="xheaderStyle"  :left-options='{preventGoBack:true,showBack: true}'>
			demo示例
			<a href="javascript:;" class="xheaderBackBtn" onclick="MobileBackNative()"></a>
		</x-header>
		<group gutter="0px">
			<!-- 在router-link内通过名称引用路径需要向to属性传人一个对象显式声明路由的名称，
			需要注意使用命名路由引用时，采用的是 :to 而不是 to ，因为这个时候向router-link传入的
			是一个对象 {name : 'goBack'};而不是字符串 -->
			<!-- router-link:组件默认渲染成带有正确链接的a标签。其实我们并不需要输出a元素标记，因为我们并没有具体的链接地址，
			router-link：可以通过配置  tag 属性生成的别的标签。例如 tag="li" -->
			<router-link class="" :to="{name : 'goBack',params:{id : 1}}">
			<cell title="1.返回示例" value="" is-link></cell>
			</router-link>
			<router-link to="example?id=2">
			<cell title="2.切换示例" value="" is-link></cell>
			</router-link>
			<router-link to="form">
			<cell title="3.表单示例" value="" is-link></cell>
			</router-link>
			<router-link to="vuexTest">
			<cell title="4.vuex示例" value="" is-link></cell>
			</router-link>
			<router-link to="toggleClass">
			<cell title="5.toggleClass样式和过滤器" value="" is-link></cell>
			</router-link>
			<router-link to="allCheck">
			<cell title="6.全选" value="" is-link></cell>
			</router-link>
			<router-link to="login">
			<cell title="7.登陆功能(暂无)" value="" is-link></cell>
			</router-link>
			<router-link to="listPage">
			<cell title="8.列表页" value="" is-link></cell>
			</router-link>
			<router-link to="scrollTest">
			<cell title="9.上拉加载，下拉刷新" value="" is-link></cell>
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
.dataWrap{
	position:absolute;
	left:0;
	top:0;
	right:0;
	bottom:0px;
	background:white;
	overflow:scroll;
	.weui-cell{
		color:black;
		border-bottom:1px solid #efefef;
	}
	.xheaderStyle{
		position: relative;
		left:0;
		top:0;
	}
	.xheaderBackBtn{
		position: absolute;
		left:0;
		top:0;
		width:25%;
		height:100%;
		background:white;
		opacity:0;
		z-index:2;
	}

}
</style>