// pages/nearbyMerchants/nearbyMerchants.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    salaryList: ["所有行业", "教育培训", "娱乐休闲", "运动健身", "餐馆酒店", "超市百货",  "酒店宾馆", "美容美发", "珠宝饰品", "其他"],
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
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
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 300
      })
      if(this.data.currentTab>7){
        this.setData({
          scrollLeft: 600
        })
      }
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  jumpNear(){
 wx.navigateTo({
   url: '/pages/nearbyMerchants/merchantsDetails/merchantsDetails',
 })
  }
})