<!-- 下载app 崔贺 -->
<template>
  <div class="business">
    <section class="cont-wrap">
      <section class="cont">
        <h1>业务板块</h1>
        <ul>
          <li v-for="val in list">
            <h3>{{val.tit}}</h3>
            <img :src="val.pic" alt="" />
            <p>{{val.content}}</p>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {
      obj1:{
        num:5,
        colorNum:5,
        imgLogo:"../static/img/logo1.png"
      },
      list: [
        {
          tit: "棠果旅行-当地人文旅行分享平台",
          pic: "../../static/img/business_01.png",
          content: "棠果旅行分享当地人的生活方式，分享当地人文资源，用共享经济+旅行的模式提供更个性的服务。同时，跨越地域、汇聚全球旅游达人，通过连接全世界会玩的达人和渴望深度体验的游客，推出主题线路、当地活动、游记攻略、印象随笔、企业及个人定制旅行等服务，提供最具当地特色的个性化旅游体验。"
        },
        {
          tit: "棠果住宿-全球精选民宿、精品酒店",
          pic: "../../static/img/business_02.png",
          content: "棠果住宿通过整合全球闲置房源和线上线下一体化运营住宿模式，为用户提供一站式旅居服务。别墅、公寓、民宿、精品酒店、个性建筑房屋等多元化住宿选择，给旅行者提供独具特色的居住体验。"
        },
        {
          tit: "棠果海外-出境游一站式服务平台",
          pic: "../../static/img/business_03.png",
          content: "全面覆盖国内外旅游住宿服务。通过全球资源的整合，将业务从住宿范围延伸到海外用车（接送机、包车）、票务、地陪导游、管家服务、高端定制、海外地产等增值服务，为用户提供全方位的旅行体验。"
        },
        {
          tit: "大棠记-像梦想家一样去旅行",
          pic: "../../static/img/business_04.png",
          content: "大棠记国际旅行社（北京）有限公司（简称：大棠记）经营范围包括出境旅游、国内旅游、会展服务、入境旅游、游轮度假、机票酒店及海外游学等全方位的出行服务。已与全球各大洲超过100多个国家和地区的境外接待机构建立了合作关系。"
        },
        {
          tit: "棠果商城-专注旅行类个性购物商城",
          pic: "../../static/img/business_05.png",
          content: "棠果商城为游客提供更多关于旅行周边产品的个性化选择，包括前沿黑科技、精挑细选的旅行用品、创意生活类产品、当地土特产、地方工艺品等，让你的旅途拥有更多温情与便捷。"
        },
        {
          tit: "棠果传媒-以青年文化元素为主导的潮品牌",
          pic: "../../static/img/business_06.png",
          content: "拥有庞大的模特、艺人资源，投拍、发行青春幽默等题材的励志电影以及综艺娱乐、美食节目制作，并对线下咖啡影院实体店、概念影院、主题酒店等未来项目进行开发！"
        }
      ]
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
  .business{
    padding-top: 150px;
    background: #f5f5f5;
    padding-bottom: 80px;
    .cont-wrap{
      width: 1200px;
      margin: 0px auto;
      background: white;
      padding: 0 6%;
      box-sizing: border-box;
      .cont{
        width: 90%;
        margin: 0px auto;
        padding-top: 40px;
        h1{
          font-weight: 700;
          font-size: 30px;
        }
        ul{
          padding-bottom: 20px;
          li{
            border-top: 1px solid #ededed;
            margin-top: 32px;
            h3{
              padding: 32px 0px 16px 0px;
              font-size: 22px;
              font-weight: 700px;
            }
            img{
              display: block;
              width: 100%;
              margin: 6px 0px 0px 0px;
            }
            p{
              font-size: 16px;
              line-height: 36px;
              margin: 26px 0px 16px;
            }
          }
        }
      }
    }
  }
</style>
