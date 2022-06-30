// app.js
App({
  globalData: {
    rescue: [{
      id: 1,
      name: 'Frank',
      img: 'https://pic.lienav.com/i/2022/05/13/627e6eb5b21e0.jpg',
      time: '4-31',
      location: '星天苑北到学生中心之间',
      title: '紧急寻找小黑猫！',
      content: '在上饭否哈佛哈哈附件是功夫啊覆盖覅师傅哈佛哈澳反华合法',
      contentImg: ['https://pic.lienav.com/i/2022/05/18/6284f62fd489f.png'],
      mode: 'widthFix'
    }, {
      id: 2,
      name: 'Susan',
      img: 'https://pic.lienav.com/i/2022/05/13/627e6f9ad943a.jpg',
      time: '5-1',
      location: '海天苑南侧',
      content: '在上饭否哈佛哈哈附件是功夫啊覆盖覅师傅哈佛哈澳反华合法',
      contentImg: ['https://pic.lienav.com/i/2022/05/18/6284f6ec3d51f.png'],
      mode: 'heightFix'
    }, {
      id: 4,
      name: 'Scott',
      img: 'https://pic.lienav.com/i/2022/05/13/627e6ff92a390.jpg',
      time: '5-10',
      location: '学生中心南侧的路上',
      content: '在上饭否哈佛哈哈附件是功夫啊覆盖覅师傅哈佛哈澳反华合法',
      contentImg: ['https://pic.lienav.com/i/2022/05/18/6284f6ec3d51f.png',
        'https://pic.lienav.com/i/2022/05/13/627e6ff92a390.jpg']
    }],
    userInfo: null
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }
})

