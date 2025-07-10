#!/bin/bash

# AI日历网站快速启动脚本

echo "🎯 AI日历网站快速部署向导"
echo "=========================="
echo ""

# 获取GitHub用户名
read -p "请输入您的GitHub用户名: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ 错误：GitHub用户名不能为空"
    exit 1
fi

echo ""
echo "📋 即将执行以下操作："
echo "1. 设置Git远程仓库"
echo "2. 推送代码到GitHub"
echo "3. 提供GitHub Pages设置指南"
echo ""
read -p "是否继续？(y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "已取消操作"
    exit 1
fi

# 检查是否已有远程仓库
if git remote | grep -q origin; then
    echo "⚠️  检测到已存在的远程仓库，正在移除..."
    git remote remove origin
fi

# 添加远程仓库
echo ""
echo "🔗 设置远程仓库..."
git remote add origin "https://github.com/${GITHUB_USERNAME}/ai-calendar-website.git"

echo ""
echo "📤 推送代码到GitHub..."
echo "提示：如果要求输入密码，请使用Personal Access Token，不是登录密码"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "📝 接下来请按照以下步骤操作："
    echo ""
    echo "1. 访问: https://github.com/${GITHUB_USERNAME}/ai-calendar-website/settings/pages"
    echo ""
    echo "2. 在 'Source' 部分："
    echo "   - 选择 'Deploy from a branch'"
    echo "   - Branch: 选择 'main'"
    echo "   - Folder: 选择 '/ (root)'"
    echo "   - 点击 'Save'"
    echo ""
    echo "3. 等待2-3分钟后访问："
    echo "   🌐 https://${GITHUB_USERNAME}.github.io/ai-calendar-website/"
    echo ""
    echo "📧 如需帮助，请联系: 1597498880weiproduct@gmail.com"
else
    echo ""
    echo "❌ 推送失败！"
    echo ""
    echo "可能的原因："
    echo "1. 仓库不存在 - 请先在GitHub创建 'ai-calendar-website' 仓库"
    echo "2. 认证失败 - 请使用Personal Access Token"
    echo "3. 网络问题 - 请检查网络连接"
    echo ""
    echo "💡 创建Personal Access Token:"
    echo "   访问 https://github.com/settings/tokens"
    echo "   生成新token时勾选 'repo' 权限"
fi