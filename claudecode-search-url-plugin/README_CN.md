[English](README.md) | 简体中文

# Seekdb Claude Code 插件（基于 URL）

> 一个轻量级的 Claude Code 插件，通过从官方 GitHub 仓库获取文档来提供 SeekDB 文档访问。

## 📖 项目概述

这是 SeekDB Claude Code 插件的轻量级版本。与捆绑所有本地文档的完整版插件不同，此插件使用文档目录并按需从官方 GitHub 仓库获取内容。

## ✨ 核心功能

- **轻量级**：不捆绑完整文档，仅包含文档目录
- **始终最新**：从官方 GitHub 仓库获取最新文档
- **包体积小**：与完整版插件相比，占用空间最小
- **功能相同**：通过基于 URL 的访问提供相同的 SeekDB 知识能力

## 📦 包含的技能

### 1. seekdb-docs

通过基于 URL 的访问提供 SeekDB 数据库文档知识库。

**功能特性：**
- 涵盖所有 SeekDB 官方文档的文档目录
- 按需从 GitHub 仓库获取内容
- 包含以下文档类别：
  - 快速入门指南
  - 开发指南（向量搜索、混合搜索、AI 函数等）
  - SDK 和 API 参考
  - 多模型数据支持（JSON、空间数据、文本等）
  - 集成指南（模型、框架、MCP 客户端）
  - 部署和运维指南
  - 实践教程
  - 参考文档

**工作原理：**
1. 技能读取文档目录（`seekdb-docs-catalog.md`）
2. 根据用户问题识别相关文档
3. 从目录条目构建完整的 GitHub URL
4. 从 URL 获取文档内容
5. 根据获取的内容提供答案

**相关文档：**
- [SKILL.md](skills/seekdb-docs/SKILL.md)

## 🚀 快速开始

### 前置要求

- Claude Code 1.0 或更高版本
- 对 Agent Skills 的基本了解
- 网络连接（获取文档所需）

### 安装 Claude Code

如果尚未安装 Claude Code，使用 npm 安装：

```bash
npm install -g @anthropic-ai/claude-code
```

### 安装 seekdb URL 插件

安装 Claude Code 后，按照以下步骤安装 seekdb URL 插件：

1. **添加 seekdb 市场**
   
   打开 Claude Code 的终端或命令界面并运行：
   ```bash
   /plugin marketplace add oceanbase/seekdb-ecology-plugins
   ```
   
   此命令将 seekdb 插件市场添加到您的 Claude Code 实例。

2. **安装插件**
   
   添加市场后，安装 seekdb URL 插件：
   ```bash
   /plugin install seekdb-url-plugin@seekdb
   ```
   
   这将下载并安装轻量级 seekdb 插件。

3. **重启 Claude Code**
   
   安装插件后，重启 Claude Code 以确保插件完全加载并可用。

### 配置

插件安装后即可立即使用。无需额外配置。当您询问 SeekDB 相关问题时，技能将自动可用。

## 💡 使用示例

### 使用 seekdb-docs

向 Claude 询问 SeekDB 相关的技术问题：

```
如何部署 SeekDB 测试环境？
```

```
如何使用 SeekDB 的向量搜索功能？
```

```
如何在 SeekDB 中实现混合搜索？
```

```
SeekDB 支持哪些 AI 框架集成？
```

Claude 会自动从 GitHub 获取文档并提供准确的技术指导。

## 🔄 与完整版插件的比较

| 功能 | claudecode-plugin（完整版） | claudecode-search-url-plugin（URL 版） |
|------|---------------------------|----------------------------------------|
| 文档 | 本地捆绑 | 从 GitHub URL 获取 |
| 包大小 | 大（包含所有文档） | 小（仅目录） |
| 离线支持 | ✅ 是 | ❌ 需要网络 |
| 始终最新文档 | ❌ 需要更新插件 | ✅ 是 |
| 响应速度 | ✅ 快（本地访问） | 取决于网络 |

## 📂 项目结构

```
claudecode-search-url-plugin/
├── README.md                           # 项目文档
├── README_CN.md                        # 中文文档
├── plugin.json                         # 插件配置
└── skills/
    └── seekdb-docs/                    # 文档技能
        ├── SKILL.md                    # 技能文档
        └── seekdb-docs-catalog.md      # 包含 URL 的文档目录
```

## 🔧 开发与贡献

### 更新目录

当出现以下情况时，应更新文档目录（`seekdb-docs-catalog.md`）：
- 官方仓库添加了新文档
- 文档路径发生变化
- 文档描述需要改进

### URL 格式

文档 URL 遵循以下格式：
- **基础 URL**：`https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/`
- **完整 URL** = 基础 URL + 文件路径（来自目录）

## 📋 关于 Agent Skills

Agent Skills 是 Claude Code 的强大功能，允许将专业知识和工作流程打包成可重用的模块：

- **自动调用**：技能会根据上下文由 Claude 自动调用，无需手动触发
- **模块化设计**：每个技能独立维护，便于组织和管理
- **团队共享**：通过 git 与团队共享专业知识和工作流程
- **可组合性**：多个技能可以组合使用来解决复杂任务

了解更多关于 Agent Skills：
- [Agent Skills 概述](https://docs.anthropic.com/en/docs/agent-skills)
- [使用 Agent Skills 为智能体配备真实世界能力](https://www.anthropic.com/news/agent-skills)

## 🔗 相关链接

- [SeekDB 官方网站](https://www.oceanbase.ai/)
- [SeekDB 官方文档](https://www.oceanbase.ai/docs/)
- [SeekDB 文档 GitHub](https://github.com/oceanbase/seekdb-doc)
- [Claude Code 文档](https://www.claude.com/product/claude-code)

## ❓ 常见问题

### Q: 为什么使用基于 URL 的插件而不是完整版插件？

A: 基于 URL 的插件在以下情况下是理想的：
- 您想要更小的包体积
- 您始终想要最新的文档
- 您有可靠的网络连接
- 您不需要离线访问

### Q: 如果网络不可用会发生什么？

A: 该技能需要网络访问来获取文档。如果网络不可用，Claude 将无法检索最新的文档内容。

### Q: 可以同时使用两个插件吗？

A: 建议只使用一个版本以避免冲突。根据您的需求选择（离线访问 vs. 始终最新文档）。

### Q: GitHub 文档多久更新一次？

A: 文档随每次 SeekDB 发布而更新。目录默认引用 V1.0.0 版本。

---

**祝您使用 SeekDB 和 Claude Code 编码愉快！🎉**

