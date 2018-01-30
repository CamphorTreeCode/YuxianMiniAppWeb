// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  walletSelt:function(){
    wx.navigateTo({
      url: '/pages/my/myWallet/myWallet'
    })
  },
  followSelt:function(){
    wx.navigateTo({
      url: '/pages/my/alreadyFollowBusiness/alreadyFollowBusiness'
    })
  },
  myApply: function () {
    wx.navigateTo({
      url: '/pages/my/myApply/myApply'
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: '/pages/my/Feedback/Feedback'
    })
  },
  collection(){
    
    wx.navigateTo({
      url: '/pages/my/myCollection/myCollection'
    })
  },
  myResume(){
    wx.navigateTo({
      url: '/pages/my/myResume/myResume'
    })
  },
  
registered(){
    wx.navigateTo({
      url: '/pages/my/myApplyType/myApplyType?currentTab=0'
    })
  }, 
Employment(){
  wx.navigateTo({
    url: '/pages/my/myApplyType/myApplyType?currentTab=1'
  })
},
  Posts(){
    wx.navigateTo({
      url: '/pages/my/myApplyType/myApplyType?currentTab=2'
    }) 
  },
  Settlement(){
    wx.navigateTo({
      url: '/pages/my/myApplyType/myApplyType?currentTab=3'
    }) 
  },
  myData(){
    
    wx.navigateTo({
      url: '/pages/my/personData/personData'
    }) 
  },



   certification(){
     wx.navigateTo({
       url: '/pages/my/certification/certification'
     }) 
   } ,
   jobset(){
     wx.navigateTo({
       url: '/pages/my/JobWanted/JobWanted'
     }) 
   }
})