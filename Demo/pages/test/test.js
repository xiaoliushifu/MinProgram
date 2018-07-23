//index.js
//获取应用实例,app就是小程序对象
const app = getApp()
//console.log(ty peof app);
//注册页面就调用Page函数，传递一个Object对象
Page({
  data: {
    motto: 'test页面',
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
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面生命周期里的几个函数
  onLoad: function () {
    console.log('onLoad了');
  },
  onReady:function(){
    console.log('onReady了');
  },
  onShow:function(){
    console.log('onShow了')
  },
  onHide:function(){
    console.log('onHide了')
  },
  onUnload:function(){
    console.log('onUnload了')
  }
  })
