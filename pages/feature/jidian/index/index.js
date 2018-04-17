const app = getApp();
const { Field, extend } = app.zanui;
Page(extend({}, Field, {
  data: {
    inputField: {
      name: {
        title: '姓名',
        placeholder: '请输入你的姓名',
        componentId: 'userName'
      },
      sdutId: {
        title: '学号',
        inputType: 'number',
        placeholder: '请输入你的学号',
        componentId: 'sdutId'
      }
    },
    fillData: {
      userName: '',
      sdutId: ''
    },
  },
  onLoad(options) {
    // 从缓存中获取用户绑定信息，有的话直接填入输入框，没有输入
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
        sdutId: ''
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
            url: '/pages/feature/result/result',
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