---
sidebar_position: 2
title: Installation Docker (homelab)
---

# Installation Docker (homelab / serveur)

Cette méthode fait tourner DM Loremind en **conteneurs Docker**. À privilégier pour un **serveur / homelab** ou un **accès depuis plusieurs machines** du réseau.

:::tip[Pour un usage simple sur un seul PC]
Préférez l'[installation bureau (double-clic)](/docs/installation/bureau) : plus simple, sans Docker ni configuration.
:::

## Prérequis matériel

:::tip[IA en local (Ollama)]
Pour faire tourner l'IA **en local** via Ollama, prévoir **au moins 16 Go de RAM** et un CPU/GPU moderne. Avec un modèle léger comme `gemma4:e4b`, 16 Go suffisent mais l'inférence reste lente ; pour du confort, viser **32 Go de RAM** et un **GPU NVIDIA avec 16 Go de VRAM**.

Si vous utilisez une **IA cloud** (1min.ai, Mistral, Google AI Studio, OpenRouter), aucun prérequis matériel particulier.
:::

## Windows

![Installeur Windows de DM Loremind](/img/screenshots/install_windows/Install_windows.png)

L'installeur Windows automatise l'intégralité du setup : WSL2, Docker Desktop, génération du `.env` sécurisé, lancement de la stack.

**Prérequis** : Windows 10 (version 2004+) ou Windows 11, un compte avec **droits administrateur**, et une connexion Internet (téléchargement de Docker Desktop et des images).

### Procédure

1. **Téléchargez les fichiers** depuis le [repo GitHub](https://github.com/IGMLcreation/LoreMind/tree/main/installers) dans un même dossier (par exemple `Téléchargements\DM Loremind\`) :
   - [`install.bat`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.bat) — lanceur
   - [`install.ps1`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.ps1) — script principal
   - [`secure-host-ollama.ps1`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/secure-host-ollama.ps1) — *uniquement si vous avez déjà Ollama installé sur votre PC*
2. **Clic-droit sur `install.bat`** → **Exécuter en tant qu'administrateur**.
3. Acceptez le prompt UAC.

### Ce que fait l'installeur

1. Vérifie / installe **WSL2** (un reboot peut être nécessaire — relancer le script après).
2. Vérifie / installe **Docker Desktop** via `winget`.
3. C'est la partie la plus importante : le programme vous demande de choisir le nom d'utilisateur / mot de passe pour votre compte administrateur. Le navigateur vous demandera ces informations lorsque vous vous connecterez à l'application (ceci sécurise notamment la partie *settings*).
4. Lorsqu'on vous demande le choix entre Ollama et 1min.ai lors de l'installation, vous pouvez laisser vide : Ollama sera utilisé en premier par défaut.
5. Une fois ceci fait, l'application va tenter d'installer Ollama si vous le souhaitez : voir [Configurer Ollama](/docs/installation/ollama).
6. Génère `%LOCALAPPDATA%\DM Loremind\.env` avec des mots de passe aléatoires.
7. Lance la stack et ouvre `http://localhost:8081` dans votre navigateur.

:::info[Pourquoi install.bat ?]
Le `.bat` sert juste à lancer `install.ps1` proprement (UAC + ExecutionPolicy adaptée à la session, sans modifier les paramètres système). Il est purement déclaratif et auditable en quelques lignes.
:::

### Faux positifs antivirus

Certains antivirus peuvent flagger les scripts PowerShell. Si c'est le cas :

- Vérifiez que vous téléchargez bien depuis l'organisation officielle [`IGMLcreation/LoreMind`](https://github.com/IGMLcreation/LoreMind) sur GitHub.
- Le code source des installeurs est entièrement public et auditable.
- Vous pouvez ajouter une exception ponctuelle pour le dossier de téléchargement.

## Linux

Compatible Debian, Ubuntu, ZorinOS et autres distributions basées sur Ubuntu (testé personnellement sur ZorinOS).

:::warning[Carte graphique NVIDIA]
Ce guide vise les machines équipées d'une **carte NVIDIA**. L'installation avec Ollama en local sur une carte **AMD** n'a pas encore été testée.
:::

### Installation des drivers NVIDIA

Les drivers NVIDIA sont requis pour qu'Ollama se lance sans encombre et éviter les erreurs d'installation. On configure d'abord le dépôt :

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
&& curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

Ensuite, installez le toolkit :

```bash
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
```

Et enfin, configurez le runtime Docker pour NVIDIA :

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

### Installation de DM Loremind

Récupérez l'installeur sur le [dépôt GitHub](https://github.com/IGMLcreation/LoreMind/tree/main/installers) : les fichiers `install.sh` et `secure-host-ollama.sh`. Le `install.sh` est le script d'installation ; le `secure-host-ollama.sh` sécurise la communication entre DM Loremind et Ollama si vous avez installé Ollama à part.

Rendez les scripts exécutables, dans le dossier où ils se trouvent :

```bash
chmod +x install.sh
chmod +x secure-host-ollama.sh
```

Puis lancez l'installation :

```bash
./install.sh
```

:::warning[Droits Docker]
Assurez-vous d'avoir les droits Docker nécessaires. Si Docker n'est pas installé sur votre machine, vous pouvez rencontrer une première erreur à cause des droits insuffisants pour votre utilisateur — voir [Droits Docker](#droits-docker) ci-dessous.
:::

### Ce que fait l'installeur

1. Installe **Docker** via le script officiel `get.docker.com` si absent.
2. Ajoute l'utilisateur courant au groupe `docker` (relogin nécessaire la 1ʳᵉ fois).
3. Installe DM Loremind dans `~/.local/share/loremind`.
4. Génère un `.env` avec des mots de passe aléatoires.
5. Lance la stack et ouvre `http://localhost:8081`.

### Droits Docker

Si les droits de votre utilisateur ne permettent pas d'exécuter les commandes Docker, voici la procédure :

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

Puis activez les droits dans la session courante :

```bash
newgrp docker
```

Et normalement il ne devrait plus y avoir d'erreur.

## Étapes suivantes

- [Configurer Ollama](/docs/installation/ollama) — moteur LLM local.
- [Mises à jour](/docs/installation/mises-a-jour).
