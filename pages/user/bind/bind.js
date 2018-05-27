const app = getApp();
const { Field, extend } = app.zanui;

Page(extend({}, Field, {
  data: {
    disabled: true,
    inputField: {
      sdut_name: {
        title: '姓名',
        placeholder: '请输入你的姓名',
        componentId: 'userName'
      },
      sdut_id: {
        title: '学号',
        inputType: 'number',
        placeholder: '请输入你的学号',
        componentId: 'sdutId'
      },
      academy: {
        title: '学院',
        placeholder: '请选择你的学院',
        componentId: 'academy'
      },
      major: {
        title: '专业',
        placeholder: '请输入你的专业',
        componentId: 'major'
      },
      class_name: {
        title: '班级',
        placeholder: '请输入你的学院',
        componentId: 'class_name'
      },
      dormitory: {
        title: '宿舍楼',
        placeholder: '请输入你的学院',
        componentId: 'dormitory'
      },
      room: {
        title: '房间号',
        inputType: 'number',
        placeholder: '请输入你的学院',
        componentId: 'room'
      },
      phone: {
        title: '手机号',
        inputType: 'number',
        placeholder: '请输入你的手机号',
        componentId: 'phone'
      },
    },
    fillData: {},
    academyList: [],
    academyIndex: 0,
    dormList: [],
    dormIndex: 0,
  },
  onLoad: function (options) {
    // app.getUserInfo();
    // 从缓存中获取用户信息，如果没有则提示绑定
    let fillData = wx.getStorageSync('userInfo');
    // 从缓存中获取学院列表，并设置索引值
    let academyList = wx.getStorageSync('academyList');
    let academyIndex = academyList.findIndex(v => v.id == fillData.academy);
    // 从缓存中获取宿舍楼列表，并设置索引值
    let dormList = wx.getStorageSync('dormList');
    let dormIndex = dormList.findIndex(v => v.id == fillData.dormitory);
    // 数据更新到data
    this.setData({
      fillData,
      academyList,
      academyIndex,
      dormList,
      dormIndex
    });
  },
  onShow() {
    const isBind = wx.getStorageSync('isBind');
    if (isBind) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({ userInfo, isBind });
    } else {
      wx.switchTab({
        url: '/pages/user/index/index',
      });
    }
  },
  handleZanFieldChange(e) { },
  handleZanFieldBlur({ componentId, detail }) {
    this.setData({
      [`fillData.${componentId}`]: detail.value
    });
  },
  handlePicker(e) {
    let academyIndex = e.detail.value;
    let academy = this.data.academyList[academyIndex].id;
    this.setData({
      [`fillData.academy`]: academy,
      academyIndex
    });
  },
  handleDormPicker(e) {
    let dormIndex = e.detail.value;
    let dormitory = this.data.dormList[dormIndex].id;
    this.setData({
      [`fillData.dormitory`]: dormitory,
      dormIndex
    });
  },
  changeEditStatus() {
    this.setData({
      disabled: !this.data.disabled
    });
    if (!this.data.disabled) {
      app.showToast('表单可编辑~');
    } else {
      app.showToast('表单已锁定~');
    }
  },
  handleSubmit() {
    const { fillData } = this.data;
    const access_token = wx.getStorageSync('access_token');
    console.log(fillData)
    wx.request({
      url: `${app.globalData.baseUrl}/user`,
      method: 'PUT',
      header: {
        'Authorization': `Bearer ${access_token}`
      },
      data: {
        ...fillData
      },
      success: (res) => {
        if (res.statusCode == 200) {
          app.showToast('数据提交成功');
          app.getUserInfo();
          wx.redirectTo({
            url: '/pages/user/index/index',
          })
        } else {
          app.showToast(`数据提交出错：${res.statusCode}`);
        }
      },
      fail: (err) => {
        app.showToast('数据提交失败，请稍后尝试');
      }
    })
  },
}))