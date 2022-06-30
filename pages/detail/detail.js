// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        j: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // var s='{"name":"小梨","nickName":"井盖","hairColor":"狸花加白","hairColorClassification":"1","hauntLocation":"云B楼下的井盖","gender":"1","state":"送养","sterilizationTime":"","dateOfBirth":"","descriptionOfAppearance":"","character":"2","firstWitnessedTime":"","firstWitnessedLocation":"","relationship":"","more":"","route":"","adoptionTime":"2021年12月4日","timeOfDeath":"","causeOfDeath":"","indexes":3,"id":3,"sterilization":false}'
        // this.setData({
        //     j: JSON.parse(s)
        // })
        // j = JSON.parse(s);
        // console.log(s.slice(1, -1));
        // console.log(j['name']);
        this.setData({
            j: options.data
          })
        //图片怎么办？是网址吗？
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