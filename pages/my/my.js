// pages/my/my.js
//var WXBizDataCrypt = require('../../utils/RdWXBizDataCrypt')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    avatarUrl:'',
    gender:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        // test测试解压
        var appId = 'wx7264118368e9a2b4'     
        var encryptedData = res.encryptedData
        var iv = res.iv
     
        // wx.login({
        //   success: function (res) {
        //     console.log(res)
        //     if (res.code) {
        //       //发起网络请求
        //       wx.request({
        //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx7264118368e9a2b4&secret=d3f6d343efcf266eb15a01e578d4f45d&js_code=' + res.code + '&grant_type=authorization_code',
        //         success: function (res) {
        //           console.log(res)
        //           var sessionKey = res.data.session_key
        //           var pc = new WXBizDataCrypt(appId, sessionKey)
        //           var data = pc.decryptData(encryptedData, iv)
        //           console.log('解密后 data: ', data)
        //         }

        //       })
        //     } else {
        //       console.log('获取用户登录态失败！' + res.errMsg)
        //     }
        //   }
        // });
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        avatarUrl = avatarUrl.replace('https', 'http');
      that.setData({
        nickName: nickName,
        avatarUrl: avatarUrl,
        gender:gender
      })
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