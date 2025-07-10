#!/bin/bash

# AI日历网站部署脚本
# 使用方法: ./deploy.sh "您的提交说明"

echo "🚀 开始部署AI日历宣传网站..."

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在website目录中运行此脚本"
    exit 1
fi

# 获取提交说明
COMMIT_MSG="$1"
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update website"
fi

# Git操作
echo "📦 准备提交更改..."
git add -A

echo "💾 提交更改: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "📤 推送到GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
    echo "🌐 网站将在几分钟后更新"
    echo "📍 访问地址: https://YOUR_USERNAME.github.io/ai-calendar-website/"
    echo ""
    echo "💡 提示：将YOUR_USERNAME替换为您的GitHub用户名"
else
    echo "❌ 推送失败，请检查："
    echo "1. 是否已设置remote origin"
    echo "2. 是否有正确的推送权限"
    echo "3. 网络连接是否正常"
fi