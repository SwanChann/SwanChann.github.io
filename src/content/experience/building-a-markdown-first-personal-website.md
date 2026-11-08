---
title: Astro 个人网站：从内容集合到 GitHub Pages 验证
description: 记录本站实际采用的静态发布链路，以及跨平台排序与 Pages 发布模式问题。
date: 2026-08-13
updated: 2026-11-08
category: deployment
tags: [Astro, 部署, 科研工作流]
status: mature
draft: false
featured: false
---

## 内容和页面分开维护

本站使用 Astro 5，以 Markdown/MDX 保存内容，Content Collections 校验字段并生成索引与详情页。Pagefind 在生产 HTML 上构建搜索索引；GitHub Actions 构建后将静态产物发布到 GitHub Pages。

内部链接统一处理部署基础路径，使个人主页根路径和项目仓库子路径均可工作。

## 同一天的文章为何会换顺序

2026 年 11 月的改版验证发现，本地 Windows 与线上 Linux 对相同日期条目的顺序不同。只按日期排序时，相等元素会保留输入次序，而文件枚举顺序并不保证跨平台一致。

修复是在日期相同后按稳定内容 ID 排序。它不仅固定首页列表，也固定上一篇、下一篇和主题导读的顺序。

## Pages 为什么出现额外失败

仓库曾保留 legacy 发布模式，导致 Astro 工作流之外又运行 Jekyll。Jekyll 将 Astro 文件头误当成 YAML，产生解析失败。将 Pages 发布类型调整为 workflow 后，由既有 Astro 工作流负责构建和部署。

## 怎样确认真正发布成功

本地构建只证明源文件可生成站点。改版还核对了两种基础路径下的内部链接、桌面和手机布局、主题切换与搜索，并在部署完成后比较线上正文和关键资源。

文本比较需要考虑 Windows 与 Linux 的换行差异；二进制图片和压缩包则逐字节核对。相关记录保存在[公开仓库的改版验证报告](https://github.com/SwanChann/SwanChann.github.io/blob/main/docs/reading-redesign-verification-2026-11-08.json)。

这些检查验证网站行为与发布一致性，不验证文章中的科学结论。
