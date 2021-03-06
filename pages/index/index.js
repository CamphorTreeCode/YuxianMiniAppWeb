//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
     movies: [
       { url: '/img/banner--1.jpg' },
       { url: '/img/banner--2.jpg' },
       { url: '/img/banner--1.jpg' },
      { url: '/img/banner--2.jpg' }
    ]    
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  microtask:function(){
    console.log(123)
    wx.navigateTo({
      url: '/pages/index/wre/wre'
    })
  },
  storeRecruit:function(){
    wx.navigateTo({
      url: '/pages/index/storeRecruit/storeRecruit'
    })
  },
  daySettlement:function(){
    wx.navigateTo({
      url: '/pages/index/DaySettlement/Settlement'
    })
  },
  longTimeTaskHand:function(){
    
    wx.navigateTo({
      url: '/pages/index/LongTimeTaskHand/LongTimeTaskHand'
    })
  },
  fragmentTime:function(){
    wx.navigateTo({
      url: '/pages/index/fragmentTime/fragmentTime'
    })
  },
  campusInternship: function () {
    wx.navigateTo({
      url:'/pages/index/campusInternship/campusInternship'
    })
  },
  //pages/index/index 
   findInternship:function(){
     
     wx.navigateTo({
       url: '/pages/index/FindInternship/FindInternship'
     })
   }
})
