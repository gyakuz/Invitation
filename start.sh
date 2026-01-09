#!/bin/bash

# 微信小程序项目启动脚本
# 使用方法: chmod +x start.sh && ./start.sh

echo "======================================"
echo "  微信小程序项目启动脚本"
echo "======================================"
echo ""

# 检查 Node.js
echo "1. 检查 Node.js 环境..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    NPM_VERSION=$(npm -v)
    echo "   ✅ Node.js: $NODE_VERSION"
    echo "   ✅ npm: $NPM_VERSION"
else
    echo "   ❌ Node.js 未安装"
    echo "   请访问 https://nodejs.org/ 下载安装"
    exit 1
fi
echo ""

# 检查依赖
echo "2. 检查项目依赖..."
if [ -d "node_modules" ]; then
    echo "   ✅ node_modules 目录存在"
    PACKAGE_COUNT=$(ls node_modules | wc -l)
    echo "   已安装 $PACKAGE_COUNT 个包"
else
    echo "   ⚠️  node_modules 不存在，正在安装依赖..."
    npm install
fi
echo ""

# 检查微信开发者工具
echo "3. 检查微信开发者工具..."
if [ -d "/Applications/wechatwebdevtools.app" ]; then
    echo "   ✅ 微信开发者工具已安装"
else
    echo "   ❌ 微信开发者工具未安装"
    echo "   请访问 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html 下载安装"
    exit 1
fi
echo ""

# 检查 miniprogram_npm
echo "4. 检查 npm 构建..."
if [ -d "miniprogram_npm" ]; then
    echo "   ✅ miniprogram_npm 目录存在"
else
    echo "   ⚠️  miniprogram_npm 不存在"
    echo "   需要在微信开发者工具中构建 npm："
    echo "   工具 → 构建 npm"
fi
echo ""

# 尝试打开项目
echo "5. 启动微信开发者工具..."
PROJECT_PATH="/Users/lanyzhong/Desktop/lanyzhong/Invitation"

# 方式1: 使用 CLI（需要开启服务端口）
echo "   尝试使用 CLI 打开项目..."
/Applications/wechatwebdevtools.app/Contents/MacOS/cli open --project "$PROJECT_PATH" 2>&1 | grep -q "IDE service port disabled"

if [ $? -eq 0 ]; then
    echo "   ⚠️  CLI 服务端口未开启"
    echo ""
    echo "   请手动操作："
    echo "   1. 打开微信开发者工具"
    echo "   2. 进入 设置 → 安全设置"
    echo "   3. 开启 '服务端口'"
    echo "   4. 重新运行此脚本"
    echo ""
    echo "   或者直接在微信开发者工具中导入项目："
    echo "   项目路径: $PROJECT_PATH"
    
    # 方式2: 直接打开应用
    echo ""
    echo "   正在打开微信开发者工具..."
    open -a wechatwebdevtools
else
    echo "   ✅ 项目已在微信开发者工具中打开"
fi

echo ""
echo "======================================"
echo "  重要提示"
echo "======================================"
echo ""
echo "首次运行需要："
echo "1. 在微信开发者工具中构建 npm"
echo "   工具 → 构建 npm"
echo ""
echo "2. 配置小程序 AppID（如需发布）"
echo "   编辑 project.config.json"
echo ""
echo "详细说明请查看: SETUP.md"
echo ""
