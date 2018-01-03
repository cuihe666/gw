<!-- 旅行首页 吕庆科-->
<template>
    <div class="zhusu">
      <div class="travel">
        <lun></lun>
        <!--<div class="travel_wp">
          <lun></lun>
        </div>-->
        <!--<div class="go_detail">
          <router-link to="/travelDetail"> 旅行详情</router-link>
          <router-link to="/travelList"> 旅行列表页</router-link>
        </div>-->
        <div class="zhusu_con">
                <!--<router-link to="/zhusuDetail">住宿详情页</router-link>
                <router-link to="/zhusuList">住宿列表页</router-link>-->
                <div class="zhusu_search clearfix">
                    <!--<div class="search_localtion clearfix">
                        <div class="china" @click="tabSwitch" v-bind:class="{active: isChina}">国内</div>
                        <div class="overseas" @click="tabSwitch" v-bind:class="{active: isOverseas}">海外</div>
                    </div>
                    <div class="search_info">
                        <div class="left common_style">城市或目的地</div>
                        <div class="middle common_style">入住退房时间</div>
                        <div class="right common_style">名称或位置区域</div>
                    </div>-->
                    <div class="search_info">
                        <input type="search" name="" v-bind:value="search_result" placeholder="城市或目的地" readOnly />
                        <div class="tips" v-bind:class="{'onShow': show_tip}">请选择城市或目的地</div>
                    </div>
                    <div class="search_btn" @click="search">搜索</div>
                </div>
                <div class="zhusu_list">
                    <div class="china_overseas">
                        <div class="top clearfix">
                            <span class="title">主题线路</span>
                        </div>
                        <div class="cities clearfix">
                            <span class="city" v-for="(city,index) in cities" v-bind:class="{'active': index === cur_city}" @click="choose_city(index)">{{city}}</span>
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
                            <span class="title">当地活动</span>
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
  name: 'travel',
  data () {
      return {
        obj1:{
          num:2,
          colorNum:3,
          imgLogo:"../static/img/tglogo.png"
        },
        isChina: true,
        isOverseas: false,
        cur_index: '',
        cur_city: 0,
        search_result: '',
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
        ],
        cities: ['北京','上海','广州','大理','青岛','海外']
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
        choose_city: function(index){
            this.cur_city = index;
        },
        search: function(){
            if(!this.search_result){
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
        .search_info{
            float: left;
            width: 979px;
            height: 100%;
            border-radius: 10px 0 0 10px;
            padding-left: 56px;
            background: url('../../static/img/location.png') 3% 45% no-repeat;
            background-size: 18px 24px;
            background-color: #fff;
            position: relative;
            input{
                height: 100%;
                line-height: 75px;
                color: #343c56;
                font-size: 18px;
                font-family: "微软雅黑";
            }
            .tips{
                position: absolute;
                top: 85px;
                left: 0;
                width: 204px;
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
        padding-bottom: 75px;
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
            .cities{
                padding-top: 30px;
                .city{
                    float: left;
                    font-size: 20px;
                    font-family: "微软雅黑";
                    color:#999;
                    margin-right: 52px;
                    padding-bottom: 5px;
                }
                .active{
                    color: #1dbe72;
                    border-bottom: 4px solid #1dbe72;
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
