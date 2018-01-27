// pages/my/securitySetting/securitySetting.js
import { $wuxToast } from '../../../../components/wux'
var util = require('../../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus: true,//控制input 聚焦
    isFocusConfirm:false,
    operation:false,
    security:true,
    setSuccess:true,
    slect:1,
    realName:''
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
  set_Focus(e) {//聚焦input
  console.log(e)
    console.log('isFocus', this.data.isFocus)
    if(e.currentTarget.id=="setting"){
      this.setData({
        isFocus: true,
        isFocusConfirm: false,
      
      })
    } else if (e.currentTarget.id == "confirm"){
         this.setData({
           isFocusConfirm: true,
           isFocus:false
         })
    }
  
  },
  set_wallets_password(e) {//获取钱包密码
    console.log(e.detail.value)
    this.setData({
      wallets_password: e.detail.value
    });
 if (this.data.wallets_password.length == 6) {//密码长度6位时，自动验证钱包支付结果
    //   wallet_pay(this)
   this.setData({
     isFocusConfirm: true,
       isFocus: false
   })
     }
  },
  set_confirm_password(e){
    var that = this
    console.log(e.detail.value)
    that.setData({
      confirm_password: e.detail.value
    });
  
    if (that.data.wallets_password.length == 6 && that.data.confirm_password.length == 6) {
      wx.showLoading({
        title: '请等待',
      })
      if (that.data.wallets_password == that.data.confirm_password){
        wx.hideLoading()
        $wuxToast.show({
          type: 'success',
          timer: 1500,
          color: '#fff',
          text: '密码设置成功',
          success: () => console.log('已完成')
        })
        that.setData({
          operation: true,
          security:false,
          setSuccess: true,
          slect:2
        })
        
      }else{
        wx.hideLoading()
        $wuxToast.show({
          type: 'cancel',
          timer: 1500,
          color: '#fff',
          text: '两次密码不正确',
          success: () => console.log('取消操作')
        })
      }

    } 


  },
  // 真实姓名
  bindinputRealName(e){

    var that =this;
    that.setData({
      realName: e.detail.value
    })
  },
  // 身份证
  bindinputIdCard(e){
    var that = this;
    var idCard = e.detail.value;
    console.log(idCard)
     util.isIdCard(idCard)
     if (idCard.length==18){
       if (util.isIdCard(idCard)){
         console.log(that.data.realName != '')
         if (that.data.realName!=''){
           $wuxToast.show({
             type: 'success',
             timer: 1500,
             color: '#fff',
             text: '设置成功',
             success: () => console.log('已完成')
           })
           that.setData({
             operation: true,
             security: true,
             setSuccess: false,

             slect: 3
           })
         }
       }else{
         $wuxToast.show({
           type: 'cancel',
           timer: 1500,
           color: '#fff',
           text: '身份证格式不正确',
           success: () => console.log('取消操作')
         })
       }
     }
     
  }
  ,backMyWallet(){

    wx.navigateBack({
      delta: 1
    })
  }
})