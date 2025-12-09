[English](README.md) | 简体中文

# Seekdb Extension for Cursor（基于 URL）

一个轻量级扩展，将 Seekdb 文档规则添加到 `.cursor/rules` 目录，使 Cursor AI 助手能够通过获取在线文档来理解 Seekdb 数据库知识。

## 功能

- **轻量级**：不捆绑完整文档，而是使用基于 URL 的文档访问方式
- **始终最新**：从官方 GitHub 仓库获取最新文档
- 将 `seekdb.mdc` 规则文件复制到当前工作区的 `.cursor/rules` 目录
- 将 `seekdb-docs-catalog.md` 文档索引复制到 `.cursor/rules` 目录
- 支持版本管理，仅在版本更新时重新复制
- 支持手动移除已复制的规则

## 工作原理

与捆绑所有本地文档的完整版 `cursor-extension` 不同，此扩展：

1. 复制一个轻量级规则文件（`seekdb.mdc`），指导 AI 助手：
   - 读取文档目录（`seekdb-docs-catalog.md`）
   - 根据用户问题识别相关文档
   - 从官方 GitHub 仓库 URL 获取文档内容
   
2. 提供一个文档目录，将主题映射到其 GitHub URL：
   - 基础 URL：`https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/`
   - 完整文档路径 = 基础 URL + 目录中的文件路径

## 使用方法

### 添加规则到当前项目

1. 打开命令面板：
   - Windows/Linux: 按 `Ctrl+Shift+P`
   - macOS: 按 `Cmd+Shift+P`

2. 输入并选择命令：
   - 输入 "Seekdb Rules" 或 "Add Seekdb Rules"
   - 选择 `Add Seekdb Rules (URL-based)` 命令

3. 规则将自动添加到：
   - `.cursor/rules/seekdb.mdc` 文件（规则文件）
   - `.cursor/rules/seekdb-docs-catalog.md` 文件（文档索引）

### 从当前项目移除规则

1. 打开命令面板（`Ctrl+Shift+P` 或 `Cmd+Shift+P`）

2. 输入并选择命令：
   - 输入 "Remove Seekdb Rules"
   - 选择 `Remove Seekdb Rules (URL-based)` 命令

3. 规则将从以下位置移除：
   - `.cursor/rules/seekdb.mdc`
   - `.cursor/rules/seekdb-docs-catalog.md`

## 与完整版扩展的比较

| 功能 | cursor-extension（完整版） | cursor-search-url-extension（URL 版） |
|------|---------------------------|--------------------------------------|
| 文档 | 本地捆绑 | 从 GitHub URL 获取 |
| 大小 | 大（包含所有文档） | 小（仅规则文件） |
| 离线支持 | ✅ 是 | ❌ 需要网络连接 |
| 始终最新文档 | ❌ 需要更新扩展 | ✅ 是 |
| 速度 | ✅ 快（本地访问） | 取决于网络 |

## 注意事项

- 扩展不会自动添加规则，需要手动执行命令
- 如果规则已存在且版本相同，将跳过添加
- AI 助手获取文档内容需要网络连接
- 文档托管于：`https://github.com/oceanbase/seekdb-doc/`

## 许可证

MIT

