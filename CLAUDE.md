# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

个人学习/演示仓库，目前处于早期探索阶段。

- Git 仓库，远程地址：`https://github.com/lik-eng/demo.git`
- 主分支：`main`

## 当前内容

- `first.tex` — LaTeX 练习文件（中文文档，已编译生成 `first.pdf`）
- `nba-mbti/` — NBA 球星 MBTI 人格测试网页（HTML/CSS/JS 前端项目）
- `.vscode/` — VS Code 项目级配置（推荐扩展 + 格式化设置）

## 构建 / 编译

### LaTeX

MiKTeX 25.12 已安装，支持 `xelatex`、`pdflatex`、`latexmk`。

编译中文文档推荐：
```bash
xelatex -synctex=1 -interaction=nonstopmode first.tex
```

VS Code 安装 LaTeX Workshop 扩展后，`Ctrl+Alt+B` 一键编译。

### 前端 (nba-mbti)

使用 VS Code Live Server 扩展预览：右键 `index.html` → Open with Live Server。

## 开发环境

- **OS**: Windows 11 Home China
- **编辑器**: VS Code 1.122（See `.vscode/extensions.json` 推荐扩展）
- **Python**: 3.12.10
- **Node.js**: v24.15
- **Git**: 2.53
- **终端**: Git Bash（VS Code 默认）

## 协作约定

### 自主权

**动手前先确认**。任何实质性改动（写文件、改代码、执行命令、安装依赖），先说明计划，等用户同意再动手。读取、搜索、分析类操作可以直接做。

### 代码风格

- **注释语言**：所有函数、类、关键逻辑必须写中文注释
- **详细优先**：注释要说清楚"为什么"，而不仅是"是什么"
- **变量/函数命名**：英文驼峰（camelCase / PascalCase）
- **格式化**：Prettier 默认配置已对齐（printWidth: 100，中文注释友好）

### 任务拆分

由于用户以碎片时间学习，每个任务应拆分为 15-30 分钟内可完成的独立步骤。每步结束后汇报进展，提示下一步。

### 会话汇报

每次完成阶段性任务后，用简洁的格式汇报：
- 做了什么
- 结果是什么
- 下一步可以做什么

## 用户画像

- 在校大学生（机电学部），编程初学者
- 当前目标：**广泛探索**，尚未确定具体方向
- 学习时间：**碎片化**，不固定，偏好小步快跑
- 兴趣方向：NBA 数据分析、前端开发、AI 工具、LaTeX 排版
- GitHub：[lik-eng](https://github.com/lik-eng)
- 邮箱：leiyaokai3@gmail.com
