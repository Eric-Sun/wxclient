const app = getApp()
var template = require('../../template/template.js');

Page({
  data: {
    balance: 0,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    template.tabbar("tabBar", 0, this)
  },
  onShow() {
    this.getUserInfo();
  },
  getUserInfo: function(cb) {
    var that = this
    that.setData({
      userInfo: wx.getStorageSync('userInfo') 
    });
  },
  aboutUs: function() {
    wx.showModal({
      title: '关于我们',
      content: 'fdsafdsafdsafdsafdsafdsafdsafdsafsda',
      showCancel: false
    })
  }
})