// pages/house/house.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navList: ['猫咪印象', '猫咪百科'],
        nav_type: 0,
      },
      changeType: function (e) {
        let {
          index
        } = e.currentTarget.dataset;
        if (this.data.type === index || index === undefined) {
          return false;
        } else {
          this.setData({
            nav_type: index
          })
        }
    
      },

    goImg1: function(){
    wx.navigateTo({
        url: '/pages/house/goto/goImg1/goImg1', 
        success: function() {
        }, //成功后的回调；
        fail: function() { }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
    })
    },
    goImg2: function(){
        wx.navigateTo({
            url: '/pages/house/goto/goImg2/goImg2', 
            success: function() {
            }, //成功后的回调；
            fail: function() { }, //失败后的回调；
            complete: function() { } //结束后的回调(成功，失败都会执行)
        })
        },
    goImg3: function(){
        wx.navigateTo({
            url: '/pages/house/goto/goImg3/goImg3', 
            success: function() {
            }, //成功后的回调；
            fail: function() { }, //失败后的回调；
            complete: function() { } //结束后的回调(成功，失败都会执行)
        })
        },
    goPop1: function(){
        wx.navigateTo({
            url: '/pages/house/goto/goPop1/goPop1', 
            success: function() {
            }, //成功后的回调；
            fail: function() { }, //失败后的回调；
            complete: function() { } //结束后的回调(成功，失败都会执行)
        })
        },
    goPop2: function(){
        wx.navigateTo({
            url: '/pages/house/goto/goPop2/goPop2', 
            success: function() {
            }, //成功后的回调；
            fail: function() { }, //失败后的回调；
            complete: function() { } //结束后的回调(成功，失败都会执行)
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