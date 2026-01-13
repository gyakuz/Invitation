export const locationMap = {
  'shitang': {
    date: '2026-05-20',
    year: 2026,
    month: 5,
    day: 20,
    nongLi: '丙午年四月初四',
    location: '浙江省温岭市石塘镇奢野既来',
    latitude: 28.2775,
    longitude: 121.6255,
  },
  'sichuan': {
    date: '2025-05-01',
    year: 2025,
    month: 5,
    day: 1,
    nongLi: '乙巳年四月初四',
    location: 'xxx',
    latitude: 29.923179,
    longitude: 105.624569,
  },
  "wuhan": {
    date: '2026-10-06',
    year: 2025,
    month: 5,
    day: 10,
    nongLi: '乙巳年四月十三',
    location: 'xxx',
    latitude: 30.640082,
    longitude: 114.138508,
  }
}
const xyFriendMap = {
  'zhiwei': {
    name: 'xx',
    ...locationMap['shitang'],
    welcome: [
      "xx~ 终于到我发邀请函啦！",
      "2026 年 5 月 20 日，我要结婚咯！",
      "xxxxxxx~",
      "有空的话来吃我的席呀！",
      "望我们，岁岁年年，同欢共乐！",
    ],
  },
}

const cbzFriendMap = {
  // 陈本拯的朋友列表
  // 可以在这里添加更多朋友
}
export const friendMap = {
  'default': {
    name: '朋友',
    ...locationMap['shitang'],
    welcome: [
      "朋友们~ 终于到我发邀请函啦！",
      "我们将于 2026 年 5 月 20 日举行婚礼",
      "地点在温岭市石塘镇奢野既来",
      "如果你有时间，来吃我们的席呀！",
      "望我们，岁岁年年，同欢共乐！"
    ],
  },
  ...xyFriendMap,
  ...cbzFriendMap
}

export const info = {
  woman: '周真',
  man: '钟家勇',
}
