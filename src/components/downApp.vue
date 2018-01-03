<!-- 下载app 崔贺 -->
<template>
  <div class="downApp">
    <nav>
      <dl>
        <dt></dt>
        <dd>
          <a class="hov">iPhone下载</a>
          <a class="android hov">Android下载</a>
        </dd>
      </dl>
    </nav>
    <ul class="main-part">
      <li class="li1"></li>
      <li class="li2"></li>
      <li class="li3"></li>
      <li class="li4"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'downApp',
  data () {
    return {
      obj1:{
        num:4,
        colorNum:4,
        imgLogo:"../static/img/logo1.png"
      }
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .downApp{
    padding-bottom: 60px;
  }
  .hov:hover{
    cursor: pointer;
  }
  nav{
    padding-top: 100px;
    height: 396px;
    width: 100%;
    background: url("../../static/img/dapp.png") center 100px/1920px 396px no-repeat;
    dl{
      width: 384px;
      height: 158px;
      margin: 119px auto;
      dt{
        width: 154px;
        height: 158px;
        float: left;
        background: url("../../static/img/download_ewm.png") center center/146px 146px no-repeat;
      }
      dd{
        height: 158px;
        width: 230px;
        float: left;
        a{
          display: block;
          width: 138px;
          height: 52px;
          color: #fbbc05;
          background: rgba(0,0,0,0.65);
          line-height: 52px;
          text-align: center;
          margin: 3% auto 0;
          border-radius: 4px;
        }
        .android{
          margin-top: 11%;
        }
      }
    }
  }
  .main-part{
    width: 100%;
    .li1{
      width: 100%;
      height: 1080px;
      background: url("../../static/img/download_02.png") center center/1920px 1080px no-repeat;
    }
    .li2{
      width: 100%;
      height: 991px;
      background: url("../../static/img/download_04.png") center center/1920px 991px no-repeat;
    }
    .li3{
      width: 100%;
      height: 922px;
      background: url("../../static/img/download_07.png") center center/1920px 922px no-repeat;
    }
    .li4{
      width: 100%;
      height: 1003px;
      background: url("../../static/img/download_09.png") center center/1920px 1003px no-repeat;
    }
  }
</style>
