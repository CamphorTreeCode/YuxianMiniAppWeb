// pages/index/FindInternship/FindInternship.js
var app = getApp();
var check = require('../../../utils/authorizationCheck.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: app.globalData.winWidth,
    winHeight: app.globalData.winHeight,
    TypeList: ["软件", "客服", "行政", "运营", "翻译", "销售", "人力", "导购", "传单", "礼仪", "仓管", "物流", "仓管", "模特", "音乐", "咨询", "美术", "设计", "培训", "教育", "法律","助理", "其他"],
    salaryList: ["1000-2000", "2000-3000", "3000-4000", "4000以上"],
    // cityright: this.data.citycenter[e.currentTarget.dataset.city]
    // aLLCity: cityData.getCity(),
    cityNowList: [],
    allType: "全部岗位",
    location: "位置",
    salary: "月薪(元)",
    selectAllTypeIndex: -1,
    selectNowLocationIndex: -1,
    selectSalaryIndex: -1,
    hidden1: true,
    /**全部岗位不显示 不下拉动画  start*/
    alltypeFlag: false,
    AlltypeShow: true,
    /**全部岗位显示 下拉动画  end*/
    /**位置不显示 不下拉动画  start*/
    nowLocationFlag: false,
    nowLocationShow: true,
    /**位置不显示 不下拉动画 end*/
    /**月薪不显示 不下拉动画  start*/
    salaryFlag: false,
    salaryshow: true,
    /**月薪不显示 不下拉动画  end*/
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("storeRecruit.js start ")
    var that = this;
    check.getLocationCheck(that)
    // check.getLocationCheck(that).then(function (res) {
    //   console.log("dd", res)
    // })

    console.log(":", that.data.cityNowList)
    console.log("storeRecruit.js end ")
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
  //点击全部职位
  allType: function (e) {
    console.log(e);
    var that = this;
    if (that.data.alltypeFlag) {
      that.setData({
        shownavindex: 0,
        /**再次点击全部岗位不显示 上拉动画  start*/
        alltypeFlag: false,
        AlltypeShow: false,
        /**再次点击全部岗位不显示 上拉动画  end*/
        /**位置不显示 不下拉动画  start*/
        nowLocationFlag: false,
        nowLocationShow: true,
        /**位置不显示 不下拉动画  end*/
        /**月薪不显示 上拉动画  start*/
        salaryFlag: false,
        salaryshow: true,
        /**月薪不显示 上拉动画  end*/
        hidden1: true,
      })
    }
    else {
      that.setData({
        shownavindex: e.currentTarget.dataset.nav,
        /**点击全部岗位显示 下拉动画  start*/
        alltypeFlag: true,
        AlltypeShow: false,
        /**点击全部岗位显示 下拉动画  end*/
        /**位置不显示 不下拉动画  start*/
        nowLocationFlag: false,
        nowLocationShow: true,
        /**位置不显示 不下拉动画  end*/
        /**月薪不显示 上拉动画  start*/
        salaryFlag: false,
        salaryshow: true,
        /**月薪不显示 上拉动画  end*/
        hidden1: false,

      })
    }
  },
  //点击选择位置
  cityNow: function (e) {
    console.log(e);
    var that = this;
    if (that.data.nowLocationFlag) {
      that.setData({
        shownavindex: 0,
        /**位置不显示 上拉动画  start*/
        nowLocationFlag: false,
        nowLocationShow: false,
        /**位置不显示 上拉动画  end*/
        /**全部职位不显示 上拉动画  start*/
        alltypeFlag: false,
        AlltypeShow: true,
        /**全部职位不显示 上拉动画  end*/
        /**月薪不显示 上拉动画  start*/
        salaryFlag: false,
        salaryshow: true,
        /**月薪不显示 上拉动画  end*/
        hidden1: true,
      })
    }
    else {
      that.setData({
        shownavindex: e.currentTarget.dataset.nav,
        /**位置显示 下拉动画  start*/
        nowLocationFlag: true,
        nowLocationShow: false,
        /**位置显示 下拉动画  start*/
        /**全部职位不显示 上拉动画  start*/
        alltypeFlag: false,
        AlltypeShow: true,
        /**全部职位不显示 上拉动画  end*/
        /**月薪不显示 上拉动画  start*/
        salaryFlag: false,
        salaryshow: true,
        /**月薪不显示 上拉动画  end*/
        hidden1: false,

      })
    }
  },
  //点击选择月薪
  salary: function (e) {
    console.log(e);
    var that = this;
    if (that.data.salaryFlag) {
      that.setData({
        shownavindex: 0,
        /**月薪不显示 上拉动画  start*/
        salaryFlag: false,
        salaryshow: false,
        /**月薪不显示 上拉动画  end*/
        /**位置不显示 上拉动画  start*/
        nowLocationFlag: false,
        nowLocationShow: true,
        /**位置不显示 上拉动画  end*/
        /**全部职位不显示 上拉动画  start*/
        alltypeFlag: false,
        AlltypeShow: true,
        /**全部职位不显示 上拉动画  end*/
        hidden1: true,
      })
    }
    else {
      that.setData({
        shownavindex: e.currentTarget.dataset.nav,
        /**位置显示 下拉动画  start*/
        salaryFlag: true,
        salaryshow: false,
        /**位置显示 下拉动画  end*/
        /**位置显示 上拉动画  start*/
        nowLocationFlag: false,
        nowLocationShow: true,
        /**位置显示 上拉动画  end*/
        /**全部职位不显示 上拉动画  start*/
        alltypeFlag: false,
        AlltypeShow: true,
        /**全部职位不显示 上拉动画  end*/
        hidden1: false,

      })
    }
  },
  mask1: function () {
    var that = this;
    that.setData({
      // showtypeFlag: false,
      alltypeFlag: false,
      //newtaskShow: false,
      nowLocationFlag: false,
      salaryFlag: false,
      hidden1: true,
    })

  },
  /**选择全部 */
  selectAllType: function (e) {
    var that = this;
    console.log(e)
    var task = e.currentTarget.dataset.task;

    console.log(task);
    that.setData({
      selectAllTypeIndex: task,
      alltypeFlag: false,
      alltypeshow: false,
      hidden1: true,
      allType: e.currentTarget.dataset.name
    })

  },
  /**选择位置 */
  locationNow: function (e) {
    var that = this;
    console.log(e)
    var task = e.currentTarget.dataset.task;

    console.log(task);
    that.setData({
      selectNowLocationIndex: task,
      nowLocationFlag: false,
      nowLocationShow: false,
      hidden1: true,
      location: e.currentTarget.dataset.name
    })
  },
  // 月薪选择
  selectSalary: function (e) {
    var that = this;
    console.log(e)
    var task = e.currentTarget.dataset.task;

    console.log(task);
    that.setData({
      selectSalaryIndex: task,
      salaryFlag: false,
      salaryshow: false,
      hidden1: true,
      salary: e.currentTarget.dataset.name
    })
  },
})