const zanui = require('/dist/index');

App({
  onLaunch() {
    this.getWxInfo();
  },
  onShow() {
    this.getWxInfo();
  },
  getWxInfo() {
    wx.login({
      success: (res) => {
        let { code } = res;
        wx.getUserInfo({
          success: (res) => {
            let { userInfo } = res;
            wx.setStorageSync('userInfo', userInfo);
          },
          fail: (err) => {
            this.showToast('信息获取失败', 'warn');
          }
        });
      },
      fail: (err) => {
        this.showToast('用户登录失败', 'warn');
      }
    });
  },
  showToast(title = '加载中', icon = 'loading', duration = 2000, mask = true) {
    wx.showToast({
      title,
      icon,
      duration,
      mask
    });
  },
  /* ZanUI组件 */
  zanui,
  globalData: {
    collegeList: [
      '机械工程学院',
      '交通与车辆工程学院',
      '农业工程与食品科学学院',
      '电气与电子工程学院',
      '计算机科学与技术学院',
      '化学化工学院',
      '建筑工程学院',
      '资源与环境工程学院',
      '材料科学与工程学院',
      '生命科学学院',
      '数学与统计学院',
      '物理与光电工程学院',
      '经济学院',
      '管理学院',
      '文学与新闻传播学院',
      '外国语学院',
      '法学院',
      '马克思主义学院',
      '美术学院',
      '音乐学院',
      '体育学院',
      '国防教育学院',
      '鲁泰纺织服装学院'
    ]
  }
});