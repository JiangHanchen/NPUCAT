// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    testgo: function(){
      wx.navigateTo({
        url: '/pages/detail/detail'
      })
    },

    goactivity1: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity1/goactivity1', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity2: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity2/goactivity2', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity3: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity3/goactivity3', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity4: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity4/goactivity4', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity5: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity5/goactivity5', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity6: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity6/goactivity6', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity7: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity7/goactivity7', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    goactivity8: function(){
      wx.navigateTo({
        url: '/pages/home/goto/goactivity8/goactivity8', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
      })
    },
    gotoIndex:function(){
      wx.switchTab({
        url: '/pages/index/index',
      })
    },
    goToHouse:function(){
      wx.switchTab({
        url: '/pages/house/house',
      })
    },
    goToPhoto:function(){
      wx.switchTab({
        url: '/pages/photo/photo',
      })
    },
    goToRescue:function(){
      wx.switchTab({
        url: '/pages/rescue/rescue',
      })
    },
    goToUs:function(){
      wx.switchTab({
        url: '/pages/us/us',
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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