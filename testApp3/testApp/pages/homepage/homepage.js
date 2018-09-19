var postsData = require('../../data/data.js')

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    city: "郑州",
    index: 1,
    searchValue: '',
    name: 'focuse',
    names: 'focuse.wxml',
    postList: [],
    focusman: [],
    squares: [],
    active: [],
  },
  //图片的点击事件
  click_detail: function (event) {
    var id = event.target.dataset.id
    //开始跳转传递参数
    wx.navigateTo({
      url: '../activdetail/activdetail?id=' + id,
    })
  },
  // 搜索页面跳回
  onLoad: function (options) {
    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    }
  },

  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/search'
    })
  },

  // 搜索页面跳回
  onLoad: function (options) {
    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    }
  },

  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/search'
    })
  },

  // 关注
  focuss: function () {
    this.setData({
      index: 1,
      name: 'focuse',
      names: 'focuse.wxml'
    });
    console.log('关注')
  },
  // 广场
  squares: function () {
    this.setData({
      index: 2,
      name: 'squares',
      names: 'squares.wxml'
    });
    var that = this
    wx.request({
      url: app.globalData.urls + "/api/square/square_list", //仅为示例，并非真实的接口地址
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res);
        if (res.data.status == 200) {
          that.setData({
            squares: res.data.data
          })
          // console.log(that.data.focusman)
        } else {
          console.log('error');
          return false;
        }
      }
    })


    console.log('广场')
  },
  obtoinposition: function () {
    app.globalData.guding = 1
    wx.showModal({
      title: '获取您当前的位置信息',
      success: res => {
        if (res.confirm) {
          var that = this
          wx.getLocation({
            success: res => {
              const lat = res.latitude
              const log = res.longitude
              wx.request({
                url: "https://api.map.baidu.com/geocoder/v2/?ak=buIqTWtDG7aaRTwgnjncrEXUi1WWw8fs&location=" + lat + "," + log + "&output=json",
                success: res => {
                  this.setData({
                    city: res.data.result.addressComponent.city
                  })
                }
              })
            },
          })
          wx.request({
            url: app.globalData.urls + "/api/activity/activity_list", //仅为示例，并非真实的接口地址
            method: "POST",
            data: { place: this.data.city },
            header: {
              "content-type": "application/x-www-form-urlencoded",
              'content-type': 'application/json' // 默认值
            },
            success: function (res) {
              console.log(res);
              if (res.data.status == 200) {
                that.setData({
                  active: res.data.data
                })
                // console.log(that.data.focusman)
              } else {
                console.log('error');
                return false;
              }
            }
          })
        }
      }
    })

  },
  // 活动
  activitys: function () {
    this.setData({
      index: 3,
      name: 'activ',
      names: 'activ.wxml'
    });
    if (app.globalData.guding != 1) {
      this.obtoinposition()
    }

  },
  informs: function () {
    this.setData({
      index: null
    });
    wx.navigateTo({
      url: '../news/news'
    });
    console.log('通知')
  },

  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'success',
      success: function (res) {
        
      },
      fail: function (res) {
        wx.redirectTo({
          url: '../login/login',
        })
      },
      complete: function (res) {
      },
    })
    this.data.postList = postsData.postList
    // 进来默认是关注页面开始请求关注接口
    const that = this
    wx.request({
      url: app.globalData.urls + "/api/follow/list", //仅为示例，并非真实的接口地址
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.status == 200) {
          that.setData({
            focusman: res.data.data
          })
          console.log(that.data.focusman)
        } else {
          console.log('error');
          return false;
        }
      }
    })

    // 进入页面获取地理位置
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
    if (app.globalData.stroge == 3) {
      this.activitys()
    }
    // wx.getStorage({
    //   key: 'index',
    //   success: res => {
    //     console.log(res)

    //     this.setData({
    //       index: res.data
    //     })
    //     this.activitys()
    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
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