//index.js
//获取应用实例
const app = getApp();
var url = "";  
var page = 1;  
  
var GetList = function (that) {  
    that.setData({  
        hidden: false  
    });  
    wx.request({  
        url: url,  
        data: {  
            pageSize: 10,  
            pageNo: page  
        },  
        success: function (res) {  
            var list = that.data.articles  
            for (var i = 0; i < res.data.length; i++) {  
                list.push(res.data[i])  
            }  
            that.setData({  
                articles:1 
            });  
            page++;  
            that.setData({  
                hidden: true  
            });  
        }  
    });  
}  
Page({
  data: {
    hidden: true,  
    scrollTop: 0,  
    scrollHeight: 0,
    allPages: '',    // 总页数
    currentPage: 1,  // 当前页数  默认是1
    loadMoreData: '加载更多……',
    hideBottom: true,
    articles: [{
      id: '0',
      title: '一个脑洞.炸鸡在多大程度上比黄瓜热量高？',
      desc: 'KellyWeaver：你可能知道炸鸡比黄瓜热量高，但你可能不知道这是一种多么令人瑟瑟发抖的...',
      descImage: '/assets/images/zj.png',
      status: {
        user: 'tony',
        time: '2小时',
        text: '赞了文章',
        avatarUrl: '/assets/icons/icon-message.png'
      }
    }, {
      id: '1',
      title: 'Cpa+四大工作经验，但只是较好的211财经院校本科生，有可能去投行吗？',
      desc: '朱英楠David：谢邀。“不希望拿健康换钱”的话，建议不要考虑投行了。在四大都认为lifestyle...',
      descImage: '/assets/images/cpa.png',
      status: {
        user: '超级简历WonderCV',
        time: '2小时',
        text: '赞同了回答',
        avatarUrl: '/assets/icons/icon-message.png'
      }
    }, {
      id: '2',
      title: '知乎关于清理违法有害信息的公告',
      desc: '知乎小管家：为进一步落实网站管理主体责任，根据《网络安全法》、《知乎协议》和《知乎..',
      descImage: '/assets/images/zh.png',
      status: {
        user: '小红拖拉机',
        time: '4天前',
        text: '赞了文章',
        avatarUrl: '/assets/icons/icon-message.png'
      
      }
    }, {
      id: '3',
      title: '面试的时候，如何自我介绍？',
      desc: '问题描述：就是自我介绍的时候，应该先说些什么？中间怎么说？最后怎么结尾？主要说哪些内容比较好？而且在纸质的个人简历之中也有“自我...',
      avatarUrl: '',
      status: {
        user: '小红拖拉机',
        time: '5天前',
        text: '关注了问题'
      }
    }, {
      id: '4',
      title: '复仇者联盟3钢铁侠',
      desc: '我也不知道写什么，',
      avatarUrl: '/assets/icons/icon-search.png',
      status: {
        user: 'tony',
        time: '2小时',
        text: '赞了文章'
      }
    }],
    recommonds: [{
      id: '0',
      topImage:'/assets/images/gt.jpg',
      title: '如何从尬聊到亲密沟通？',
      desc: '遇到比自己思想、能力高的人该怎样聊天？日常交际中要如何制造愉快气氛？这场Live将从以上问题入手，教你如何提高谈资。',
      descImage: ''
    }, {
      id: '1',
      title: '知乎关于清理违法有害信息的公告',
      desc: '知乎小管家：为进一步落实网站管理主体责任，根据《网络安全法》、《知乎协议》和《知乎..',
      descImage: '/assets/images/zh.png',
    }, {
      id: '2',
      title: '面试的时候，如何自我介绍？',
      desc: '问题描述：就是自我介绍的时候，应该先说些什么？中间怎么说？最后怎么结尾？主要说哪些内容比较好？而且在纸质的个人简历之中也有“自我...',
      descImage: '',
    }],
    hotList:[{
      id:'0',
      rank:'01',
      title:'了不起的新时代：世界竞争中的中国奇迹',
      status:'置顶',
      titleImage:'/assets/icons/icon-search.png'
    },{
      id:'1',
      rank:'02',
      title:'知乎关于清理违法有害信息的公告',
      status:'置顶',
      titleImage:'/assets/icons/icon-search.png'
    },{
      id:'2',
      rank:'03',
      title:'如何评价 NBA 17-18 赛季西决 G7 勇士 101:92击败火箭，连续第四年晋级总决赛？',
      status:'1687万热度',
      titleImage:'/assets/icons/icon-search.png'
    }],
    lineStyle: "left: 0rpx;",
    currentIndex: 0,
  },

  // handleSwitchTab (e) {
  //   let 
  // }
  
  navSearch: function(){
    wx.navigateTo({
      url:'../search/search'
    })
  },
  switchTab (e) {
    let index = parseInt(e.target.dataset.index)
    this.setData({
      currentIndex: index
    })
  },
  handleChangeTab (e) {
    const p = 33.3
    this.setData({
      lineStyle: `left: ${p * e.detail.current}%`
    })
  },
  onload: function(){
    var that = this;  
    wx.getSystemInfo({  
        success: function (res) {  
            console.info(res.windowHeight);  
            that.setData({  
                scrollHeight: res.windowHeight  
            });  
        }  
    });  
  },
  onshow: function(){
    var that = this;  
    GetList(that);
  },
  scroll: function(event){
    this.setData({
      scrollTop: event.detail.scrollTop
    })
  },
  bindDownLoad: function(){
    var that = this;
    //当前页是最后一页
    if (that.data.currentPage == that.data.allPages){
      that.setData({
        loadMoreData: '已经到顶'
      })
      return;
    }
    setTimeout(function(){
      console.log('上拉加载更多');
      var currentPage = that.data.currentPage;
      currentPage = currentPage + 1;
      that.setData({
        currentPage: currentPage,
        hideBottom: false  
      })
      that.getPage();  
    },300);
    // GetList(that);
  },
  refresh: function(event){
    page = 1;  
    this.setData({  
      articles: [{
        id: '4',
      title: '复仇者联盟3钢铁侠',
      desc: '我也不知道写什么，',
      avatarUrl: '/assets/icons/icon-search.png',
      status: {
        user: 'tony',
        time: '2小时',
        text: '赞了文章'
      }
    },{
        id: '2',
        title: '知乎关于清理违法有害信息的公告',
        desc: '知乎小管家：为进一步落实网站管理主体责任，根据《网络安全法》、《知乎协议》和《知乎..',
        descImage: '/assets/images/zh.png',
        status: {
        user: '小红拖拉机',
        time: '4天前',
        text: '赞了文章',
        avatarUrl: '/assets/icons/icon-message.png'
      }
      }],  
      scrollTop: 0,
      hidden:true  
    });  
    // GetList(this) 
  },
  onPullDownRefresh: function () {  
    console.log("下拉")  
  },  
  onReachBottom: function () {  
    console.log("上拉");  
  },
  // 获取数据  pageIndex：页码参数
  getPage: function(){
    var that = this;
    var pageIndex = that.data.currentPage;
    wx.request({
      url: '',
      data: {
        page: pageIndex
      },
      success: function(res){
        if(pageIndex != 1){ // 加载更多
          console.log('加载更多');
          var tempArray = that.data.articles;
          tempArray = tempArray.concat(that.data.articles);
          that.setData({
            allPages: that.data.allPages,
            articles: tempArray,
            hideBottom: true
          })
        }
      }
    })
  },
})

