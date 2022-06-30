// pages/rescue/rescue.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rescue: []
  },
  previewImg: function (e) {
    console.log('预览', e)
    var currentUrl = e.target.dataset.src
    var index = e.currentTarget.dataset.index
    if (currentUrl.length == 0) {
      wx.previewImage({
        urls: currentUrl,
        current: currentUrl
      })
    }else{
      wx.previewImage({
        urls: currentUrl,
        current:currentUrl[index]
      })
    }
  },
  getMode:function(e){
    console.log('图片信息',e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var rescue = app.globalData.rescue;
    console.log(app.globalData.rescue)
    console.log(rescue)
    this.setData({
      rescue: rescue
    })
    console.log(this.data.rescue)
  },
  goToWrite:function(){
    wx.navigateTo({
      url: '/pages/write/write',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var rescue = app.globalData.rescue;
    this.setData({
      rescue: rescue
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})