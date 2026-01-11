Page({
  data: {
    albumImage: '/assets/pic.jpg',
    songTitle: '献给永远的',
    artist: '钟家勇 / 周真',
    isPlaying: true,
    isLiked: false,
    showComments: false,
    showPages: false,
    showForm: false,
    entryUserId: '',
    entryInviteData: '',
    pageEntries: [
      { key: 'map', title: '请柬/滑屏', desc: '邀请函内容' },
      { key: 'photo', title: '照片墙', desc: '瀑布流相册' }
    ],
    currentTime: 0,
    duration: 277,
    comments: [
      { id: '1', user: '我不爱吃薯片啊', avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png', time: '昨天 23:48', content: '4。鼓励四星，我真的想在内地院线看到纯粹且不带包袱的灾难片的，也恭喜弯弯在拍商业娱乐片这个方向终于跳脱出了青春片和鬼片！', likes: 8 },
      { id: '2', user: '乌合之子', avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar2.png', time: '01-04', content: '《96分钟：列车爆炸案》：列车作为时代的隐喻。今天看了提前点映场，本来1月10号全国院线上映，提前了一周。', likes: 12 },
      { id: '3', user: '微粒贷', avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar3.png', time: '12-30', content: '难怪微粒贷近日这么火，原来额度这么高！', likes: 2 }
    ]
  },

  onLoad(options) {
    const { userId = '', inviteData = '' } = options || {};
    this.setData({ entryUserId: userId, entryInviteData: inviteData });
    this.updateTimeText();
    this.fetchComments();
  },

  fetchComments() {
    // 预留后端接口请求
    console.log('Fetching comments from backend...');
    // wx.request({ url: 'api/comments', success: (res) => this.setData({ comments: res.data }) });
  },

  noop() {},

  onBack() {
    wx.navigateBack({
      delta: 1,
      fail: () => {
        wx.reLaunch({ url: '/pages/code/index' });
      }
    });
  },

  onChangeCover() {
    // 封面不可更换
  },

  onOpenComments() {
    this.setData({ showComments: true });
  },

  onCloseComments() {
    this.setData({ showComments: false });
  },

  onAddressTap() {
    wx.showToast({ title: '地址按钮已预留', icon: 'none' });
  },

  onPhotoTap() {
    this.setData({ showPages: true, showComments: false });
  },

  onClosePages() {
    this.setData({ showPages: false });
  },

  onOpenForm() {
    this.setData({ showForm: true });
  },

  onCloseForm() {
    this.setData({ showForm: false });
  },

  onSubmitForm() {
    wx.showToast({ title: '提交成功', icon: 'success' });
    this.onCloseForm();
  },

  buildMapUrl() {
    const userId = this.data.entryUserId;
    const inviteData = this.data.entryInviteData;
    const user = userId ? `userId=${userId}` : '';
    const invite = inviteData ? `inviteData=${inviteData}` : '';
    const qs = [user, invite].filter(Boolean).join('&');
    return `/pages/map/index${qs ? `?${qs}` : ''}`;
  },

  onGoPage(e) {
    const key = (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.key) || '';
    this.setData({ showPages: false });

    let url = '';
    if (key === 'map') url = this.buildMapUrl();
    if (key === 'photo') url = '/pages/photo/index';
    if (key === 'admin') url = '/pages/admin/index';

    if (!url) return;
    wx.navigateTo({ url });
  },

  onToggleLike() {
    this.setData({ isLiked: !this.data.isLiked });
  },

  onMore() {
    wx.showToast({ title: '更多功能待接入', icon: 'none' });
  },

  onTogglePlay() {
    this.setData({ isPlaying: !this.data.isPlaying });
  },

  onPrev() {
    // 占位，点击无反应
  },

  onNext() {
    // 占位，点击无反应
  },

  onSeek(e) {
    const value = Number((e && e.detail && e.detail.value) || 0);
    this.setData({ currentTime: value }, () => this.updateTimeText());
  },

  updateTimeText() {
    const currentTimeText = this.formatTime(this.data.currentTime);
    const durationText = this.formatTime(this.data.duration);
    this.setData({ currentTimeText, durationText });
  },

  formatTime(seconds) {
    const s = Math.max(0, Math.floor(Number(seconds) || 0));
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }
});
