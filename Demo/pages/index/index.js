//index.js
//获取应用实例
const app = getApp()
//console.log(ty peof app);

Page({
  data: {
    motto: '刘师傅测试小程序2',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
	//立即执行的函数，获取当前时间的字符串
	currentTime:function(){
		var now = new Date();
		var y = now.getFullYear();
		var m = now.getMonth()+1;
		var d = now.getDate();
		var h = now.getHours();
		var i = now.getMinutes();
		var s = now.getSeconds();
		return y+"-"+m+"-"+d+" "+h+":"+i+":"+s
		}()
  },
  //事件处理函数
  bindViewTap: function() {
    //注意，这就是路由的使用
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //编写手机上的点击也就是tap事件响应函数
  changeContent:function(){
  this.setData({
    motto:'我就是刘师傅'
  });
 },
  //onload事件触发
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },//onload事件结束

  //这个呢？
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
