// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyRecord:[{
      id: '0',
      recordItem:'这是一条最新的历史记录'
    }],
    hots:[{
      id:'01',
      text:'国内不错的小众旅游地',
      hotStatus:111
    },{
      id:'02',
      text:'2018高考作文',
      hotStatus:110
    },{
      id:'03',
      text:'对骂群',
      hotStatus:45
    },{
      id:'04',
      text:'华为吓人技术',
      hotStatus:30
    },{
      id:'05',
      text:'海贼王',
      hotStatus:50
    },{
      id:'06',
      text:'幸存者偏差',
      hotStatus:102
    },{
      id:'07',
      text:'勇士横扫骑士',
      hotStatus:114
    },{
      id:'08',
      text:'参加今年的高考体检',
      hotStatus:90
    }],
    searchContext:''
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hots = this.data.hots;
    var hots2 = hots.sort((x, y) => y.hotStatus - x.hotStatus);
    // reverse()方法会反转数组项的顺序
    // hots.reverse();
    console.log(hots2);
    this.setData({
      hots: hots2
    })

    wx.getStorage({
      key: 'historyRecord',
      success: (res) => {
        // success
        this.setData({
          historyRecord: res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
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
  
  },
  bindconfirm: function(e){
    console.log(e);
    var historyRecord = this.data.historyRecord;
    var recordItem = e.detail.value;
    historyRecord.unshift({
      id:'0',
      recordItem: recordItem
    });
    wx.setStorage({
      key: 'historyRecord',
      data: historyRecord
    })
    this.setData({
      historyRecord:historyRecord
    });
    this.setData({
      searchContext:''
    })
  },
  backTo () {
    wx.navigateBack({
      delta: 1
    })
  },
  deleteRecord: function(e){
    console.log(e);
    let filterArr = this.data.historyRecord.filter((item, index) => {
      return index !== e.target.dataset.index
    })

    this.setData({
      historyRecord: filterArr
    })

    wx.setStorage({
      key: 'historyRecord',
      data: filterArr
    })
  }
})