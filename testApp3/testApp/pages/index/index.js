// //index.js
// //获取应用实例
// const app = getApp()



// Page({

//   /**
//    * 页面的初始数据
//    */
//   // index 代表各种标题的选中状态
//   data: {
//     indexs: [{ 'state': false }, { 'state': false }, { 'state': false }, { 'state': false }, { 'state': false }, { 'state': false }, { 'state': false }, { 'state': false }, { 'state': false }],
//     count:''

//   },
//   onLoad(){
//   //   if (wx.getStorageSync('scence')){
//   //     wx.switchTab({
//   //       url:'../details/details'
//   //     })
//   //  }
//   },
//   nextgo: function () {
//     console.log('下一页')
//     var timesrc;
//     var that = this;
//     wx.navigateTo({
//       url: '../previous/deservefocus/deservefocus',
//       success: function (res) { },
//       fail: function (res) { },
//       complete: function (res) { },
//     })
//   },
//   changen: function (e) {
//     var arr = this.data.indexs[e.target.dataset.index]
//     arr.state = !arr.state
//     console.log(this.data.indexs)
//     this.setData({
//       indexs: this.data.indexs
//     })

//   },
//   go: function () {
//      wx.navigateTo({
//       url: '../previous/deservefocus/deservefocus',
//       success: function (res) {},
//       fail: function (res) { },
//       complete: function (res) { },
//     })
//   },
//   onLoad:function(options){
//     console.log(options.id)
//   }
// })
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexs: { state: true },
    imagsrc: [],
    list: []
  },
  onLoad() {
    console.log('test is');
    //   if (wx.getStorageSync('scence')){
    //     wx.switchTab({
    //       url:'../details/details'
    //     })
    //  }
  },
  nextgo: function () {
    console.log('下一页')
    var timesrc;
    var that = this;
    wx.navigateTo({
      url: '../previous/deservefocus/deservefocus',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  changen: function (e) {
    let id = e.target.dataset.id;
    for (let i = 0; i < this.data.list.length; i++) {
      let item = this.data.list[i];
      if (id === item.id) {
        this.data.list[i].state = !this.data.list[i].state;
        this.setData({
          list: this.data.list
        })
      }
    }
    // return false;
    // var arr = this.data.indexs
    // arr.state = !arr.state
    // console.log(this.data.indexs)
    // this.setData({
    //   indexs: this.data.indexs
    // })

  },
  go: function () {
    let activeArr = [];
    for (let i = 0; i < this.data.list.length; i++) {
      let item = this.data.list[i];
      if (item.state === true) {
        activeArr.push(item.id);
      }
    }
    if (activeArr.length == 0) {
      wx.showToast({
        title: '请至少选择一个标签',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    var that = this
    wx.request({
      url: app.globalData.urls + "/api/login/checklabel", //仅为示例，并非真实的接口地址
      method: "POST",
      data: { lableid: activeArr },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res);
        if (res.data.status == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1000
          })
          wx.redirectTo({
            url: '../previous/deservefocus/deservefocus'
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
          return false;
        }
      }
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.urls + "/api/login/label", //仅为示例，并非真实的接口地址
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.status == 200) {
          let data = res.data.data;
          for (let i = 0; i < data.length; i++) {
            let item = data[i];
            item.state = false;
          }
          that.setData({
            list: data
          })
        } else {
          console.log('error')
        }
      }
    })
  }
})
