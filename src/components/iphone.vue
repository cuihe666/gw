<!-- iphone top 二维码组件 宁金良-->
<template>
    <div class="iphone">
        <div class="iphone_wrap">
            <div class="one" :class="{spanShow:topShow}" @click="topScroll" @mouseenter="entertopScroll" @mouseleave="leavetopScroll">
                <span class="span" v-show="topShow">返回顶部</span>
            </div>
            <div class="two"  :class="{callhide:callShow}" @mouseenter="entercallShow" @mouseleave="leavecallShow">
                <div v-show="callShow" class="iPhoneHover">
                   <p>400-406-111</p>
                   <p>客服热线</p>
                </div>
            </div>
            <div class="three"  :class="{erhide:erShow}" @mouseenter="entererShow" @mouseleave="leaveerShow">
                <div class="erWeiMa" v-show="erShow">
                    <img src="../../static/img/downApp.png" alt="">
                    <p>下载棠果旅居app</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'iphone',
    data () {
        return {
            topShow:false,//返回顶部
            callShow:false,//打电话
            erShow:false,//二维码
        }
    },
    components: { 

    },
    mounted:function(){
        // 通过这个target来判断当前的滚动监听对象是谁

        // if (this.scrollmyself) {
        //     this.target = this.$el.parentNode
        // } else {
        //     this.target = document.body
        // }
        // this.target.addEventListener('scroll', this.showIcon) 
        // console.log(this.target.scrollTop)
    },
    methods:{
        topScroll:function(){
            // document.body.scrollTop = 0
            // document.documentElement.scrollTop = 0
            // 点击icon之后自动返回顶部的函数\
            let timer = setInterval(() => {
                let top = document.documentElement.scrollTop;
                // let top = this.target.scrollTop
                let speed = Math.ceil(top / 5)
                document.documentElement.scrollTop = top - speed
                if (top === 0) {
                  clearInterval(timer)
                }
            }, 20)
        },
        entertopScroll:function(){
            this.topShow = true;
        },
        leavetopScroll:function(){
            this.topShow = false;
        },
        entercallShow:function(){
            this.callShow = true;
        },
        leavecallShow:function(){
            this.callShow = false;
        },
        entererShow:function(){
            this.erShow = true;
        },
        leaveerShow:function(){
            this.erShow = false;
        }
    },
    beforeDestroy () {
       //  组件销毁的时候，需要删除scroll的监听事件。
        // this.target.removeEventListener('scroll', this.showIcon)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.iphone{
    .iphone_wrap{
        border: 1px solid #ccc;
        width: 44px;
        .one{
            width: 43px;
            height: 43px;
            background: url(../../static/img/top.png) center center no-repeat;
            border-bottom: 1px solid #ccc;
            
            .span{
                font-size: 15px;
                color:#fff;
                display: inline-block;
                width: 100%;
                height: 100%;
                text-align: center;
            }
        }
        .two{
            width: 43px;
            height: 43px;
            background: url(../../static/img/call.png) center center no-repeat;
            border-bottom: 1px solid #ccc;
            position: relative;
            .iPhoneHover{
                width: 252px;
                height: 106px;
                background: url(../../static/img/iphone.png);
                position: absolute;
                left: -252px;
                top: -30px;
                font-size: 18px;
                color:#333;
                padding:20px;
                p{ 
                    text-align: center;
                    line-height: 30px;
                }
            }
        }
        .three{
            width: 43px;
            height: 43px;
            background: url(../../static/img/erwei.png) center center no-repeat;
            position: relative;
            .erWeiMa{
                width: 252px;
                height: 300px;
                position: absolute;
                left: -252px;
                top: -100px;
                background: url(../../static/img/topEr.png);
                
                img{
                    width: 216px;
                    height: 216px;
                    margin-left: 12px;
                    margin-top: 20px;
                }
                p{
                    font-size: 18px;
                    color: #333;
                    text-align: center;
                    line-height: 60px;
                }
            }
        }
    }
}
.spanShow{
    background: #1dbe72 !important;
}
.callhide{
    background: url(../../static/img/iphone1.png) center center no-repeat #1dbe72 !important;
}
.erhide{
    background: url(../../static/img/erwei1.png) center center no-repeat #1dbe72 !important;
}
</style>
