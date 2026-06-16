---
sidebar_position: 5
title: Uninstallation
---

# Uninstallation

## Stop and remove the stack

From the installation folder:

```bash
cd <install folder>
docker compose down -v
```

:::danger The `-v` flag also removes the volumes
All data (campaigns, sheets, lore, downloaded Ollama models) will be permanently erased. Make a backup beforehand if you want to keep your data.
:::

## Remove the installation folder

### Linux

```bash
rm -rf ~/.local/share/loremind
```

### Windows

Delete the `%LOCALAPPDATA%\LoreMind\` folder via File Explorer or in PowerShell:

```powershell
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\LoreMind"
```

## Undo Ollama hardening (host mode only)

If you had chosen the secured host mode for Ollama, see the [Undo the hardening configuration](./ollama#undoing-the-hardening-configuration) section.
