<!-- 业务介绍 崔贺 -->
<template>
  <div class="intelligent">
    <nav>
      <section class="open">
        <p>棠果旅行供应商后台开放啦！</p>
        <img src="../../static/img/line_add.png" alt="" />
        <p class="business">主题线路/当地活动/当地向导/印象随笔/游记攻略</p>
        <a href="http://up.tgljweb.com"></a>
      </section>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'intelligent',
  data () {
    return {
      obj1:{
        num:5,
        colorNum:5,
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
  nav{
    padding-top: 100px;
    position: relative;
    width: 100%;
    height: 700px;
    background: url("../../static/img/zs_pic.jpg") center 100px/1920px 700px no-repeat;
    .open{
      position: absolute;
      left: 0px;
      top: 44%;
      width: 100%;
      p{
        width: 100%;
        font-size: 40px;
        color: white;
        text-align: center;
      }
      img{
        width: 100%;
        display: block;
        margin: 20px;
      }
      .business{
        font-size: 22px;
        text-align: center;
        font-style: italic;
        letter-spacing: 5px;
      }
      a{
        display: block;
        width: 250px;
        height: 60px;
        margin: 60px auto 0;
        background: url("../../static/img/zs_btn.png") left top/250px 60px no-repeat;

      }
    }
  }
</style>
