var scence = 0;
App({
  onLaunch: function() {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const that = this
    // 登录
    wx.login({
      success: res => {
        const code= res.code
        // 发送 res.code 到后台换取 openId, sessionKey, unionId`
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                lang:"zh_CN",
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  console.log(res)
                  this.globalData.userInfo = res.userInfo
                  console.log(this.globalData.urls)
                  wx.request({
                    url: this.globalData.urls + "/api/login/get_openid",
                    method: "POST",
                    header: {
                      "content-type": "application/x-www-form-urlencoded",
                      'content-type': 'application/json' // 默认值
                    },
                    data: {
                      code: code,
                      nickname: this.globalData.userInfo.nickName,
                      gender: this.globalData.userInfo.gender,
                      avatarUrl: this.globalData.userInfo.avatarUrl,
                      city: this.globalData.userInfo.city
                    },
                    success: res => {
                      console.log(res)
                      wx.setStorage({
                        key: 'token',
                        data: res.data.data.token
                      })

                      if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res.data.data.token)
                      }
                      this.globalData.account = res.data.data.account
                      this.globalData.token = res.data.data.token
                      console.log(this.globalData)
                      //在res中返回的有account token
                      //  that.globalData.openid = res.data.openid
                      console.log(this.globalData.userInfo.nickName)
                    }
                  })

                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })      
      }
    })  
  },

  onShow: function() {
    // this.globalData.scence = wx.getStorageSync('scence')
    // if (this.globalData.scence) {
    //   wx.switchTab({
    //     url: 'pages/homepage/homepage',
    //     success: function(res) {
    //       console.log(res)
    //     },
    //     fail: function(err) {
    //       console.log(err)
    //     }
    //   })
    // }
  },
  onHide: function() {
    this.globalData.scence = 1
    wx.setStorageSync('scence', this.globalData.scence)
  },

  globalData: {
    account: '',
    stroge: 0,
    openid: 0,
    userInfo: null,
    times: null,
    urls: 'https://wx.knowdao.com',
    urlst: 'http://test.knowdao.com',
    token: ''
  }
})