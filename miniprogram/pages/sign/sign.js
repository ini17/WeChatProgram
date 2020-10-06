// pages/sign/sign.js
// pages/personal.js
Page({
  formSubmit:function(e){
    var userInfo = wx.getStorageSync('userinfo')
    var uname = userInfo.nickName
    console.log(uname)
    console.log(e.detail.value)
    if (e.detail.value.realname.length == 0){
      wx.showToast({
        title: '姓名不能为空！',
        icon: 'none',
        duration:1500
      })
      setTimeout(function(){
        wx.hideToast()
      },2000)
    }
    else if (e.detail.value.sid.length == 0){
      wx.showToast({
        title: '学号不能为空！',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.major.length == 0){
      wx.showToast({
        title: '专业不能为空！',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.dept.length == 0) {
      wx.showToast({
        title: '系别不能为空！',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.tel.length == 0 || e.detail.value.tel.length > 11 || e.detail.value.tel.length < 11) {
      wx.showToast({
        title: '手机号码为空或格式错误！',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else if (e.detail.value.dor.length == 0) {
      wx.showToast({
        title: '宿舍号不能为空！',
        icon: 'none',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    var that = this
    var userInfo = wx.getStorageSync('userinfo')
    var uname = userInfo.nickName
    var msg={}
   
  },
})
