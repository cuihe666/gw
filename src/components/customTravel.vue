<!-- 定制旅行  崔贺 -->
<template>
  <div class="customTravel">
    <nav>
      <p class="p1">定制旅行</p>
      <p class="p2">糖果旅居目前与136个国家的世界500强企业建立业务联系，开通了580多个国内外地区运营服务中心，汇聚全球1200多</p>
      <p class="p3">家旅行社与旅行达人，转为团队或个人提供高质量的旅行及一站式服务</p>
    </nav>
    <section class="main-part">
      <!-- 基本信息 -->      
      <section class="basic">
        <h4>
          基本信息
          <span>(必填项)</span>
        </h4>
        <ul class="basic-msg">
          <li class="name">
            <span class="tit">姓名:</span>
            <input type="text" v-model="name"/>
          </li>
          <li class="tel">
            <span class="tit">手机号:</span>
            <input type="text" v-model="tel"/>
          </li>
        </ul>
        <div style="clear:both;"></div>
      </section>
      <!-- 选填信息 -->
      <section class="optional">
        <h4>
          选填信息
        </h4>
        <p>
          <span class="tit">服务对象:</span>
          <span class="company set hov" :class="{click: flag == 0}" @click="optional(0)">企业定制</span>
          <span class="personal set hov" :class="{click: flag == 1}" @click="optional(1)">个人定制</span>          
        </p>
        <section class="optional-part">          
          <ul class="optional-msg">
            <li class="destination">
              <span class="tit">目的地:</span>
              <input type="text" v-model="destination"/>
            </li>
            <li class="time">
              <span class="tit">出发时间:</span>
              <input type="text" v-model="time"/>
            </li>
          </ul>
          <div style="clear:both;"></div>
          <ul class="personal-part" v-if="flag == 1">
            <li class="budget">
              <span class="tit">预算:</span>
              <input type="text" v-model="budget"/>
            </li>
            <li class="num">
              <span class="tit">成人数:</span>
              <input type="text" v-model="adult"/>
              <span class="tit tit1">儿童数:</span>
              <input type="text" v-model="child"/>
            </li>
          </ul>
          <div style="clear:both;"></div>
          <section class="remark">
            <span class="tit">备注:</span>
            <textarea v-model="remark"></textarea>
          </section>
        </section>
      </section>
      <!-- 提交按钮 -->
      <section class="footer-btn">
        <button class="hov" @click="submit_msg()">提交</button>
        <span class="hov">查看我的预订记录</span>
      </section>
    </section>
    <div class="wrap">
      <div class="over-time">
        <p class="over-time-p1">很抱歉您的预定时间过长，商品发</p>
        <p class="over-time-p2">生变化，请重新查询！</p>
        <ul>
          <li class="hov">重新选择</li>
          <li class="bord"></li>
          <li class="hov">取消</li>
        </ul>
      </div>
      <div class="reserve">
        <h4>申请记录<span>(仅展示最近10次记录)</span></h4>
        <ul>
          <li v-for="i in 10">您于2017-09-20提交了企业定制旅行的申请</li>
        </ul>
        <button class="hov">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customTravel',
  data () {
    return {
      obj1:{
        num:3,
        colorNum:3,
        imgLogo:"../static/img/logo1.png"
      },
      flag: 0, // 用来控制是企业定制还是个人定制
      name: "",
      tel: "11",
      destination: "",
      time: "",
      budget: "",
      adult: "",
      child: "",
      remark: ""
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
    optional: function(num){ // 点击企业定制、个人定制
      this.flag = num;
      this.destination = "",
      this.time = "",
      this.budget = "",
      this.adult = "",
      this.child = "",
      this.remark = ""
    },
    submit_msg: function(){ // 点击提交按钮
      var dat = {
        name: this.name,
        tel: this.tel,
        destination: this.destination,
        time: this.time,
        budget: this.budget,
        adult: this.adult,
        child: this.child,
        remark: this.remark
      }
      console.log(dat);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  *{
    font-family: PingFangSC-Regular!important;
  }
  .wrap{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100000000;
    background: rgba(0,0,0,0.42);
    font-family: MicrosoftYaHei;
    display: none;
    .over-time{
      width: 386px;
      height: 200px;
      background: white;
      border-radius: 8px;
      position: absolute;
      left: 40%;
      top: 20%;      
      display:none;
      p{
        font-size: 16px;
        color: #000000;
        text-align: center;
      }
      .over-time-p1{
        margin-top: 56px;
      }
      .over-time-p2{
        margin-top: 16px;
      }
      ul{
        width: 100%;
        height: 62px;
        border-top: 1px solid #dddddd;
        position: absolute;
        left: 0;
        bottom: 0px;
        li{
          float: left;
          font-size: 14px;
          color: #000000;
          text-align: center;
          height: 62px;
          line-height: 62px;
          width: 192.5px;
        }
        .bord{
          width: 1px;
          background: #dddddd;
        }
      }
    }
    .reserve{
      width: 367px;
      height: 512px;
      background: white;
      position: absolute;
      left: 40%;
      top: 10%;
      border-radius: 8px;
      h4{
        margin: 42px 0px 30px 0px;
        font-size: 18px;
        color: #000000;
        text-align: center;
        span{
          font-size: 16px;
          color: #666666;
          margin-left: 10px;
          font-size: 14px;
          color: #000000;
        }
      }
      li{
        font-size: 14px;
        width: 100%;
        text-align: center;
        color: #666666;
        margin-bottom: 16px;
      }
      button{
        background: none;
        border-top: 1px solid #dddddd;
        text-align: center;
        display: block;
        line-height: 54px;
        width: 100%;
        position: absolute;
        left:0;
        bottom: 0;
      }
    }
  }
  .hov:hover{
    cursor: pointer;
  }
  nav{
    padding-top: 100px;
    height: 400px;
    width: 100%;
    background: url("../../static/img/dingzhiBg.png") center center/auto 100% no-repeat;
    .p1, .p2, .p3{
      text-align: center;
      color: #ffffff;
    }
    .p1{
      margin: 130px 0px 34px 0px;
      font-size: 37px;
    }
    .p2, .p3{
      font-size: 24px;
    }
    .p3{
      margin-top: 18px;
    }
  }
  .main-part{
    width: 1201px;
    margin: 22px auto 60px;
    background: white;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    padding: 0px 28px;
    h4{
      font-size: 16px;
      color: #333333;
      padding: 20px 0px;
      border-bottom: 1px solid #dddddd;
      span{
        color: #999999;
      }
    }
    .tit{
      margin-right: 30px;
      font-size: 14px;
      color: #666666; 
    }
    li{          
      float: left;
      margin-top: 36px;
      line-height: 34px;
      width: 50%;
      input{
        border: 1px solid #dddddd;
        height: 32px;
        width: 418px;
        border: 1px solid #dddddd;
      }
    }    
    .basic{
      margin-bottom: 54px;
      .basic-msg{        
        .tel{
          text-align: right;
        }
      }
    }
    .optional{
      p{
        margin: 30px 0px 41px 0px;
        .set{
          font-size: 16px;
          color: #1dbe72;
          display: inline-block;
          width: 140px;
          height: 40px;
          border: 1px solid #1dbe72;
          margin-right: 108px;
          line-height: 40px;
          text-align: center;
          border-radius: 4px;
        }
        .set:hover{
          background: #1dbe72;
          color: white;
        }
        .click{
          background: #1dbe72;
          color: white;
        }
      }
      li{
        margin-top: 0px;
      }
      .destination .tit{
        margin-right: 20px;
      }
      .time{
        text-align: right;
        .tit{
          margin-right: 16px;
        }
      }
      .personal-part{
        margin-top: 31px;
        .budget .tit{
          margin-right: 35px;
        }
        .num{
          text-align: right;
          input{
            width: 152px;
          }
          .tit{
            margin-right: 28px;
          }
          .tit1{
            margin-left: 28px;
          }
        }
      }
      
      .remark{
        margin: 31px 0px;
        .tit{
          margin-right: 40px;
          float: left;
        }
        textarea{
          width: 1071px;
          border: 1px solid #dddddd;
          height: 185px;
          padding: 5px;
        }
      }
    }
    .footer-btn{
      margin-top: 32px;
      button, span{
        display: block;
        width: 178px;
        text-align: center;
        margin: 0px auto;
      }
      button{
        font-size: 16px;
        color: white;
        background: #1dbe72;
        line-height: 45px;
        border-radius: 4px;
      }
      span{
        padding: 20px 0px 30px 0px;
        font-size: 14px;
        color: #1dbe72;
        background: url("../../static/img/go.png") no-repeat 150px 24px;
      }
    }
  }
</style>
