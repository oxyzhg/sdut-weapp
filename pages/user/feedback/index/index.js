Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeId: 9999,
    faqs: [
      {
        title: '小程序如何获取我的信息？',
        content: '山东理工大学小程序由山东理工大学党委宣传部与学生工作处组织，并联合开发，其直属于山东理工大学，故所有的用户信息直接来自学校相关部门。'
      },
      {
        title: '为什么我的反馈没有回复？',
        content: '多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位'
      },
      {
        title: '为什么我进入小程序后部分功能不能使用？',
        content: '多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位'
      },
      {
        title: '课表为什么是空的？',
        content: '多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位'
      },
      {
        title: '电费为什么没有了？',
        content: '多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位多写几个字占位'
      }
    ]
  },
  showCollapse(e) {
    const param = e.target.dataset.param || e.currentTarget.dataset.param;
    this.setData({
      activeId: this.data.activeId == param ? 9999 : param
    })
  },

  toFeedbackPage() {
    wx.redirectTo({
      url: '/pages/user/feedback/input/input'
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