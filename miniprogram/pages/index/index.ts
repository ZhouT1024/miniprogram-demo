Page({

  onLoad() {
    console.log('loading...')
  },

  /**
   * 导航到一个页面
   */
  navigateTo(event: any) {
    console.log('function navigateTo():', event)
    const { url } = event.currentTarget.dataset
    wx.navigateTo({ url })
  },
})
