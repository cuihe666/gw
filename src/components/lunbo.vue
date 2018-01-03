<!-- 轮播组件 宁金良 -->
<template>
  <div class="lunbo">
      <transition-group tag='ul' class="clearfix slide" name='image'>
            <li v-for='(image,index) in img' :key='index' v-show='index===mark'>
                <a><img :src="image"></a>
            </li>
        </transition-group>
        <div class="bullet">
            <span v-for='(item,index) in img' class="bullet_span" :class="{'active':index===mark}" @click='change(index)'></span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'lunbo',
  data () {
    return {
      mark: 0,
      timer: null,
      img:['../../static/img/lun1.png',
        '../../static/img/lun2.png',
        '../../static/img/lun3.png',
        '../../static/img/lun4.png',
        '../../static/img/lun5.png'
      ]
    }   
  },
  components: {   
  },
  mounted:function(){
  },
  created() {
      this.play()
  },
  methods: {
        // change(i) {
        //     this.mark = i
        // },
        autoPlay() {
            this.mark++
                if (this.mark === this.img.length) {
                    this.mark = 0
                    return
                }
        },
        play() {
            setInterval(this.autoPlay, 5000)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
        .clearfix {
            content: '';
            clear: both;
            display: block;
        }
        
        .lunbo {
            width: 100%;
            height: 700px;
            /*margin: 0 auto;*/
            overflow: hidden;
            position: relative;
        }
        
        .slide {
            width: 100%;
            height: 700px;
        }
        
        .slide li {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .slide li a{
            width: 100%;
            height:100%;
            position: absolute;
        }
        .slide  img {
            max-width: 100%;
            width: auto;
            min-width: 100%;
            max-height:100%;
            min-height:100%;
            height: auto;
           /* width: 100%;
            height: 700px;*/
        }
        
        .bullet {
            width: 100%;
            position: absolute;
            bottom: 32px;
            margin: 0 auto;
            text-align: center;
            z-index: 10;
        }
        
        .bullet_span {
            width: 26px;
            height: 12px;
            /*border: 1px solid;*/
            border-radius: 5px;
            background-color:rgba(255,255,255,0.5);
            display: inline-block;
            margin-right: 10px;
        }
        
        .active {
            background:#fff;
            width: 40px;
            height: 12px;
        }
        
        .image-enter-active {
            transform: translateX(0);
            transition: all 1s ease;
        }
        
        .image-leave-active {
            transform: translateX(-100%);
            transition: all 1s ease;
        }
        
        .image-enter {
            transform: translateX(100%)
        }
        
        .image-leave {
            transform: translateX(0)
        }
</style>
