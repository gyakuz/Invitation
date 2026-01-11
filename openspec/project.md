# Project Context

## Purpose
这是一个创新的**千人千面婚礼邀请函小程序**项目，核心目标是为婚礼创造独特的邀请体验：
- 为每位受邀宾客生成个性化的专属邀请页面
- 提供实时共享的婚礼相册功能
- 支持多种创意邀请函模板（13+ 种不同风格）
- 集成地图导航、照片墙、海报生成等实用功能

**项目理念**：因为爱，所以开源 ❤️ （严禁二次售卖）

## Tech Stack
- **平台**：微信小程序（WeChat MiniProgram）
- **运行时**：Skyline 渲染引擎 + Glass-easel 组件框架
- **语言**：JavaScript (ES2020)
- **UI 组件库**：TDesign MiniProgram (腾讯设计规范)
- **核心依赖**：
  - `lottie-miniprogram` - 动画效果
  - `me-waterfall` - 瀑布流布局
  - `highlight.js` - 代码高亮
- **开发工具**：微信开发者工具
- **代码规范**：ESLint + Prettier
- **版本控制**：Git + Husky (pre-commit hooks)

## Project Conventions

### Code Style
- **缩进**：2 空格（强制要求）
- **换行符**：Unix (LF)
- **引号**：优先使用单引号
- **命名规范**：
  - 变量/函数：camelCase (驼峰命名)
  - 常量：优先使用 `const`
  - 解构赋值：对象解构时优先使用
- **代码格式化**：Prettier 自动格式化
- **Lint 规则**：
  - 禁止 `console.log`（仅允许 `warn` 和 `error`）
  - 禁止 `debugger`
  - 强制使用 `===` 而非 `==`
  - 优先使用模板字符串而非字符串拼接
  - 禁止嵌套三元运算符
  - 函数命名后不加空格，匿名函数和箭头函数除外

### Architecture Patterns
- **MVVM 模式**：采用微信小程序的数据驱动视图模式
- **目录结构**：
  ```
  /pages        # 页面目录（13+ 种邀请函页面）
  /components   # 公共组件（如音乐播放器）
  /api          # API 接口封装
  /common       # 通用工具（如版本更新管理）
  /utils        # 工具函数
  /assets       # 静态资源（图片、音频等）
  /mock         # 模拟数据
  /config       # 配置文件
  ```
- **全局状态管理**：通过 `App.globalData` 管理全局状态（如音乐播放状态）
- **页面通信**：使用 `wx.navigateTo` 的 `eventChannel` 进行页面间数据传递
- **音频管理**：全局音频上下文，支持后台播放和静音开关控制

### Testing Strategy
- **当前状态**：项目处于快速开发阶段，暂未配置自动化测试
- **代码质量保障**：
  - ESLint 静态代码检查
  - Prettier 代码格式化
  - Husky pre-commit 钩子确保提交前代码规范
  - 手动测试：微信开发者工具真机预览

### Git Workflow
- **分支策略**：
  - `main` 分支：只包含纯婚礼邀请函功能
  - `version_1.0` 分支：完整功能（邀请函 + 相册 + 晚霞预测）
- **提交规范**：
  - 提交前自动运行 lint-staged 检查
  - Prettier 自动格式化 `.js, .ts, .css, .less` 文件
  - ESLint 自动修复 JavaScript/TypeScript 文件

## Domain Context
- **目标用户**：准新人、筹备婚礼的情侣
- **核心功能场景**：
  1. **个性化邀请**：根据宾客身份/关系显示不同的邀请文案和页面样式
  2. **实时相册**：婚礼现场拍摄的照片实时上传，宾客可立即浏览和下载
  3. **地图导航**：集成微信地图，引导宾客到达婚礼现场
  4. **管理后台**：`pages/admin` 提供管理功能
- **特色页面**：
  - 时间轴页面 (`timeLine`)
  - 控制台风格页面 (`consoleLine`)
  - 代码风格页面 (`code`)
  - 图片展示页面 (`picture`)
  - 13+ 种不同风格的邀请函模板 (`invite3-invite13`)

## Important Constraints
- **平台限制**：
  - 必须在微信开发者工具中开发和测试
  - 小程序包大小限制（主包 2MB，分包 2MB）
  - Skyline 渲染引擎要求 SDK 版本 >= 3.0.0
- **技术约束**：
  - 不支持 TypeScript（项目使用纯 JavaScript）
  - 必须遵守微信小程序 API 规范
  - 音频播放需要用户授权（`obeyMuteSwitch: false` 绕过静音开关）
- **业务约束**：
  - 开源项目，严禁二次售卖
  - 需要用户位置权限用于地图功能
  - 需要后台音频播放权限

## External Dependencies
- **微信小程序 API**：
  - `wx.createInnerAudioContext()` - 音频播放
  - `wx.navigateTo()` - 页面导航
  - 位置服务 API - 地图定位
  - 分享功能 API
- **CDN 资源**：
  - 背景音乐：`https://fs-im-kefu.7moor-fs1.com/...` (Everybody Knows I Love You)
- **第三方库**：
  - TDesign MiniProgram - 腾讯小程序 UI 组件库
  - Lottie - 用于复杂动画效果
  - Highlight.js - 代码高亮显示
  - me-waterfall - 瀑布流相册布局
- **开发工具**：
  - 微信开发者工具
  - WeChat DevTools CLI (启动命令：`npm run open`)
