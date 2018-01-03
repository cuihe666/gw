<!--关于棠果页面崔贺 -->
<template>
  <div class="about">
    <nav class="navs" ref="navs"></nav>
    <section class="main-part">
      <ul class="left-part">
        <li v-for="(item, index) in tits" class="li1 hov" @click="change_part(index)">
          <span :class="{bor: flag == index}">{{item}}</span>
          <div style="clear:both;"></div>
        </li>
      </ul>
      <section class="right-part">
        <!-- 公司简介 -->
        <section class="conpany-detail" v-if="flag == 0">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;棠果是全球精选旅居平台，提供民宿、公寓、别墅、精品酒店、旅行定制等目的地人文旅行预订服务，同时为企业提供旅游个性化定制、出行机票、签证、门票等一站式服务。通过移动互联网平台，实现闲置房屋居住共享、全域旅游资源共享、当地人文旅行共享。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;棠果通过整合全球闲置房源和旅行资源，线上线下一体化运营管理方式，为用户提供最优质、最文化、最特色的全球旅居服务，带给用户最舒适的旅居体验。在棠果推动下，万亿级的旅居市场正在迎来旅居行业4.0颠覆时代。</p>
        </section>
        <!-- 棠果新闻 -->
        <section class="tango-news" v-if="flag == 1">
          <ul>
            <li v-for="val in news[pageNum]">
              <h4><a :href="val.hre">{{val.tit}}</a></h4>
              <span>{{val.time}}</span>
              <div style="clear:both;"></div>
            </li>
          </ul>
          <p>
            <a v-for="i in 4" :class="{now: (pageNum + 1) == i}" @click="change_page(i)">{{i}}</a>
          </p>
        </section>
        <!-- 企业文化 -->
        <section class="company-culture" v-if="flag == 2">
          <p><strong>企业愿景：</strong>共享万物，分享世界</p>
          <p><strong>企业使命：</strong>引领未来旅居生活</p>
          <p><strong>核心价值观：</strong>创新、分享、快乐</p>
          <p><strong>企业理念</strong></p>
          <p class="p1">经营理念：追求卓越</p>
          <p class="p1">管理理念：定目标，抓过程，拿结果</p>
          <p class="p1">发展理念：顺势而为，创新领先，满足客户，创造价值</p>
          <p class="p1">人才理念：唯才适用，唯德重用</p>
          <p class="p1">员工要求：学习，品德，能力、绩效</p>
          <p class="p1">领导要求：目标，执行，格局 , 担当</p>
          <p><strong>行为准则：</strong>积极主动 、以终为始</p>
        </section>
        <!-- 团队管理 -->
        <section class="team-management" v-if="flag == 3">
          <dl class="part-ceo">
            <dt>
              <img src="../../static/img/team_1.png" alt="" />
              <p>金东哲</p>
              <p class="posi">总裁兼CEO</p>
            </dt>
            <dd>金东哲，棠果旅居创始人兼CEO、全球旅居产业共享经济倡导者、中国(行业)最具影响力年度人物、年度中国新锐CEO人物、中国资深公寓式酒店短租模式创始者、亚太酒店筹建联盟副理事长、酒店品牌设计架构师。拥有超过11年以上旅行住宿产业运营发展经验。先后创办了房地产经纪公司、服务类团购网、广告传媒、棠枫艺术酒店、世海哲人精品酒店，2016年初创办棠果-全球精选旅居共享平台，为全球华人提供民宿、别墅、公寓、旅行、大交通、商城、导游等一站式旅居服务。目前已完成全球三十余个国家及地区的布点，国内218个城市。凭借“共享房屋，分享旅行”的独特模式，棠果先后获得泰国前副总理披尼·扎禄颂巴、爱尔兰前总理布赖恩•科恩、塞尔维亚前总统鲍里斯-塔迪奇、奥地利前总理维尔纳·法伊曼的投资与战略合作，发扬“一带一路”国家政策，推动中国旅游互联网全球化。</dd>
          </dl>
          <dl class="part-cco">
            <dt>
              <img src="../../static/img/team_2.png" alt="" />
              <p>杨岩鑫</p>
              <p class="posi">副总裁兼COO</p>
            </dt>
            <dd>杨岩鑫先生，2016年加入棠果旅居，任职副总裁兼COO，全面负责公司的整体运营工作。 曾自主创业项目《大学城》DM杂志，后供职于去哪网和美团网等企业。在去哪儿网期间，负责集团连锁酒店业务的运营工作；在美团网期间，负责酒店的品类运营工作。多年的酒旅行业经验，并对互联网运营管理有较深的研究，高纬度战略布局和清晰的逻辑思路更是优势所在。</dd>
          </dl>
          <div style="clear:both;"></div>
          <ul class="team_top">
            <li v-for="val in team_top">
              <img :src="val.pic" alt=""/>
              <p class="name">{{val.name}}</p>
              <p class="posi"><span>{{val.position1}}</span><br v-if="val.name == '朱磊'"/><span>{{val.position2}}</span></p>
            </li>
            <li style="clear: both;width:100%;clear:both;height: 0px;"></li>
          </ul>
          <ul class="team_bottom">
            <li v-for="val in team_bottom">
              <img :src="val.pic" alt=""/>
              <p class="name">{{val.name}}</p>
              <p class="posi"><span>{{val.position1}}</span><br v-if="val.name == '朱磊'"/><span>{{val.position2}}</span></p>
            </li>
            <li style="clear: both;width:100%;clear:both;height: 0px;"></li>
          </ul>
          <div style="clear:both;"></div>
        </section>
        <!-- 发展历程 -->
        <section class="history-development" v-if="flag == 4">
          <section v-for="val in history">
            <img :src="val.pic" alt="" />
            <p v-for="detail in val.content">{{detail}}</p>
          </section>
        </section>
        <!-- 公司荣誉 -->
        <section class="company-honer" v-if="flag == 5">
          <img v-for="val in honer" :src="val" alt="" />
        </section>
        <!-- 联系我们 -->
        <section class="contact-us" v-if="flag == 6">
          <h2>欢迎来到棠果，我们将对您的需求和问题提供满意的服务与帮助！</h2>
          <ul>
            <li>客服服务:</li>
            <li>如果您在使用棠果平台时，出现任何问题、或者您要给我们提出任何意见和建议，请联系:</li>
            <li>E-mail：tglj@4000046768.com</li>
          </ul>
          <ul>
            <li>合作联系:</li>
            <li>如果您想与棠果洽谈商务合作、市场合作及媒体合作等，请联系:</li>
            <li>BD商务：bd@tgljweb.com </li>
            <li>PR：pr@tgljweb.com </li>
            <li>招聘：hr@tgljweb.com</li>
          </ul>
          <ul>
            <li>400免费客服热线：<span>4006-406-111</span></li>
            <li>为了给您提供更好的服务及方便沟通，请您在发信给我们的时候，留下您的联系方式。对您的来信与来电，我们会非常重视，并及时给您反馈！</li>
          </ul>
        </section>
      </section>
      <div style="clear:both;"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      obj1:{
        num:5,
        colorNum:5,
        imgLogo:"../static/img/logo1.png"
      },
      tits: [ // 左部分的tap切换
        "公司简介",
        "糖果新闻",
        "企业文化",
        "团队管理",
        "发展历程",
        "公司荣誉",
        "联系我们"
      ],
      pics: [ // 顶部banner图片
        "../../static/img/ab_intro@2x.jpg",
        "../../static/img/ab_news@2x.jpg",
        "../../static/img/ab_culture@2x.jpg",
        "../../static/img/ab_team@2x.jpg",
        "../../static/img/ab_develop@2x.jpg",
        "../../static/img/ab_honor@2x.jpg",
        "../../static/img/ab_contract@2x.jpg"
      ],
      news: [ // 棠果新闻
        [
          {tit: "棠果应邀参加第六届中国酒店科技西部论坛", time: "2017-01-03", hre: ""},
          {tit: "棠果旅居被评为2016年度最具成长力创业项目", time: "2017-01-07", hre: ""},
          {tit: "棠果旅居全球分享交流年会圆满落幕 助力健康共享生活", time: "2017-01-14", hre: ""},
          {tit: "棠果估值20亿 将打造专业旅居出行共享平台", time: "2017-01-17", hre: ""},
          {tit: "棠果旅居获得泰国国家旅游局的大力支持", time: "2017-02-14", hre: ""},
          {tit: "棠果旅居获亚洲旅游传媒集团全面战略合作支持", time: "2017-02-18", hre: ""},
          {tit: "棠果旅居苏梅之旅 新星海滩国际度假村达成合作共识", time: "2017-05-11", hre: ""},
          {tit: "棠果旅居澳大利亚分公司正式注册完成 全球化战略更进一步", time: "2017-05-12", hre: ""}
        ],
        [
          {tit: "棠果旅居联手樊登读书会推出旅行+读书模式", time: "2017-05-15", hre: ""},
          {tit: "泰国前副总理披尼参观访问棠果旅居 促中泰旅游产业升级", time: "2017-05-16", hre: ""},
          {tit: "旅居经济崛起 荷兰外商投资局或将与棠果旅居共拓欧洲市场", time: "2017-05-16", hre: ""},
          {tit: "完成东南亚市场布局棠果旅居下一站将进军欧洲", time: "2017-05-16", hre: ""},
          {tit: "棠果旅居迎来泰国前副总统访问透露下一步全球化方向", time: "2017-05-16", hre: ""},
          {tit: "棠果携手快创商学院联合推出C+国际旅游产业创新创业共享平台", time: "2017-05-18", hre: ""},
          {tit: "棠果旅居的伙伴培养,棠果商学院输送行业新血", time: "2017-05-19", hre: ""},
          {tit: "棠果旅居即将在欧洲召开战略发布会 加速全球化布局", time: "2017-05-23", hre: ""}
        ],
        [
          {tit: "棠果欧洲战略发布会即将举办，得到荷兰前首相的高度赞扬", time: "2017-05-24", hre: ""},
          {tit: "去新加坡怎么玩？看看这里就全知道了！", time: "2017-05-25", hre: ""},
          {tit: "中荷焦点：棠果旅居成为中国企业全球化典范", time: "2017-05-25"},
          {tit: "将奇迹带入欧洲：中国未来旅游行业先驱的强势加入", time: "2017-05-26", hre: ""},
          {tit: "棠果旅居公益赞助欧洲学子 促进中欧友好交流", time: "2017-05-30", hre: ""},
          {tit: "多位欧洲国家领导人齐聚阿姆斯特丹，这是开的什么国际会议？", time: "2017-05-31", hre: ""},
          {tit: "欧洲各国政要齐聚海牙庆祝一家中国企业分公司的落成！", time: "2017-05-31", hre: ""},
          {tit: "让全世界的房子“活起来”棠果旅居用分享模式打开欧洲市场", time: "2017-06-01", hre: ""}
        ],
        [
          {tit: "布局欧洲市场，旅业新宠棠果旅居如何玩转全生态？", time: "2017-06-01", hre: ""},
          {tit: "棠果旅居举办欧洲战略发布会 欧洲各国高管为何如此看中棠果", time: "2017-06-01", hre: ""},
          {tit: "长腿欧巴带你游泰国 水上交通初体验", time: "2017-06-01", hre: ""}
        ],
      ],
      team_top: [ // 团队管理
        {pic: "../../static/img/team_3.png", name: "申景天", position1: "副总裁", position2: "(韩国籍)"},
        {pic: "../../static/img/team_4.png", name: "夏彬彬", position1: "国际部", position2: "副总裁"},
        {pic: "../../static/img/team_5.png", name: "朱磊", position1: "大棠记国际旅行社", position2: "总经理"}
      ],
      team_bottom: [ // 团队管理
        {pic: "../../static/img/team_6.png", name: "姜少莉", position1: "品牌部", position2: "高级总监"},
        {pic: "../../static/img/team_7.png", name: "陈士华", position1: "技术部", position2: "总监"},
        {pic: "../../static/img/team_8.png", name: "魏平", position1: "产品设计部", position2: "总监"},
        {pic: "../../static/img/team_9.png", name: "陈建伟", position1: "旅行业务部", position2: "运营总监"}
      ],
      history: [ // 发展历史
        {
          pic: "../../static/img/develop_02.png",
          content: [
            "6月12日，全球“精品酒店”版块在平台上线 ",
            "5月30日，棠果欧洲海牙分公司成立 ",
            "5月29日，在欧洲召开战略发布会 ",
            "5月17日，推出C+国际旅游产业创新创业共享平台",
            "5月17日，“棠果学院”正式揭牌成立 ",
            "4月21日，荣获2017“中国住宿大奖”最佳创新奖 ",
            "3月13日，棠果全球战略发布会·东南亚·泰国站在曼谷举行 ",
            "3月08日，棠果全球奢华精选酒店预订项目正式启动 ",
            "3月07日，完成A轮融资1亿人民币 ",
            "2月28日，与摩根士丹利、花旗银行、汇丰银行、普衡律师事务所、ILS全球集团建立合作 ",
            "2月27日，香港分公司正式成立",
            "2月23日，CBCN战略合作打开欧洲市场 ",
            "2月22日，棠果旅行战略升级，为企业及企业家提供世界游定制服务",
            "1月14日，棠果2.8版本正式上线",
            "1月06日，创始人金东哲获得年度中国新锐CEO人物 ",
            "1月06日，获得2016年度最具成长力创业项目"
          ]
        },
        {
          pic: "../../static/img/develop_01.png",
          content: [
            "12月20日，在曼谷正式设立东南亚分公司，启动泰国市场 ",
            "12月14日，创始人金东哲获得中国(行业)最具影响力年度人物、中国民营企业年度新闻人物称号",
            "12月05日，200个城市上线，12万间房源 ",
            "12月02日，获得2016年度亚洲地区杰出互联网旅居平台称号 ",
            "12月01日，棠果旅行事业部成立 ",
            "11月29日，荣获2016环球（中国）旅游金奖·最佳互联网平台创新奖 ",
            "11月20日，棠果海外版块正式上线，泰国、韩国等国上线 ",
            "10月13日，与快创学院签约战略合作 ",
            "08月18日，棠果2.0正式上线 ",
            "08月01日，北京、杭州陆续举办大型品牌发布招商会 ",
            "06月25日，棠果品牌发布会在北京香山举行，全国百座城市上线 ",
            "05月24日，棠果获得中国住宿业移动互联网杰出创新奖 ",
            "04月20日，棠果APP正式上线"
          ]
        }
      ],
      honer: [ // 公司荣誉
        "../../static/img/honor_03.png",
        "../../static/img/honor_04.png",
        "../../static/img/honor_05.png",
        "../../static/img/honor_06.png",
        "../../static/img/honor_07.png",
        "../../static/img/honor_08.png",
        "../../static/img/honor_09.png"
      ],
      flag: 0,
      pageNum: 0
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
    change_part: function(num){
      this.flag = num;
      console.log(num);
      this.$refs.navs.style.background = "url('" + this.pics[num] + "') center 100px/ 1920px 400px no-repeat";
    },
    change_page: function(num){
      this.pageNum = num - 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hov:hover{
    cursor: pointer;
  }
  nav{
    width: 100%;
    height: 400px;
    padding-top: 100px;
    background: url("../../static/img/ab_intro@2x.jpg") center 100px/1920px 400px no-repeat;
  }
  .main-part{
    width: 1200px;
    margin: 36px auto 80px;
    .left-part{
      width: 238px;
      margin-right: 3%;
      background: white;
      font-size: 16px;
      color: #666666;
      border: 1px solid #ebebeb;
      float: left;
      .li1 span{
        padding: 10px 20px;
        margin: 10px 0px;
        display: block;
        box-sizing: border-box; 
        border-left: 2px solid white;              
      }
      .li1 div{
        height: 1px;
        background: #ebebeb;
      }
      .li1:last-child div{
        height: 0px;
      }
      .bor{
        border-left: 2px solid #24b371!important;
        color: #24b371;
      }
    }
    .right-part{
      width: 916px;
      box-sizing: border-box;
      padding: 30px;
      backgournd: white;
      float: left;
      background: #efefef;
      section{
        font-size: 16px;
        line-height: 34px;
        p{
          margin-top: 20px;
        }
      }
      .conpany-detail{
        margin-bottom: 86px;
      }
      .tango-news{
        margin-bottom: 34px;
        li{
          padding: 10px 0px;
          width: 100%;
          line-height: 18px;
          h4{
            display: inline-block;
            float: left;
            a{
              color: black;
            }
            a:hover{
              cursor: pointer;
            }
          }
          span{
            float: right;
          }
        }
        p{
          text-align: right;
          a{
            padding: 2px 10px;
            border-radius: 4px;
            color: black;
          }
          a:hover{
            cursor: pointer;
          }
          .now{
            background: #1dbe72;
            color: white;
          }
        }
      }
      .company-culture{
        p{
          font-size: 16px;
          margin: 4px 0px 28px 14px;
        }
      }
      .team-management{
        dl{
          dt{
            width: 339px;
            float: left;
            margin: 10px 30px 0px 0px;
            img{
              display: block;
            }
            p{
              padding: 15px 0px 14px;
              font-size: 20px;
              background: #fafafb;
              margin: 0px;
              text-align: center;
              line-height: 20px;
            }
            .posi{
              font-size: 18px;
            }
          }
          dd{
            font-size: 16px;
            text-align: left;
          }
        }
        .part-cco{
          margin-top: 50px;
          dt{
            float: right;
            margin: 10px 0px 0px 30px;
          }
        }
        ul{
          margin-top: 50px;
          li{
            width: 200px;
            float: left;
            height: 258px;
            img{
              height: 164px;
              width: 193px;
              display: block;
              margin: 0px auto;
            }
            p{
              text-align: center;
              font-size: 18px;
              line-height: 20px;
            }
            .posi{
              font-size: 16px;
              margin: 0px;
              padding: 7px 0px;
            }
          }
        }
        .team_top{
          padding-left: 13%;
          li{
            margin-left: 6px;
          }
        }
        .team_bottom{
          li{
            margin-top: 26px;
            margin-left: 12px;
          }
        }
      }
      .history-development{
        img{
          display: block;
          margin: 10px 0px 20px
        }
        p{
          padding: 4px 0px 16px 10px;
          line-height: 20px;
          font-size: 16px;
          margin: 0px;
        }
      }
      .company-honer{
        img{
          display: block;
          margin: 0px auto;
        }
      }
      .contact-us{
        h2{          
          margin: 20px 10px; 
        }
        ul{
          margin: 8px 0px 20px 10px;
          li{
            font-size: 16px;
            line-height: 32px;
            span{
              color: #1dbe72;
            }
          }
        }        
      }
    }
  }
</style>
