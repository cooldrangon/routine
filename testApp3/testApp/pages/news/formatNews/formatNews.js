// pages/news/formatNews/formatNews.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    state:true,
    focusman: [{ 'index': 0, 'name': 'nam',  'detail': '解除绑定', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }, { 'index': 1, 'name': 'nam',  'detail': '建立关联', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }, { 'index': 2, 'name': 'nam',  'detail': '添加好友', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }, { 'index': 3, 'name': 'nam', 'detail': 'bozhu', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  approve:function(e){
    // var that = this
    console.log(e.target.dataset.index)
    console.log(!this.data.state)
    this.setData({
        state:!this.data.state
    })
    
    // let key = e.currentTarget.dataset.index
    // console.log(key)
    
    // const con = this.data.focusman[key];
    // console.log(con)

    // wx.showModal({
    //   title: '是否与用户'+ con.detail,
    //   cancelText: '否',
    //   confirmText: '是',
    //   confirmColor: '#000',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //       console.log(that.data._num)
    //       console.log(key)
          
    //       that.data._num = key
    //       console.log(that.data._num)
          
    //       // this.setData({
    //       //   _num: e.target.dataset.index
    //       // })

    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

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