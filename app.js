import zanui from '/dist/index';

App({
  onLaunch() { },
  onShow() {
    const isBind = wx.getStorageSync('isBind');
    if (isBind) {
      this.getWxInfo();
    }
  },
  getWxInfo() {
    wx.login({
      success: (res) => {
        let { code } = res;
        wx.getUserInfo({
          success: (res) => {
            const { userInfo, encryptedData, iv } = res;
            if (code && encryptedData && iv) {
              wx.request({
                url: `${this.globalData.baseUrl}/authorization`,
                method: 'POST',
                data: {
                  code,
                  encryptedData,
                  iv
                },
                success: (res) => {
                  wx.setStorageSync('access_token', res.data.access_token);
                  this.getUserInfo();
                  this.getDormitoryList();
                  console.log('信息获取成功，并载入缓存');
                },
                fail: (err) => {
                  this.showToast('未正常返回数据');
                }
              });
            }
            wx.setStorageSync('wxInfo', userInfo);
          },
          fail: (err) => {
            this.showToast('信息获取失败', 'warn');
          }
        });
      },
      fail: (err) => {
        this.showToast('登录授权失败', 'warn');
      }
    });
  },
  getUserInfo() {
    const access_token = wx.getStorageSync('access_token');
    if (access_token) {
      wx.request({
        url: `${this.globalData.baseUrl}/user`,
        method: 'GET',
        header: {
          'Authorization': `Bearer ${access_token}`
        },
        success: (res) => {
          wx.setStorageSync('userInfo', res.data.data.info);
          console.log(res);
        },
        fail: (err) => {
          console.log(err);
        }
      });
    } else {
      this.getWxInfo();
    }

  },
  getDormitoryList() {
    const access_token = wx.getStorageSync('access_token');
    wx.request({
      url: `${this.globalData.baseUrl}/dormitory`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${access_token}`
      },
      success: (res) => {
        let dormList = res.data.data;
        dormList.forEach(v => {
          delete v.created_at;
          delete v.updated_at;
        })
        wx.setStorageSync('dormList', dormList);
      },
      fail: (err) => {
        console.log('未能成功返回宿舍楼列表')
      }
    })
  },
  getAcademyList() {
    const access_token = wx.getStorageSync('access_token');
    wx.request({
      url: `${this.globalData.baseUrl}/academy`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${access_token}`
      },
      success: (res) => {
        let academyList = res.data.data;
        academyList.forEach(v => {
          delete v.created_at;
          delete v.updated_at;
        })
        wx.setStorageSync('academyList', academyList);
      },
      fail: (err) => {
        console.log('未能成功返回学院列表')
      }
    })
  },
  showToast(title = '加载中', icon = 'none', duration = 2000, mask = false) {
    wx.showToast({
      title,
      icon,
      duration,
      mask
    });
  },
  /* ZanUI组件 */
  zanui,
  /* 全局数据 */
  globalData: {
    baseUrl: 'https://wx.youthol.cn/api',
    academyList: [
      '选择学院',
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
    ],
    dormList: [
      {
        value: '1NH',
        name: '1#公寓南楼'
      },
      {
        value: '1BH',
        name: '1#公寓北楼'
      },
      {
        value: '2NH',
        name: '2#公寓南楼'
      },
      {
        value: '2BH',
        name: '2#公寓北楼'
      },
      {
        value: '3NH',
        name: '3#公寓南楼'
      },
      {
        value: '3BH',
        name: '3#公寓北楼'
      },
      {
        value: '4NH',
        name: '4#公寓南楼'
      },
      {
        value: '4BH',
        name: '4#公寓北楼'
      },
      {
        value: '5H',
        name: '5#公寓楼'
      },
      {
        value: '6H',
        name: '6#公寓楼'
      },
      {
        value: '7H',
        name: '7#公寓楼'
      },
      {
        value: '8H',
        name: '8#公寓楼'
      },
      {
        value: '9H',
        name: '9#公寓楼'
      },
      {
        value: '10H',
        name: '10#公寓楼'
      },
      {
        value: '11H',
        name: '11#公寓楼'
      },
      {
        value: '12H',
        name: '12#公寓楼'
      },
      {
        value: '13H',
        name: '13#公寓南楼'
      },
      {
        value: '13H',
        name: '13#公寓北楼'
      },
      {
        value: '14H',
        name: '14#公寓楼'
      },
      {
        value: '15H',
        name: '15#公寓楼'
      },
      {
        value: '16H',
        name: '16#公寓楼'
      },
      {
        value: '17H',
        name: '17#公寓楼'
      },
      {
        value: '18H',
        name: '18#公寓楼'
      },
      {
        value: '19H',
        name: '19#公寓楼'
      },
      {
        value: '20H',
        name: '20#公寓楼'
      },
      {
        value: '21H',
        name: '21#公寓楼'
      },
      {
        value: '22H',
        name: '22#公寓楼'
      },
      {
        value: 'Y2H',
        name: '研究生公寓北楼'
      },
      {
        value: 'Y1H',
        name: '研究生公寓南楼'
      },
      {
        value: 'YAH',
        name: '新研究生A座'
      },
      {
        value: 'YCH',
        name: '新研究生C座'
      }
    ]
  }
});