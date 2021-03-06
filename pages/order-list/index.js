// var wxpay = require('../../utils/pay.js')
var template = require('../../template/template.js');

var app = getApp()
Page({
  data: {},
  orderDetail: function(e) {
    var orderId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/order-details/index?id=" + orderId
    })
  },
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    template.tabbar("tabBar", 0, this)
  },
  onReady: function() {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function() {
    // 获取订单列表

    wx.showLoading();
    var that = this;
    var postData = {
      token: app.globalData.token,
      act: "order.listByUserId",
      userId: wx.getStorageSync('userInfo').userId
    };
    console.log(JSON.stringify(postData));
    wx.request({
      url: 'http://localhost:8081/api',
      data: postData,
      success: (res) => {
        wx.hideLoading();
        that.setData({
          orderList: res.data.list
        });
      }
    })

  },
  onHide: function() {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function() {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数

  }
})