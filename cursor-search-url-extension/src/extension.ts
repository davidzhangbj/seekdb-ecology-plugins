import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Copy file from source to destination
 */
function copyFile(src: string, dest: string): void {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
}

/**
 * Delete file if exists
 */
function deleteFileIfExists(filePath: string): boolean {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return true;
    }
    return false;
}

/**
 * Get extension version from package.json
 */
function getExtensionVersion(context: vscode.ExtensionContext): string | null {
    try {
        const packageJsonPath = path.join(context.extensionPath, 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            return null;
        }
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
        return packageJson.version || null;
    } catch (error) {
        console.error('Error reading package.json:', error);
        return null;
    }
}

/**
 * Read version from version file
 */
function readVersionFile(versionFilePath: string): string | null {
    try {
        if (!fs.existsSync(versionFilePath)) {
            return null;
        }
        return fs.readFileSync(versionFilePath, 'utf-8').trim();
    } catch (error) {
        console.error('Error reading version file:', error);
        return null;
    }
}

/**
 * Write version to version file
 */
function writeVersionFile(versionFilePath: string, version: string): void {
    try {
        const dir = path.dirname(versionFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(versionFilePath, version, 'utf-8');
    } catch (error) {
        console.error('Error writing version file:', error);
    }
}

/**
 * Remove Seekdb rules from workspace .cursor/rules directory
 * @param silent If true, don't show any UI messages
 */
async function removeSeekdbRulesFromRules(silent: boolean = false) {
    try {
        // Get workspace root directory
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            if (!silent) {
                vscode.window.showWarningMessage('No workspace folder is open');
            }
            return;
        }

        const workspaceRoot = workspaceFolders[0].uri.fsPath;
        const rulesDir = path.join(workspaceRoot, '.cursor', 'rules');

        // Files to remove
        const seekdbMdcPath = path.join(rulesDir, 'seekdb.mdc');
        const seekdbCatalogPath = path.join(rulesDir, 'seekdb-docs-catalog.md');
        const versionFilePath = path.join(rulesDir, '.seekdb-url-version');

        let removedItems: string[] = [];

        // Remove files
        if (deleteFileIfExists(seekdbMdcPath)) {
            removedItems.push('seekdb.mdc');
            console.log(`Deleted file: ${seekdbMdcPath}`);
        }

        if (deleteFileIfExists(seekdbCatalogPath)) {
            removedItems.push('seekdb-docs-catalog.md');
            console.log(`Deleted file: ${seekdbCatalogPath}`);
        }

        if (deleteFileIfExists(versionFilePath)) {
            console.log(`Deleted version file: ${versionFilePath}`);
        }

        if (removedItems.length === 0) {
            if (!silent) {
                vscode.window.showInformationMessage('Seekdb rules not found in .cursor/rules directory');
            }
            return;
        }

        if (!silent) {
            vscode.window.showInformationMessage(`Seekdb rules successfully removed: ${removedItems.join(', ')}`);
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (!silent) {
            vscode.window.showErrorMessage(`Error removing Seekdb rules: ${errorMessage}`);
        }
        console.error(`Error removing Seekdb rules: ${errorMessage}`);
    }
}

/**
 * Copy Seekdb rules to workspace .cursor/rules directory
 * Only copy when version is different or files do not exist
 */
async function copySeekdbRulesToRules(context: vscode.ExtensionContext) {
    try {
        // Get workspace root directory
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showWarningMessage('No workspace folder is open');
            return;
        }

        const workspaceRoot = workspaceFolders[0].uri.fsPath;
        const rulesDir = path.join(workspaceRoot, '.cursor', 'rules');

        // Get extension's seekdb-rules directory path
        const extensionPath = context.extensionPath;
        const seekdbRulesPath = path.join(extensionPath, 'src', 'seekdb-rules');

        // Source files
        const seekdbMdcSource = path.join(seekdbRulesPath, 'seekdb.mdc');
        const seekdbCatalogSource = path.join(seekdbRulesPath, 'seekdb-docs-catalog.md');

        // Check if source files exist
        if (!fs.existsSync(seekdbMdcSource)) {
            vscode.window.showErrorMessage(`seekdb.mdc file not found: ${seekdbMdcSource}`);
            return;
        }

        if (!fs.existsSync(seekdbCatalogSource)) {
            vscode.window.showErrorMessage(`seekdb-docs-catalog.md file not found: ${seekdbCatalogSource}`);
            return;
        }

        // Target files
        const seekdbMdcTarget = path.join(rulesDir, 'seekdb.mdc');
        const seekdbCatalogTarget = path.join(rulesDir, 'seekdb-docs-catalog.md');
        const versionFilePath = path.join(rulesDir, '.seekdb-url-version');

        // Get current extension version
        const currentVersion = getExtensionVersion(context);
        
        if (currentVersion) {
            // Check version file
            const existingVersion = readVersionFile(versionFilePath);

            // If version matches and both files exist, skip copying
            if (existingVersion === currentVersion && 
                fs.existsSync(seekdbMdcTarget) && 
                fs.existsSync(seekdbCatalogTarget)) {
                console.log(`Seekdb rules already exist with version ${currentVersion}, skipping copy`);
                vscode.window.showInformationMessage(`Seekdb rules already up to date (version ${currentVersion})`);
                return;
            }

            if (existingVersion && existingVersion !== currentVersion) {
                console.log(`Version mismatch (existing: ${existingVersion}, current: ${currentVersion}), updating...`);
            }
        }

        // Ensure destination directory exists
        if (!fs.existsSync(rulesDir)) {
            fs.mkdirSync(rulesDir, { recursive: true });
        }

        // Copy files
        copyFile(seekdbMdcSource, seekdbMdcTarget);
        console.log(`Copied ${seekdbMdcSource} to ${seekdbMdcTarget}`);

        copyFile(seekdbCatalogSource, seekdbCatalogTarget);
        console.log(`Copied ${seekdbCatalogSource} to ${seekdbCatalogTarget}`);

        // Write version file
        if (currentVersion) {
            writeVersionFile(versionFilePath, currentVersion);
        }

        // Prompt user to reload window
        const reloadAction = await vscode.window.showInformationMessage(
            'Seekdb rules (URL-based) successfully added. Please reload the window to apply the changes.',
            'Reload Window'
        );
        if (reloadAction === 'Reload Window') {
            vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(`Error copying Seekdb rules: ${errorMessage}`);
        console.error('Error copying Seekdb rules:', error);
    }
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Seekdb URL-based Rules for Cursor extension is now active!');

    // Register command to copy rules
    const copyCommand = vscode.commands.registerCommand('seekdb-url-docs.copyToRules', () => {
        copySeekdbRulesToRules(context);
    });
    context.subscriptions.push(copyCommand);

    // Register command to remove rules
    const removeCommand = vscode.commands.registerCommand('seekdb-url-docs.removeFromRules', () => {
        removeSeekdbRulesFromRules();
    });
    context.subscriptions.push(removeCommand);
}

export async function deactivate() {
    // Note: We don't automatically cleanup files here because:
    // 1. deactivate() is called on window reload, which would incorrectly delete files
    // 2. Extension uninstall may not call deactivate()
    // Users can manually remove files using the 'seekdb-url-docs.removeFromRules' command if needed
}

