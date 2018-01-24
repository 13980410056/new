
// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../img/1.jpg',
      '../../img/2.jpg'
    ],
    n:1,
    listmore:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var foot = [];
    var foot2 = [];
    var foot3 = [];
    wx.request({
      url: 'https://way.jd.com/jisuapi/byclass',
      data: {
        appkey: 'b46fb954a0d91566ad4615c65a04c550',
        classid: '224',
        start: '5',
        num: 4
      },
      success: function (res) {
        for (var i in res.data.result.result.list){
          foot.push({
            id: res.data.result.result.list[i].id,
            img: res.data.result.result.list[i].pic,
            name: res.data.result.result.list[i].name,
            num: Math.round(Math.random()*990)
          })
        }
        that.setData({
          footlist: foot
        })
      }
    });
    wx.request({
      url: 'https://way.jd.com/jisuapi/byclass',
      data: {
        appkey: 'b46fb954a0d91566ad4615c65a04c550',
        classid: '225',
        start: '5',
        num: 4
      },
      success: function (res) {
        for (var i in res.data.result.result.list) {
          foot2.push({
            id: res.data.result.result.list[i].id,
            img: res.data.result.result.list[i].pic,
            name: res.data.result.result.list[i].name,
            num: Math.round(Math.random() * 990)
          })
        }
        that.setData({
          footlist2: foot2
        })
      }
    });
    wx.request({
      url: 'https://way.jd.com/jisuapi/byclass',
      data: {
        appkey: 'b46fb954a0d91566ad4615c65a04c550',
        classid: '226',
        start: '5',
        num: 4
      },
      success: function (res) {
        for (var i in res.data.result.result.list) {
          foot3.push({
            id: res.data.result.result.list[i].id,
            img: res.data.result.result.list[i].pic,
            name: res.data.result.result.list[i].name,
            num: Math.round(Math.random() * 990)
          })
        }
        that.setData({
          footlist3: foot3
        })
      }
    });
  },

  /**获取菜品ID 跳转到详情页 */
  details(e){
    wx.navigateTo({
      url: '../details/details?id=' + e.currentTarget.dataset.id
    })
  },

  /**获取搜索框的值*/
  foodName(e){
    this.setData({
      userName: e.detail.value
    })
  },

/*点击搜索 跳转搜索页*/
  search(e){
    wx.navigateTo({
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
    setTimeout(()=>{
      that.data.n++
      wx.request({
        url: 'https://way.jd.com/jisuapi/byclass',
        data: {
          appkey: 'b46fb954a0d91566ad4615c65a04c550',
          classid: that.data.n,
          start: '0',
          num: 4
        },
        success: function (res) {
          for (var i in res.data.result.result.list) {
            that.data.listmore.push({
              id: res.data.result.result.list[i].id,
              img: res.data.result.result.list[i].pic,
              name: res.data.result.result.list[i].name,
              num: Math.round(Math.random() * 990)
            })
          }
          that.setData({
            more: that.data.listmore
          })
        }
      });
    },500)
  },  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})