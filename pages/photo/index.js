const {
  photoList
} = require('../../mock/photo.js')
Page({
  data: {
    list: photoList
  },

  onBack() {
    wx.navigateBack();
  },

  open(e) {
    wx.vibrateShort()
    wx.previewImage({
      urls: photoList,
      current: e.target.dataset.index,
      showmenu: true
    })
  },
  onShareAppMessage() {
    return {
      title: '我们的美好瞬间',
      path: '/pages/photo/index'
    }
  }
})