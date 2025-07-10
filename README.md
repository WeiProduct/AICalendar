# AI日历 宣传网站

这是AI日历iOS应用的宣传网站，可以免费托管在GitHub Pages上。

## 功能特点

- 🎨 现代化响应式设计
- 🌏 中英双语支持
- 📱 移动端优化
- ⚡ 纯静态网站，加载快速
- 🔒 无需后端服务器

## 部署到GitHub Pages

1. 创建新的GitHub仓库（例如：`ai-calendar-website`）

2. 将website文件夹中的所有内容推送到仓库：
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-calendar-website.git
   git push -u origin main
   ```

3. 在GitHub仓库设置中启用Pages：
   - 进入 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 Save

4. 等待几分钟后，网站将发布在：
   `https://YOUR_USERNAME.github.io/ai-calendar-website/`

## 自定义域名（可选）

1. 在website根目录创建`CNAME`文件，内容为你的域名：
   ```
   your-domain.com
   ```

2. 在域名DNS设置中添加CNAME记录指向：
   `YOUR_USERNAME.github.io`

## 准备图片资源

网站需要以下图片资源：

1. **hero-mockup.png** - 主页的手机展示图
   - 建议尺寸：600x1200px
   - 可以使用 `assets/placeholder-hero.html` 生成

2. **screenshot-1.png** - 日历视图截图
3. **screenshot-2.png** - 任务管理截图
4. **screenshot-3.png** - 专注计时截图
5. **screenshot-4.png** - 数据统计截图
   - 建议尺寸：300x600px
   - 可以使用 `assets/generate-placeholders.html` 生成

将这些图片放置在 `assets/` 目录中。

## 更新App Store链接

在 `index.html` 中搜索 `href="#"` 并替换为实际的App Store链接：
```html
<a href="https://apps.apple.com/app/idYOUR_APP_ID" class="app-store-badge">
```

## 本地预览

1. 使用Python简单服务器：
   ```bash
   python -m http.server 8000
   ```

2. 或使用Node.js的http-server：
   ```bash
   npx http-server
   ```

3. 在浏览器中访问 `http://localhost:8000`

## 维护说明

- 所有文本内容在 `js/main.js` 的 `translations` 对象中管理
- 样式在 `css/style.css` 中调整
- 确保所有修改都支持响应式布局