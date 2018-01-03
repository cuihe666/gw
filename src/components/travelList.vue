<!-- 旅行列表页 宁金良 -->
<template>
  <div class="travelList">
    <div class="travelList_wp">
        <div class='n_travel_top' @click="topBtn">
             您在这里 : 棠果旅居 > <span>旅行</span>
        </div> 
        <div class="n_search_div clear">
            <div class="n_search_left clear">
                <div class="oneChoose n_history" @click="mapBtn">
                    <p>北京</p>
                </div>
                <div class="oneChoose n_date" @click="choosebtn">
                    <p >出发日期</p>
                </div>
                <div class="oneChoose n_choose" @click="chooseXian">
                    <p>{{this.xianluCon}}</p>
                    <div class="chooseLine" v-show="chooseXianlv">
                        <ul class="clear">
                            <li v-for="(item,index) in xianluList" :class="{glChoose:glChooseNum == index,hoverglChoose:hoverglChooseNum == index}"  @mouseenter="enterline(index)" @mouseleave="leaveline(index)" @click="listBtn(index,item)">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="n_search_right" @click="searchTravel">
                筛选
            </div>
        </div>
        <div class="n_content" @click="mainBtn">
            <div class="top">
                <span :class="{span:hotColor1}" @click="changeColor1">推荐</span>&nbsp;&nbsp; <span class="span1">|</span> &nbsp;&nbsp;<span :class="{span:hotColor2}" @click="changeColor2">热度</span>  
            </div>
            <div class="con">
                <div class="con_list">
                    <div class="list_one" v-for="(item,index) in contentInitList" :class="{margin_one:index == 0 || index == 1 || index == 2}" @mouseenter="enterList(index)" @mouseleave="leaveList(index)" @click="listPush">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="title_wp">
                            <div class="title" :class="{changeTitleColor:changeTitle == index}">{{item.tit}}</div>
                            <div class="location">{{item.location}}</div>
                            <div class="price">￥{{item.price}}</div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <span class="spanFloat">确定</span>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="15"
                        layout=" prev, pager, next, jumper"
                        :total="400"
                        class="paginationFloat">
                    </el-pagination>
                    
                </div>
            </div>
        </div>
        <div class="iphone_wp">
            <iphone></iphone>
        </div>
    </div>
  </div>
</template>

<script>
import iphone from './iphone.vue'
import '../../static/css/element_fenye.css'
export default {
  name: 'travelList',
  data () {
    return {
        obj1:{
            num:2,
            colorNum:2,
            imgLogo:"../static/img/logo1.png"
        },
        hotColor1:true,
        hotColor2:false,
        changeTitle:20,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        contentInitList:[
            {
                'img':'../../static/img/img1.png',
                'tit':'周末一起漫步海滩入住海滩',
                'location':'福建',
                'price':'879'
            },
            {
                'img':'../../static/img/img2.png',
                'tit':'周末一起漫步海滩入住海滩',
                'location':'福建',
                'price':'879'
            },
            {
                'img':'../../static/img/img1.png',
                'tit':'周末一起漫步海滩入住海滩',
                'location':'福建',
                'price':'879'
            },
            {
                'img':'../../static/img/img1.png',
                'tit':'周末一起漫步海滩入住海滩',
                'location':'福建',
                'price':'879'
            },
            {
                'img':'../../static/img/img1.png',
                'tit':'周末一起漫步海滩入住海滩',
                'location':'福建',
                'price':'879'
            },
            {
                'img':'../../static/img/img1.png',
                'tit':'周末一起漫步海滩入住海滩',
                'location':'福建',
                'price':'879'
            }
        ],
        chooseXianlv:false,//选择线路
        xianluList:['全部主题','派对交友','益智游戏','全部主题','派对交友','益智游戏','全部主题','派对交友','益智游戏','全部主题','派对交友','益智游戏'],
        glChooseNum:0,//线路选择数字高亮
        hoverglChooseNum:0,
        xianluCon:'线路主题',

    }
  },
  components: {  
    iphone:iphone
  },
  mounted:function(){
  },
  created: function() {
    this.$emit("transferuser",this.obj1);
  },
  methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);

        },
        changeColor1:function(){
            this.hotColor2 = false;
            this.hotColor1 = true;
        },
        changeColor2:function(){
            this.hotColor2 = true;
            this.hotColor1 = false;
        },
        enterList:function(index){
            this.changeTitle = index;
        },
        leaveList:function(index){
            this.changeTitle = 20;
        },
        chooseXian:function(){
            this.chooseXianlv = !this.chooseXianlv;
        },
        enterline:function(index){
            this.hoverglChooseNum = index;
        },
        leaveline:function(index){
            this.hoverglChooseNum = this.glChooseNum;
        },
        listBtn:function(index,con){
            this.hoverglChooseNum = index;
            this.glChooseNum = index;
            this.xianluCon = con;
            // this.chooseXianlv = !this.chooseXianlv;
        },
        searchTravel:function(){//点击筛选
            this.chooseXianlv = false;
        },
        choosebtn:function(){//选择时间
            this.chooseXianlv = false;
        },
        mapBtn:function(){
            this.chooseXianlv = false;
        },
        listPush:function(){

        },
        mainBtn:function(){
            this.chooseXianlv = false;
        },
        topBtn:function(){
            this.chooseXianlv = false;
        }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.travelList{
    width: 1200px;
    margin:0 auto;
    padding-top:100px;
    font-family: 'PingFangSC-Regular';
    padding-bottom: 60px;
    .travelList_wp{
        position: relative;
        .n_travel_top{
            margin-top: 16px;
            font-size: 13px;
            color:#878787;
            span{
                color:#ff9800;
            }
        }
        .n_search_div{
            width: 100%;
            height: 60px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 15px;
            .n_search_left{
                width: 998px;
                height: 100%;
                float: left;
                padding-top: 17px;
                padding-bottom: 17px;
                .oneChoose{
                    padding-left: 20px;
                    width: 33.3%;
                    height: 100%;
                    float: left;
                    border-right: 1px solid #ccc;
                    font-size: 16px;
                    p{
                        padding-left: 25px;
                    }
                }
                .n_history{
                    p{
                        padding-left: 28px;
                        background:url(../../static/img/location.png)  no-repeat;
                    }
                }
                .n_date{
                    p{
                        color:#a9a9a9;
                        background:url(../../static/img/lvloca.png) 0 center no-repeat;
                    }
                }
                .n_choose{
                    border-right: 0px solid #ccc;
                    position: relative;
                    p{
                        color:#a9a9a9;
                        background:url(../../static/img/lvchoose.png) 0 center no-repeat;
                        padding-left: 28px;
                    }
                    .chooseLine{
                        position: absolute;
                        left: 0;
                        top:42px;
                        background: #fff;
                        border-radius: 5px;
                        width: 532px;
                        height: 82px;
                        box-shadow:#cccccc 2px 2px 2px;
                        /*padding-top:15px;*/
                        padding-bottom:15px;
                        padding-right:15px;
                        font-size: 12px;
                        color: #333;
                        ul{
                            li{
                                margin-left: 15px;
                                margin-top: 15px;
                                float: left;
                            }
                        }
                    }
                }
            }
            .n_search_right{
                float: right;
                width: 200px;
                height: 100%;
                background: #fbbc05;
                color: #fff;
                font-size: 20px;
                text-align: center;
                line-height:60px;
            }
        }
        .n_content{
            width: 100%;
            margin-top: 16px;
            .top{
                font-size: 12px;
                color:#333;
                .span{
                    color:#1dbe72;
                }
                .span1{
                    color:#ccc;
                }
            }
            .con{
                margin-top: 15px;
                width: 100%;
                .con_list{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    
                    .list_one{
                        width: 391px;
                        margin-top: 35px;
                        .img{
                            width: 391px;
                            height: 287px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .title_wp{
                            font-family: 'PingFangSC-Medium';
                            .title{
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                font-size: 18px;
                                color: #333;
                                margin-top: 15px;
                            }
                            .location{
                                font-size: 16px;
                                color: #666;
                                margin-top: 8px;
                            }
                            .price{
                                font-size: 20px;
                                color: #ec5a54;
                                margin-top: 8px;
                                
                            }
                        }
                    }
                }
                .pagination{
                    height: 40px;
                    margin-top: 26px;
                    .spanFloat{
                        float: right;
                        display: inline-block;
                        width: 54px;
                        height: 38px;
                        border: 1px solid #1dbe72;
                        font-size: 14px;
                        color: #1dbe72;
                        text-align: center;
                        line-height: 38px;
                        border-radius: 5px;
                        margin-top: 2px;
                    }
                    .paginationFloat{
                        float: right;
                    }
                }
            }

        }
        .iphone_wp{
            width: 43px;
            height: 130px;
            /*background: red;*/
            position: absolute;
            right: -103px;
            bottom:200px;
        }
    }

}
.hoverglChoose{
    color: #1dbe72 !important;
}
.glChoose{
    color: #1dbe72 !important;
}
.margin_one{
    margin-top: 0px !important;
}
.changeTitleColor{
    color: #1dbe72 !important;
}
.clear::after{
    content:'';
    display: block;
    clear:both;
}
</style>
<!-- 修改element分页样式 -->
<!-- <style>
        .el-pagination .btn-prev {
            width: 38px;
            height: 38px;
            background: center center no-repeat #fff;
            cursor: pointer;
            border-radius: 50%;
            border:1px solid #1dbe72;
            padding:0;
        }
        .el-pagination .btn-prev  i{
            color: #1dbe72;
        }
        .el-pagination .btn-next {
            padding:0px;
        }

        .el-pagination .btn-next {
            width: 38px;
            height: 38px;
            background: center center no-repeat #fff;
            cursor: pointer;
            border-radius: 50%;
            border:1px solid #1dbe72;
            padding:0;
        }
        .el-pagination .btn-next  i{
            color: #1dbe72;
        }
        .li.btn-quickprev{
            line-height: 0;
            color: #1dbe72;
        }
        .el-pager li:hover{
            color: #1dbe72;
        }
    .el-pager li {
        padding: 0 4px;
        font-size: 12px;
        width: 38px;
        height: 38px;
        line-height: 38px;
        box-sizing: border-box;
        text-align: center;
        color: #1dbe72;
        margin-left:5px;
        margin-right:5px;
    }
    .el-pager li.active {
        color: #fff;
        cursor: default;
        background: #1dbe72;
        border-radius: 50%;
    }
    .el-pagination__jump {
        height: 38px;
        margin-left: 25px;
        font-size: 14px;
        color: #999;
    }
    .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
        line-height: 38px;
        color: #1dbe72;
    }
    .el-pagination__editor.el-input .el-input__inner {
        width: 54px;
        height: 38px;
        border: 1px solid #1dbe72;
        padding:0;
        border-radius: 5px;
        margin-right: 10px;
    }
    .el-pagination span:not([class*=suffix]) {
        display: inline-block;
        font-size: 13px;
        height: 38px;
        line-height:38px;
        vertical-align: top;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .el-input__inner {
        margin-right: 10px;
    }
    .el-pagination__editor.el-input {
        width: 54px;
        height: 38px;
        margin-right: 5px;
    }
    .el-pagination__editor {
        text-align: center;
        line-height: 38px;
    }
</style> -->
