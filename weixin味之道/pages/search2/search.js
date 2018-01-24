// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../img/1.jpg',
      '../../img/2.jpg'
    ],
    n:8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    var that = this;
    var list = [];
    wx.request({
      url: 'https://way.jd.com/jisuapi/byclass',
      data: {
        appkey: 'b46fb954a0d91566ad4615c65a04c550',
        classid: options.id,
        start:0,
        num:8
      },
      success: function (res) {
        console.log(res.data)
        for (var i in res.data.result.result.list) {
          list.push({
            id: res.data.result.result.list[i].id,
            name: res.data.result.result.list[i].name,
            pic: res.data.result.result.list[i].pic,
            num: Math.round(Math.random() * 990)
          })
        }
        that.setData({
          more:list,
          id: options.id
        })

      }
    });
  },
  /**获取菜品ID 跳转到详情页 */
  details(e) {
    wx.navigateTo({
      url: '../details/details?id=' + e.currentTarget.dataset.id
    })
  },
  /**获取搜索框的值*/
  foodName(e) {
    this.setData({
      userName: e.detail.value
    })
  },

  /*点击搜索 跳转搜索页*/
  search() {
    wx.redirectTo({
      url: '../search/search?keyword=' + this.data.userName
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
    var that = this;
    var list = [];
    setTimeout(() => {
      that.data.n = that.data.n + 4
      wx.request({
        url: 'https://way.jd.com/jisuapi/byclass',
        data: {
          appkey: 'b46fb954a0d91566ad4615c65a04c550',
          classid: that.data.id,
          start: 0,
          num: that.data.n
        },
        success: function (res) {
          for (var i in res.data.result.result.list) {
            list.push({
              id: res.data.result.result.list[i].id,
              name: res.data.result.result.list[i].name,
              pic: res.data.result.result.list[i].pic,
              num: Math.round(Math.random() * 990)
            })
          }
     
          that.setData({
            more: list,
            isHideLoadMore: true
          })
        }
      });
    }, 500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})