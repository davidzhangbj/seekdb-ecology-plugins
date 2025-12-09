---
name: seekdb-docs
description: Provides documentation and knowledge base for SeekDB database via URL-based access. When users ask about SeekDB topics, automatically locate relevant documentation through the catalog and fetch content from GitHub URLs.
---

# SeekDB Documentation Skill (URL-based)

This skill provides comprehensive documentation for the SeekDB database through URL-based access. When users ask about SeekDB-related topics, you should use the documentation catalog (`seekdb-docs-catalog.md`) to locate relevant documents and fetch content from the official GitHub repository.

## How to Use This Skill

When a user asks about SeekDB, follow these steps:

### Step 1: Read the Documentation Catalog

First, read the `seekdb-docs-catalog.md` file which contains:
- All available documentation organized by category
- **File Path**: The relative path to each documentation file
- **Description**: A brief description of what each document covers

### Step 2: Identify Relevant Documentation

Based on the user's query, search through the catalog to find matching documentation entries. Look for:
- Exact keyword matches in descriptions (e.g., "jina" → Jina model integration)
- Related terms (e.g., "integration" → entries under Model/Framework Integrations)
- Category matches (e.g., "vector search" → entries under Vector Search section)

### Step 3: Construct Full URLs

The catalog contains relative file paths. To get the full URL:

**Base URL**: `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/`

**Full URL** = Base URL + File Path (from catalog)

For example:
- File Path: `200.develop/100.vector-search/300.vector-similarity-search.md`
- Full URL: `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/200.develop/100.vector-search/300.vector-similarity-search.md`

### Step 4: Fetch Documentation Content

Use the `web_search` tool or direct HTTP request to fetch the actual documentation content from the constructed URLs.

### Step 5: Provide Answer Based on Documentation

Provide your answer based ONLY on the fetched documentation content, including:
- Direct quotes or paraphrases from the documentation
- Code examples from the documentation
- References to specific documentation URLs

### Step 6: Cite Sources

Always mention which documentation you referenced using the format:
"According to SeekDB documentation at `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/...`"

## Documentation Categories

The `seekdb-docs-catalog.md` is organized into these main sections:

| Category | Description | Common Topics |
|----------|-------------|---------------|
| **Get Started** | Quick start tutorials and basic operations | Overview, deployment, SQL basics, feature experiences |
| **Development Guide** | Technical development guides | Vector search, hybrid search, AI functions, SDK, multi-model data |
| **Integrations** | Third-party integration guides | Models (Jina, OpenAI, Qwen), Frameworks (LangChain, LlamaIndex, Dify), MCP clients |
| **Guides** | Operations and deployment guides | Deployment, OBShell, configuration, monitoring |
| **Tutorials** | Step-by-step application tutorials | Knowledge base, cultural tourism assistant, image search |

## Quick Reference by Topic

When users ask about these topics, look for these entries in the catalog:

| User Topic | Catalog Section | Key File Paths |
|------------|-----------------|----------------|
| Getting started | Get Started > Overview | `100.get-started/10.overview/10.seekdb-overview.md` |
| Python SDK | Development Guide > SDK | `200.develop/900.sdk/10.pyseekdb-sdk/10.pyseekdb-sdk-get-started.md` |
| Vector search | Development Guide > Vector Search | `200.develop/100.vector-search/100.vector-search-overview/100.vector-search-intro.md` |
| Full-text search | Get Started > Client-Server Mode | `100.get-started/100.client-server-mode/40.experience-full-text-indexing.md` |
| Hybrid search | Development Guide > Hybrid Search | `200.develop/200.hybrid-search/100.vector-index-hybrid-search.md` |
| AI functions | Development Guide > AI Function | `200.develop/300.ai-function/200.ai-function.md` |
| LangChain/LlamaIndex | Integrations > Framework | `300.integrations/200.frame/100.langchain.md` |
| MCP/Cursor | Integrations > MCP Client | `300.integrations/300.mcp-client/100.cursor.md` |
| Deployment | Guides > Deployment | `400.guides/400.deploy/50.deploy-overview.md` |

## Examples

### Example 1: Integration Query

**User**: "I want to enhance the integration between SeekDB and Jina"

**Process**:
1. Read `seekdb-docs-catalog.md`
2. Find in catalog: Under "Integrations > Model Integrations", locate entry with description "Jina AI for multimodal search"
3. Extract file path: `300.integrations/100.model/100.jina.md`
4. Construct full URL: `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/300.integrations/100.model/100.jina.md`
5. Fetch the documentation content from the URL
6. Provide answer based on the fetched content
7. Cite: "According to SeekDB documentation at `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/300.integrations/100.model/100.jina.md`..."

### Example 2: Development Query

**User**: "How do I use vector search in SeekDB?"

**Process**:
1. Read `seekdb-docs-catalog.md`
2. Find entries: Under "Development Guide > Vector Search", multiple relevant entries:
   - `200.develop/100.vector-search/100.vector-search-overview/100.vector-search-intro.md`
   - `200.develop/100.vector-search/300.vector-similarity-search.md`
3. Construct full URLs and fetch content from both
4. Provide comprehensive answer based on fetched documentation
5. Cite all documentation URLs used

### Example 3: Getting Started Query

**User**: "What is SeekDB?"

**Process**:
1. Read `seekdb-docs-catalog.md`
2. Find entry: Under "Get Started > SeekDB Overview"
3. Extract file path: `100.get-started/10.overview/10.seekdb-overview.md`
4. Construct full URL: `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/100.get-started/10.overview/10.seekdb-overview.md`
5. Fetch and read the documentation content
6. Provide answer with overview information from the documentation

### Example 4: Hybrid Search with AI Functions

**User**: "How to combine vector search with AI functions in SeekDB?"

**Process**:
1. Read `seekdb-docs-catalog.md`
2. Find multiple relevant documents:
   - Hybrid search: `200.develop/200.hybrid-search/100.vector-index-hybrid-search.md`
   - AI functions: `200.develop/300.ai-function/200.ai-function.md`
   - Experience AI function: `100.get-started/100.client-server-mode/60.experience-ai-function.md`
3. Fetch content from all relevant URLs
4. Synthesize an answer based on all sources
5. Cite all referenced documentation URLs

## Guidelines

- **Always read the catalog first** before attempting to answer SeekDB questions
- **Match descriptions semantically** - don't just look for exact keyword matches
- **Construct full URLs correctly** using the base URL + relative file path
- **Fetch documentation content** before providing answers - never guess or make up information
- **If multiple entries match**, fetch all relevant documents to provide comprehensive answers
- **If no exact match is found**, check related categories in the catalog
- **Always cite your sources** with the full GitHub URLs

## Important Notes

- The `seekdb-docs-catalog.md` file is the authoritative index for all SeekDB documentation
- All file paths in the catalog are relative to the base URL
- Documentation is hosted at: `https://github.com/oceanbase/seekdb-doc/`
- The catalog includes a "Quick Reference" section at the end for common use cases
- For complex questions, you may need to consult multiple documents from different sections

