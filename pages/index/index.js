const app = getApp()
var template = require('../../template/template.js');
Page({
  data: {
    img_src:"/imgs/1.jpg"

  },
  onLoad: function () {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
  },
})