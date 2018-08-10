var app = getApp();
var template = require('../../template/template.js');
Page({
  data: {
    image_src: "",
    imgId: 0,
    remark: ""
  },
  bindblur : function(e){
    this.setData({
      remark: e.detail.value
    })
  },
  onLoad: function() {
    console.log("bbb");
    template.tabbar("tabBar", 1, this) //0表示第一个tabbar
  },
  uploadImage: function(e) {
    var that = this;
    wx.chooseImage({
      count: 1, //最多可以选择的图片总数  
      sizeType: ['original'], // 只能是原图  
      sourceType: ['album'], // 只能是相册  
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 10000
        })
        var uploadImgCount = 0;
        that.setData({
          image_src: tempFilePaths[0]
        });

        wx.uploadFile({
          url: app.globalData.serverUrl + "/api",
          filePath: tempFilePaths[0],
          name: "img",
          header: {
            "Content-Type": "multipart/form-data"
          },
          formData: {
            "act": "order.uploadImg",
          },
          success: function(res) {
            wx.hideToast();
            var imgId = JSON.parse(res.data).imgId;
            that.setData({
              imgId: imgId
            });
          }
        });

      }
    })
  },
  submit: function(e) {

    var that = this;
    console.log(that.data.imgId);
    console.log(app.globalData.serverUrl);
    wx.request({
      url: app.globalData.serverUrl + "api",
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        act: "order.add",
        imgId: that.data.imgId,
        userId: app.globalData.userId,
        itemId: 1,
        finalPrice: 700,
        remark: that.data.remark
      },
      success: function(res) {
        wx.showToast({
          title: '订单创建成功',
          icon: "success",
          duration: 1000,
          success: function() {
            wx.redirectTo({
              url: "/pages/order-list/index"
            });
          }
        })
      }
    })
  }


});