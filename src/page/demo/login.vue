<template>
	<div>
        <x-header></x-header>
        <group>
            <x-input v-model="username" title="用户名" placeholder="请输入用户名" :max="10"></x-input>
            <x-input v-model="password" type="password" title="密码" placeholder="请输入密码" :max="10" ></x-input>
        </group>
        <check-icon :value.sync="demo2" type="plain">10天内自动登陆</check-icon>
        <x-button @click.native="subForm">submit</x-button>
	</div>
</template>
<script type="text/javascript">
    import { XHeader,Group,XInput,CheckIcon,XButton} from 'vux'
    import cookie from '@/util/cookie'
	export default{
		data () {
			return {
                index:0,
                demo2: false,
                username:"",
                password:""
			}
		},
		mounted () {

		},
		components : {
			XHeader,
			Group,
            XInput,
            CheckIcon,
            XButton
		},
		methods : {
			onFocus () {
                console.log("onfouces");
            },
            subForm() {
                console.log(this.username);
                console.log(this.password);
                console.log(this.demo2);
            }
		}
	}
</script>
<style type="text/css" scoped>
	
</style>