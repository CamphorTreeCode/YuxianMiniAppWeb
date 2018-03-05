// pages/taskHand/taskHand.js
var WxParse = require('../../wxParse/wxParse.js');
var enums = require('../../utils/enums.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

    headImg: [
      "/img/taskDetailsImg/headLogo1.jpg",
      "/img/taskDetailsImg/headLogo2.jpg",
      "/img/taskDetailsImg/headLogo3.jpg",
      "/img/taskDetailsImg/headLogo4.jpg",
      "/img/taskDetailsImg/headLogo5.jpg",

    ],
    // 工作日期
    dayss: [],
    dayarr: [],
    arrSelect: [],
    jobtimeStr: '',
    jobTime: '',
    showTime: true,
    startJobStr: '2018,3,06',
    endJobStr: '2018,4,03',
    //报名的次数
    joninNumber:7,
    //工作日期
    joinWrokTime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '松江万达来伊份店'
    })
    var that = this;
    var article = enums.str();
    WxParse.wxParse('article', 'html', article, that, 5);

    /**添加工作时间 strat**/

    //添加商户的起始日期
    var date = new Date(this.data.startJobStr);
    var cur_year = date.getFullYear();
    var cur_month = date.getMonth() + 1;

    var endDate = new Date(this.data.endJobStr)

    var end_month = endDate.getMonth() + 1
    console.log(cur_year, cur_month, end_month)
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    var dayarr = this.data.dayarr
    var dayss = this.data.dayss
    for (var i = 0; i < Math.abs(end_month - cur_month) + 1; i++) {
      console.log("dayarr", dayarr)


      if (cur_month + i > 12) {
        cur_year = cur_year + 1;
        cur_month = 1;
        this.calculateEmptyGrids(cur_year, cur_month + i);
        this.calculateDays(cur_year, cur_month + i);
      } else {
        this.calculateEmptyGrids(cur_year, cur_month + i);
        this.calculateDays(cur_year, cur_month + i);
      }


    }

    this.setData({


      weeks_ch
    });

    /**添加工作时间 end**/

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
  /**
   * 工作日期开始
   */
  // 计算每月多少天
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  // 计算每月第一天是星期几
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  //计算在每月第一天在当月第一周之前的空余天数
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    console.log(firstDayOfWeek)
    let empytGrids = [];
    var dayarr = this.data.dayarr
    console.log("333", dayarr)
    if (10 > month) {
      month = "0" + month
      dayarr.push({
        cur_year: year,
        cur_month: month
      })
    } else {
      dayarr.push({
        cur_year: year,
        cur_month: month
      })
    }

    if (firstDayOfWeek > 0) {
      // 这里的作用就是先遍历几个空格，没有就不用遍历
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      console.log("empytGrids:" + empytGrids);
      dayarr.push({
        empytGrids: empytGrids,
        hasEmptyGrid: true,

      })

      this.setData({

        dayarr: dayarr
      });
    } else {

      dayarr.push({
        empytGrids: [],
        hasEmptyGrid: false
      })

      this.setData({

        dayarr: dayarr
      });
      console.log(dayarr)
    }
  },
  //渲染日历格子
  calculateDays(year, month) {
    let days = [];
    var dayss = this.data.dayss
    //渲染起始日期
    var data = new Date(this.data.startJobStr);
    //年月日
    var start_year = data.getFullYear();
    var start_month = data.getMonth() + 1;
    var start_Day = data.getDate();
    //渲染结束日期
    var endDate = new Date(this.data.endJobStr)
    var end_year = endDate.getFullYear();
    var end_month = endDate.getMonth() + 1
    var end_Day = endDate.getDate();
    console.log(start_year, start_month, start_Day, end_year, end_month, end_Day)
    console.log(month, "month")
    //渲染获取多少天数
    const thisMonthDays = this.getThisMonthDays(year, month);
    var date = new Date();
    var cur_month = date.getMonth() + 1;
    var day = date.getDate();
    //在本项目中需求没有超过1年的发布工作日期 也不允许这样做
    console.log("今天是多少天", day)
    for (let i = 1; i <= thisMonthDays; i++) {
      //写入标记点 只有判断 从起始到结束  
      if (start_month == month && start_Day <= i) {
        //这是过去几天
        if (month == cur_month && i < day) {
          days.push({
            day: i,
            choosed: false,
            endTime: true,
            daySign: true

          });
        }
        else if (month == cur_month && i == day) {
          var arrs = this.data.arrSelect;
          arrs.push(0)
          arrs.push(day - 1)
          this.setData({
            arrSelect: arrs
          })

          days.push({
            day: i,
            choosed: true,
            daySign: true
          });
        } else {
          days.push({
            day: i,
            choosed: false,
            daySign: true
          });
        }
      } else if (month == end_month && i <= end_Day) {
        //这是过去几天
        if (month == cur_month && i < day) {
          days.push({
            day: i,
            choosed: false,
            endTime: true,
            daySign: true

          });
        }
        else if (month == cur_month && i == day) {
          var arrs = this.data.arrSelect;
          arrs.push(0)
          arrs.push(day - 1)
          this.setData({
            arrSelect: arrs
          })

          days.push({
            day: i,
            choosed: true,
            daySign: true
          });
        } else {
          days.push({
            day: i,
            choosed: false,
            daySign: true
          });
        }
      } else if (start_month < month && month < end_month) {


        //这是过去几天
        if (month == cur_month && i < day) {
          days.push({
            day: i,
            choosed: false,
            endTime: true,
            daySign: true

          });
        }
        else if (month == cur_month && i == day) {
          var arrs = this.data.arrSelect;
          arrs.push(0)
          arrs.push(day - 1)
          this.setData({
            arrSelect: arrs
          })

          days.push({
            day: i,
            choosed: true,
            daySign: true
          });
        } else {
          days.push({
            day: i,
            choosed: false,
            daySign: true
          });
        }
      }
      else {

        //这是过去几天
        if (month == cur_month && i < day) {
          days.push({
            day: i,
            choosed: false,
            endTime: true,


          });
        }
        else if (month == cur_month && i == day) {
          var arrs = this.data.arrSelect;
    
          this.setData({
            arrSelect: arrs
          })

          days.push({
            day: i,
            choosed: true,

          });
        } else {
          days.push({
            day: i,
            choosed: false,

          });
        }
      }




    }
    var daya = this.data.dayarr
    console.log("daya", daya)
    daya.push({
      days: days
    })

    dayss.push(daya)
    console.log("...", dayss)
    this.setData({
      dayss: dayss,
      dayarr: []
    });


  },

  // 点击日历上某一天
  tapDayItem(e) {
    console.log(e)
    var date = new Date();
    //获取今天天数
    var day = date.getDate();
    var now_month = date.getMonth() + 1;
    //这是天的索引
    const idx = e.currentTarget.dataset.idx;
    //这是月的索引
    const tidx = e.currentTarget.dataset.tidx;
    const days = this.data.dayss;
    //月的索引等于0或者今天-1大于天的索引。
    if (tidx == 0 && day - 1 > idx || !days[tidx][2].days[idx].daySign)
      return;
 
 

    console.log(idx, tidx)

    days[tidx][2].days[idx].choosed = !days[tidx][2].days[idx].choosed;

    // 选中两点
    var arrs = this.data.arrSelect;
    arrs.push(tidx)
    arrs.push(idx)
    console.log(arrs)
    // 判断是不是选择两个 然后排序便于计算
    if (arrs.length>3){
      days[arrs[0]][2].days[arrs[1]].choosed = !days[arrs[0]][2].days[arrs[1]].choosed;
      arrs = []
      arrs.push(tidx)
      arrs.push(idx)
}

    console.log(arrs)
    var tian = days[arrs[0]][2].days[arrs[1]].day
    this.setData({
      dayss: days,
      arrSelect: arrs,
      joinWrokTime: days[arrs[0]][0].cur_year + "." + days[arrs[0]][0].cur_month + "." + (tian < 10 ? '0' + tian:tian) +" 开始工作"
    });
  },
  hiddenTime() {
    this.setData({
      showTime: true,

      selectTimeShow: true
    })
  }
  , confirmTime() {
      wx.navigateTo({
        url: '/pages/taskHand/joinDetails/joinDetaila',
      })
  },

  clearAheight(e) {
    this.setData({
      jobTime: '',

    })
  },
  /**
   * 工作日期结束
   */
  taskCommit: function () {
  this.setData({
    showTime: false,
    
  })
  }

})