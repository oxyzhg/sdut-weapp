const app = getApp();
const { Field, extend } = app.zanui;

Page(extend({}, Field, {
  data: {
    disabled: true,
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
      },
      college: {
        title: '学院',
        placeholder: '请选择你的学院',
        componentId: 'college'
      },
      specialty: {
        title: '专业',
        placeholder: '请输入你的专业',
        componentId: 'specialty'
      },
      className: {
        title: '班级',
        placeholder: '请输入你的学院',
        componentId: 'className'
      },
      apartment: {
        title: '宿舍楼',
        placeholder: '请输入你的学院',
        componentId: 'apartment'
      },
      roomNum: {
        title: '房间号',
        inputType: 'number',
        placeholder: '请输入你的学院',
        componentId: 'roomNum'
      },
      phoneNum: {
        title: '手机号',
        inputType: 'number',
        placeholder: '请输入你的手机号',
        componentId: 'phoneNum'
      },
    },
    fillData: {
      userName: '张强',
      sdutId: '15110302127',
      college: '农业工程与食品科学学院',
      specialty: '食品科学与工程',
      className: '食品1504',
      apartment: '13#南',
      roomNum: '1308',
      phoneNum: '17864305305',
    },
    collegeList: app.globalData.collegeList,
    collegeIndex: 0,
  },
  onLoad: function (options) {
    // 加载时候从缓存中获取用户信息，如果没有则提示绑定
    let fillData = wx.getStorageSync('userInfo');
    // 根据绑定的信息，设置学院索引
    let collegeIndex = app.globalData.collegeList.indexOf(this.data.fillData.college);
    // 数据更新到data
    this.setData({ collegeIndex });
  },
  handleZanFieldChange(e) { },
  handleZanFieldBlur(e) {
    let { componentId, detail } = e;
    let { fillData } = this.data;
    fillData[componentId] = detail.value;
    this.setData({ fillData });
  },
  onCollegeChange(e) {
    let collegeIndex = e.detail.value;
    this.setData({ collegeIndex });
  },
  changeEditStatus() {
    this.setData({
      disabled: !this.data.disabled
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
          app.showToast('数据提交成功');
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