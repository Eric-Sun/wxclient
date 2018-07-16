var app = getApp();
Page({
  data:{
    image_src:""
  },

  uploadImage : function(e){
    var that=this;

    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数  
      sizeType: ['original'], // 只能是原图  
      sourceType: ['album'], // 只能是相册  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;
        //启动上传等待中...  
        // wx.showToast({
        //   title: '正在上传...',
        //   icon: 'loading',
        //   mask: true,
        //   duration: 10000
        // })
        var uploadImgCount = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          that.setData({
            image_src:tempFilePaths[i]
          });
        }
      }  
  });
  },
  submit: function(e){
    console.log(app.globalData.serverUrl);
    wx.request({
      url: app.globalData.serverUrl +"/api?act=order.add"
    })
  }

});