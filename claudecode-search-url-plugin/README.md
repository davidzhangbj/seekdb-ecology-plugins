English | [简体中文](README_CN.md)

# Seekdb Plugin for Claude Code (URL-based)

> A lightweight Claude Code plugin that provides SeekDB documentation access via URL-based fetching from the official GitHub repository.

## 📖 Project Overview

This is a lightweight version of the SeekDB plugin for Claude Code. Unlike the full plugin that bundles all documentation locally, this plugin uses a documentation catalog and fetches content from the official GitHub repository on-demand.

## ✨ Key Features

- **Lightweight**: Does not bundle full documentation, only includes the documentation catalog
- **Always Up-to-date**: Fetches the latest documentation from the official GitHub repository
- **Reduced Package Size**: Minimal footprint compared to the full plugin
- **Same Functionality**: Provides the same SeekDB knowledge capabilities through URL-based access

## 📦 Included Skills

### 1. seekdb-docs

Provides SeekDB database documentation knowledge base through URL-based access.

**Features:**
- Documentation catalog covering all SeekDB official documentation
- Fetches content from GitHub repository on-demand
- Includes the following document categories:
  - Quick Start Guide
  - Development Guide (vector search, hybrid search, AI functions, etc.)
  - SDK and API Reference
  - Multi-model Data Support (JSON, spatial data, text, etc.)
  - Integration Guide (models, frameworks, MCP clients)
  - Deployment and Operations Guide
  - Practice Tutorials
  - Reference Documentation

**How It Works:**
1. The skill reads the documentation catalog (`seekdb-docs-catalog.md`)
2. Identifies relevant documentation based on user questions
3. Constructs full GitHub URLs from the catalog entries
4. Fetches documentation content from the URLs
5. Provides answers based on the fetched content

**Related Documentation:**
- [SKILL.md](skills/seekdb-docs/SKILL.md)

## 🚀 Quick Start

### Prerequisites

- Claude Code 1.0 or higher
- Basic understanding of Agent Skills
- Internet connection (required for fetching documentation)

### Installing Claude Code

If you haven't installed Claude Code yet, install it using npm:

```bash
npm install -g @anthropic-ai/claude-code
```

### Installing the seekdb URL Plugin

Once Claude Code is installed, follow these steps to install the seekdb URL plugin:

1. **Add the seekdb Marketplace**
   
   Open Claude Code's terminal or command interface and run:
   ```bash
   /plugin marketplace add oceanbase/seekdb-ecology-plugins
   ```
   
   This command adds the seekdb plugin marketplace to your Claude Code instance.

2. **Install the Plugin**
   
   After adding the marketplace, install the seekdb URL plugin:
   ```bash
   /plugin install seekdb-url-plugin@seekdb
   ```
   
   This will download and install the lightweight seekdb plugin.

3. **Restart Claude Code**
   
   After installing the plugin, restart Claude Code to ensure the plugin is fully loaded and ready to use.

### Configuration

The plugin is ready to use immediately after installation. No additional configuration is required. The skills will be automatically available to Claude when you ask SeekDB-related questions.

## 💡 Usage Examples

### Using seekdb-docs

Ask Claude SeekDB-related technical questions:

```
How to deploy a SeekDB test environment?
```

```
How to use SeekDB's vector search functionality?
```

```
How to implement hybrid search in SeekDB?
```

```
Which AI framework integrations does SeekDB support?
```

Claude will automatically fetch documentation from GitHub and provide accurate technical guidance.

## 🔄 Comparison with Full Plugin

| Feature | claudecode-plugin (Full) | claudecode-search-url-plugin (URL-based) |
|---------|--------------------------|------------------------------------------|
| Documentation | Bundled locally | Fetched from GitHub URLs |
| Package Size | Large (includes all docs) | Small (only catalog) |
| Offline support | ✅ Yes | ❌ Requires internet |
| Always latest docs | ❌ Need to update plugin | ✅ Yes |
| Response Speed | ✅ Fast (local access) | Depends on network |

## 📂 Project Structure

```
claudecode-search-url-plugin/
├── README.md                           # Project documentation
├── README_CN.md                        # Chinese documentation
├── plugin.json                         # Plugin configuration
└── skills/
    └── seekdb-docs/                    # Documentation skill
        ├── SKILL.md                    # Skill documentation
        └── seekdb-docs-catalog.md      # Documentation catalog with URLs
```

## 🔧 Development & Contribution

### Updating the Catalog

The documentation catalog (`seekdb-docs-catalog.md`) should be updated when:
- New documentation is added to the official repository
- Documentation paths change
- Document descriptions need to be improved

### URL Format

Documentation URLs follow this format:
- **Base URL**: `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/`
- **Full URL** = Base URL + File Path (from catalog)

## 📋 About Agent Skills

Agent Skills is a powerful feature of Claude Code that allows packaging professional knowledge and workflows into reusable modules:

- **Automatic Invocation**: Skills are automatically invoked by Claude based on context, no manual triggering required
- **Modular Design**: Each skill is independently maintained, making it easy to organize and manage
- **Team Sharing**: Share professional knowledge and workflows with your team through git
- **Composability**: Multiple Skills can be combined to solve complex tasks

Learn more about Agent Skills:
- [Agent Skills Overview](https://docs.anthropic.com/en/docs/agent-skills)
- [Using Agent Skills to Equip Agents for the Real World](https://www.anthropic.com/news/agent-skills)

## 🔗 Related Links

- [SeekDB Official Website](https://www.oceanbase.ai/)
- [SeekDB Official Documentation](https://www.oceanbase.ai/docs/)
- [SeekDB Documentation GitHub](https://github.com/oceanbase/seekdb-doc)
- [Claude Code Documentation](https://www.claude.com/product/claude-code)

## ❓ Frequently Asked Questions

### Q: Why use the URL-based plugin instead of the full plugin?

A: The URL-based plugin is ideal when:
- You want a smaller package size
- You always want the latest documentation
- You have reliable internet connectivity
- You don't need offline access

### Q: What happens if the network is unavailable?

A: The skill requires internet access to fetch documentation. If the network is unavailable, Claude will not be able to retrieve the latest documentation content.

### Q: Can I use both plugins simultaneously?

A: It's recommended to use only one version to avoid conflicts. Choose based on your needs (offline access vs. always latest docs).

### Q: How often is the GitHub documentation updated?

A: The documentation is updated with each SeekDB release. The catalog references version V1.0.0 by default.

---

**Happy Coding with SeekDB and Claude Code! 🎉**

