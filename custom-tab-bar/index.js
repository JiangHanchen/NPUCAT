Component({
  data: {
    selected: 0,
    "color": "#000000",
    "selectedColor": "#000000",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/resources/home/icon/index.png",
      selectedIconPath: "/resources/home/icon/index.png"
    },{
      pagePath: "/pages/house/house",
      iconPath: "/resources/home/icon/house.png",
      selectedIconPath: "/resources/home/icon/house.png"
    },{
      pagePath: "/pages/photo/photo",
      iconPath: "/resources/home/icon/photo.png",
      selectedIconPath: "/resources/home/icon/photo.png"
    },{
      pagePath: "/pages/rescue/rescue",
      iconPath: "/resources/home/icon/rescue.png",
      selectedIconPath: "/resources/home/icon/rescue.png"
    },{
      pagePath: "/pages/us/us",
      iconPath: "/resources/home/icon/us.png",
      selectedIconPath: "/resources/home/icon/us.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
        this.setData({
        selected: data.index
      })
    }
  }

})