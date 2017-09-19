var $ = require('jquery');
var fastclick = require('fastclick');
require('lib-flexible'); // 引入即可

// 引入自定义组件
require('../widget/footer/footer.js')
$(function(){
	fastclick.attach(document.body); // 解决
	console.log('index 已加载')
})