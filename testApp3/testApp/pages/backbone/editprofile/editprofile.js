 const app = getApp()
// pages/backbone/editprofile/editprofile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:app.globalData.token,
    dateTime1: '2017-09-15',
    counter:["穿搭","美食","健康","玩乐","亲子","教育","人生中的第一次"]

  },
  // 调试生日时间
  changeDateTime1: function (e) {
    console.log(e.detail.value)
    this.setData({ dateTime1: e.detail.value });
  },
  // 点击标签变色
  changColor: function (e) {
    this.setData({
      key: e.target.dataset.index
    })
  },
  // 地址输入监听
  address:function(e){
    this.setData({
      endtime: e.detail.value
    })
  },
  // 个性签名输入监听
  personality:function(e){
    this.setData({
      personality: e.detail.value
    })
    console.log(this.data.personality)
  },
  // 点击设置输入的地址和个性签名保存到缓存中同时返回我的主页
  keep:function(){
    wx.setStorage({
      key: 'address',
      data: { 
      address:this.data.endtime,
      personality:this.data.personality
        },
      success: function (res) { 
       
      },
      fail: function (res) { },
      complete: function (res) { },
    }),
    wx.navigateBack({
      delta: 1
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getStorage({
    //   key: 'address',
    //   success: res => {
    //     this.setData({
    //       endtime: res.data.address,
    //       personality:res.data.personality
    //     })
    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
    const token = this.data.token
    const z = this
    if(app.userInfoReadyCallback){
      z.setData({
        token:app.globalData.token
      })
      console.log(z.data.token)
    }else{
      app.employIdCallback = token => {
        if (token != '') {
          console.log(token)
        }
      }
    }
    
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