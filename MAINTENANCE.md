# CydraL's Blog 维护手册

CydraL 的个人博客，基于 [Hexo](https://hexo.io/) 和 [ShokaX](https://github.com/theme-shoka-x/hexo-theme-shokaX) 构建，通过 GitHub Actions 自动部署到 GitHub Pages。

- 线上地址：<https://rebirth0rookie.github.io>
- 默认分支：`main`
- Hexo：7.3.0
- ShokaX：0.5.4
- Node.js：20 或更高版本
- pnpm：10.13.1

## 快速开始

### 1. 获取项目

```bash
git clone git@github.com:Rebirth0Rookie/Rebirth0Rookie.github.io.git
cd Rebirth0Rookie.github.io
```

如果项目已经在本地，直接进入实际 Git 仓库目录：

```bash
cd /Users/yang/myWorkFile/Personal_Project/myblog/Rebirth0Rookie.github.io
```

### 2. 准备运行环境

检查 Node.js 和 pnpm：

```bash
node --version
pnpm --version
```

项目通过 `.nvmrc` 指定 Node.js 20。如果使用 nvm，可以执行：

```bash
nvm use
```

`package.json` 中的 `packageManager` 会让 pnpm 在项目目录内使用 10.13.1。

### 3. 安装依赖

```bash
pnpm install --frozen-lockfile
```

`--frozen-lockfile` 会严格使用 `pnpm-lock.yaml`，避免本地安装结果和 GitHub Actions 不一致。首次安装需要访问 npm registry。

### 4. 启动本地服务

推荐通过项目脚本启动：

```bash
pnpm run server
```

启动成功后终端会显示：

```text
Hexo is running at http://localhost:4000/
```

然后访问 <http://localhost:4000>。开发服务器会保持前台运行，终端不会返回命令提示符；按 `Ctrl+C` 停止服务。

也可以直接调用项目本地安装的 Hexo，并明确指定端口：

```bash
pnpm exec hexo server --port 4000
```

如果 4000 端口被占用，可以更换端口：

```bash
pnpm exec hexo server --port 4001
```

> 不要使用 `pnpm server`。`server` 与 pnpm 自身的内置命令冲突，在当前环境中会静默退出，不会执行 `package.json` 里的博客启动脚本。请使用 `pnpm run server`。

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm install --frozen-lockfile` | 按锁文件安装依赖 |
| `pnpm run server` | 在 4000 端口启动本地预览 |
| `pnpm exec hexo server --port 4001` | 使用自定义端口启动预览 |
| `pnpm exec hexo new post "文章标题"` | 创建文章 |
| `pnpm exec hexo new draft "草稿标题"` | 创建草稿 |
| `pnpm run clean` | 清理 Hexo 缓存和生成目录 |
| `pnpm run build` | 生成静态网站到 `public/` |
| `pnpm run check:links` | 检查生成页面的本地链接和资源 |
| `pnpm audit` | 检查已知依赖漏洞 |

## 项目结构

```text
.
├── .github/
│   ├── dependabot.yml       # 依赖更新配置
│   └── workflows/pages.yml  # GitHub Pages 构建与部署
├── scaffolds/               # 文章、页面和草稿模板
├── scripts/
│   └── shokax-navigation.js # 注册导航高亮修正脚本
├── source/
│   ├── _data/
│   │   ├── assets/          # 头像、二维码等主题资源
│   │   └── images.yml       # ShokaX 背景图列表
│   ├── _posts/              # 已发布文章
│   ├── about/               # “关于”独立页面
│   ├── js/                  # 项目自定义浏览器脚本
│   └── images/              # 博客图片
├── themes/shokax            # 指向 node_modules 中 ShokaX 的符号链接
├── tools/check-links.mjs    # 生成物本地链接检查器
├── _config.yml              # Hexo 站点配置
├── _config.shokax.yml       # ShokaX 主题覆盖配置
├── package.json             # 脚本与直接依赖
├── pnpm-lock.yaml           # 可复现依赖锁文件
└── pnpm-workspace.yaml      # pnpm 构建许可与安全版本覆盖
```

`node_modules/`、`public/` 和 `db.json` 都是本地生成内容，已被 Git 忽略，不应提交。

## 写文章

### 创建文章

```bash
pnpm exec hexo new post "文章标题"
```

文章会创建在 `source/_posts/`。建议检查并补全 front matter：

```yaml
---
title: 文章标题
date: 2026-09-01 12:00:00
updated: 2026-09-01 12:00:00
categories:
  - 技术
tags:
  - Hexo
  - ShokaX
description: 文章摘要，用于页面描述和搜索结果。
---
```

- `title`：页面显示的文章标题。
- `date`：发布日期。必须固定填写，否则永久链接可能随文件时间变化。
- `updated`：可选；文章有实质更新时再修改。
- `categories`：文章分类，可使用多级列表。
- `tags`：文章标签。
- `description`：可选；用于摘要和 SEO 描述。

本站永久链接格式为：

```text
/:year/:month/:day/:title/
```

修改已经发布的 `date` 或文件名可能改变文章 URL，应谨慎操作。

### 使用草稿

创建草稿：

```bash
pnpm exec hexo new draft "草稿标题"
```

预览草稿：

```bash
pnpm exec hexo server --draft
```

发布草稿：

```bash
pnpm exec hexo publish post "草稿文件名"
```

### 插入图片

当前项目关闭了 `post_asset_folder`，公共图片统一放在 `source/images/`：

```text
source/images/example.jpeg
```

在 Markdown 中使用站点根路径引用：

```markdown
![图片说明](/images/example.jpeg)
```

文件名和扩展名区分大小写，配置中的 `.jpg`、`.jpeg`、`.png` 必须与真实文件完全一致。

## 配置说明

### Hexo 站点配置

`_config.yml` 负责：

- 站点标题、副标题、作者和描述
- 语言与时区
- 线上 URL 和永久链接格式
- 分页、归档、分类和标签
- RSS、Atom、JSON Feed
- CSS 和图片压缩
- 主题选择

当前站点语言必须保持为 `zh-CN`。写成 `zh-cn` 时，ShokaX 0.5.4 无法匹配简体中文语言包，会回退为其他语言。

### ShokaX 主题配置

`_config.shokax.yml` 负责：

- 导航菜单
- GitHub 等社交链接
- 侧边栏头像
- 字体
- 赞赏功能
- 音乐播放器等主题模块

当前头像使用主题自带的 `logo.svg`。如需自定义头像：

1. 将图片放入 `source/_data/assets/`，例如 `avatar.png`。
2. 修改 `_config.shokax.yml`：

```yaml
sidebar:
  avatar: avatar.png
```

赞赏功能当前关闭。准备好收款二维码后，将图片放入 `source/_data/assets/`，再配置并启用 `reward`。

### 顶部导航

桌面端顶部直接显示“首页、文章、归档、分类、关于”，移动端仍使用 ShokaX 原有的折叠菜单。菜单名称、地址和顺序统一在 `_config.shokax.yml` 中维护：

```yaml
menu:
  home: / || home
  posts: / || feather
  archives: /archives/ || list-alt
  categories: /categories/ || th
  about: /about/ || user
```

YAML 中的排列顺序就是导航显示顺序。新增独立页面时，先创建页面，再把入口添加到 `menu`。例如新增友情链接：

```bash
pnpm exec hexo new page friends
```

```yaml
menu:
  friends: /friends/ || heart
```

ShokaX 会把这组扁平菜单直接显示在桌面端顶部，并在移动端继续使用折叠菜单。“首页”和“文章”都进入首页文章列表；`scripts/shokax-navigation.js` 会加载 `source/js/custom-navigation.js`，保证首页只高亮“首页”，打开具体文章时高亮“文章”。不要直接修改 `themes/shokax` 或 `node_modules/hexo-theme-shokax`，依赖重装或升级时这些修改会丢失。

### 首页背景图

背景图片存放在 `source/images/`，列表配置位于 `source/_data/images.yml`：

```yaml
- /images/bg1.jpeg
- /images/bg2.jpeg
- /images/bg3.jpeg
- /images/bg4.jpeg
- /images/bg5.jpeg
- /images/bg6.jpeg
```

ShokaX 至少需要 6 个背景项。更换图片时要同时确认文件存在、扩展名一致，并运行链接检查。

## 构建和质量检查

推荐在提交前执行：

```bash
pnpm run clean
pnpm run build
pnpm run check:links
pnpm audit
```

构建结果位于 `public/`，其中包括：

- 首页与文章页
- 归档、分类和标签页
- CSS、JavaScript 和压缩图片
- `rss.xml`
- `atom.xml`
- `feed.json`

`pnpm run check:links` 会扫描生成页面，确认本地页面、图片、脚本和样式文件真实存在。GitHub Pages 工作流也会执行该检查，失败时不会部署错误站点。

构建时可能出现以下非致命提示：

- `Failed to detect version info`：ShokaX 无法联网检查版本，不影响静态站点生成。
- `Browserslist: browsers data is old`：浏览器兼容数据库较旧，不影响本次构建，可在依赖维护时更新。

## 自动部署

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动执行：

1. 检出代码。
2. 安装 pnpm 10.13.1 和 Node.js 20。
3. 使用 `pnpm install --frozen-lockfile` 安装依赖。
4. 执行 `pnpm build`。
5. 执行 `pnpm check:links`。
6. 上传 `public/` 并部署到 GitHub Pages。

也可以在 GitHub Actions 页面手动触发 `Deploy Hexo to GitHub Pages` 工作流。

部署失败时，先查看 Actions 中的 `Install dependencies`、`Build site` 和 `Check local links` 三个步骤。不要把本地 `public/` 手动提交到 `main`。

## 依赖维护

查看可升级依赖：

```bash
pnpm outdated
```

检查安全公告：

```bash
pnpm audit
```

更新依赖后必须提交：

- `package.json`
- `pnpm-lock.yaml`
- 必要时的 `pnpm-workspace.yaml`

`pnpm-workspace.yaml` 中的 `overrides` 用于修复 ShokaX 0.5.4 间接依赖中的已知安全问题。升级 ShokaX 后应重新运行 `pnpm audit`，确认上游已修复的覆盖项，再逐项移除；不要一次性删除全部覆盖。

`.github/dependabot.yml` 每日检查 npm 更新。合并依赖更新前，应至少确认构建和本地链接检查通过。

## 常见问题

### 执行 `pnpm server` 后没有任何输出

这是 pnpm 内置 `server` 命令与项目脚本重名造成的。使用：

```bash
pnpm run server
```

或者直接调用 Hexo：

```bash
pnpm exec hexo server --port 4000
```

### 4000 端口被占用

检查端口：

```bash
lsof -nP -iTCP:4000 -sTCP:LISTEN
```

可以停止占用端口的服务，或改用其他端口：

```bash
pnpm exec hexo server --port 4001
```

### `themes/shokax` 无法访问

`themes/shokax` 是指向 `node_modules/hexo-theme-shokax` 的符号链接。先确认依赖已经安装：

```bash
pnpm install --frozen-lockfile
ls -l themes/shokax
```

### 修改配置后页面没有变化

清理缓存并重新构建：

```bash
pnpm run clean
pnpm run build
```

开发服务正在运行时，停止并重新执行 `pnpm run server`。

### 本地能构建，GitHub Actions 失败

优先检查：

- 是否提交了最新的 `pnpm-lock.yaml`。
- 本地是否使用了 `pnpm install --frozen-lockfile`。
- Node.js 是否满足 20+。
- 图片路径的大小写和扩展名是否一致。
- `pnpm run check:links` 是否通过。

## 提交前检查清单

```bash
pnpm install --frozen-lockfile
pnpm run clean
pnpm run build
pnpm run check:links
pnpm audit
git status
```

确认 `public/`、`node_modules/`、日志文件和本地缓存没有被加入 Git。

## License

本项目采用根目录 `LICENSE` 中的 MIT License。许可证同时保留 ShokaX 上游项目的原始版权声明。
