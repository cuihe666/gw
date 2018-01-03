<!-- 宁金良 -->
<template>
  <div id="app">
      <div class="header" :class="{black_color:test.colorNum == test.num}">
        <div class="wp clear">
          <div class="tg_logo"><router-link to="/"><img :src="test.imgLogo" alt="棠果旅居"></router-link></div>
          <div class="tab">
            <ul class="clear uls">
              <!-- <li v-for="(item,index) in list"><router-link :to="item.luyou" :class="{btn_green:index == test.num}" @click.native="tabClick(index)">{{item.tit}}</router-link>
                    
              </li> -->
              <!-- <li v-for="(item,index) in list"><router-link :to="item.luyou" @click.native="tabClick(index)">{{item.tit}}</router-link></li> -->
              <li class="lis"  @mouseenter="enterHome(0)" @mouseleave="leaveHome(0)">
                <router-link to="/" :class="{btn_green:0 == test.num,hoverColor:hoverCol == 0}" click="tabClick(0)">首页</router-link>
              </li>
              <li class="lis" @mouseenter="enterZs(1)" @mouseleave="leaveZs(1)">
                <router-link to="/zhusu" :class="{btn_green:1 == test.num,hoverColor:hoverCol == 1}" click="tabClick(1)">住宿</router-link>
              </li>
              <li class="lis" @mouseenter="enterLx(2)" @mouseleave="leaveLx(2)">
                <router-link to="/travel" :class="{btn_green:2 == test.num,hoverColor:hoverCol == 2}" click="tabClick(2)">旅行</router-link>
              </li>
              <li class="lis" @mouseenter="enterDz(3)" @mouseleave="leaveDz(3)">
                <router-link to="/customTravel" :class="{btn_green:3 == test.num,hoverColor:hoverCol == 3}" click="tabClick(3)">定制旅行</router-link>
              </li>
              <li class="lis" @mouseenter="enterApp(4)" @mouseleave="leaveApp(4)">
                <router-link to="/downapp"  :class="{btn_green:4 == test.num,hoverColor:hoverCol == 4}" click="tabClick(4)" >下载app</router-link>
                <transition-group 
                    name="fade" 
                    enter-active-class="fadeIn" 
                    leave-active-class="fadeOut" 
                    tag="ul" 
                    class="expect_meng">
                  <li v-if="bgEwm" :key="1">
                    <img src="../static/img/downApp.png" alt="">
                    <p>下载app了解更多</p>
                  </li>
                </transition-group>
              </li>
              <li class="lis" @mouseenter="enterGy(5)" @mouseleave="leaveGy(5)">
                <a class="about" :class="{btn_green:5 == test.num,hoverColor:hoverCol == 5}">关于棠果</a>
                <transition-group 
                    name="fade" 
                    enter-active-class="fadeIn" 
                    leave-active-class="fadeOut" 
                    tag="ul" 
                    class="expect_guanyu">
                  <li v-if="bgTg" v-for="(item,index) in tgList" :class="{guanyuHover:GyHover==index}" :key="index" @mouseenter="enterHoverGy(index)" @mouseleave="leaveHoverGy(index)">
                    <router-link click="tabClick(5)" :to="item.url">{{item.tit}}</router-link>
                  </li>
                </transition-group>
              </li>
            </ul>
          </div>
          <div class="tg_zhuce clear">
            <div class="zhu_left">
              <div class="d_left">登陆&nbsp;|&nbsp;</div>
              <div class="d_right">注册</div>
            </div>
            <div class="zhu_right">帮助中心
              <!-- <ul>
                <li>我是住客</li>
                <li>我是房东</li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
      <div class="con_view">
        <router-view @transferuser="getnum"></router-view>
      </div>
      <div class="footer">
          <div class="footer_con">
            <div class="foot_top clear">
                <div class="top_left">
                    <div class="top_left_tit">联系我们</div>
                    <div class="clear top_left_con">
                        <div class="iphone">
                            <p>客服</p>
                            <p>Email:tglj@4000046768.com</p>
                            <p>免费热线:4006-406-111</p>
                        </div>
                        <div class="bd_iphone">
                            <p>合作</p>
                            <p>BD商务:bd@tgljweb.com</p>
                            <p>PR:pr@tgljweb.com</p>
                        </div>
                    </div>
                </div>
                <div class="top_right">
                    <div class="top_rightCon">
                        <img src="../static/img/tggzh.png" alt="">
                        <p>关注公众号</p>
                    </div>
                    <div class="top_rightCon njl_mRight">
                        <img src="../static/img/tgweibo.png" alt="">
                        <p>关注微博</p>
                    </div>
                    <div class="top_rightCon njl_mRight">
                        <img src="../static/img/downApp.png" alt="">
                        <p>下载棠果app</p>
                    </div>
                </div>
            </div>
            <div class="foot_bottom">
                <p>关于棠果 · 新闻 · 法律协议 · 联系我们 · 加入我们</p>
                <p>网站备案号 : 京ICP备16034235号-1 安全联盟 北京棠果科技有限公司 地址 : 北京市西城区甲129号1949园区</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      helpList:['我是住客','我是房东'],//帮助中心下拉菜单
      hoverCol:9,//判断所有tab hover效果
      bgEwm:false,//hover下载app二维码
      bgTg:false,//关于棠果 hover 下拉菜单
      GyHover:3,//关于棠果  下拉菜单hover 判断
      tgList:[
        {
          tit: "关于我们",
          url: "/about"
        },
        {
          tit: "业务介绍",
          url: "/business"
        },
        {
          tit: "我是达人",
          url: "/intelligent"
        }
      ],//关于棠果下拉菜单
      test: {
        num:0,
        colorNum:3,
        imgLogo:"../static/img/tglogo.png"
      },
      num:0,//所有tab 点击改变样式判断
      colorNum:3,
      imgLogo:"../static/img/tglogo.png"
    }
  },
  methods:{
    tabClick:function(index){
      this.num = index;
      // if(index === 3 || index === 4 || index === 5){
      //   this.colorNum = index;
      //   this.imgLogo = "../static/img/logo1.png"
      // }else{
      //   this.imgLogo = "../static/img/tglogo.png"
      // }
    },
    getnum:function(msg){
      this.test = msg;
    },
    enterHome:function(index){//hover首页
        this.hoverCol = index;
    },
    leaveHome:function(index){//hover离开首页
        this.hoverCol = 9;
    },
    enterZs:function(index){//hover住宿
      this.hoverCol = index;
    },
    leaveZs:function(index){//hover离开
        this.hoverCol = 9;
    },
    enterLx:function(index){//hover旅行
      this.hoverCol = index;
    },
    leaveLx:function(index){//hover离开
        this.hoverCol = 9;
    },
    enterDz:function(index){//hover定制旅行
      this.hoverCol = index;
    },
    leaveDz:function(index){//hover离开定制旅行
        this.hoverCol = 9;
    },
    enterApp:function(index){//hover下载app
      this.bgEwm = true;
      this.hoverCol = true;
      this.hoverCol = index;
    },
    leaveApp:function(){//hover离开下载app
      this.bgEwm = false;
      this.hoverCol = false;
      this.hoverCol = 9;
    },
    enterGy:function(index){//hover关于棠果
        this.bgTg = true;
        this.hoverCol = true;
        this.hoverCol = index;
    },
    leaveGy:function(){//hover离开关于棠果
        this.bgTg = false;
        this.GyHover = 3;
        this.hoverCol = false;
        this.hoverCol = 9;
    },
    enterHoverGy:function(index){//hover关于棠果子菜单
      this.GyHover = index;
    },
    leaveHoverGy:function(index){//hover离开关于棠果子菜单
      this.GyHover = index;
    }
  }
}
</script>

<style lang="scss">
a{
  color:#fff;
}
.about:hover{
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  position: relative;
  .header{
    width: 100%;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
      z-index: 10000000;
    .wp{
      width: 1200px;
      margin:0 auto;
      
      .tg_logo{
        float: left;
        img{
          width: 170px;
          margin-top: 18px;
        }
      }
      .tab{
        float: left;
        .uls{
          margin-top: 41px;
          margin-left: 26px;
          .lis{
            float: left;
            /*margin-left: 52px;*/
            padding-left: 26px;
            padding-right: 26px;
            position: relative;
            a{
              font-size: 20px;
              padding-bottom:4px;
            }
            .expect_meng{
              position: absolute;
              top: 42px;
              left: 13px;

              li{
                font-size: 12px;
                width: 103px;
                height: 114px;
                background: rgba(0,0,0,.5);
                color: #fff;
                text-align: center;

                img{
                    width: 80px;
                    height: 80px;
                    margin-top: 10px;
                }
              }
            }
            .expect_guanyu{
              /*width: 100%;*/
              /*margin-top: 10px;*/
              position: absolute;
              top: 42px;
              left: 16px;
              li{
                /*width: 100%;*/
                line-height: 50px;
                padding-left: 10px;
                padding-right: 10px;
                color:#fff;
                background-color: rgba(0,0,0,0.5);
                a{
                  color: white;
                }
              }
             
            }
            /*&:hover{
                 color:#1dbe72 !important;
                border-bottom: 4px solid #1dbe72;
            }*/
          }
        }
      }
      .tg_zhuce{
        float: right;
        margin-top: 41px;
        font-size: 20px;
        .zhu_left{
          float: left;
          margin-right:27px;
          .d_left{
            float: left;
          }
          .d_right{
            float: right;
          }
        }
        .zhu_right{
          float: right;
        }
      }
    }
  }
  .con_view{
    width: 100%;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*padding-bottom: 60px;*/
  }
  .footer{
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 308px;
    background: url(../static/img/img5.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 39px;
    .footer_con{
        width: 1200px;
        margin: 0 auto;
        .foot_top{
            width: 100%;
            border-bottom: 1px solid #3b3949;
            padding-bottom: 33px;
            .top_left{
                float: left;
                .top_left_tit{
                    font-size: 16px;
                    color: #fff;
                }
                .top_left_con{
                    margin-top: 10px;
                    .iphone{
                        float: left;
                    } 
                    .bd_iphone{
                        float: left;
                        margin-left: 136px;
                    }
                    p{
                        font-size: 14px;
                        color: #fff;
                        line-height: 35px;
                    }  
                }
            }
            .top_right{
                float: right;
                margin-right: 26px;
                .top_rightCon{
                    float: right;
                    img{
                        width: 100px;
                        height: 100px;
                    }
                    p{
                        font-size: 16px;
                        color: #fff;
                        text-align: center;
                        margin-top: 10px;
                    }
                }
                .njl_mRight{
                    margin-right: 46px;
                }
            }
        }
        .foot_bottom{
            padding-top: 20px;
            width: 100%;
            p{
                font-size: 12px;
                color: #fff;
                text-align: center;
                line-height: 30px;
            }
        }
    }
  }
}
.guanyuHover{
    /*color:#1dbe72 !important;*/
    background:  #1dbe72 !important;
  }
.btn_green{
  color:#1dbe72 !important;
  border-bottom: 4px solid #1dbe72;
}
.hoverColor{
  color:#1dbe72 !important;
  border-bottom: 4px solid #1dbe72;
}
.clear::after{
  content:"";
  display: block;
  clear:both;
}
.tg_zhuce{
  color: #fff;
}
.dang_color{
  color:#000;
 
}
.black_color{
   background: #fff;
  box-shadow: rgb(204, 204, 204) 2px 2px 2px;
}
.black_color a{
  color:#000;
}
/*.headerBg{
  background: #fff;
  box-shadow: rgb(204, 204, 204) 2px 2px 2px;
}*/
/*.router-link-active {
    color:#1dbe72;
    border-bottom: 4px solid #1dbe72;
}*/
/*@media screen and (max-width:1200px) {
  body{
    width: 1200px;
  }
}*/
@media screen and (max-width:1412px) {
  body{
    width: 1412px;
  }
}
</style>
