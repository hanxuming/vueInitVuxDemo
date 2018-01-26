<template>
	<div>
	<x-header></x-header>
		 <h2 style="text-align:center;">小目标列表</h2>
	    <div class="list">
	        <h3>添加小目标</h3>
	        <input type="text" class="text-keyword" placeholder="输入小目标后，按回车确认" @keyup.13='addList' v-model="addText"/>
	        <p>共有{{prolist.length}}个目标</p>
	    </div>
	    <ul>
		    <!--v-for遍历prolist-->
			<li class="li1" v-for="list in prolist">
			    <div>
			        <span class="type-span"></span>
			        <span>{{list.name}}</span>
			        <span class="close">X</span>
			    </div>
			</li>
		</ul>
		<!-- <h1>表单的双向数据绑定</h1> -->
		<!-- v-bind 缩写 ：主要用于属性绑定 -->
    <group title="姓名">
        <x-input title="用户名" placeholder="请输入用户名" :max="4" :disabled="false"  placeholder-align="left" @on-focus="onFocus">
            <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
        </x-input>
    </group>
	</div>
</template>
<script type="text/javascript">
	import { XHeader,Group,XInput} from 'vux'
	export default{
		data () {
			return {
				addText:'',
		        //name-名称,status-完成状态
		        prolist:[
	               {name:"HTML5",status:false},
	               {name:"CSS3",status:false},
	               {name:"vue",status:false},
	               {name:"react",status:false}
		        ]
			}
		},
		components : {
			XHeader,
			Group,
            XInput
		},
		created () {
			console.log(this.$route.meta.title);
			console.log(this.$route.query);
		},
		methods : {
			addList(){
	            //添加进来默认status=false,就是未完成状态
	            this.prolist.push({
	                name:this.addText,
	                status:false
	            });
	            //添加后，清空addText
	            this.addText="";
			},
			onFocus () {
                console.log("onfouces")
            }
		}
	}
</script>
<style>
        body{font-family: "微软雅黑";font-size: 14px;}
        input{font-size: 14px;}
        body,ul,div,html{padding: 0;margin: 0;}
        .hidden{display: none;}
        .main{width: 800px;margin: 0 auto;}
        li{list-style-type: none;line-height: 40px;position: relative;border: 1px solid transparent;padding: 0 20px;}
        li .status-span{display: block;width: 10px;height: 10px;background: #ccc;margin: 14px 10px 0 0 ;float: left;}
        li .status-span.status-end{
            background: #09f;
        }
        li .close{position: absolute;color: #f00;font-size: 20px;line-height: 40px;height: 40px;right: 20px;cursor: pointer;display: none;top: 0;}
        li:hover{border: 1px solid #09f;}
        li:hover .close{display: block;}
        li div{display: block;}
        li.eidting div{display: none;}
        li .text2{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
        li.eidting .text2{display: block;}
        li .text-keyword{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
        .text-keyword{box-sizing: border-box;width: 100%;height: 40px;padding-left: 10px;outline: none;}
    </style>