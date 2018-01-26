<template>
	<div class="listPageWrap">
        <x-header>列表页面
            <a href="javascript:;" class="selectBtn" @click="selectType">选择</a>
        </x-header>
        <div class="selectList" v-bind:class="{ 'show' : isA, 'hide': !isA}">
            <ul class="selectUl">
                <li class="selectLi"><a class="selectA" @click="chooseType" href="javascript:;">所有</a></li>
                <li class="selectLi"><a class="selectA" @click="chooseType" href="javascript:;">类型1</a></li>
                <li class="selectLi"><a class="selectA" @click="chooseType" href="javascript:;">类型2</a></li>
                <li class="selectLi"><a class="selectA" @click="chooseType" href="javascript:;">类型3</a></li>
            </ul>
        </div>
        <search
            :results="results"
            v-model="searchValue"
            position="absolute"
            auto-scroll-to-top top="46px"
            @on-focus="onFocus"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
            :auto-fixed="false"
            ref="search">
        </search>
         <!-- 两种tab切换方式开始 -->
        <tab>
            <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
            <tab-item @on-item-click="onItemClick">未发货</tab-item>
            <tab-item @on-item-click="onItemClick">全部订单</tab-item>
        </tab>
        <!-- keep-alive的作用 -->
    	    <component :is="currentView"  :fileType="fileType" :searchValue="toSearchVal" :SelectType="SelectType"></component>
        <!-- <router-link :to="{name : 'hasShipped'}">
            <a href="javascript:;">已发货</a>
        </router-link>
        <router-link :to="{name : 'noShipped'}">
            <a href="javascript:;">未发货</a>
        </router-link>
        <router-link :to="{name : 'allShipped'}">
            <a href="javascript:;">全部订单</a>
        </router-link> -->
        <!-- <div class="routerView" style="width:100%;height:100px;background:red;">
            <router-view></router-view>
        </div> -->

        <!-- 两种tab切换方式结束 -->
	</div>
</template>
<script type="text/javascript">
    import { XHeader,Search,Group,Cell,Tab,TabItem,Popover} from 'vux';
	export default{
		data () {
			return {
                index:0,
                results: [],
                searchValue: '',
                listName: [],
                mescroll: null,
                currentView:"",
                fileType : '',
                toSearchVal : '',
                SelectType : '',
                isA : false
			}
		},
		mounted () {
            this.currentView = "hasShipped";
            this.fileType = "has";
            // this.$vux.loading.show({
            //     text: '数据加载中'
            // });
            // this.$vux.loading.hide();
		},
		components : {
            XHeader,
            Search,
            Group,
            Cell,
            Tab,
            TabItem,
            Popover,
            'allShipped':require('@/page/children/allShipped.vue'),//@路径是webpack下配置的，在build下的webpack.base.conf.js里面可以查看相当于src/
		    'hasShipped':require('@/page/children/hasShipped.vue'),
		    'noShipped':require('@/page/children/noShipped.vue')
		},
		methods : {
            chooseType (e){
                console.log(e)
                this.SelectType = e.target.innerText;
                this.isA = !this.isA;
                this.currentView = "";
                let self = this;
                setTimeout(function(){
                    self.currentView = "hasShipped";
                },1)
            },
            selectType () {
                console.log('select');
                this.isA = !this.isA;
            },
			setFocus () {
                this.$refs.search.setFocus()
            },
            onSubmit () {
                this.$refs.search.setBlur();
                this.toSearchVal = this.searchValue;
                console.log(this.fileType);
                this.currentView = "";
                let self = this;
                setTimeout(function(){
                    self.currentView = "hasShipped";
                },1)
            },
            onFocus () {
                console.log('on focus')
            },
            onCancel () {
                console.log('on cancel')
            },
            onItemClick (index) {
		        if(index==0){
		         //代办数据
                 this.currentView = "hasShipped";
                 this.fileType = "has";
                 this.toSearchVal = "";
		        }
		        if(index==1){
		         //待阅数据
                 this.currentView = "noShipped";
                 this.fileType = "no";
                 this.toSearchVal = "";
		        }
		        if(index==2){
		         //已办数据
                 this.currentView = "allShipped";
                 this.fileType = "all";
                 this.toSearchVal = "";
		        }
		    },
		}
    }
</script>
<style type="text/css" lang="less">
@import '../../styles/mescroll.min.css';
@import '../../styles/reset.css';
	.listPageWrap{
        .show{
            display:block;
        }
        .hide{
            display: none;
        }
        .cellSlotImg{
            display:block;
            margin-right:5px;
        }
        .weui-cell{
            color:black;
            border-bottom:1px solid #efefef;
            height:50px;
        }
        .selectBtn{
            position:absolute;
            right:0;
            top:0;
            width:20%;
            height:100%;
            color:#ccc;
            line-height:46px;
            font-size:14px;
        }
        .selectList{
            position:absolute;
            right:0;
            top:46px;
            width:20%;
            height:auto;
            background:#34495f;
            z-index:3;
            text-align:center;
        }
        .selectLi{
            padding:5px 0;
            color:#ccc;
        }
    }
</style>