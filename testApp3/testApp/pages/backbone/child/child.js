// pages/backbone/backbone.js


// const fetch = require('../../utils/fetch')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    meanslist: [{
      img: "../../../image/1.png",
      title: "课外班",
      depict: "高考英语145分分享英语学习技巧"
    }, {
      img: "../../../image/1.png",
      title: "学校",
      depict: "高考英语145分分享英语学习技巧"
    }, {
      img: "../../../image/1.png",
      title: "亲子",
      depict: "高考英语145分分享英语学习技巧"
    }],
    personality: "添加个人描述,让大家更好的认识你",
    location: "完善你的位置信息",
    noterecord: ["关联已有账号", "创建新账号"],
    tabArr: {
      currentId: 1,
      currentBdid: 1
    },
    oneselfurl: "../../../assets/tabs/add.png",
    // headercontext:"https://wx.knowdao.com/uploads/20180905/154d4032d2bc71e85bcb65b891ebed1d.png"
    headercontext: "../../../image/rectangle.png"
  },
  tab: function (e) {
    var dataid = e.currentTarget.id
    var obj = {}
    obj.currentId = dataid
    obj.currentBdid = dataid
    this.setData({
      tabArr: obj
    })
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
          headercontext: res.tempFilePaths
        })
      }
    })
  },
  camera: function () {
    var _this = this
    wx.chooseImage({
      count: 4, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          headercontext: res.tempFilePaths
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
      }
    })
  },
  //  点击返回主页
  revertsheet: function () {
    wx.navigateTo({
      url: '/pages/backbone/backbone',
    })
  },
  // 点击解除绑定
  unbound: function () {
    wx.showModal({
      title: '是否解除绑定',
      confirmColor: '#0e0e0e',
      cancelText: "取消",
      confirmText: "确定",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定解除绑定的账号')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 点击独立账号
  childmanage: function () {
    wx.showModal({
      title: '是否让孩子来管理账号',
      confirmColor: '#0e0e0e',
      cancelText: "否",
      confirmText: "是",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定孩子管理账号')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })
  },

  changchoice: function (e) {
    this.setData({
      choicefriend: e.target.dataset.index
    })
    // this.data.choicefriend == 0 ? this.confirm();wx.redirectTo({
    //   url: '',
    // }) : this.cancelseenotes()
    if (this.data.choicefriend == 0) {
      this.confirm()
      wx.switchTab({
        url: '../../homepage/homepage',
      })
    } else if (this.data.choicefriend == 1) {
      this.cancelseenotes()
      wx.reLaunch({
        url: '../../details/details',
      })
    }
  },
  // 点击谁可以看我的笔记显示下拉列表 和 蒙层
  seenotes: function () {
    this.setData({
      seenotes: true
    })

  },
  // 点击谁可以看我的笔记选择完成后下拉列表和蒙层消失
  confirm: function () {
    console.log(this.data.choicefriend)
    this.setData({
      seenotes: false
    })

  },
  //点击谁可以看我的笔记选择完成后点击取消的时候蒙层和列表消失
  cancelseenotes: function () {
    this.setData({
      seenotes: false
    })
  },
  // 点击进入修改个人资料页面
  editprofile: function () {
    wx.redirectTo({
      url: '../editprofile/editprofile',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.urls + "/api/personal/get_find_user_info", //仅为示例，并非真实的接口地址
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data);
        if (res.data.status == 200) {
          this.setData({
            userInfo: res.data.data
          })
          console.log(this.data.userInfo)
        } else {
          console.log('error');
          // console.log('error.msg');
          return false;
        }
      }
    })
    // fetch('personal/get_find_user_info').then(res => {
    //   this.setData({ userInfo: res.data.data })
    //   console.log(this.userInfo)
    // })
    // console.log(this.data.userInfo)


    wx.getStorage({
      key: 'address',
      success: res => {
        if (res.data.address) {
          this.setData({
            location: res.data.address,
          })
        }
        if (res.data.personality) {
          this.setData({
            personality: res.data.personality
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 在笔记页面点击更多进入笔记列表页
  noteslist: function () {
    wx.navigateTo({
      url: '../myNotesMore/myNotesMore',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  fonudnewlist: function () {
    wx.navigateTo({
      url: '../myNotesClassify/myNotesClassify',
    })
  },
  //点击进入homepage中的活动的页面
  campaign: function (e) {
    let index = 3
    wx.switchTab({
      url: "../../homepage/homepage",
      success: function (res) {
        wx.setStorage({
          key: 'index',
          data: index,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})