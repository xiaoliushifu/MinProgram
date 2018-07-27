//index.js
//获取应用实例,app就是小程序对象
const app = getApp()
//console.log(ty peof app);
//注册页面就调用Page函数，传递一个Object对象
Page({
  data: {
    id:3306,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
	  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  innerTap:function(e){
    console.log(e,'事件对象')
    console.log('innert 触发了');
  },
  middleTap:function(e){
    console.log(e, '事件对象')
    //事件对象包含了事件触发时及以后的一些信息
    //比如触发源是哪个对象？当前的坐标，时间戳，currentTarget等
    //屏幕宽度等
    console.log('middle触发了')
  },
  outterTap:function(){
    console.log('outter 触发了')
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
