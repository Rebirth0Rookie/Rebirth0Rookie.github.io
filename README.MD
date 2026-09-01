# CydraL's Blog

> 拥抱过去，创造未来。

[![Deploy Hexo to GitHub Pages](https://github.com/Rebirth0Rookie/Rebirth0Rookie.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/Rebirth0Rookie/Rebirth0Rookie.github.io/actions/workflows/pages.yml)
[![Hexo](https://img.shields.io/badge/Hexo-7.3.0-0E83CD?logo=hexo)](https://hexo.io/)
[![ShokaX](https://img.shields.io/badge/Theme-ShokaX-ffb6c1)](https://github.com/theme-shoka-x/hexo-theme-shokaX)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

一个用于记录技术实践、学习过程与生活思考的个人博客。

## 在线访问

<https://rebirth0rookie.github.io>

## 特点

- 使用 Hexo 生成静态网站，页面轻量且易于长期维护。
- 基于 ShokaX 主题，支持响应式布局、深色模式、代码高亮和文章目录。
- 自动生成 RSS、Atom 与 JSON Feed。
- 自动压缩 CSS 和图片，并生成 AVIF 图片资源。
- 推送到 `main` 分支后，通过 GitHub Actions 自动构建并部署到 GitHub Pages。
- 构建阶段自动检查页面中的本地链接和静态资源。

## 技术栈

- [Hexo](https://hexo.io/)：静态博客生成器
- [ShokaX](https://github.com/theme-shoka-x/hexo-theme-shokaX)：博客主题
- [pnpm](https://pnpm.io/)：依赖管理
- [GitHub Actions](https://github.com/features/actions)：持续集成与自动部署
- [GitHub Pages](https://pages.github.com/)：静态网站托管

## 本地预览

```bash
git clone git@github.com:Rebirth0Rookie/Rebirth0Rookie.github.io.git
cd Rebirth0Rookie.github.io
pnpm install --frozen-lockfile
pnpm run server
```

启动后访问 <http://localhost:4000>。

## 项目文档

写作、配置、资源管理、依赖更新、构建、部署和故障排查等详细说明，请查看 [维护手册](./MAINTENANCE.md)。

## License

本项目采用 [MIT License](./LICENSE)。
