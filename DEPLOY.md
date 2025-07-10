# 部署AI日历宣传网站到GitHub Pages

## 第一步：创建GitHub仓库

1. 登录GitHub账号
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `ai-calendar-website` (或您喜欢的名称)
   - Description: AI日历 - 智能时间管理iOS应用宣传网站
   - 选择 "Public" (GitHub Pages免费版需要公开仓库)
   - **不要**勾选 "Initialize this repository with a README"
   - 点击 "Create repository"

## 第二步：推送代码到GitHub

在终端中运行以下命令：

```bash
cd /Users/weifu/Desktop/AI日历/website

# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/ai-calendar-website.git

# 推送代码
git push -u origin main
```

如果提示输入用户名和密码，请使用：
- Username: 您的GitHub用户名
- Password: 您的GitHub Personal Access Token（不是登录密码）

### 如何创建Personal Access Token：
1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 填写Note（如：ai-calendar-deploy）
4. 选择权限：勾选 `repo` (全部)
5. 点击 "Generate token"
6. **立即复制保存token**（只显示一次）

## 第三步：启用GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 左侧菜单找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
   - 点击 "Save"

## 第四步：访问网站

1. 等待2-3分钟让GitHub部署网站
2. 在Pages设置页面顶部会显示：
   "Your site is live at https://YOUR_USERNAME.github.io/ai-calendar-website/"
3. 点击链接访问您的网站！

## 可选：自定义域名

如果您有自己的域名（如 aicalendar.com）：

1. 在website目录创建CNAME文件：
   ```bash
   echo "your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. 在您的域名DNS设置中添加：
   - Type: CNAME
   - Name: @ 或 www
   - Value: YOUR_USERNAME.github.io

3. 在GitHub Pages设置中填写custom domain

## 更新网站

每次更新网站内容后：

```bash
git add .
git commit -m "更新描述"
git push
```

GitHub会自动重新部署，几分钟后就能看到更新。

## 常见问题

### 404错误
- 确保文件名为 `index.html`（不是 `Index.html`）
- 等待几分钟让GitHub完成部署

### 图片不显示
- 检查图片路径是否正确（使用相对路径）
- 确保图片文件已提交到仓库

### 推送失败
- 检查是否正确设置了remote origin
- 确保使用Personal Access Token而不是密码
- 运行 `git remote -v` 检查远程仓库地址

## 联系支持

如有问题，请联系：1597498880weiproduct@gmail.com