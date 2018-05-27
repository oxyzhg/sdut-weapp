const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wxInfo: wx.getStorageSync('wxInfo'),
    isBind: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) { },
  onShow() {
    const isBind = wx.getStorageSync('isBind');
    if (isBind) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({ userInfo, isBind });
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    setTimeout(() => {
      app.showToast('刷新成功', 'success', 1000)
      wx.stopPullDownRefresh()
    }, 1000)
  },
  getuserinfo({ detail }) {
    wx.login({
      success: (res) => {
        const { code } = res;
        const { encryptedData, iv, userInfo } = detail;
        if (code && encryptedData && iv) {
          wx.request({
            url: `${app.globalData.baseUrl}/authorization`,
            method: 'POST',
            data: {
              code,
              encryptedData,
              iv
            },
            success: (res) => {
              wx.setStorageSync('access_token', res.data.access_token);
              app.getUserInfo();
              app.getDormitoryList();
              app.getAcademyList();
              console.log('信息获取成功，并载入缓存');
            },
            fail: (err) => {
              app.showToast('未正常返回数据', 'loading');
            }
          });
          wx.setStorageSync('wxInfo', userInfo);
          wx.setStorageSync('isBind', true);
          this.setData({
            wxInfo: userInfo
          });
        } else {
          app.showToast('信息获取失败', 'loading');
        }
      },
      fail: (err) => {
        this.showToast('登录授权失败', 'loading');
      }
    });
  },
  clearStorage() {
    app.showToast('清除缓存中...')
    wx.clearStorageSync();
    this.setData({
      isBind: false
    })
  }
})