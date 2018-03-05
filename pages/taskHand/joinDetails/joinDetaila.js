// pages/taskHand/joinDetails/joinDetaila.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    joinSelectShow: true,
    joinArr: [
      [
        { name: 'gender', value: '男', checked: false },
        { name: 'gender', value: '女', checked: false }],
      [
        { name: 'age', value: '18-25', checked: false },
        { name: 'age', value: '25-30', checked: false },
        { name: 'age', value: '30以上', checked: false }],
      [
        { name: 'experience', value: '1年经验', checked: false },
        { name: 'experience', value: '1年及以上', checked: false },
        { name: 'experience', value: '无工作经验', checked: false }],

      [
        { name: 'language', value: '普通话+当地语言', checked: false },
        { name: 'language', value: '普通话+英文', checked: false },
        { name: 'language', value: '普通话', checked: false }]
    ],
    printArr: [],
    //最后选择发送
    sendArr: [],
    //单个选择点亮
    strShow: -1,
    //单选的节点
    targetId: -1

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
  clickJoin(e) {
    console.log(e, e.currentTarget.id)
    var that = this;
    var targetId = e.currentTarget.id
    var joinArr = that.data.joinArr
    if (targetId == 'select1') {
      console.log("111")
      that.setData({
        printArr: joinArr[0],
        joinSelectShow: false,
        targetId: 0

      })
    } else if (targetId == 'select2') {
      that.setData({
        printArr: joinArr[1],
        joinSelectShow: false,
        targetId: 1
      })
    }
    else if (targetId == 'select3') {

      that.setData({
        printArr: joinArr[2],
        joinSelectShow: false,
        targetId: 2
      })
    } else {
      that.setData({
        printArr: joinArr[3],
        joinSelectShow: false,
        targetId: 3
      })
    }
  },
  //点击
  filterZp() {
    var that = this;
    this.setData({

      joinSelectShow: true,
      strShow: -1
    })
  }
  //点击
  , selectItem(e) {
    console.log(e)
    var that = this;
    var value = e.target.dataset.value
    var strShow = that.data.strShow;

    console.log(value)
    this.setData({
      strShow: value
      
    })
  },
  //点击确定
  JoinCommit() {
    var that = this;
    var strShow = that.data.strShow;
    if (strShow == -1) return
    var joinArr = that.data.joinArr;
    var targetId = that.data.targetId
    for (var i = 0; i < joinArr[targetId].length; i++) {
      if (joinArr[targetId][i].checked == true) {
        joinArr[targetId][i].checked = false;
      }

    }
    joinArr[targetId][strShow].checked = true;
      
    if (targetId==0){
      that.setData({
      info1: strShow
      })
    } else if (targetId == 1){
      that.setData({
        info2: strShow
      })
    } else if (targetId == 2){
      that.setData({
        info3: strShow
      })
    }else{
      that.setData({
        info4: strShow
      })
    }
    that.setData({
      joinArr: joinArr,
       
      strShow: -1,
      joinSelectShow: true
    })
    console.log(joinArr)
  }
})