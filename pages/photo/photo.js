// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getImage:function(){
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths[0]);
        wx.uploadFile({
          url: 'http://192.168.133.142:8080/uploadImage?programType=miniProgram&imageName='+tempFilePaths[0].slice(11,), //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'image',
          formData:{
            'user': 'test'
          },
          success: function(res){
            var data = res.data
            //do something
            wx.request({
              url: 'http://192.168.133.142:8080/identificationCat?programType=miniProgram&imageName='+tempFilePaths[0].slice(11,),
              // data: {city:'beijing'},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: {}, // 设置请求的 header
              success: function(res){
                // success
                console.log(res.data)
                wx.navigateTo({
                  url: '/pages/detail/detail?data='+res.data,
                })
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})