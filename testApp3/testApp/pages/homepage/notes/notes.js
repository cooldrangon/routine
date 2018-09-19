const qiniuUploader = require("../../../utils/qiniuUploader.js");
var app = getApp();
// pages/homepage/notes/notes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xytemp:false,
    temp:[],
    changColor: false,
    sendFlag: false,
    pencilimg: "../../../assets/img/pencil.png",
    tempFilePaths: [],
    tempFilepath:"../../../assets/img/camera.png",
    noterecord: ["所有人", "好友可见", "仅自己可见"],
    addsite: "添加地点"
  },
  album: function() {
    var _this = this
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function(res) {
        // const tempFilePaths = res.tempFilePaths
        const filepath = res.tempFilePaths[0]
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片    
        qiniuUploader.upload(filepath, res => {
         _this.data.tempFilePaths.push(app.globalData.urlst + "/" + res.key)
          if (_this.data.tempFilePaths.length>0){
            _this.setData({
              xytemp:true,
              // tempFilePaths: tempFilePaths,
              temp: _this.data.tempFilePaths
            })
          }
          // _this.setData({
          //   // tempFilePaths: tempFilePaths,
          //   tempFilePath:app.globalData.urlst +"/"+ res.key
          // })
          console.log(_this.data.tempFilePath)
        }, (error) => {
          console.log('error' + error)
        }, {
          uploadURL: 'https://up-z1.qbox.me/',

          domain: 'bzkdlkaf.bkt.clouddn.com',

          uptoken: _this.data.uploadToken,
        })
      }
    })
  },
  camera: function() {
    const _this = this
    wx.chooseImage({
      count: 4, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        const filepath = res.tempFilePaths[0]
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        qiniuUploader.upload(filepath, res => {
          console.log(res)
          _this.setData({
            tempFilePaths: app.globalData.urlst + "/" + res.key
          })
          console.log(_this.data.tempFilePaths)
        }, (error) => {
          console.log('error' + error)
        }, {
            uploadURL: 'https://up-z1.qbox.me/',

            domain: 'bzkdlkaf.bkt.clouddn.com',

            uptoken: _this.data.uploadToken,
          })
      }
    })
  },
  // 点击摄像的图片会从底部出来一个上拉菜单 提示选择从相册选择还是拍摄
  actioncnt: function() {
    wx.showActionSheet({
      itemList: ['从相册选择', '拍摄'],
      success: res => res.tapIndex == 1 ? this.camera() : this.album(),
      fail: function(res) {}
    })
  },
  // 点击取消编辑 点击确定的时候 把编辑的数据给endtime
  settextarea: function(e) {
    this.setData({
      endtime: e.detail.value
    })
  },
  // 点击退出此次编辑并把数据传送给setStorage
  cancel: function () {
    wx.showModal({
      title: "是否退出本次编辑",
      success: res => {
        if (res.confirm) {
          wx.setStorage({
            key: 'textarea',
            data: this.data.endtime,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 点击标签变色 
  changColor: function(e) {
    this.setData({
      key: e.target.dataset.index,
      changColor: true,
      sendFlag: false
    })
  },
  // 点击谁可以看我的笔记变色
  changchoice: function(e) {
    this.setData({
      choicefriend: e.target.dataset.index
    })
  },
  // 点击谁可以看我的笔记显示下拉列表 和 蒙层
  seenotes: function() {
    this.setData({
      seenotes: true
    })

  },
  // 点击谁可以看我的笔记选择完成后下拉列表和蒙层消失 并获取点击的index值
  confirm: function() {
    this.setData({
      seenotes: false,
      choicefriend: this.data.choicefriend
    })
  },
  //点击谁可以看我的笔记选择完成后点击取消的时候蒙层和列表消失
  cancelseenotes: function() {
    this.setData({
      seenotes: false
    })
  },
  // 点击添加地点
  addsite: function() {
    wx.chooseLocation({
      success: res => {
        this.setData({
          addsite: res.name
        })
      },
    })
  },
  firend:function(){
    wx.request({
      url: app.globalData.urls + '/api/my_friends',
      method:"POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json', // 默认值
        token:app.globalData.token,
        account:app.globalData.account
      },
      data:{
        token: app.globalData.token,
        account: app.globalData.account
      },
      success:res=>{
        const friend = JSON.stringify(res.data.data)
        wx.navigateTo({
      url: '../../news/@friend/@friend?friend='+friend,
    })
      }
    })
    // wx.navigateTo({
    //   url: '../../news/@friend/@friend',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   if(options.app){
     let app = JSON.parse(options.app)
     this.setData({
       app: app
     })
   }
    wx.getStorage({
      key: 'textarea',
      success: res => {
        this.setData({
          endtime: res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    wx.request({
      url: app.globalData.urls + "/wxchat/upload/upload_token",
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res)
        const uploadToken = res.data.token
        this.setData({
          uploadToken: uploadToken
        })
      }
    })
console.log(app.globalData.account)
  },
  // 点击发布判断有无选择标签如果没有弹出提示框
  publish: function() {
    this.setSendFlag();
  },

  setSendFlag: function() {
    if (!this.data.changColor) {
      this.setData({
        sendFlag: true
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})