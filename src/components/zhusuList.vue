<!-- 住宿列表页 吕庆科 -->
<template>
  <div class="zhusuList">
    <div class="zhusuList_wp">
        <div class="top_search">
            <div class="zhusu_search clearfix">
                <div class="search_info">
                    <div class="nav">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                          <el-breadcrumb-item :to="{ path: '/zhusu' }">住宿</el-breadcrumb-item>
                          <el-breadcrumb-item>北京</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="left common_style">
                        <input type="search" name="" v-bind:value="search_city" placeholder="城市或目的地" readonly />
                    </div>
                    <div class="middle common_style">
                        <input type="search" name="" v-bind:value="search_time" placeholder="入住时间-退房时间" readonly />
                    </div>
                    <div class="right common_style">
                        <input type="search" name="" v-bind:value="search_addr" placeholder="名称或位置区域" readonly />
                    </div>
                </div>
                <div class="search_btn" @click="search">搜索</div>
            </div>
        </div>
        <div class="select_content">
            <div class="type_one">
                <span class="title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
                <span class="not_limited active">不限</span>
                <span class="condition" v-for="(localtion,index) in localtions" @click="select_local(index)"   v-bind:class="{'onShow1': index === cur_select}">{{localtion}}<div class="bomb">dddddd</div></span>
            </div>
            <div class="type_two clearfix">
                <div class="left item">
                    <span class="title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
                    <span class="not_limited active">不限</span>
                    <el-input v-model="min_price" placeholder="请输入内容" class="min_price"></el-input>
                    <span class="link">-</span>
                    <el-input v-model="max_price" placeholder="请输入内容" class="max_price"></el-input>
                    <el-button type="primary" class="confirm_btn">主要按钮</el-button>
                </div>
                <div class="right item">
                    <span class="title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
                    <el-select v-model="value" placeholder="请选择" class="select_result">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                </div>
            </div>
            <div class="type_three clearfix">
                <div class="left item">
                    <span class="title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
                    <span class="not_limited active">不限</span>
                    <el-checkbox v-model="whole" class="whole checkout">整套</el-checkbox>
                    <el-checkbox v-model="single" class="single checkout">单间</el-checkbox>
                    <el-checkbox v-model="bed" class="bed checkout">床位</el-checkbox>
                </div>
                <div class="right item">
                    <span class="title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
                    <span class="not_limited active">不限</span>
                    <el-checkbox v-model="one_bedroom" class="one_bedroom checkout">一居室</el-checkbox>
                    <el-checkbox v-model="two_bedroom" class="two_bedroom checkout">二居室</el-checkbox>
                    <el-checkbox v-model="three_bedroom" class="three_bedroom checkout">三居室</el-checkbox>
                    <el-checkbox v-model="more_bedroom" class="more_bedroom checkout">四室以上</el-checkbox>
                </div>
            </div>
            <div class="type_four clearfix">
                <span class="title">位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
                <span class="not_limited active">不限</span>
                <div class="house_container">
                    <span v-for="(item,index) in house_types" class="house_item">
                        <el-checkbox v-model="checked">{{item.value}}</el-checkbox>
                    </span>
                </div>
                <span class="close">收起</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import "../../static/css/zhusuList.css";
export default {
  name: 'zhusuList',
  data () {
    return {
      cur_select: 100,
      search_city: '北京市',
      search_time: '2017/8/10-2017/8/20',
      search_addr: '海淀区',
      min_price: '',
      max_price: '',
      whole: false,
      single: false,
      bed: false,
      one_bedroom: false,
      two_bedroom: false,
      three_bedroom: false,
      more_bedroom: false,
      obj1:{
        num:1,
        colorNum:1,
        imgLogo:"../static/img/logo1.png"
      },
      localtions: ['地铁线路','行政区域','车站机场','商圈','景点','医院','高校'],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      house_types: [{
        value: '精品公寓',
      }, {
        value: '独立屋',
      }, {
        value: 'loft',
      }, {
        value: '小木屋',
      }, {
        value: '独栋别墅',
      }, {
        value: '青年旅社',
      }, {
        value: '蒙古包',
      }, {
        value: '普通居民',
      }, {
        value: '海景房',
      }, {
        value: '度假村',
      }, {
        value: '农家院',
      }, {
        value: '家庭宾馆',
      }, {
        value: '乡间村社',
      }, {
        value: '精品酒店',
      }]
    }
  },
  components: {  
    
  },
  mounted:function(){
  },
  created: function() {
    this.$emit("transferuser",this.obj1);
  },
  methods:{
    select_local: function(index){
        this.cur_select = index;
    },
    search: function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .zhusuList_wp{
        padding-top: 100px;
        .top_search{
            position: relative;
            height: 132px;
            box-sizing: border-box;
            background-color: #f5f5f5;

            .zhusu_search{
                font-family: "微软雅黑";
                width: 1200px;
                height: 60px;
                margin:0 auto;
                position: absolute;
                left: 0;
                right: 0;
                top: 51px;
                .search_info{
                    float: left;
                    width: 1000px;
                    height: 100%;
                    background-color: #fff;
                    padding: 18px 0;
                    box-sizing: border-box;
                    border: 1px solid #ddd;
                    border-right: none;
                    position: relative;
                    border-radius: 10px 0 0 10px;
                    .nav{
                        position: absolute;
                        top: -30px;
                        left: 0;

                    }
                    .left{
                        width: 250px;
                        position: relative;
                        border-right: 1px solid #ddd;
                        box-sizing: border-box;
                        input{
                            background: url('../../static/img/location.png') 15% 45% no-repeat;
                            background-size: 14px 19px;
                        }
                        .onShow{
                            opacity: 1;
                        }
                    }
                    .middle{
                        width: 401px;
                        border-right: 1px solid #ddd;
                        box-sizing: border-box;
                        input{
                            background: url('../../static/img/lvloca.png') 10% 45% no-repeat;
                            background-size: 14px 18px;
                        }
                    }
                    .right{
                        width: 348px;
                        box-sizing: border-box;
                        input{
                            background: url('../../static/img/loca.png') 11% 45% no-repeat;
                            background-size: 18px 18px;
                        }
                    }
                    .common_style{
                        float: left;
                        height: 100%;
                        box-sizing: border-box;
                        input{
                            float: left;
                            height: 100%;
                            width: 100%;
                            text-align: left;
                            font-size: 16px;
                            color: #999;
                            padding-left: 65px;
                        }
                    }
                }
                .search_btn{
                    float: left;
                    width: 200px;
                    height: 100%;
                    background-color: #fbbc05;
                    border-radius: 0 10px 10px 0;
                    font-size: 20px;
                    color: #fff;
                    text-align: center;
                    line-height: 60px;
                }
            }
            .clearfix{
                content: '';
                display: block;
                clear: both;
            }
        }
        .select_content{
            width: 1200px;
            margin: 0 auto;
            background-color: #fff;
            .type_one{
                width: 100%;
                height: 47px;
                background-color: #f9f9f9;
                border-radius: 10px;
                margin-top: 10px;
                span{
                    float: left;
                    font-size: 12px;
                    font-family: "PingFangSC-Regular";
                    color: #999;
                    height: 100%;
                    line-height: 47px;
                }
                .title{
                    padding-left: 21px;
                    padding-right: 40px;
                    color: #333;
                }
                .not_limited{
                    padding-right: 16px;
                }
                .condition{
                    margin-left: 24px;
                    padding-right: 15px;
                    background: url('../../static/img/minsu_arrow_gray.png') 100% 50% no-repeat;
                    background-size: 10px 7px;
                    position: relative;
                    .bomb{
                        width: 100px;
                        height: 100px;
                        position: absolute;
                        top: 47px;
                        left: 0;
                        z-index: 10;
                        background-color: #fff;
                        display: none;
                    }
                }
                .onShow1{
                    color: red;
                    .bomb{
                        display: block !important;
                    }
                }
                .click_item{
                    background-color: #fff;
                    color: #333;
                    background-image: url('../../static/img/minsu_arrow_black.png');
                }
                .active{
                    color: #1dbe72;
                }
            }
            .type_two{
                width: 100%;
                height: 47px;
                margin-top: 10px;
                .item{
                    width: 595px;
                    height: 100%;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    span{
                        float: left;
                        font-size: 12px;
                        font-family: "PingFangSC-Regular";
                        color: #999;
                        height: 100%;
                        line-height: 47px;
                    }
                    .title{
                        padding-left: 21px;
                        padding-right: 40px;
                        color: #333;
                    }
                    .select_result{
                        width: 100px;
                        height: 31px;
                        line-height: 31px;
                        margin-top: 8px;
                    }
                    .min_price{
                        float: left;
                        width: 100px;
                        height: 31px;
                        margin-top: 8px;
                        margin-left: 40px;
                        margin-right: 10px;
                    }
                    .max_price{
                        float: left;
                        width: 100px;
                        height: 31px;
                        margin-top: 8px;
                        margin-left: 5px;
                        margin-right: 30px;
                    }
                    .confirm_btn{
                        width: 84px;
                        border-radius: 5px;
                        line-height: 31px;
                        text-align: center;
                        color: #fff;
                        background-color: #1dbe72;
                        margin-top: 8px;
                        border: none;
                        box-sizing: border-box;
                        padding: 0 0;
                    }
                    .active{
                        color: #1dbe72;
                    }
                }
                .left{
                    float: left;
                }
                .right{
                    float: right;
                }
            }
            .type_three{
                width: 100%;
                height: 47px;
                margin-top: 10px;
                .item{
                    width: 595px;
                    height: 100%;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    span{
                        float: left;
                        font-size: 12px;
                        font-family: "PingFangSC-Regular";
                        color: #999;
                        height: 100%;
                        line-height: 47px;
                    }
                    .title{
                        padding-left: 21px;
                        padding-right: 40px;
                        color: #333;
                    }
                    .active{
                        color: #1dbe72;
                    }
                    .checkout{
                        margin-top: 14px;
                        margin-left: 40px;
                    }
                    .two_bedroom{
                        margin-left: 28px;
                    }
                    .three_bedroom{
                        margin-left: 28px;
                    }
                    .more_bedroom{
                        margin-left: 28px;
                    }
                }
                .left{
                    float: left;
                }
                .right{
                    float: right;
                }
            }
            .type_four{
                width: 100%;
                min-height: 47px;
                background-color: #f9f9f9;
                border-radius: 10px;
                margin-top: 10px;
                span{
                    float: left;
                    font-size: 12px;
                    font-family: "PingFangSC-Regular";
                    color: #999;
                    height: 100%;
                    line-height: 47px;
                }
                .title{
                    padding-left: 21px;
                    padding-right: 40px;
                    color: #333;
                }
                .not_limited{
                    padding-right: 24px;
                }
                .active{
                    color: #1dbe72;
                }
                .house_container{
                    width: 935px;
                    max-height: 94px;
                    float: left;
                }
                .house_item{
                    width: 69px;
                    margin-left: 16px;
                }
                .close{
                    float: right;
                    margin-right: 20px;
                    padding-right: 18px;
                }
            }
        }

    }
</style>

