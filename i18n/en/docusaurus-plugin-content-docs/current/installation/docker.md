---
sidebar_position: 2
title: Docker install (homelab)
---

# Docker install (homelab / server)

This method runs DM Loremind in **Docker containers**. Prefer it for a **server / homelab** or for **access from several machines** on the network.

:::tip[For simple use on a single PC]
Prefer the [desktop install (double-click)](/docs/installation/bureau): simpler, with no Docker or configuration.
:::

## Hardware requirements

:::tip[Local AI (Ollama)]
To run the AI **locally** via Ollama, plan for **at least 16 GB of RAM** and a modern CPU/GPU. With a lightweight model such as `gemma4:e4b`, 16 GB is enough but inference stays slow; for a comfortable experience, aim for **32 GB of RAM** and an **NVIDIA GPU with 16 GB of VRAM**.

If you use a **cloud AI** (1min.ai, Mistral, Google AI Studio, OpenRouter), no particular hardware requirement.
:::

## Windows

![DM Loremind Windows installer](/img/screenshots/install_windows/Install_windows.png)

The Windows installer automates the entire setup: WSL2, Docker Desktop, generating the secure `.env`, launching the stack.

**Prerequisites**: Windows 10 (version 2004+) or Windows 11, an account with **administrator rights**, and an Internet connection (to download Docker Desktop and the images).

### Procedure

1. **Download the files** from the [GitHub repo](https://github.com/IGMLcreation/LoreMind/tree/main/installers) into a single folder (for example `Downloads\DM Loremind\`):
   - [`install.bat`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.bat) — launcher
   - [`install.ps1`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.ps1) — main script
   - [`secure-host-ollama.ps1`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/secure-host-ollama.ps1) — *only if you already have Ollama installed on your PC*
2. **Right-click `install.bat`** → **Run as administrator**.
3. Accept the UAC prompt.

### What the installer does

1. Checks / installs **WSL2** (a reboot may be required — re-run the script afterwards).
2. Checks / installs **Docker Desktop** via `winget`.
3. This is the most important part: the program asks you to choose the username / password for your administrator account. The browser will ask you for these credentials when you log in to the application (this notably secures the *settings* part).
4. When you are asked to choose between Ollama and 1min.ai during installation, you can leave it blank: Ollama will be used first by default.
5. Once this is done, the application will try to install Ollama if you want it to: see [Configure Ollama](/docs/installation/ollama).
6. Generates `%LOCALAPPDATA%\DM Loremind\.env` with random passwords.
7. Launches the stack and opens `http://localhost:8081` in your browser.

:::info[Why install.bat?]
The `.bat` simply launches `install.ps1` cleanly (UAC + an ExecutionPolicy scoped to the session, without changing any system settings). It is purely declarative and auditable in a few lines.
:::

### Antivirus false positives

Some antivirus software may flag PowerShell scripts. If that happens:

- Check that you are indeed downloading from the official organization [`IGMLcreation/LoreMind`](https://github.com/IGMLcreation/LoreMind) on GitHub.
- The installers' source code is fully public and auditable.
- You can add a one-off exception for the download folder.

## Linux

Compatible with Debian, Ubuntu, ZorinOS, and other Ubuntu-based distributions (tested personally on ZorinOS).

:::warning[NVIDIA graphics card]
This guide targets machines equipped with an **NVIDIA card**. Installation with local Ollama on an **AMD** card has not yet been tested.
:::

### Installing the NVIDIA drivers

The NVIDIA drivers are required for Ollama to start without trouble and to avoid installation errors. First, configure the repository:

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
&& curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

Then install the toolkit:

```bash
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
```

And finally, configure the Docker runtime for NVIDIA:

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

### Installing DM Loremind

Get the installer from the [GitHub repo](https://github.com/IGMLcreation/LoreMind/tree/main/installers): the `install.sh` and `secure-host-ollama.sh` files. `install.sh` is the installation script; `secure-host-ollama.sh` secures the communication between DM Loremind and Ollama if you installed Ollama separately.

Make the scripts executable, in the folder where they are located:

```bash
chmod +x install.sh
chmod +x secure-host-ollama.sh
```

Then run the installation:

```bash
./install.sh
```

:::warning[Docker rights]
Make sure you have the necessary Docker rights. If Docker is not installed on your machine, you may run into a first error because of insufficient rights for your user — see [Docker rights](#docker-rights) below.
:::

### What the installer does

1. Installs **Docker** via the official `get.docker.com` script if absent.
2. Adds the current user to the `docker` group (re-login required the first time).
3. Installs DM Loremind in `~/.local/share/loremind`.
4. Generates a `.env` with random passwords.
5. Launches the stack and opens `http://localhost:8081`.

### Docker rights

If your user's rights do not allow running Docker commands, here is the procedure:

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

Then enable the rights in the current session:

```bash
newgrp docker
```

And normally there should be no more errors.

## Next steps

- [Configure Ollama](/docs/installation/ollama) — local LLM engine.
- [Updates](/docs/installation/mises-a-jour).
