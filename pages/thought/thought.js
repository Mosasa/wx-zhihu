// pages/thought/thought.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageImg:'/assets/icons/newss.png',
    thoughtImg:'/assets/icons/myThought.jpg',
    display: false,
    // scrollHeight:'',
    discussion:[
      {
        url:'/assets/images/cep.jpg',
        discussing:'正在讨论',
        title:'参与测评，晒出你的人格画像',
        descQuestion:'你是一个什么样的人？'
      },
      {
        url:'/assets/images/yd.jpg',
        discussing:'正在讨论',
        title:'你今天去运动了吗？',
        descQuestion:'定位打卡，你能坚持多久？'
      },
      {
        url:'/assets/images/gk.png',
        discussing:'聊天室',
        title:'关于高考你印象最深的是什么？',
        descQuestion:'聊聊你的高三生活'
      }
    ],
    hotImg:'/assets/images/hot.jpg',
    ffriImg:'/assets/images/ffri.jpeg',
    transNumber:'2',
    commNumber:'1',
    supNumber:'15',
    updateContent:[
      {
        id:'0',
        userImg:'/assets/images/tx1.jpeg',
        userName:'小红拖拉机',
        detTime:'2天前',
        detContent:'「颜值即正义」告诉我们，客户的感受比真理重要。所以，在辩论赛以外，不要总尝试用真理去说服别人，因为客户可能，不care～',
        transmitFromImg:'/assets/images/tx3.jpeg',
        transmitFromName:'克里斯蒂娜酱',
        transmitContentDet:'我觉得我男朋友特别适合上知乎,比如:我:哥哥，你是不是嫌弃我胖？男朋友：我不是嫌弃你胖，我是觉得你胖我：……男朋友：“嫌弃”和“觉得”差别还是很大的，“觉得”是个中性词，就是我虽然感官上感觉你胖，但是并没有因此产生不...',
        transmitContentImg:'',
        transmitNumber:'3',
        commentNumber:'19',
        supportNumber:'72',           
    },
    {
      id:'1',
      userImg:'/assets/images/tx2.jpeg',
      userName:'野猪佩奇',
      detTime:'2天前',
      detContent:'若要黑人，何患无辞～',
      transmitFromImg:'/assets/images/tx4.jpeg',
      transmitFromName:'贱贱',
      transmitContentDet:'事实上，没有我不能黑的V',
      transmitContentImg:'/assets/images/v.jpg',
      transmitNumber:'3',
      commentNumber:'15',
      supportNumber:'630',    
    },
    {
      id:'1',
      userImg:'/assets/images/tx5.jpeg',
      userName:'欧几吧壳',
      detTime:'2天前',
      detContent:'大五人格测的信效度还是比较高的，但缺乏心理测量与人格心理学基础的大众，解读大五人格可能会有偏差，建议大家读读心理学家兰迪·拉森的关于性格的著作，深入浅出。国内关于大五人格的专著，还没见到值得推荐给大家的。',
      detImg:'/assets/images/rg.jpg'
    }
  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //   这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    //  var that = this;
    //  wx.getSystemInfo({
    //    success: function(res) {
    //      that.setData({
    //        scrollHeight:res.windowHeight
    //      });
    //    }
    //  });
    //  loadMore(that); 
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
  scroll: function(e){
    if (e.detail.scrollTop > 200) {
      this.setData({
        display: true
      })
    } else {
      this.setData({
        display: false
      })
    }

  }
})