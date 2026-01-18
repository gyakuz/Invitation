import updateManager from './common/updateManager';

App({
  onShow() {
    updateManager();
    // 解决从地图等原生页面返回后，InnerAudioContext 可能会被系统暂停的问题
    if (this.globalData.isPlay && this.globalData.audioCtx && this.globalData.audioCtx.paused) {
      this.globalData.audioCtx.play();
    }
  },

  globalData: {
    audioCtx: null,
    isPlay: true, // 音乐播放状态
  },
  onLaunch() {
    const audioCtx = wx.createInnerAudioContext();
    this.globalData.audioCtx = audioCtx;
    
    audioCtx.src = 'https://kolaok.com/music/1.mp3';
    audioCtx.autoplay = true;
    audioCtx.loop = true;
    
    // 监听播放状态更新全局变量
    audioCtx.onPlay(() => {
      this.globalData.isPlay = true;
    });
    audioCtx.onPause(() => {
      this.globalData.isPlay = false;
    });
    audioCtx.onError((res) => {
      console.error('播放报错', res);
    });

    // 解决部分机型首次加载不自动播放的问题
    audioCtx.onCanplay(() => {
      if (this.globalData.isPlay) {
        audioCtx.play();
      }
    });
  },
  playMusic() {
    this.globalData.isPlay = true;
    this.globalData.audioCtx.play();
  },
  pauseMusic() {
    this.globalData.isPlay = false;
    this.globalData.audioCtx.pause();
  },
  onShareAppMessage() {

  },

});