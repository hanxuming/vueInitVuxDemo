<template>
	<div class="allShippedWrap">
        <!-- 两种跳转方式 -->
        <div id="mescroll" class="mescroll">
            <group gutter="0">    
                <cell  v-for="listIndex in listName" @click.native="toContentPage(listIndex.id)" :title="listIndex.name" is-link>
                    <img slot="icon" width="20" class="cellSlotImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
                </cell>
            </group>
        </div>
         <!-- <group gutter="0"> 
            <router-link v-for="listIndex in listName" :to="{name : 'goBack',params : {id : listIndex.id}}">         
            <cell :title="listIndex.name" is-link>
                <img slot="icon" width="20" class="cellSlotImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
            </router-link>
        </group> -->
        <!-- 两种跳转方式 -->
	</div>
</template>
<script type="text/javascript">
    import '@/util/scroll/mescroll.m.js';
    import { Group,Cell} from 'vux';
    import { List } from '@/service/getData';
	export default{
		data () {
			return {
                index:0,
                listName: [],
                mescroll: null
			}
		},
		mounted () {
            var self = this;
            self.mescroll = new MeScroll("mescroll", { //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
                up: {
                    use : true,
                    callback: self.upCallback,//上拉加载回调
                    //以下参数可删除,不配置
                    isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                    page:{
                        size:10 //可配置每页n条数据,默认10
                    }, 
                    toTop:{ //配置回到顶部按钮
                        src : "./static/images/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                        //html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
                        offset : 600 //设置出现的位置
                    },
                    empty:{ //配置列表无任何数据的提示
                        warpId:"dataList",
                        icon : "./static/images/mescroll-empty.png",
                        tip : "亲,暂无相关数据哦~" , 
                        //btntext : "去逛逛 >" , 
                        //btnClick : function() {
                            //alert("点击了去逛逛按钮");
                        //} 
                    },
                    htmlNodata : '<p class="upwarp-nodata">-- 已经没有数据啦 --</p>',
                    htmlLoading : '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">上拉加载..</p>'
                },
                down : {
                    autoShowLoading : false,
                    htmlContent : '<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新</p>',
                    callback : self.dowmCallback //下拉刷新回调
                }
            });
		},
		components : {
			Group,
            Cell
		},
		methods : {
			//上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
            upCallback: function(page) {
                //联网加载数据
                var self = this;
                getListDataFromNet(page.num, page.size, function(curPageData) {
                    //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
                    
                    //如果是第一页需手动制空列表 (代替clearId和clearEmptyId的配置)
                    if(page.num == 1) self.listName = [];
                    //更新列表数据
                    self.listName = self.listName.concat(curPageData);
                    //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
                    //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
                    //console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.pdlist.length==" + self.pdlist.length);
                    //方法一(推荐): 后台接口有返回列表的总页数 totalPage
                    //self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
                    
                    //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
                    //self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
                    
                    //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
                    //self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
                    
                    //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
                    self.mescroll.endSuccess(curPageData.length);
                
                }, function() {
                    //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                    self.mescroll.endErr();
                });
            },
            toContentPage (id) {
                //由于动态路由中也是传递params的，所以在this.$router.push()方法中path不能和params一起使用，否则params将无效
                //需要使用name来指定页面
                //query方式可以与 path 一块使用
                this.$router.push({
                    name: 'goBack',
                    params : {
                        id : id
                    }
                })
            }
		}
    }
function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
    setTimeout(function(){
        List().then(res => {
            var data=res.data;
            var listData=[];
            //模拟分页数据
            for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
                if(i==data.length) break;
                listData.push(data[i]);
            }
            successCallback&&successCallback(listData);//成功回调
        }).catch(err => {
            errorCallback&&errorCallback()//失败回调
        })
    },1000)
}
</script>
<style type="text/css" lang="less">
@import '../../styles/mescroll.min.css';
	.allShippedWrap{
        .cellSlotImg{
            display:block;
            margin-right:5px;
        }
        .weui-cell{
            color:black;
            border-bottom:1px solid #efefef;
            height:50px;
        }
        /*mescroll滚动的区域*/
        .mescroll{
            position: fixed;
            top: 134px;
            bottom: 0;
            height: auto;
        }
    }
</style>