
var app = getApp();
module.exports = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.globalData.urls + `/api/${url}`,
      data: data,
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'content-type': 'application/json' // 默认值
      },
      success: resolve,
      fail: reject
    })
  })
}