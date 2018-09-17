//app.js
App({
  onLaunch: function() {
    var that = this;
    // 判断是否登录
    wx.checkSession({
      success: function() {
        return
      },
      fail: function() {
        that.goLoginPageTimeOut()
        return  
      }
    })
  },
  goLoginPageTimeOut: function() {
    setTimeout(function() {
      wx.navigateTo({
        url: "/pages/authorize/index"
      })
    }, 10)
  },
  globalData: {
    serverUrl:"https://api.cosydesign.cn/api"
  }
})