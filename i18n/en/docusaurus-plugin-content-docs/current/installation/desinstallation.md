---
sidebar_position: 5
title: Uninstallation
---

# Uninstallation

The procedure depends on your installation mode.

## Desktop mode (installer)

### Windows

Uninstall **DM Loremind** like a regular application: *Windows Settings → Apps → Installed apps → DM Loremind → Uninstall*. Since the installation is per-user, no administrator rights are required.

### Linux

The AppImage installs nothing on the system: **simply delete the** `.AppImage` **file**.

### Removing your data

Uninstalling does **not** touch your data (it lives outside the installation folder). To erase everything, delete the `~/.loremind` folder:

```bash
rm -rf ~/.loremind          # Linux / macOS
```

```powershell
Remove-Item -Recurse -Force "$env:USERPROFILE\.loremind"   # Windows
```

## Docker mode

### Stop and remove the stack

From the installation folder:

```bash
cd <install folder>
docker compose down -v
```

:::danger[The `-v` flag also removes the volumes]
All data (campaigns, sheets, lore, downloaded Ollama models) will be permanently erased. Make a backup beforehand if you want to keep your data.
:::

### Remove the installation folder

#### Linux

```bash
rm -rf ~/.local/share/loremind
```

#### Windows

Delete the `%LOCALAPPDATA%\DM Loremind\` folder via File Explorer or in PowerShell:

```powershell
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\DM Loremind"
```

### Undo Ollama hardening (host mode only)

If you had chosen the secured host mode for Ollama, see the [Undoing the hardening configuration](./ollama#undoing-the-hardening-configuration) section.
