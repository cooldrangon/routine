// pages/backbone/myNotesClassify/myNotesClassify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyTitle: [{ 'headline': '时光', 'content': '笔记内容笔记内容笔记内容笔记内容', 'state': '编辑' }],
    focusman: [{
      "id": 0,
      'name': 'name',
      'time': '01:00',
      'logsrc': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
      'images': {
        1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
        2: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
        3: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg'
      },
      'bjtitle': '笔记标题',
      'bjcontent': '笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容',
      'visible': '他人可见',
      'state': false
    }, {
      "id": 1,
      'name': 'name ',
      'time': '01:00',
      'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http://userimages14.51sole.com/20170406/b_3971625_201704061559435214.jpg',
      'images': {
        1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
        2: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
        3: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg'
      },
      'bjtitle': '笔记标题',
      'bjcontent': '笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容',
      'visible': '仅自己可见',
      'state': false
    }, {
      "id": 2,
      'name': 'name ',
      'time': '01:00',
      'logsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347783401&di=c2c3fd754e12d06e93a7e4024a260acc&imgtype=0&src=http://userimages14.51sole.com/20170406/b_3971625_201704061559435214.jpg',
      'images': {
        1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
        2: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg',
        3: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3337909622,452079418&fm=27&gp=0.jpg'
      },
      'bjtitle': '笔记标题',
      'bjcontent': '笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容笔记内容',
      'visible': '公开',
      'state': false
    }],
    iconStatu: false,
    // xuanState: false,
    // 选中的列表数组
    selList: [],
  },
  // 点击编辑状态的变化
  showSelIcon() {
    this.setData({
      iconStatu: !this.data.iconStatu
    })
    console.log(this.data.iconStatu);
  },

  // 删除笔记
  delNotes: function () {
    wx.showModal({
      title: '是否删除所选笔记',
      cancelText: '否',
      confirmText: '是',
      confirmColor: '#000',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定删除')
          // 移除选中的笔记内容
      

        } else if (res.cancel) {
          console.log('用户点击取消删除')
        }
      }
    })
  },


  // 删除笔记分类
  delClassify: function () {
    wx.showModal({
      title: '是否删除分类及其内容',
      cancelText: '否',
      confirmText: '是',
      confirmColor: '#000',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定删除笔记分类')

        } else if (res.cancel) {
          console.log('用户点击取消删除笔记分类')

        }
      }
    })

  },

  // 移至其他分类
  shift: function () {
    wx.showModal({
      title: '是否删除分类及其内容',
      cancelText: '否',
      confirmText: '是',
      confirmColor: '#000',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定移至其他分类')

        } else if (res.cancel) {
          console.log('用户点击取消移至其他分类')

        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let dataList = this.data.focusman;
    // 给 focusman数组动态添加了selStatu属性
    dataList.map(function (value) {
      value.selStatu = false;
    })
    console.log(dataList)
  },
  // 选中
  toggleSel(e) {
    if (this.data.iconStatu) {
      let selArr = this.data.selList;
      let selId = e.target.dataset.id || e.currentTarget.dataset.id;
      let dataList = this.data.focusman;
      let index = this.data.selList.indexOf(selId);
      console.log(index)
      console.log(selId)

      if (index < 0) {
        selArr.push(e.target.dataset.id);
        dataList.map((value) => {
          // 选中项高亮显示
          if (value.id == selId) {
            value.selStatu = true
          }
        })
      } else {
        dataList.map((value) => {
          if (value.id == selId) {
            value.selStatu = false
          }
        })
        selArr.splice(index, 1)
      }

      this.setData({
        selList: selArr,
        focusman: dataList
      })
      console.log(this.data.selList)
      console.log(this.data.focusman)
    }

  },
})