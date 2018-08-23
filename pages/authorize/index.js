// pages/authorize/index.js
var app = getApp();
Page({
  data: {
  },
  bindGetUserInfo: function(e) {
    if (!e.detail.userInfo) {
      return;
    }
    wx.setStorageSync('userInfo', e.detail.userInfo)
    this.login();
  },
  login: function() {
    var that = this;
    wx.login({
      success: function(res) {
        var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
        wx.getUserInfo({
          success: function(res) {
            wx.setStorageSync('userInfo', res.userInfo);            
            var iv = res.iv;
            var encryptedData = res.encryptedData;
            // 下面开始调用注册接口
            wx.request({
              url: app.globalData.serverUrl + "/api",
              data: {
                act: "user.wechatLogin",
                code: code,
                encryptedData: encryptedData,
                iv: iv
              }, // 设置请求的 参数
              success: (res) => {
                wx.hideLoading();
                wx.navigateBack();
              }
            })
          }
        })
      }
    })
  }
})