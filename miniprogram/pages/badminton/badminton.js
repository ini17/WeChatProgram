// miniprogram/pages/page1/page1.js
const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFavorite: "false",
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

  scrollTouchstart: function(e){
    let py = e.touches[0].pageY;
    this.setData({
      starty: py
    })
  },

  scrollTouchmove: function(e){
    let py = e.touches[0].pageY;
    let d = this.data;
    this.setData({
      endy: py
    })
    if (py - d.starty < 50 && py - d.starty > -50){
      this.setData({
        margintop: py - d.starty
      })
    }
  },

  scrollTouchend: function(e){
    this.setData({
      starty: 0,
      endy: 0,
      margintop: 0
    })
  },
  sign:function(){
    wx.navigateTo({
      url: '../sign/sign',
    })
  },
  data: {
    isFavorite: "false",
  },
collect_fun:function(){
  var that = this;
      var isFavorite = that.data.isFavorite;
      //收藏
      if (isFavorite == 'false') {
        var roomId = that.data.roomId;
          that.setData({
            isFavorite:'true'
          })
          wx.showToast({
            title: '收藏成功',
            icon: 'none'
          })
      } 
      //取消收藏
      else if(isFavorite == 'true') {
        var roomId = that.data.roomId;
          that.setData({
            isFavorite: 'false'
          })
          wx.showToast({
            title: '取消成功',
            icon: 'none'
          })
      }
},

})


