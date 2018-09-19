// pages/backbone/myfriend/myfriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    app: [],
    focusman: [],
  },
//用户点击的时候出现对号 并把点击选中的index push进一个新的数组中当再次点击时取消选中状态 并从数组中把之前选中的index给截取了
  select: function (e) {
    let index = e.target.dataset.index
    this.data.focusman[index].state = !this.data.focusman[index].state
    this.setData({
      focusman: this.data.focusman
    })
    if(this.data.focusman[index].state==true){
      this.data.app.push(index)
      console.log(this.data.app)
    }else{
      function arrIntercept(arr, val) {
        var index = arr.indexOf(val)
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr
      }
     arrIntercept(this.data.app,index)
     console.log(JSON.stringify(this.data.app))
    }
    
  },
  confirm:function(){
    if(this.data.app.length>0){
      const app = JSON.stringify(this.data.app)
      wx.reLaunch({
        url: '../../homepage/notes/notes?app='+app,
      })
    }else{
      wx.navigateBack({
        delta: 1
      })
    }
  },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.friend)
    let friendArr = JSON.parse(options.friend)
    for (let i = 0; i < friendArr.length; i++) {
      friendArr[i].state = false
    }
    this.setData({
      focusman: friendArr
    })
   
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