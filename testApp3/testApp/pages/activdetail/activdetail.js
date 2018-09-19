// pages/activdetail/activdetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusman: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    if (!id) {
      return false;
    }
    var that = this
    wx.request({
      url: app.globalData.urls + "/api/activity/detail", //仅为示例，并非真实的接口地址
      method: "POST",
      data: { id: id },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success:res=> {
        if (res.data.status == 200) {
          that.setData({
            focusman: res.data.data
          })
          console.log(this.data.focusman)
        } else {
          console.log('error');
          return false;
        }
      }
    })

  },
  // 去报名
  gosign: function () {
    const id = this.data.focusman.id
    const price = this.data.focusman.price
    wx.navigateTo({
      url: "/pages/activdetail/sign/sign?id="+id+"&price="+price,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})