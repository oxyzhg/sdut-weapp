const app = getApp();
const { Field, extend } = app.zanui;
Page(extend({}, Field, {
  data: {
    showResult: false,
    inputField: {
      sdut_name: {
        title: '姓名',
        placeholder: '请输入你的姓名',
        componentId: 'sdut_name'
      },
      sdut_id: {
        title: '学号',
        inputType: 'number',
        placeholder: '请输入你的学号',
        componentId: 'sdut_id'
      }
    },
    fillData: {
      sdut_name: '张强',
      sdut_id: '15110302127'
    },
    activeId: 9999,
  },
  onLoad(options) {
    // 从缓存中获取用户绑定信息，有的话直接填入输入框，没有输入
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
        sdut_id: ''
      }
    });
  },
  onSubmit() {
    const { fillData } = this.data;
    console.log(fillData)
    app.showToast('数据请求中');
    this.setData({
      showResult: !this.data.showResult
    })
    app.showToast('数据请求成功');

    // wx.request({
    //   url: `${app.globalData.baseUrl}`,
    //   method: 'POST',
    //   data: {
    //     fillData
    //   },
    //   success: (res) => {
    //     if (res.statusCode == 200) {
    //       app.showToast('请求成功');
    //       wx.redirectTo({
    //         url: '/pages/feature/result/result',
    //       })
    //     } else {
    //       app.showToast(`请求出错：${res.statusCode}`);          
    //     }
    //   },
    //   fail: (err) => {
    //     app.showToast('反馈提交失败，请稍后尝试');
    //   }
    // })
  },
  showCollapse(e) {
    const param = e.target.dataset.param || e.currentTarget.dataset.param;
    this.setData({
      activeId: this.data.activeId == param ? 9999 : param
    })
  },
}))