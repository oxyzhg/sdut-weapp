const app = getApp();
const { Field, Select, extend } = app.zanui;
Page(extend({}, Field, Select, {
  data: {
    showResult: false,
    inputField: {
      room: {
        title: '房间号',
        placeholder: '请输入你的房间号',
        componentId: 'room'
      }
    },
    fillData: {
      school: '西校区',
      dormitory: '13H',
      room: '1308'
    },
    activeId: 9999,
    // 校区
    schoolList: [
      {
        padding: 0,
        value: '西校区',
        name: '西校区',
      },
      {
        padding: 0,
        value: '东校区',
        name: '东校区',
      }
    ],
    activeColor: '#4b0',
    dormList: app.globalData.dormList,
    dormIndex: 0
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
  handleZanSelectChange({ componentId, value }) {
    this.setData({
      [`fillData.${componentId}`]: value
    });
  },
  handlePicker(e) {
    const dormIndex = e.detail.value;
    this.setData({
      [`fillData.dormitory`]: this.data.dormList[dormIndex].value,
      dormIndex
    });
  },
  clearInput() {
    this.setData({
      [`fillData.room`]: '',
      dormIndex: 0
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