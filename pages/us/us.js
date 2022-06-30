// pages/us/us.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    loginIn:function(){
        wx.getUserProfile({
          desc: '获取用户授权',
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
            })
            console.log(this.data.userInfo)
            wx.showToast({
              title: '登陆成功',
              icon:'success'
            })
          },
          fail(res) {
            console.log('获取失败', res)
            wx.showToast({
              title: '登陆失败',
              icon:'error'
            })
          }
        })
      },

    gotointro: function(){
        wx.navigateTo({
          url: '/pages/us/goto/goto', 
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