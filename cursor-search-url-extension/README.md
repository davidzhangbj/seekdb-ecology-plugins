English | [简体中文](README_CN.md)

# Seekdb Extension for Cursor (URL-based)

A lightweight extension that adds Seekdb documentation rules to the `.cursor/rules` directory, enabling the Cursor AI assistant to understand Seekdb database knowledge by fetching online documentation.

## Features

- **Lightweight**: Does not bundle full documentation, instead uses URL-based documentation access
- **Always Up-to-date**: Fetches the latest documentation from the official GitHub repository
- Copy `seekdb.mdc` rule file to the `.cursor/rules` directory in the current workspace
- Copy `seekdb-docs-catalog.md` documentation index to the `.cursor/rules` directory
- Support version management, only re-copy when version is updated
- Support manual removal of copied rules

## How It Works

Unlike the full `cursor-extension` that bundles all documentation locally, this extension:

1. Copies a lightweight rule file (`seekdb.mdc`) that instructs the AI assistant to:
   - Read the documentation catalog (`seekdb-docs-catalog.md`)
   - Identify relevant documentation based on user questions
   - Fetch documentation content from the official GitHub repository URLs
   
2. Provides a documentation catalog that maps topics to their GitHub URLs:
   - Base URL: `https://github.com/oceanbase/seekdb-doc/tree/V1.0.0/en-US/`
   - Full documentation path = Base URL + File Path from catalog

## Usage

### Add Rules to Current Project

1. Open the command palette:
   - Windows/Linux: Press `Ctrl+Shift+P`
   - macOS: Press `Cmd+Shift+P`

2. Type and select the command:
   - Type "Seekdb Rules" or "Add Seekdb Rules"
   - Select the `Add Seekdb Rules (URL-based)` command

3. The rules will be automatically added to:
   - `.cursor/rules/seekdb.mdc` file (rule file)
   - `.cursor/rules/seekdb-docs-catalog.md` file (documentation index)

### Remove Rules from Current Project

1. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)

2. Type and select the command:
   - Type "Remove Seekdb Rules"
   - Select the `Remove Seekdb Rules (URL-based)` command

3. The rules will be removed from:
   - `.cursor/rules/seekdb.mdc`
   - `.cursor/rules/seekdb-docs-catalog.md`

## Comparison with Full Extension

| Feature | cursor-extension (Full) | cursor-search-url-extension (URL-based) |
|---------|------------------------|----------------------------------------|
| Documentation | Bundled locally | Fetched from GitHub URLs |
| Size | Large (includes all docs) | Small (only rule files) |
| Offline support | ✅ Yes | ❌ Requires internet |
| Always latest docs | ❌ Need to update extension | ✅ Yes |
| Speed | ✅ Fast (local access) | Depends on network |

## Notes

- The extension does not automatically add rules; you need to manually execute the command
- If the rules already exist and the version is the same, it will skip adding
- Requires internet connection for the AI assistant to fetch documentation content
- Documentation is hosted at: `https://github.com/oceanbase/seekdb-doc/`

## License

MIT

