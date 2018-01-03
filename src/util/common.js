//config 代表公共的对象
//DingConf 代表公共的方法
//在需要的.vue 文件中引入  例如：import {config} from '../util/common.js'
//使用 ： config.request_prefix + xxxxxxxxxxxxx


const config = {
	serverUrl:'https://pre-javaapis.tgljweb.com',
	imgUrl:'http://img.tgljweb.com/'
}
const DingConf = function(data){

}
export {config, DingConf}

