// pages/wre/wre.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeFlag:false,
    newTaskFlag:false,
    shownavindex:0,
    taskList: ['全部分类', '调查', '关注', "分享", "下载", "其他"],
    showtypeFlag:true,
     newtaskList: ['高薪任务', '最新任务', '热门任务'],
     newtaskShow:true,
     selectIndex:0,
     hidden1:true,
     newtaskStr:"最新任务",
     alltypeStr:"全部分类",
     selectAllIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    console.log(app.globalData.winHeight)
    that.setData({
      winWidth: app.globalData.winWidth,
      winHeight: app.globalData.winHeight
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
  Type:function(e){
    console.log(e);
    var that = this;
    if (that.data.typeFlag){
      that.setData({
        shownavindex:0,
        typeFlag: false,
        showtypeFlag: false,
            newtaskShow: true,
            newTaskFlag:false,
             hidden1: true,
      })
    }
    else{
      that.setData({
        shownavindex: e.currentTarget.dataset.nav,
        typeFlag: true,
        showtypeFlag: false,
        newtaskShow: true,
        newTaskFlag:false,
        hidden1: false,

      })
    }

   
   
    
  },
  newTask: function (e) {
    console.log(e);
    var that = this;
    if (that.data.newTaskFlag) {
      that.setData({
        typeFlag: false,
        shownavindex: 0,
        newTaskFlag: false,
        showtypeFlag: true,
        newtaskShow: false,
        hidden1: true,
    
      })
    }
    else {
      that.setData({
        shownavindex: e.currentTarget.dataset.nav,
        hidden1:false,
        newTaskFlag:true,
        showtypeFlag: true,
        typeFlag: false,
        newtaskShow:false
      })
    }


  },
  // Type: function(e){
  //   console.log(e)
  //   if(this.data.qyopen) {
  //     this.setData({
  //       qyopen: false,
  //       // nzopen: false,
  //       // pxopen: false,
  //       // nzshow: true,
  //       // pxshow: true,
  //       // qyshow: false,
  //       // isfull: false,
  //       shownavindex: 0
  //     })
  //   } else {
  //     this.setData({
  //       qyopen: true,
  //       pxopen: false,
  //       nzopen: false,
  //       nzshow: true,
  //       pxshow: true,
  //       qyshow: false,
  //       isfull: true,
  //       shownavindex: e.currentTarget.dataset.nav
  //     })
  //   }
  //   var type = e.currentTarget.id;
  //   if(type=="allType"){
  //     wx.showActionSheet({
  //       itemList: ['全部分类', '调查', '关注',"分享","下载","其他"],
  //       success: function (res) {
  //         console.log(res.tapIndex)
  //       },
  //       fail: function (res) {
  //         console.log(res.errMsg)
  //       }
  //     })
  //   }
  //   else if (type == "newTask"){
  //   wx.showActionSheet({
  //    
  //     success: function (res) {
  //       console.log(res.tapIndex)
  //     },
  //     fail: function (res) {
  //       console.log(res.errMsg)
  //     }
  //   })
  //   }
  // },
  
  myTask:function(){
    wx.navigateTo({
      url: '/pages/index/wre/myTask/myTask'
    })
  },
  taskDetails: function () {
    wx.navigateTo({
      url: '/pages/taskDetails/taskDetails'
    })
  },
  selectNewTaskList:function(e){
    var that = this;
     console.log(e)
     var task = e.currentTarget.dataset.task;
     
     console.log(task);
     that.setData({
       selectIndex: task,
         newtaskShow: false,
         newTaskFlag: false,
         hidden1: true,
         newtaskStr:e.currentTarget.dataset.name
     })
     
  },
  selectAllTaskList:function(e){
    var that = this;
    console.log(e)
    var task = e.currentTarget.dataset.task;

    console.log(task);
    that.setData({
      selectAllIndex: task,
      showtypeFlag: false,
      typeFlag: false,
      hidden1: true,
      alltypeStr: e.currentTarget.dataset.name
    })
  },
  mask1:function(){
    var that =this;
    that.setData({
     // showtypeFlag: false,
      typeFlag: false,
      //newtaskShow: false,
      newTaskFlag: false,
      hidden1: true,
    })
  
  }
})
