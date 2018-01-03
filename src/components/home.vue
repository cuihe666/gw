<!-- 首页  宁金良 -->
<template>
  <div class="home">
    <login></login>
    <lun></lun>
    
    <div class="home_wp">
      <div class="n_minsu">
            <div class="n_minsu_tit">
              推荐民宿
            </div>
            <div class="njl_minsu_list">
              <ul class="clear">
                <li v-for="(item,index) in minsulist" @click="btn_minsu(index)" class="lis" :class="{njl_active:index == minsuNum,n_list_one:index == 0,hoverColorMinsu:hoverColorNum == index}" @mouseenter="enterColNum(index)" @mouseleave="leaveColNum(index)">{{item}}</li>
              </ul>
              <div class="njl_listCon">
                <div class="njl_listConOne" v-for="(minsuList,index) in minsuConList" @mouseenter="enterMinsuFy(index)" @mouseleave="leaveMinsuFy(index)">
                  <div class="njl_listConImg">
                    <img :src="minsuList.img" alt="">
                  </div>
                  <div class="site_con">
                    <p class="njl_tit" :class="{titColor:titColorNUm == index}">{{minsuList.title}}</p>
                    <p class="njl_site">{{minsuList.site}}</p>
                    <p class="njl_price">￥<span>{{minsuList.price}}</span></p>
                  </div>
                </div>
              </div>
              <div class="njl_more">
                <div class="CheckOut">更多{{njl_site_btn()}}民宿</div>
              </div>
            </div>
      </div>
      <div class="n_lvxing">
            <div class="n_minsu_tit">
              旅行度假
            </div>
            <div class="njl_minsu_list">
              <ul class="clear">
                <li v-for="(item,index) in lvxingTab" class="lis" @click="btn_lvxing(index)" :class="{njl_active:index == lvxingNum,n_list_one:index == 0}">{{item}}</li>
              </ul>
              <div class="njl_listCon">
                <div class="njl_listConOne" v-for="(lvxingList,index) in lvxingConList"  @mouseenter="enterLvxingFy(index)" @mouseleave="leaveLvxingFy(index)">
                  <div class="njl_listConImg">
                    <img :src="lvxingList.img" alt="">
                  </div>
                  <div class="site_con">
                    <p class="njl_tit" :class="{titColor:titColorlvNum == index}">{{lvxingList.title}}</p>
                    <p class="njl_site">{{lvxingList.site}}</p>
                    <p class="njl_price">￥<span>{{lvxingList.price}}</span></p>
                  </div>
                </div>
              </div>
              <div class="njl_more">
                <div class="CheckOut">更多{{njl_lvxing_btn()}}</div>
              </div>
            </div>
      </div>
    </div>
    <div class="njl_dingzhi">
        <div class="ding_con">
            <p class="njl_ding_tit">定制旅行</p>
            <p class="njl_ding_des">
                棠果旅居目前已与136个国家的世界500强企业建立业务关系，开通了580多个国内外地区运营服务中心，汇聚全球1200对家旅行社与旅行达人，专为团队或个人提供高质量的旅行提供一站式服务。
            </p>
            <p class="njl_btn_apply"><router-link to="/customTravel">点此报名</router-link></p>
        </div>
    </div>
    <div class="expect">
        <div class="njl_expect">敬请期待</div>
        <div class="njl_expect_con clear">
            <div class="njl_expect_con_one" @mouseenter="enterOne" @mouseleave="leaveOne">
                <transition-group 
                    name="fade" 
                    enter-active-class="fadeInUp" 
                    leave-active-class="fadeOutDown" 
                    tag="div" 
                    class="expect_meng" 
                    :class="{bgColorOne:bgColorOne}">
                  <p v-if="showOne"  class="p1" :key="1">棠果商场</p>
                  <p v-if="showOne"  class="p2" :key="2">棠果旅居目前已与136个国家的世界500强企业建立业务关系，开通了580多个国内外地区运营服务中心，汇聚全球1200对家旅行社与旅行达人，专为团队或个人提供高质量的旅行提供一站式服务。</p>
                </transition-group>
            </div>
            
            <div class="njl_expect_con_two" @mouseenter="enterTwo" @mouseleave="leaveTwo">
                <transition-group 
                    name="fade" 
                    enter-active-class="fadeInUp" 
                    leave-active-class="fadeOutDown" 
                    tag="div" 
                    class="expect_meng" 
                    :class="{bgColorTwo:bgColorTwo}">
                  <p v-if="showTwo"  class="p1" :key="1">棠果传媒</p>
                  <p v-if="showTwo"  class="p2" :key="2">棠果旅居目前已与136个国家的世界500强企业建立业务关系，开通了580多个国内外地区运营服务中心，汇聚全球1200对家旅行社与旅行达人，专为团队或个人提供高质量的旅行提供一站式服务。</p>
                </transition-group>
                <!-- <div tag="div" name="fade" class="expect_meng" v-show="showTwo">
                    <p class="p1" >棠果传媒</p>
                    <p class="p2" >棠果旅居目前已与136个国家的世界500强企业建立业务关系，开通了580多个国内外地区运营服务中心，汇聚全球1200对家旅行社与旅行达人，专为团队或个人提供高质量的旅行提供一站式服务。</p>
                </div> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import lun from './lunbo.vue'
import login from './login.vue'
export default {
  name: 'home',
  data () {
    return {
      obj1:{//传给父级的值
        num:0,
        colorNum:3,
        imgLogo:"../static/img/tglogo.png"
      },
      bgColorOne:false,//hover棠果商城样式
      bgColorTwo:false,//hover棠果传媒样式
      showOne:false,//hover判断棠果商城
      showTwo:false,//hover判断棠果传媒
      minsuNum:0,//用来判断是哪个城市
      hoverColorNum:7,//民宿第几个城市
      titColorNUm:7,//民宿第几个房源
      titColorlvNum:7,//lvxing第几个房源
      minsulist:['北京','上海','广州','大理','青岛','海外'],
      minsuConList:[//民宿 北京、上海.....
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        }
      ],
      lvxingNum:0,//判断主题、当地
      lvxingTab:['主题路线','当地活动'],
      lvxingConList:[//旅行 主题、当地
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        },
        {
          'img':'../../static/img/img1.png',
          'title':'一个人幻想的蓝色天空的梦想',
          'site':'北京',
          'price':'4356'
        }
      ]
    }
  },
  components: {  
    lun:lun,
    login:login
  },
  mounted:function(){
    
  },
  created: function() {
    this.$emit("transferuser",this.obj1);
  },
  methods:{
      btn_minsu:function(index){
          this.minsuNum = index;
          if(index == 0){
                this.minsuConList = [
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    }
                  ]
          }else if(index == 1){
                this.minsuConList = [
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    }
                  ]
            }else if(index == 2){
                this.minsuConList = [
                    {
                      'img':'../../static/img/lun2.png',
                      'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
                      'site':'广州',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/lun2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'广州',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/lun2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'广州',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/lun2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'广州',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/lun2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'广州',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/lun2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'广州',
                      'price':'4356'
                    }
                  ]
            }
      },
      njl_site_btn:function(){
        if(this.minsuNum == 0){
            return '北京';
        }else if(this.minsuNum == 1){
            return '上海';
        }else if(this.minsuNum == 2){
            return '广州';
        }else if(this.minsuNum == 3){
            return '大理';
        }else if(this.minsuNum == 4){
            return '青岛';
        }else if(this.minsuNum == 5){
            return '海外';
        }
      },
        btn_lvxing:function(index){
            this.lvxingNum = index;
            if(index == 0){
                this.lvxingConList = [
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img1.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'北京',
                      'price':'4356'
                    }
                  ]
          }else if(index == 1){
                this.lvxingConList = [
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想健身房刚考试电饭锅设计费会更快的恢复高考的',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    },
                    {
                      'img':'../../static/img/img2.png',
                      'title':'一个人幻想的蓝色天空的梦想',
                      'site':'上海',
                      'price':'4356'
                    }
                  ]
            }
        },
        njl_lvxing_btn:function(){
            if(this.lvxingNum == 0){
                return '主题线路';
            }else if(this.lvxingNum == 1){
                return '当地活动';
            }
        },
        enterOne:function(){//敬请期待棠果商城
            this.showOne = true;
            this.bgColorOne = true;
        },
        leaveOne:function(){
            this.showOne = false;
            this.bgColorOne = false;
        },
        enterTwo:function(){//敬请期待棠果传媒
            this.showTwo = true;
            this.bgColorTwo = true;
        },
        leaveTwo:function(){
            this.showTwo = false;
            this.bgColorTwo = false;
        },
        enterColNum:function(index){//hover推荐民宿城市
            this.hoverColorNum = index;
        },
        leaveColNum:function(index){//hover离开推荐民宿城市
            this.hoverColorNum = 7;
        },
        enterMinsuFy:function(index){//hover民宿
            this.titColorNUm = index;
        },
        leaveMinsuFy:function(index){//hover离开民宿房源
            this.titColorNUm = 7;
        },
        enterLvxingFy:function(index){//hover旅行
            this.titColorlvNum = index;
        },
        leaveLvxingFy:function(index){//hover离开旅行房源
            this.titColorlvNum = 7;
        }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.home_wp{
    width: 1200px;
    margin: 60px auto;
    padding-bottom: 60px;
    .n_minsu{

      .n_minsu_tit{
        width: 100%;
        font-size: 24px;
        color:#1b2735;
      }
      .njl_minsu_list{
        width: 100%;

        ul{
          width: 100%;
          margin-top: 34px;
          li{
              float: left;
              margin-left: 52px;
              color:#999;
              padding-bottom: 4.3px;
          }
          .n_list_one{
            margin-left: 0;
          }
        }
        .njl_listCon{
          width: 1200px;
          display: flex;
          -webkit-display: flex;
          -moz-display: flex;
          -ms-display: flex;
          justify-content: space-between;
          -webkit-justify-content: space-between;
          -moz-justify-content: space-between;
          -ms-justify-content: space-between;
          flex-wrap: wrap;
          -webkit-flex-wrap: wrap;
          -moz-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          
          .njl_listConOne{
            width: 391px;
            margin-top: 30px;
            .njl_listConImg{
              width: 100%;
              height: 287px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .site_con{
              width: 100%;
              font-family: 'PingFangSC-Medium';
              .njl_tit{
                display:block;
                white-space:nowrap; 
                overflow:hidden; 
                text-overflow:ellipsis;
                font-size: 18px;
                color: #333;
                margin-top: 15px;
              }
              .njl_site{
                font-size: 16px;
                color: #666;
                margin-top: 8px;
              }
              .njl_price{
                font-size: 20px;
                color: #ec5a54;
                margin-top: 8px;
              }
            }
          }
        }
        .njl_more{
          width: 100%;
            .CheckOut{
              margin: 37px auto;
              width: 150px;
              height: 35px;
              border:1px solid #ff9801;
              font-size: 20px;
              color: #ff9801;
              border-radius: 5px;
              line-height: 35px;
              text-align: center;
            }
        }
      }
    }
    .n_lvxing{
        margin-top: 63px;
        .n_minsu_tit{
            width: 100%;
            font-size: 24px;
            color:#1b2735;
        }
        .njl_minsu_list{
            margin-top: 36px;
            ul{
                .lis{
                  float: left;
                  margin-left: 52px;
                  color:#999;  
                }
                .n_list_one{
                    margin-left: 0;
                  }
                  
            }
            .njl_listCon{
                width: 1200px;
                display: flex;
                -webkit-display: flex;
                -moz-display: flex;
                -ms-display: flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                -moz-justify-content: space-between;
                -ms-justify-content: space-between;
                flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                -moz-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                .njl_listConOne{
                    width: 391px;
                    margin-top: 30px;
                    .njl_listConImg{
                      width: 100%;
                      height: 287px;
                      img{
                        width: 100%;
                        height: 100%;
                      }
                    }
                    .site_con{
                      width: 100%;
                      .njl_tit{
                        display:block;
                        white-space:nowrap; 
                        overflow:hidden; 
                        text-overflow:ellipsis;
                        font-size: 18px;
                        color: #333;
                        margin-top: 15px;
                      }
                      .njl_site{
                        font-size: 16px;
                        color: #666;
                        margin-top: 8px;
                      }
                      .njl_price{
                        font-size: 20px;
                        color: #ec5a54;
                        margin-top: 8px;
                      }
                    }
                }
            }
            .njl_more{
              width: 100%;
                .CheckOut{
                  margin: 37px auto;
                  width: 150px;
                  height: 35px;
                  border:1px solid #ff9801;
                  font-size: 20px;
                  color: #ff9801;
                  border-radius: 5px;
                  line-height: 35px;
                  text-align: center;
                }
            }
        }
    } 
}
.njl_dingzhi{
    width: 100%;
    height: 400px;
    background: url(../../static/img/dingzhiBg.png) no-repeat center center;
    .ding_con{
        width: 1200px;
        margin: 0 auto;
        padding-top: 86px;
        .njl_ding_tit{
            font-size: 24px;
            color: #fff;
            text-align: center;
        }
        .njl_ding_des{
            text-align: center;
            font-size: 20px;
            color: #fff;
            line-height: 45px;
            margin-top: 40px;
        }
        .njl_btn_apply{
            margin: 0 auto;
            width: 137px;
            height: 48px;
            border: 2px solid #fff;
            border-radius: 8px;
            text-align: center;
            line-height: 48px;
            margin-top: 30px;
            a{
              font-size: 24px;
              color: #fff;
            }
        }
    }
}
.expect{
  width: 1200px;
  margin:63px auto;
  .njl_expect{
    font-size: 24px;
    color: #1b2735;
  }
  .njl_expect_con{
    margin-top: 41px;
    .njl_expect_con_one{
      width: 593px;
      height: 454px;
      background: url(../../static/img/img3.png) no-repeat;
      background-size: 100% 100%;
      float: left;
      position: relative;

      .expect_meng{
        position: absolute;
        left: 0;
        bottom:0;
        width: 100%;
        height:152px;
        /*background: rgba(0,0,0,0.5);*/
        padding:22px 42px 20px 17px;
        transition: all 5s ease-out;
        .p1{
          font-size: 20px;
          color: #fff;
        }
        .p2{
          font-size: 16px;
          color: #fff;
          line-height: 30px;
        }
      }
    }
    .njl_expect_con_two{
      width: 593px;
      height: 454px;
      background: url(../../static/img/img4.png) no-repeat;
      background-size: 100% 100%;
      float: left;
      margin-left: 14px;
      position: relative;
      .expect_meng{
        position: absolute;
        left: 0;
        bottom:0;
        width: 100%;
        height:152px;
        /*background: rgba(0,0,0,0.5);*/
        padding:22px 42px 20px 17px;
        transition: all 5s ease-out;
        .p1{
          font-size: 20px;
          color: #fff;
        }
        .p2{
          font-size: 16px;
          color: #fff;
          line-height: 30px;
        }
      }
    }
  }
}
.bgColorOne{
  background: rgba(0,0,0,0.5);
}
.bgColorTwo{
  background: rgba(0,0,0,0.5);
}
/*.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    transform: translateY(-51px);
  }
  50% {
    transform: scale(1.5);
    transform: translateY(-101px);
  }
  100% {
    transform: scale(1);
    transform: translateY(-152px);
  }
}*/
.hoverColorMinsu{
   color:#1dbe72 !important;
    border-bottom: 4px solid #1dbe72;
}
.njl_active{
    color:#1dbe72 !important;
    border-bottom: 4px solid #1dbe72;
}
.titColor{
  color:#1dbe72 !important;
}
.clear{
    content: "";
    display: block;
    clear: both;
}
</style>
