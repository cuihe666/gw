<!-- 民宿首页 吕庆科 -->
<template>
  <div class="zhusu">
    <div class="zhusu_wp">
      <lun></lun>
    
      <div class="zhusu_con">
        <!--<router-link to="/zhusuDetail">住宿详情页</router-link>
        <router-link to="/zhusuList">住宿列表页</router-link>-->
        <div class="zhusu_search clearfix">
            <div class="search_localtion clearfix">
                <div class="china" @click="tabSwitch" v-bind:class="{active: isChina}">国内</div>
                <div class="overseas" @click="tabSwitch" v-bind:class="{active: isOverseas}">海外</div>
            </div>
            <div class="search_info">
                <div class="left common_style">
                    <input type="search" name="" v-bind:value="search_city" placeholder="城市或目的地" readonly />
                    <div class="tips" v-bind:class="{'onShow': show_tip}">请选择城市或目的地</div>
                </div>
                <div class="middle common_style">
                    <input type="search" name="" v-bind:value="search_time" placeholder="入住退房时间" readonly />
                </div>
                <div class="right common_style">
                    <input type="search" name="" v-bind:value="search_addr" placeholder="名称或位置区域" readonly />
                </div>
            </div>
            <div class="search_btn" @click="search">搜索</div>
        </div>
        <div class="zhusu_list">
            <div class="china_overseas">
                <div class="top clearfix">
                    <span class="title">国内民宿</span>
                    <span class="more">查看更多</span>
                </div>
                <div class="content">
                    <div class="item" v-for="(chinaHouse,index) in chinaHouses" @mouseenter="onShow(index)" @mouseleave="onHide(index)">
                        <div class="img_container">
                            <img src="../../static/img/img1.png" />
                        </div>
                        <div class="description">
                            <p class="name" v-bind:class="{'active': index === cur_index}">{{chinaHouse.name}}</p>
                            <p class="city">{{chinaHouse.city}}</p>
                            <p class="price">¥{{chinaHouse.price}}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="china_overseas">
                <div class="top clearfix">
                    <span class="title">国内民宿</span>
                    <span class="more">查看更多</span>
                </div>
                <div class="content">
                    <div class="item" v-for="(chinaHouse,index) in chinaHouses" @mouseenter="onShow(index)" @mouseleave="onHide(index)">
                        <div class="img_container">
                            <img src="../../static/img/img1.png" />
                        </div>
                        <div class="description">
                            <p class="name" v-bind:class="{'active': index === cur_index}">{{chinaHouse.name}}</p>
                            <p class="city">{{chinaHouse.city}}</p>
                            <p class="price">¥{{chinaHouse.price}}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lun from './lunbo.vue'
export default {
  name: 'zhusu',
  data () {
    return {
      obj1:{
        num:1,
        colorNum:3,
        imgLogo:"../static/img/tglogo.png"
      },
      isChina: true,
      isOverseas: false,
      cur_index: '',
      search_city: '',
      show_tip: false,
      chinaHouses: [
          {
            'img': '../../static/img/img1.png',
            'name': '哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈',
            'city': '四川成都',
            'price': '365'
          },
          {
            'img': '../../static/img/img1.png',
            'name': '哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈',
            'city': '四川成都',
            'price': '365'
          },
          {
            'img': '../../static/img/img1.png',
            'name': '哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈',
            'city': '四川成都',
            'price': '365'
          },
          {
            'img': '../../static/img/img1.png',
            'name': '哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈',
            'city': '四川成都',
            'price': '365'
          },
          {
            'img': '../../static/img/img1.png',
            'name': '哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈',
            'city': '四川成都',
            'price': '365'
          },
          {
            'img': '../../static/img/img1.png',
            'name': '哈哈哈哈哈哈哈哈哈啊哈哈哈啊哈哈啊哈',
            'city': '四川成都',
            'price': '365'
          }
      ]
    }
  },
  components: {  
    lun:lun
  },
  mounted:function(){
  },
  created: function() {
    this.$emit("transferuser",this.obj1);
  },
  methods:{
      hideWrap:function(){

      },
      tabSwitch: function(e){
        if(e.target.className.indexOf('china')>-1){
            this.isChina = true;
            this.isOverseas = false;
        }else if(e.target.className.indexOf('overseas')>-1){
            this.isChina = false;
            this.isOverseas = true;
        }
      },
      onShow: function(index){
        this.cur_index = index;
      },
      onHide: function(){
        this.cur_index = '';
      },
      search: function(){
        if(!this.search_city&&!this.search_time&&!this.search_addr){
            this.show_tip = true;
            let _this = this;
            setTimeout(function(){
                _this.show_tip = false;
            },3000);
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .zhusu_con{
    position: relative;
    .zhusu_search{
        font-family: "微软雅黑";
        width: 1200px;
        height: 75px;
        margin:0 auto;
        position: absolute;
        left: 0;
        right: 0;
        top: -151px;
        .search_localtion{
            float: left;
            width: 246px;
            height: 100%;
            background-color: #2d3e50;
            font-size: 24px;
            border-radius: 10px 0 0 10px;
            .china{
                float: left;
                color: #c9cbd2;
                box-sizing: border-box;
                margin-left: 50px;
                padding-top: 21px;
                padding-bottom: 9px;
            }
            .overseas{
                float: right;
                color: #c9cbd2;
                box-sizing: border-box;
                margin-right: 50px;
                padding-top: 21px;
                padding-bottom: 9px;
            }
            .active{
                color: #ff9800;
                border-bottom: 4px solid #ff9800;
            }
        }
        .search_info{
            float: left;
            width: 733px;
            height: 100%;
            background-color: #fff;
            padding: 20px 0;
            .left{
                width: 241px;
                position: relative;
                border-right: 1px solid #e8e8e8;
                input{
                    background: url('../../static/img/location.png') 13% 45% no-repeat;
                    background-size: 19px 24px;
                }
                .tips{
                    position: absolute;
                    top: 65px;
                    left: 0;
                    width: 241px;
                    height: 55px;
                    line-height: 55px;
                    text-align: center;
                    font-size: 16px;
                    color: #ff4c4c;
                    font-family: "PingFangSC-Regular";
                    background-color: #fff;
                    opacity: 0;
                    transition: all 1s linear;
                    -webkit-transition: all 1s linear;
                    -moz-transition: all 1s linear;
                    -o-transition: all 1s linear;
                }
                .onShow{
                    opacity: 1;
                }
            }
            .middle{
                width: 241px;
                border-right: 1px solid #e8e8e8;
                input{
                    background: url('../../static/img/lvloca.png') 13% 45% no-repeat;
                    background-size: 18px 24px;
                }
            }
            .right{
                width: 251px;
                input{
                    background: url('../../static/img/loca.png') 13% 45% no-repeat;
                    background-size: 22px 22px;
                }
            }
            .common_style{
                float: left;
                height: 100%;
                box-sizing: border-box;
                input{
                    height: 100%;
                    width: 100%;
                    line-height: 34px;
                    text-align: left;
                    font-size: 18px;
                    color: #343c56;
                    padding-left: 65px;
                }
            }
        }
        .search_btn{
            float: left;
            width: 221px;
            height: 100%;
            background-color: #fbbc05;
            border-radius: 0 10px 10px 0;
            font-size: 24px;
            color: #fff;
            text-align: center;
            line-height: 75px;
        }
    }
    .clearfix{
        content: '';
        display: block;
        clear: both;
    }
    .zhusu_list{
        width: 1200px;
        margin: 0 auto;
        .china_overseas{
            .top{
                box-sizing: border-box;
                padding: 62px 0 0;
                .title{
                    float: left;
                    font-size: 24px;
                    color: #1b2735;
                    height: 100%;
                }
                .more{
                    float: right;
                    color: #999;
                    font-size: 20px;
                    height: 100%;
                }
            }
            .content{
                width: 100%;
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
                .item{
                    width: 391px;
                    margin-top: 30px;
                    .img_container{
                        width: 100%;
                        height: 287px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .description{
                        width: 100%;
                        .name{
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: 18px;
                            color: #333;
                            margin-top: 15px;
                        }
                        .city{
                            font-size: 16px;
                            color: #666;
                            margin-top:8px;
                        }
                        .price{
                            font-size: 20px;
                            color: #ec5a54;
                            margin-top: 8px;
                        }
                        .active{
                            color:#1dbe72;
                        }
                    }
                }
            }
        }
    }
    
  }
</style>
