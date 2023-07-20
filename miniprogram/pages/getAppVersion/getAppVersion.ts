const {
  miniProgram: { version, envVersion },
} = wx.getAccountInfoSync()

Page({
  data: {
    appVersion: '',
    envVersion,
  },

  onLoad() {
    if (envVersion === 'release') {
      this.setData({ appVersion: version })
    }
  },
})
