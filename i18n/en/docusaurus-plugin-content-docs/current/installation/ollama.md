---
sidebar_position: 3
title: Ollama Configuration
---

# Configuring Ollama

[Ollama](https://ollama.com) is the engine that lets you run LLM models locally on your machine. LoreMind offers three modes depending on your setup.

## Which mode should you choose?

During installation, the installer asks two successive questions.

### 1. *"Do you already have Ollama installed on this machine?"*

#### Answer: **Yes** → secure host mode

The installer automatically calls the `secure-host-ollama.{sh,ps1}` helper, which configures your existing Ollama so that it is reachable by the LoreMind Docker container **without being exposed to the local network or the Internet**.

- **Linux**: Ollama listens on the Docker gateway IP (`172.17.0.1` by default). This IP is never routed outside the machine. The systemd override is written to `/etc/systemd/system/ollama.service.d/loremind-host.conf`.
- **Windows**: Ollama listens on `0.0.0.0` (technically required with Docker Desktop), but the Windows firewall is configured to **only allow** the loopback and the Docker Desktop subnets. The added rules are prefixed `LoreMind-Ollama-*`.

The URL configured in `.env` is `OLLAMA_BASE_URL=http://host.docker.internal:11434`.

### 2. *"Do you want to install Ollama via Docker now?"* (if the first answer was No)

#### Answer: **Yes (default)** → embedded mode

An `ollama` service is added to the stack via the `local-ollama` Docker profile. Ollama runs in a dedicated container, on the internal Docker network, **never exposed to the LAN or the Internet**. Models are stored in the `ollama-data` Docker volume (persistent across restarts and updates).

- URL: `OLLAMA_BASE_URL=http://ollama:11434` (internal Docker DNS).
- No network or firewall configuration required.
- Automatic NVIDIA GPU support if available.

**To download a model**:

```bash
docker exec -it loremind-ollama ollama pull gemma3:27b
docker exec -it loremind-ollama ollama list
```

#### Answer: **No** → deferred mode

No Ollama configuration is applied. The installer finishes without Ollama. You configure Ollama later via LoreMind's **Settings** page by entering the URL of your Ollama server.

## Running the hardening helper manually

If you chose deferred mode and then installed Ollama later on your machine, or if you want to switch from embedded mode to host mode:

### Linux

```bash
bash secure-host-ollama.sh
# Then in the .env of the installation folder:
#   OLLAMA_BASE_URL=http://host.docker.internal:11434
# And: docker compose up -d
```

### Windows (PowerShell admin)

```powershell
.\secure-host-ollama.ps1
# Then edit .env (in %LOCALAPPDATA%\LoreMind\):
#   OLLAMA_BASE_URL=http://host.docker.internal:11434
# And: docker compose up -d
```

:::tip Safe to re-run
The helpers remove their old rules before recreating them. This is useful, for example, if you have reset Docker Desktop and the subnets have changed.
:::

## Undoing the hardening configuration

### Linux

```bash
sudo rm /etc/systemd/system/ollama.service.d/loremind-host.conf
sudo systemctl daemon-reload && sudo systemctl restart ollama
```

### Windows (PowerShell admin)

```powershell
Get-NetFirewallRule -DisplayName "LoreMind-Ollama-*" | Remove-NetFirewallRule
[Environment]::SetEnvironmentVariable("OLLAMA_HOST", $null, "User")
```
