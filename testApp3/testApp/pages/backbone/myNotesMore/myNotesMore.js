// pages/backbone/myNotesMore/myNotesMore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusman: [{ 'name': 'name', 'time': '01:00', 'logsrc': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 'images': { 1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 2: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 3: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg' }, 'bjtitle': '笔记标题', 'bjcontent': '笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容' }, { 'name': 'name ', 'time': '01:00', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg', 'images': { 1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 2: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 3: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg' }, 'bjtitle': '笔记标题', 'bjcontent': '笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容' }, { 'name': 'name ', 'time': '01:00', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg', 'images': { 1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 2: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg', 3: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg' }, 'bjtitle': '笔记标题', 'bjcontent': '笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容' },]
  },
  detailsnotes:function(){
    wx.navigateTo({
      url: '../../homepage/bjfocuse/bjfocuse',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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