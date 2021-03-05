// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodities: [{
      img:"../../image/c5.png",
      name:"商品1",
      price:"100.00",
      number:"15"
    },{
      img:"../../image/c6.png",
      name:"商品2",
      price:"99.00",
      number:"30"
    },{
      img:"../../image/c7.png",
      name:"商品3",
      price:"15.00",
      number:"4"
    },{
      img:"../../image/c8.png",
      name:"商品4",
      price:"45.00",
      number:"32"
    },{
      img:"../../image/c9.png",
      name:"商品5",
      price:"33.00",
      number:"22"
    },{
      img:"../../image/c10.png",
      name:"商品6",
      price:"76.00",
      number:"49"
    }]
  },
  onCommdityTap: function(event){
    var that = this;
    that.setData({
      idx: JSON.stringify(event.currentTarget.dataset.index)
    })
    console.log(this.data.idx);
    wx.navigateTo({
      url: "commodityDetails/commodityDetails",
    })
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

  }
})