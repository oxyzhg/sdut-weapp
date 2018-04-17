const app = getApp();
const { Field, extend } = app.zanui;

Page(extend({}, Field, {

  /**
   * 页面的初始数据
   */
  data: {
    inputField: {
      name: {
        focus: true,
        title: '姓名',
        placeholder: '请输入你的姓名',
        componentId: 'userName'
      },
      sdutId: {
        // error: true,
        title: '学号',
        inputType: 'number',
        placeholder: '请输入你的学号',
        componentId: 'sdutId'
      },
      feedback: {
        // title: '反馈',
        type: 'textarea',
        placeholder: '请输入你的反馈信息',
        componentId: 'feedbackContent'
      }
    },
    userName: '',
    sdutId: '',
    feedbackContent: ''
  },
  handleZanFieldChange(e) { },
  handleZanFieldBlur(e) {
    const { componentId, detail } = e;
    this.setData({
      [componentId]: detail.value
    })
    /*
     * componentId 即为在模板中传入的 componentId
     * 用于在一个页面上使用多个 tab 时，进行区分
     * detail 即输入框中的内容
     */
    /*
     * 处理函数可以直接 return 一个字符串，将替换输入框的内容。
     */
  },
  clearInput() {
    this.setData({
      userName: '',
      sdutId: '',
      feedbackContent: ''
    });
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
}))