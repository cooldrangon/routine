// Page({
//   /**
//    * 页面的初始数据 
//    */
//   data: {
//     src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg',
//     focusman: [{ 'name': 'name name','detail':'bozhu', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }, { 'name': 'name name','detail':'bozhu', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }, { 'name': 'name name','detail':'bozhu', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }, { 'name': 'name name','detail':'bozhu', 'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http%3A%2F%2Fuserimages14.51sole.com%2F20170406%2Fb_3971625_201704061559435214.jpg' }]
//   },

//   nextgo:function(){
//     wx.reLaunch({
//       url: '../../homepage/homepage',
//     })
//   },
//   clickfocus:function(e){
//     console.log(e.target.dataset.item)
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
    
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
//     console.log(1111)
//     this.onPullDownRefresh()
   
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
    
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
//     console.log(1111)
//     var a=0;
//     var time;
//     if(a<10){
//       time=setInterval(function(){a++;},1000)
//     }else{
//       clearInterval(time)
//       console.log(a)
//       wx.stopPullDownRefresh()
//     }
    
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
    
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
    
//   }
// })

const app = getApp()
Page({
  /**
   * 页面的初始数据 
   */
  data: {
    list: [],
  },

  nextgo: function () {
    wx.reLaunch({
      url: '../../homepage/homepage',
    })
  },
  clickfocus: function (e) {
    // console.log(e.target.dataset.item.id)
    //获取要关注用户的id
    var id = e.target.dataset.item.id;
    var that = this
    wx.request({
      url: app.globalData.urls + "/api/follow/followuser", //仅为示例，并非真实的接口地址
      method: "POST",
      data: { follow_id: id },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      }
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
    //ajax 请求中需要在header 头中添加account 和 token
    var that = this
    wx.request({
      url: app.globalData.urls + "/api/follow/userlist", //仅为示例，并非真实的接口地址
      method: "POST",
      data: { page: 1, pagesize: 10 },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 200) {
          that.setData({
            list: res.data.data
          })
        } else {
          console.log('error')
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(1111)
    this.onPullDownRefresh()

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
    console.log(1111)
    var a = 0;
    var time;
    if (a < 10) {
      time = setInterval(function () { a++; }, 1000)
    } else {
      clearInterval(time)
      console.log(a)
      wx.stopPullDownRefresh()
    }

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
