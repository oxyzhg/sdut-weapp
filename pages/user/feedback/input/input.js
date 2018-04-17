const app = getApp();
const { Field, extend } = app.zanui;

Page(extend({}, Field, {
  data: {
    inputField: {
      name: {
        focus: true,
        title: '姓名',
        placeholder: '请输入你的姓名',
        componentId: 'userName'
      },
      sdutId: {
        title: '学号',
        inputType: 'number',
        placeholder: '请输入你的学号',
        componentId: 'sdutId'
      },
      feedback: {
        type: 'textarea',
        placeholder: '请输入你的反馈信息',
        componentId: 'feedbackContent'
      }
    },
    fillData: {
      userName: '',
      sdutId: '',
      feedbackContent: ''
    },
  },
  handleZanFieldChange(e) { },
  handleZanFieldBlur(e) {
    let { componentId, detail } = e;
    let { fillData } = this.data;
    fillData[componentId] = detail.value;
    this.setData({ fillData });
  },
  clearInput() {
    this.setData({
      fillData: {
        userName: '',
        sdutId: '',
        feedbackContent: ''
      }
    });
  },
  onSubmit() {
    const { fillData } = this.data;
    wx.request({
      url: `${app.globalData.baseUrl}`,
      method: 'POST',
      data: {
        fillData
      },
      success: (res) => {
        if (res.statusCode == 200) {
          app.showToast('请求成功');
          wx.redirectTo({
            url: '/pages/user/index/index',
          })
        } else {
          app.showToast(`请求出错：${res.statusCode}`); 
        }
      },
      fail: (err) => {
        app.showToast('反馈提交失败，请稍后尝试');
      }
    })
  }
}))