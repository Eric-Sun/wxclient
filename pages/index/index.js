const app = getApp()
var template = require('../../template/template.js');
Page({
  data: {
    img_src: "/imgs/2.jpeg"
  },
  onLoad: function() {
    template.tabbar("tabBar", 0, this) //0表示第一个tabbar
  },
  order:function(){
    wx.navigateTo({
      url:"/pages/order-create/index"
    })
  }
})