<!-- 民宿详情 宁金良 -->
<template>
  <div class="zhusuDetail">
    <div class="zhusuDetail_wp">
        <div class='n_minsuDetail_top'>
             首页 > <span class="span1">旅行</span> > <span class="span1">北京市</span> > <span class="span2">海坨山|扎营季与小熊一起登山</span>
        </div> 
        <div class="minsu_detail_wp clear">
            <!-- 详情 -->
            <div class="minsu_detail_left">
               <div class="lunbo clear">
                    <div class="lun_left">
                        <img :src="src" alt="" class="top_bg">
                    </div>
                    <div class="lun_right">
                        <ul class="inner-container">
                            <li v-for="(item,index) of this.dataInit.houseImgs" :class="{border_li:selected == index}"><img :src="houseimgUrl(item.imgUrl)" alt="" @click="btn(item.imgUrl,index)" @mouseenter="enter(item.imgUrl,index)" @mouseleave="leave"></li>
                        </ul>
                    <div class="top" @click="pre">
                        <img src="../../static/img/mintop.png" alt="">
                    </div>
                    <div class="bottom" @click="next">
                        <img src="../../static/img/minbottom.png" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <!-- 预定 -->
            <div class="reserve_wp">
                <div class="top_wp">
                    <div class="price">
                        <div class="left">￥150</div>
                        <div class="center">
                            <span class="span1">直绛</span>
                            <span class="span2">折扣</span>
                            <span class="span3">满减</span>
                        </div>
                        <div class="right">每晚</div>
                    </div>
                    <div class="con_wp">
                        <div class="date clear">
                            <div class="left">
                                <p>入住</p>
                                <div class="year">年/月/日</div>
                            </div>
                            <div class="right">
                                <p>退房</p>
                                <div class="year">年/月/日</div>
                            </div>
                            
                        </div>
                        <div class="peoper">
                            <p>人数</p>
                            <div class="ren_num clear">
                                <div class="left">
                                    {{this.number}}位
                                </div>
                                <div class="right">
                                    <div class="top" @click="topAdd">
                                        <img :src="this.topimg" alt="">
                                    </div>
                                    <div class="bottom" @click="buttomJian">
                                        <img :src="this.bottomimg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="submit">
                            提交订单
                        </div>

                    </div>
                </div>
                <div class="share">
                    <div class="left">
                        <p class="p1" @click="collect" :class="{coll:collChange}">{{this.collTit}}</p>
                    </div>
                    <div class="right">
                        <p class="p1">分享</p>
                    </div>
                </div>
                <div class="daren">
                    <img src="../../static/img/touxiang.png" alt="">
                    <p class="name">熊出没</p>
                    <p class="daTit" :class="{daTitNo:zhimaIsNO}">{{this.daTitCon}}</p>
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
import {config} from '../util/common.js'
export default {
    name: 'zhusuDetail',
    data () {
        return {
            obj1:{
                num:1,
                colorNum:1,
                imgLogo:"../static/img/logo1.png"
            },
            tgImg:'http://img.tgljweb.com/',
            number:1,
            topimg:'../../static/img/topNum.png',
            bottomimg:'../../static/img/buttonNum.png',
            collChange:false,
            collTit:'收藏',
            daTitCon:'芝麻信用已验证',
            zhimaIsNO:false,
            selected:"0",
            src:'http://img.tgljweb.com/agent_1754578_149268363944838.jpg',
            hover:[
                {
                  src:'http://img.tgljweb.com/agent_1754578_149268363944838.jpg',
                  index:'0'
                }

            ],
            dataInit:{},
            apiUrl:'https://pre-javaapis.tgljweb.com/api/house/guest/v3.1.3/getdetailsnew',
            jsonData:{
                houseId:'1618018'
            }
        }
    },
    components: {  
        iphone:iphone
    },
    mounted:function(){

    },
    created: function() {
        this.$emit("transferuser",this.obj1);
        this.initDta();
    },
    methods:{
    },
    methods:{
        initDta:function(){
            let _this = this;
            this.axios.post(this.apiUrl,this.jsonData)
            .then(function (res) {
                
                if(res.data.code == 0){
                    _this.dataInit = res.data.data;
                    _this.src = _this.tgImg + res.data.data.houseImgs[0].imgUrl;
                }else{
                    alert(res.data.msg)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            //是否验证芝麻信用
            let zhima = true;
            if(zhima){

            }else{
                this.daTitCon = '芝麻信用未验证';
                this.zhimaIsNO = true;
            }
        },
        houseimgUrl:function(img){
            return this.tgImg+img;
        },
        btn:function(src,index) { 
            this.src = this.list[0].src;
            this.selected = index;
            this.src = this.tgImg+src;
            this.hover[0].src = this.tgImg+src;
            this.hover[0].index = index;
        },
        enter:function(src,index){
            // alert(index);
            // this.selected = index;
            // this.src = src;

        },
        leave:function(){
            // this.selected = this.hover[0].index;
            // this.src = this.hover[0].src;
        },
        pre:function(){
            if(this.selected >0){
              this.selected --;
            }else{
              this.selected = 0;
            }
            this.src = this.tgImg + this.dataInit.houseImgs[this.selected].imgUrl;
        },
        next:function(){
            this.selected ++;
            if(this.selected >this.dataInit.houseImgs.length){
                this.selected = this.dataInit.houseImgs.length;
            }
            this.src = this.tgImg + this.dataInit.houseImgs[this.selected].imgUrl;
        },
        
        topAdd:function(){

            this.number++;
            this.bottomimg = '../../static/img/buttons.png';
            if(this.number>=50){
                this.number = 50;
                this.topimg = '../../static/img/topS.png'
            }
        },
        buttomJian:function(){
            this.number--;
            this.topimg = '../../static/img/topNum.png'
            if(this.number <= 1){
                this.number = 1;
                this.bottomimg = '../../static/img/buttonNum.png'
            }
        },
        collect:function(){
            if(this.collChange){
                this.collChange = false;
                this.collTit = '收藏'
            }else{
                this.collChange = true;
                this.collTit = '取消收藏'
            }
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.zhusuDetail{
    background: #f5f5f5;
    padding-top:100px;
    padding-bottom: 60px;
    .zhusuDetail_wp{
        width: 1200px;
        margin:0 auto;
        position: relative;
        .n_minsuDetail_top{
            margin-top: 16px;
            font-size: 13px;
            color: #333;
            .span2{
                color:#999;
            }
        }
        .minsu_detail_wp{
            width: 100%;
            margin-top: 16px;
            .minsu_detail_left{
                width: 880px;
                float: left;
                .lunbo{
                    .lun_left{
                        width: 733px;
                        height: 550px;
                        float: left;
                        img{
                            width: 100%;
                            height: 100%;
                            transition: 2s;
                        }
                    }
                    .lun_right{
                        width: 133px;
                        float: right;
                        height: 550px;
                        position: relative;
                        ul{
                            width: 100%;
                            height: 100%;
                            overflow-y: scroll;
                            li{
                                width: 100%;
                                /*height: 25%;*/
                                height: 100px;
                                margin-bottom: 12.5px;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                       .top{
                            width: 100%;
                            height: 30px;
                            background: rgba(0,0,0,.4);
                            position: absolute;
                            left: 0;
                            top: 0;
                            text-align: center;
                            color: #fff;
                        }
                        .bottom{
                            width: 100%;
                            height: 30px;
                            background: rgba(0,0,0,.4);
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            text-align: center;
                            color: #fff;
                        }
                    }
                }
            }
            .reserve_wp{
                width: 310px;
                float: right;
                .top_wp{
                    background: #fff;
                    border: 1px solid #ddd;
                    .price{
                        width: 100%;
                        height: 70px;
                        border-bottom: 1px solid #ddd;
                        padding-left: 20px;
                        padding-right: 20px;
                        .left{
                            float: left;
                            font-size: 30px;
                            font-family: 'PingFangSC-Semibold';
                            color: #ff4c4c;
                            line-height: 70px;
                        }
                        .center{
                            float: left;
                            line-height: 70px;
                            font-size: 12px;
                            font-family: 'PingFangSC-Regular';
                            margin-left: 20px;
                            .span1{
                                color: #1dbe72;
                                background: #d2f2e3;
                                padding:2px 3px 2px 3px;
                            }
                            .span2{
                                color: #fbbc05;
                                background: #fef2cd;
                                padding:2px 3px 2px 3px;
                            }
                            .span3{
                                color: #ff4c4c;
                                background: #ffdbdb;
                                padding:2px 3px 2px 3px;
                            }
                        }
                        .right{
                            float: right;
                            font-size: 14px;
                            color: #333;
                            line-height: 70px;
                        }
                    }
                    .con_wp{
                        padding-left: 20px;
                        padding-right: 20px;
                        .date{
                            width: 270px;
                            .left{
                                width: 50%;
                                float: left;
                                p{

                                    font-size: 14px;
                                    color: #333;
                                    margin-top: 15px;
                                }
                                .year{
                                    width: 100%;
                                    height: 45px;
                                    border-left: 1px solid #ddd;
                                    border-bottom: 1px solid #ddd;
                                    border-top: 1px solid #ddd;
                                    font-size: 14px;
                                    color: #999;
                                    line-height: 45px;
                                    padding-left: 10px;
                                    margin-top: 5px;
                                }
                            }
                            .right{
                                width: 50%;
                                float: left;
                                p{
                                    font-size: 14px;
                                    color: #333;
                                    margin-top: 15px;
                                }
                                .year{
                                    width: 100%;
                                    height: 45px;
                                    border: 1px solid #ddd;
                                    font-size: 14px;
                                    color: #999;
                                    line-height: 45px;
                                    padding-left: 10px;
                                    margin-top: 5px;
                                }
                            }
                            
                        }
                        .peoper{
                            p{
                                font-size: 14px;
                                color: #333;
                                margin-top: 15px;
                            }
                            .ren_num{
                                width: 270px;
                                height: 45px;
                                border: 1px solid #ddd;
                                font-size: 14px;
                                margin-top: 5px;
                                .left{
                                    float: left;
                                    padding-left: 10px;
                                    line-height: 45px;
                                }
                                .right{
                                    width: 22px;
                                    height: 100%;
                                    border-left: 1px solid #ddd;
                                    float: right;
                                    text-align: center;
                                    .top{
                                        width: 100%;
                                        height: 22.5px;
                                        border-bottom: 1px solid #ddd;
                                    }
                                    .bottom{
                                        width: 100%;
                                        height: 22.5px;
                                    }
                                }
                            }
                        }
                        .submit{
                            margin-top: 40px;
                            width: 267px;
                            height: 45px;
                            background: #ff9800;
                            border-radius: 5px;
                            font-size: 14px;
                            color: #fff;
                            line-height: 45px;
                            text-align: center;
                            margin-bottom: 20px;
                        }
                    }
                }
                .share{
                    width: 310px;
                    border: 1px  solid #ddd;
                    height: 40px;
                    background: #fff;
                    margin-top: 10px;
                    padding: 8px;
                    font-size: 14px;
                    .left{
                        float: left;
                        width: 50%;
                        border-right: 1px  solid #ddd;
                        text-align: center;
                        line-height: 20px;
                        .p1{
                            display: inline-block;
                            width: 70px;
                            height: 20px;
                            padding-left:30px;
                            background: url(../../static/img/collect.png) 0 center no-repeat;
                            line-height: 20px;
                        }
                    }
                    .right{
                        float: left;
                        width: 50%;
                        text-align: center;
                        line-height: 20px;
                        .p1{
                            display: inline-block;
                            width: 70px;
                            height: 20px;
                            padding-left:30px;
                            line-height: 20px;
                            background: url(../../static/img/share.png) 0 center no-repeat;
                        }
                    }
                }
                .daren{
                    width: 310px;
                    height: 182px;
                    border:1px solid #ddd;
                    background: #fff;
                    margin-top: 10px;
                    text-align: center;
                    padding-top: 19px;
                    img{
                        width: 75px;
                        height: 75px;
                        border-radius: 50%;
                    }
                    .name{
                        font-size: 18px;
                        margin-top: 10px;
                    }
                    .daTit{
                        display: inline-block;
                        width: 130px;
                        font-size: 14px;
                        color: #999;
                        margin-top: 5px;
                        background:url(../../static/img/zhimais.png) no-repeat;
                        padding-left: 30px;
                    }
                }
            }
        }
        .iphone_wp{
            width: 43px;
            height: 130px;
            background: #fff;
            position: absolute;
            right: -103px;
            bottom:200px;

        }
    }
}
/*使滚动条消失*/
.inner-container::-webkit-scrollbar {
    display: none;
}
.daTitNo{
    background:url(../../static/img/zhimano.png) no-repeat !important;
}
.coll{
    width: 90px !important;
    background: url(../../static/img/scM.png) 0 center no-repeat  !important;
}
.border_li{
  border:2px solid #36c42c;
}
.clear::after{
    content:'';
    display: block;
    clear:both;
}
</style>
