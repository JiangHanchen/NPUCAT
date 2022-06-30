//const tabService = require("../../utils/tab-service");

Page({
    data: {},
    update(event) {
        let data = event.currentTarget.dataset;
        wx.showToast({title: data.role + "端", icon: 'none'})
        tabService.updateRole(this, data.role);
    },
    onShow() {
        tabService.updateIndex(this, 1);
    }
}) 