const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    featureList: [
      {
        id: 1,
        name: '绩点查询',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: '/pages/feature/jidian/index/index'
      },
      {
        id: 2,
        name: '成绩查询',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 3,
        name: '综测查询',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 4,
        name: '荣誉称号',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 5,
        name: '考试地点查询',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 6,
        name: '宿舍卫生查询',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 7,
        name: '用电查询',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 8,
        name: '校历',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      },
      {
        id: 9,
        name: '失物招领',
        name_en: 'jidian',
        iconPath: '/images/tab/icon_feature.png',
        navigateUrl: ''
      }
    ]
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
    setTimeout(() => {
      app.showToast('刷新成功', 'success', 1000)
      wx.stopPullDownRefresh()
    }, 1000)
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
    return {
      title: '山东理工大学学生服务',
      path: '/pages/feature/index/index'
    }
  }
})