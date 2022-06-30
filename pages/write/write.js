// pages/write/write.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    imgList: [],
    imgList1:[],
    mode:[],
    nextTap:false,
    items:{item:'',mode:''}
  },
  getTitle: function (e) {
    var title = e.detail.value
    this.setData({
      title:title
    })
    console.log('标题内容：', title)
    console.log('页面title',this.data.title)
  },
  getContent: function (e) {
    var content= e.detail.value
    console.log('正文内容',content)
    this.setData({
      content:content
    })
    console.log('页面内容',this.data.content)
  },
  chooseImg(e) {
    if (this.NextTap) {
      return;
    }
    this.NextTap = true;
    setTimeout(() => {
      this.NextTap = false;
    }, 1500) //1.5秒之后可以再次点击，防止用户重复点击
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      success: (res) => {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            this.chooseWxImage('album') //相册
          } else if (res.tapIndex == 1) {
            this.chooseWxImage('camera') //拍照
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    var Items={item:'',mode:''}
    let {
      imgList,
      maxPhoto
    } = this.data
    if (imgList.length > 10) {
      wx.showToast({
        title: '最多上传10张',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.chooseImage({
      count: maxPhoto - imgList.length,
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: (res) => {
        console.log(res)
        let tempFilePaths = res.tempFilePaths //成功后返回的的路径
        console.log(tempFilePaths)
        tempFilePaths.forEach(item => {
          // fileUpload.upload('/common/upload-img', item).then(res => {
          //   if (res.code == 10000 && imgList.length < 10) {
          //     imgList.push(res.data)
          //     this.setData({
          //       imgList,
          //       show: imgList.length >= 10 ? false : true
          //     })
          //   }
          // })
          
          Items.item=item
          console.log('变量items信息',Items)
          console.log('修改前data中的items信息',this.data.items)
          imgList.push(item)
          console.log('成功先执行')
        })
        this.setData({
          imgList: imgList,
          items:Items,
          show: imgList.length >= 10 ? false : true
        })
        console.log('修改后data中的items信息',this.data.items)
      }
    })
  },
  previewImg(e) {
    let currentUrl = e.currentTarget.dataset.src;
    let urls = this.data.imgList
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  deleteUpload(e) {
    let {
      index
    } = e.currentTarget.dataset, {
      imgList
    } = this.data
    var imgList1=this.data.imgList1
    console.log('去除图片前的imgList',imgList)
    console.log('去除图片前的imgList1',imgList1)
    console.log('index的值',index)
    imgList.splice(index, 1)
    imgList1.splice(index, 1)
    imgList1.splice(index, 1)
    console.log('去除图片后的imgList',this.data.imgList)
    console.log('去除图片后的imgList1',imgList1)
    console.log('data中的imgList1',this.data.imgList1)
    this.setData({
        imgList: imgList,
        imgList1:imgList1,
    })
    //let i=index
    //console.log('索引',index)
    //console.log('去除图片前的imgList',imgList)
    //console.log('去除图片前的imgList1',imgList1)
    //imgList.splice(index, 1)
    //for(;i<imgList1.length;i++){
    //  imgList1[i]=imgList1[i+1]
    //}
    
    //console.log(imgList1[0].item)
    //this.setData({
    //  imgList: imgList,
    //  imgList1:imgList1,
    //  show: imgList.length >= 10 ? false : true
    //})
    //console.log('去除图片后的imgList',this.data.imgList)
    //console.log('去除图片后的imgList1',this.data.imgList1)
  },
  commit:function(){
    if(this.data.title&&this.data.content){
      if(this.data.imgList.length==1){
        var mode=this.data.imgList1[0].mode
        this.setData({
          mode:mode
        })
        console.log('mode是',mode)
      }
      var rescue=app.globalData.rescue
      var information={
        id:-1,//id可以通过指定或者说不需要id
        name:'lucy',//name可以通过在登陆时获取用户的昵称
        img:'https://pic.lienav.com/i/2022/05/13/627e6eb5b21e0.jpg',//用户的头像也是在登陆时获取src
        time:'6-29',//可以通过前端接口获取
        location:'星天苑北到学生中心之间',//可以给用户自行编辑
        title:this.data.title,
        content:this.data.content,
        contentImg:this.data.imgList,
        mode:this.data.mode
      }
      rescue.push(information)
      app.globalData.rescue=rescue
      console.log('修改后globalData中的rescue信息',app.globalData.rescue)
      wx.showToast({
        title: '提交成功',
        icon:'success',
      })
      wx.request({
        method: 'GET',
        url: 'http://192.168.133.142:8080/uploadRescue_Release?title=123&type=123&date=123', //仅为示例，并非真实的接口地址
        // data: information,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
        }
      }) 
      setTimeout(function(){
        wx.switchTab({
          url: '/pages/rescue/rescue',
        })
      },2000)
    }else{
      wx.showToast({
        title: '请认真填写后提交',
        icon:'none'
      })
    }
  },
  getMode:function(e){
    var items=this.data.items
    var imgList1=this.data.imgList1
    console.log('图片信息',e)
    console.log('load先执行')
    var width=e.detail.width
    var height=e.detail.height
    if(width>height){
      items.mode='widthFix'
    }else{
      items.mode='heightFix'
    }
    imgList1.push(items)
      this.setData({
        items:items,
        imgList1:imgList1
      })
    console.log('再次修改过后data中items信息',this.data.items)
    console.log('data中的imgList1的信息',this.data.imgList1)
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