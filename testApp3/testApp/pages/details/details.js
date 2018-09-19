// var data = require('../../utils/data.js');
// var severs = require('../../utils/severjs.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateTime1: '2017-09-15',
    tempFilePaths: "../../assets/img/camera.png"
  },
  album: function () {
    var _this = this
    wx.chooseImage({
      count: 4, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  camera: function () {
    var _this = this
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        console.log(111)
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  // 点击摄像的图片会从底部出来一个上拉菜单 提示选择从相册选择还是拍摄
  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['从相册选择', '拍摄'],
      success: res => res.tapIndex == 1 ? this.camera() : this.album(),
      fail: function (res) {
        console.log(111)
      }
    })
  },
  // 点击标签变色 
  changColor: function (e) {
    this.setData({
      key: e.target.dataset.index
    })
  },
  changeDateTime1: function (e) {
    console.log(e.detail.value)
    this.setData({ dateTime1: e.detail.value });
  },
  nextgo: function () {
    wx.navigateTo({
      url: '../backbone/backbone?id=1',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    },    
  getUserInfo: function (e) {
   
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