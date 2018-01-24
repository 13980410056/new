// pages/details/details.js
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
    var that = this;
    var ingredients = [];
    var step = [];
    wx.request({
      url: 'https://way.jd.com/jisuapi/detail',
      data: {
        appkey: 'b46fb954a0d91566ad4615c65a04c550',
        id: options.id,
      },
      success: function (res) {
        for (var i in res.data.result.result.material){
          ingredients.push({
            amount: res.data.result.result.material[i].amount,
            mname: res.data.result.result.material[i].mname
          })
        }
        for (var j = 1; j < res.data.result.result.process.length;j++) {
          step.push({
            id: j,
            pcontent: res.data.result.result.process[j].pcontent,
            pic: res.data.result.result.process[j].pic
          })
        }
        that.setData({
          material: ingredients,
          pic: res.data.result.result.pic,
          name: res.data.result.result.name,
          process: step
        })
     
      }
    });
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
  
  }
})