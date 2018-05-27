const app = getApp();
const { Field, extend } = app.zanui;

Page(extend({}, Field, {
  data: {
    inputField: {
      sdut_name: {
        focus: true,
        title: '姓名',
        placeholder: '请输入你的姓名',
        componentId: 'sdut_name'
      },
      sdut_id: {
        title: '学号',
        inputType: 'number',
        placeholder: '请输入你的学号',
        componentId: 'sdut_id'
      },
      feedback: {
        type: 'textarea',
        placeholder: '请输入你的反馈信息',
        componentId: 'feedbackContent'
      }
    },
    fillData: {
      sdut_name: '',
      sdut_id: '',
      feedbackContent: ''
    },
  },
  handleZanFieldChange(e) { },
  handleZanFieldBlur({ componentId, detail }) {
    this.setData({
      [`fillData.${componentId}`]: detail.value
    });
  },
  clearInput() {
    this.setData({
      fillData: {
        sdut_name: '',
        sdut_id: '',
        feedbackContent: ''
      }
    });
  },
  onSubmit() {
    const { fillData } = this.data;
    console.log(fillData)
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