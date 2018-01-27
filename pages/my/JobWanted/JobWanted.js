// pages/my/JobWanted/JobWanted.js
var check = require('../../../utils/authorizationCheck.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Moonlighting: [{ name: '调研', value: '调研', checked: false },
    { name: '送餐员', value: '送餐员', checked: false },
    { name: '促销', value: '促销', checked: false },
    { name: '礼仪', value: '礼仪', checked: false },
    { name: '安保', value: '安保', checked: false },
    { name: '销售', value: '销售', checked: false },
    { name: '服务员', value: '服务员', checked: false },
    { name: '临时工', value: '临时工', checked: false },
    { name: '校内', value: '校内', checked: false },
    { name: '设计', value: '设计', checked: false },
    { name: '文员', value: '文员', checked: false },
    { name: '派单', value: '派单', checked: false },
    { name: '模特', value: '模特', checked: false },
    { name: '实习', value: '实习', checked: false },
    { name: '家教', value: '家教', checked: false },
    { name: '演出', value: '演出', checked: false },
    { name: '客服', value: '客服', checked: false },
    { name: '翻译', value: '翻译', checked: false },
    { name: '其他', value: '其他', checked: false },],
  
  freeTime:[{value:'周'},
  {value:'一'},
  {value:'二'},
  {value:'三'},
  {value:'四'},
  { value: '五' },
  { value: '六' },
  { value: '日' },
  { value: '上午' },
  { value: '' ,checked:false},
  { value: '', checked: false },
  { value: '', checked: false},
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '下午' },
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '', checked: false},
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '晚上' },
  { value: '', checked: false },
  { value: '', checked: false },
  { value: '', checked: false},
  { value: '', checked: false},
  { value: '', checked: false },
  { value: '', checked: false},
  { value: '', checked: false },
  ],
  cityNowList: [],
  size:140,
  typeJpb:[{value:'短期兼职',checked:false},
  {value:"长期兼职",checked:false},
  { value: "周末兼职", checked: false },
  { value: "实习", checked: false },
  ],
  timeJpb: [{ value: '工作日', checked: false },
  { value: "周末", checked: false },
  { value: "节假日", checked: false },
  { value: "寒暑假", checked: false },
  ],
  jobTypeSwitch:true,
  timeTypeSwitch:true,
  arrayTime: ['均可', '每周1天', '每周2天', '每周3天', '每周4天', '每周5天', '每周6天'],
  index:0
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    check.getLocationCheck(that)
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
  selectMoonLighting(e){
    var that =this;
    var id = e.currentTarget.id;
    console.log(id);
    var Moonlighting = that.data.Moonlighting;
    if (Moonlighting[id].checked){
      Moonlighting[id].checked=false
      that.setData({
        Moonlighting: Moonlighting
      })
    }else{
      Moonlighting[id].checked = true
      that.setData({
        Moonlighting: Moonlighting
      })
    }

   
  }
  ,
  workingArea(e) {
    var that = this;
    var id = e.currentTarget.id;
    console.log(id);
    var Moonlighting = that.data.cityNowList;
    if (Moonlighting[id].checked) {
      Moonlighting[id].checked = false
      that.setData({
        cityNowList: Moonlighting
      })
    } else {
      Moonlighting[id].checked = true
      that.setData({
        cityNowList: Moonlighting
      })
    }
    console.log(Moonlighting);

  },
   bindinput: function (e) {
    var that = this;
    var len = e.detail.value.length
    console.log(e.detail.value, len);
    that.setData({
      size: 140 - len
    })
  },
   switch1Change(e){
     console.log(e)
     var that = this;
     var selectFalg = e.detail.value
    var typeJpb = that.data.typeJpb
    var timeJpb = that.data.timeJpb
    var targetId = e.target.id 
    if (targetId=="swithch1"){
      if (selectFalg) {
        console.log(e.detail.value)
        for (var i = 0; i < typeJpb.length; i++) {
          console.log(i)
          typeJpb[i].checked = false;
        }
        that.setData({

          typeJpb: typeJpb
        })
      }
    }
    else if (targetId == "swithch2"){
      if (selectFalg) {
        console.log(e.detail.value)
        for (var i = 0; i < timeJpb.length; i++) {
          console.log(i)
          timeJpb[i].checked = false;
        }
        that.setData({

          timeJpb: timeJpb
        })
      }
    }


   
     },
   checkJobType(e){

     var that = this;
     var typeJpb = that.data.typeJpb
     var typeJobId = e.currentTarget.id;
  
     if (typeJpb[typeJobId].checked){
     
       typeJpb[typeJobId].checked = false;
       console.log("没有",typeJobId, typeJpb[typeJobId].checked)
       that.setData({
         jobTypeSwitch: false,
         typeJpb: typeJpb
       })
     }else{
       typeJpb[typeJobId].checked = true;
       console.log("有",typeJobId, typeJpb[typeJobId].checked)
       that.setData({
         jobTypeSwitch: false,
         typeJpb: typeJpb
       })
     }
   
   },
  
  // 期望时间
  checkTimeType(e){

    var that = this;
    var typeJpb = that.data.timeJpb
    var typeJobId = e.currentTarget.id;

    if (typeJpb[typeJobId].checked) {

      typeJpb[typeJobId].checked = false;
      console.log("没有", typeJobId, typeJpb[typeJobId].checked)
      that.setData({
        timeTypeSwitch: false,
        timeJpb: typeJpb
      })
    } else {
      typeJpb[typeJobId].checked = true;
      console.log("有", typeJobId, typeJpb[typeJobId].checked)
      that.setData({
        timeTypeSwitch: false,
        timeJpb: typeJpb
      })
    }
  }
  ,
  // 空闲时间
  selectFreeTime(e){
   console.log("第一次进来",e)
   var that = this;
   var id = e.currentTarget.id;
   console.log(id);
   var freeTime = that.data.freeTime;
   if (freeTime[id].checked) {
     freeTime[id].checked = false
     that.setData({
       freeTime: freeTime
     })
   } else {
     freeTime[id].checked = true
     that.setData({
       freeTime: freeTime
     })
   }
   console.log(freeTime);
  },
  // 
   bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})