# 📝 Notion Expert v3.0.5 Enhanced Edition

> Complete Notion workspace automation via Model Context Protocol (MCP). Works with [Gemini CLI](https://github.com/google-gemini/gemini-cli) and [Qwen Code](https://github.com/QwenLM/qwen-code).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-Server-purple.svg)](https://modelcontextprotocol.io/)
[![Version](https://img.shields.io/badge/Version-3.0.5-brightgreen.svg)](https://github.com/andrecrjr/gemini-notion-expert-extension/releases)

Transform your Notion workspace into a powerful automation hub with **46 comprehensive tools**, file processing, database templates, and intelligent monitoring.

---

## ✨ Quick Start (3 Steps)

**For Gemini/Qwen CLI for extension:**
```bash
# 1. Install the extension
gemini extensions install https://github.com/andrecrjr/gemini-notion-expert-extension --auto-update

# or

qwen extensions install https://github.com/andrecrjr/gemini-notion-expert-extension --auto-update

# 2. Gemini CLI will prompt you for your Notion API key
# Get your token from: https://www.notion.so/my-integrations

# 3. Verify installation
gemini mcp list
```

**For Qwen Code / Gemini if wants only MCP:**
```bash
# 1. Register as MCP server
qwen mcp add notion node "~/.gemini/extensions/notion-expert/dist/bundle.js"

# 2. Set environment variable
export NOTION_API_KEY="ntn_your_token_here"

# 3. Verify installation
qwen mcp list
```

**For direct MCP stdio mode (advanced):**
```bash
# Set MCP stdio mode for clean JSON-RPC communication
export MCP_STDIO=true
export NOTION_API_KEY="ntn_your_token_here"

# Start server directly
node dist/bundle.js

# Or with tsx (development)
MCP_STDIO=true NOTION_API_KEY="ntn_xxx" npx tsx src/server.ts
```

That's it! You're ready to use Notion with your AI assistant. 🎉

---

## 📋 Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **AI CLI Client** - Choose one:
  - [Gemini CLI](https://github.com/google-gemini/gemini-cli): `npm install -g @google/gemini-cli`
  - [Qwen Code](https://github.com/QwenLM/qwen-code): Follow installation instructions
- **Notion Integration Token** - Get yours below 👇

---

## 🔐 Getting Your Notion API Token

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click **"+ New integration"**
3. Configure:
   - **Name**: `Gemini CLI Extension`
   - **Associated workspace**: Select your workspace
   - **Capabilities**: Check all Content, Comment, and User capabilities
4. Click **"Submit"**
5. Copy the **Internal Integration Token** (starts with `ntn_` or `secret_`)

> ⚠️ **Keep your token secret!** Never share it or commit it to git.

### 🔗 Share Pages with Integration

In Notion, grant access to pages/databases you want to use:
1. Open a page or database
2. Click **"Share"** (top right)
3. Click **"Add connections"** or **"Invite"**
4. Select **"Gemini CLI Extension"**

---

## ✅ Verify Installation

**Gemini CLI:**
```bash
# Check extension is installed
gemini extensions list

# Check MCP server is connected
gemini mcp list

# Test with a simple query
echo "List my Notion databases" | gemini chat
```

**Qwen Code:**
```bash
# Check MCP server is connected
qwen mcp list

# Test with a simple query
echo "List my Notion databases" | qwen chat
```

**Expected output:**
- Extension shows as installed: `✓ notion-expert v3.0.4`
- MCP server connected: `✓ notion: ... - Connected`
- Your databases are listed

---

## 🚀 What You Can Do

### Quick Examples

**Gemini CLI:**
```bash
# Database operations
echo "Show me all my Notion databases" | gemini chat
echo "Query my Tasks database for incomplete items" | gemini chat

# Page operations
echo "Create a meeting notes page titled 'Project Kickoff'" | gemini chat
echo "Search for pages about API design" | gemini chat

# Advanced features
echo "Create a document scanner database" | gemini chat
echo "Check API health status" | gemini chat
```

**Qwen Code:**
```bash
# Database operations
echo "Show me all my Notion databases" | qwen chat
echo "Query my Tasks database for incomplete items" | qwen chat

# Page operations
echo "Create a meeting notes page titled 'Project Kickoff'" | qwen chat
echo "Search for pages about API design" | qwen chat

# Advanced features
echo "Create a document scanner database" | qwen chat
echo "Check API health status" | qwen chat
```

### 📊 46 Available Tools

| Category | Tools | Examples |
|----------|-------|----------|
| **🔧 Core Notion** | 38 tools | search, create_page, query_database, comments |
| **📄 File Operations** | 4 tools | upload_file_to_notion, bulk_create_pages_from_files |
| **🎯 Database Templates** | 1 tool | create_database_from_template (4 templates) |
| **📊 Health & Analytics** | 2 tools | check_api_health, get_usage_statistics |
| **🔍 Enhanced Search** | 1 tool | advanced_search (with analytics) |

**Database Templates Available:**
- **Document Scanner** - Perfect for PDF automation
- **Project Tracker** - Complete project management
- **Meeting Notes** - Structured meetings
- **Task Management** - Task tracking

---

## 🗑️ Uninstallation

```bash
# Remove MCP server
gemini mcp remove notion

# Uninstall extension
gemini extensions uninstall notion-expert
```

---

## 🔧 Troubleshooting

| Error | Solution |
|-------|----------|
| `Tool "notion_*" not found` | Register MCP server: `gemini mcp add notion` or `qwen mcp add notion` |
| `MCP server disconnected` | Check Node.js version (18+) and increase timeout |
| `Unauthorized` | Verify token is valid and pages are shared |
| `No databases found` | Share databases with integration in Notion |

### Common Issues

**"Tool not found" Errors:**
```bash
# Register MCP server manually (Gemini CLI)
gemini mcp add notion node "~/.gemini/extensions/notion-expert/dist/bundle.js" \
  -e NOTION_API_KEY="${NOTION_API_KEY}" \
  --timeout 30000 \
  -s user

# Register MCP server manually (Qwen Code)
qwen mcp add notion node "~/.gemini/extensions/notion-expert/dist/bundle.js" \
  -e NOTION_API_KEY="${NOTION_API_KEY}" \
  --timeout 30000
```

**Invalid Token:**
```bash
# Test your token
curl -H "Authorization: Bearer $NOTION_API_KEY" \
     -H "Notion-Version: 2022-06-28" \
     https://api.notion.com/v1/users/me
```

**Pages Not Accessible:**
- Open the page in Notion
- Click **Share** → **Add connections**
- Select **Gemini CLI Extension**

---

## 📦 Optional: Setup Scripts

For automated database configuration, run the setup script:

```bash
# Navigate to extension directory
cd ~/.gemini/extensions/notion-expert

# Run setup (guides you through database selection/creation)
# Windows:
.\setup-windows.ps1

# macOS/Linux:
chmod +x setup-unix.sh && ./setup-unix.sh
```

**What it does:**
- Discovers your existing databases
- Auto-detects conversation/project databases
- Creates databases if needed
- Stores configuration locally

**Note:** Setup scripts are **optional** - the extension works without them.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 🙏 Acknowledgments

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) by Google
- [Qwen Code](https://github.com/QwenLM/qwen-code) by Alibaba
- [Notion API](https://developers.notion.com/) by Notion
- [Model Context Protocol](https://modelcontextprotocol.io/) for MCP server framework

---

## 📚 Complete Tool Reference

### 🔧 Core Notion Operations (38 Tools)

#### Search & Discovery
- `notion_search` - Search pages and databases by name or content
- `advanced_search` - Enhanced search with analytics and filtering

#### Page Management
- `create_page` - Create new pages with markdown content
- `get_page` - Retrieve page properties and content
- `update_page` - Modify title, icon, cover, properties
- `archive_page` - Archive (soft delete) pages
- `restore_page` - Restore archived pages
- `duplicate_page` - Copy pages with all content

#### Database Operations
- `list_databases` - List all accessible databases
- `get_database` - Get database schema and properties
- `query_database` - Filter and sort database entries
- `create_database` - Create new databases with custom schema
- `update_database` - Modify database properties and schema

#### Block & Content Management
- `get_page_blocks` - Read page content as structured blocks
- `append_blocks` - Add content (markdown supported)
- `update_block` - Modify existing blocks
- `delete_block` - Remove specific blocks

#### Comments & Collaboration
- `get_comments` - Read all comments on a page
- `create_comment` - Add comments to pages

#### Users & Workspace
- `get_user` - Get current user information
- `list_users` - List all workspace members

### 🚀 Enhanced Operations (8 Tools)

#### File Processing
- `upload_file_to_notion` - Upload files with metadata extraction
- `bulk_create_pages_from_files` - Process multiple files into database entries
- `start_file_watcher` - Monitor folders for new files
- `stop_file_watcher` - Stop file monitoring processes
- `list_active_watchers` - List all active file monitors

#### Database Templates
- `create_database_from_template` - Create databases with pre-configured schemas

#### Health & Analytics
- `check_api_health` - Comprehensive API health monitoring
- `get_usage_statistics` - Detailed API usage analytics

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NOTION_API_KEY` | Notion integration token | Yes |

Gemini CLI will prompt you for this automatically during first use.

---

## 📁 Project Structure

```
gemini-notion-expert/
├── src/
│   ├── server.ts          # MCP server with all tool handlers
│   ├── tools.ts            # Tool definitions (JSON Schema)
│   ├── credentials.ts      # Cross-platform credential retrieval
│   ├── notion-client.ts    # Notion API wrapper
│   ├── types/              # TypeScript interfaces
│   └── managers/           # Business logic managers
├── dist/                   # Compiled JavaScript (generated)
├── setup-windows.ps1       # Windows setup script
├── setup-unix.sh          # macOS/Linux setup script
├── gemini-extension.json   # Gemini CLI manifest
├── GEMINI.md              # AI playbook
├── package.json
├── tsconfig.json
└── README.md
```

---

**Made with ❤️ for productivity enthusiasts**
