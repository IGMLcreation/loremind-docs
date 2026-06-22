---
sidebar_position: 1
title: Desktop install (double-click)
---

# Desktop install (double-click)

The **simplest** way to use DM Loremind: a standalone installer, **with no Docker, Java, or Python to install**. You double-click, and the application opens in your browser.

:::info[For server / homelab use]
If you want to host DM Loremind on a server or access it from several machines on your network, prefer the **Docker** install ([Windows](/docs/installation/docker#windows) / [Linux](/docs/installation/docker#linux)).
:::

## 1. Download

Head to the **[Download](/download)** page and pick your platform:

- **Windows** → `.msi` file
- **Linux** → `.AppImage` file

:::tip[Hardware requirements]
The AI runs through the **cloud** (1min.ai, Mistral, Google AI Studio, OpenRouter) — **no particular requirement**.
To run the AI **locally** via Ollama, plan for at least **16 GB of RAM**; for a comfortable experience, aim for **32 GB of RAM** and an **NVIDIA GPU with 16 GB of VRAM**. See [Ollama configuration](/docs/installation/ollama).
:::

## 2. Install

### Windows (`.msi`)

1. Double-click the downloaded `.msi` file.
2. Follow the wizard (installation folder, shortcuts). **No administrator rights required** — the installation is done for your user account only.
3. On the last screen, leave the **"Launch DM Loremind"** box checked to start right away.

The application then appears in the **Start menu** (under the "DM Loremind" group).

### Linux (`.AppImage`)

1. Make the file executable:
   ```bash
   chmod +x DM_Loremind-*.AppImage
   ```
2. Double-click it (or launch it from a terminal: `./DM_Loremind-*.AppImage`).

:::warning[libfuse2 (Ubuntu 22.04+ and derivatives)]
Some recent distributions no longer include `libfuse2`, which is required by AppImages. If the file refuses to start:

```bash
sudo apt install libfuse2
```

Alternative without installing anything: launch it with `./DM_Loremind-*.AppImage --appimage-extract-and-run`.
:::

## 3. First launch

- A **splash screen** is displayed while the engine starts up (a few seconds), then the application **opens automatically in your default browser**:

![splash screen](/img/screenshots/executable/splashscreen.png)

- On the very first launch, the default language is French on a French system, or English for all others.
- Everything runs **locally**: the interface is served at `http://localhost:8080`.

## Controlling the application

A **notification-area icon** (taskbar, on Windows and most Linux desktops) lets you, via a right-click:

- **Open** the application in the browser;
- **Edit the configuration** (port, admin credentials);
- **Open the data folder**;
- **Quit** cleanly (which also stops the background AI engine).

![systray DM Loremind](/img/screenshots/executable/systray.png)

## Where is my data?

Everything lives in **`~/.loremind`** (`%USERPROFILE%\.loremind` on Windows), **outside** the installation folder — so it is never touched by an update:

- the **database** (H2, file-based);
- the **images**;
- the **`loremind.properties`** configuration: port (`8080` by default) and admin credentials (`admin` / `admin` by default).

You can adjust these settings via the systray icon → **"Edit the configuration"** (applied on the next startup).

## What's next?

- [Ollama configuration](/docs/installation/ollama) — for a **100% local** AI.
- [Updates](/docs/installation/mises-a-jour) — the application **notifies** you of new versions.
- [Settings](/docs/configuration/settings) — the application settings (AI providers, etc.).
