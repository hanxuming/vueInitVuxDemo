<template>
	<div>
	 <x-header>2017年</x-header>
	 <a class="static" v-bind:class="{ 'class-a' : isA, 'class-b': !isA}" @click="toggle">点击切换颜色</a>
	 <h1 href="">过滤器{{msg}}：{{ msg | capitalize}}</h1>
	</div>
</template>
<script type="text/javascript">
	import {XHeader} from 'vux'
	export default{
		data () {
			return {
				isA: false,
				msg : "aaaaaa"
			}
		},
		components : {
			XHeader
		},
		methods : {
			toggle: function(){
                this.isA = !this.isA;
            }
		},
		filters: {
		  capitalize: function (value) {
		    if (!value) return ''
		    value = value.toString()
		    return value.charAt(0).toUpperCase() + value.slice(1)
		  }
		}
	}
</script>
<style type="text/css" lang="less" scoped>

	.static{
		font-size:36px;
	}
	.class-a{color:red;}
	.class-b{color:blue;}
	// @media only screen and (max-device-width: 1024px) and (orientation:portrait) {  
	// 	.class-a{color:red;}
	// 	.class-b{color:blue;}
	// }  
	// @media only screen and (max-device-width: 1024px) and (orientation:landscape) {  
	// 	.class-a{color:green;}
	// 	.class-b{color:yellow;}
	// }
</style>
