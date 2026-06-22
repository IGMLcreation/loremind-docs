---
sidebar_position: 1
title: Installation bureau (double-clic)
---

# Installation bureau (double-clic)

La manière **la plus simple** d'utiliser DM Loremind : un installeur autonome, **sans Docker, sans Java ni Python à installer**. Vous double-cliquez, et l'application s'ouvre dans votre navigateur.

:::info[Pour un usage serveur / homelab]
Si vous voulez héberger DM Loremind sur un serveur ou y accéder depuis plusieurs machines du réseau, préférez l'installation **Docker** ([Windows](/docs/installation/docker#windows) / [Linux](/docs/installation/docker#linux)).
:::

## 1. Télécharger

Rendez-vous sur la page **[Télécharger](/download)** et choisissez votre plateforme :

- **Windows** → fichier `.msi`
- **Linux** → fichier `.AppImage`

:::tip[Prérequis matériel]
L'IA fonctionne via le **cloud** (1min.ai, Mistral, Google AI Studio, OpenRouter) — **aucun prérequis particulier**.
Pour faire tourner l'IA **en local** via Ollama, prévoir au moins **16 Go de RAM** ; pour du confort, viser **32 Go de RAM** et un **GPU NVIDIA avec 16 Go de VRAM**. Voir [Configuration Ollama](/docs/installation/ollama).
:::

## 2. Installer

### Windows (`.msi`)

1. Double-cliquez sur le fichier `.msi` téléchargé.
2. Suivez l'assistant (dossier d'installation, raccourcis). **Aucun droit administrateur requis** — l'installation se fait pour votre seul compte utilisateur.
3. Sur le dernier écran, laissez cochée la case **« Lancer DM Loremind »** pour démarrer immédiatement.

L'application apparaît ensuite dans le **menu Démarrer** (groupe « DM Loremind »).

### Linux (`.AppImage`)

1. Rendez le fichier exécutable :
   ```bash
   chmod +x DM_Loremind-*.AppImage
   ```
2. Double-cliquez dessus (ou lancez-le depuis un terminal : `./DM_Loremind-*.AppImage`).

:::warning[libfuse2 (Ubuntu 22.04+ et dérivés)]
Certaines distributions récentes n'incluent plus `libfuse2`, requis par les AppImage. Si le fichier refuse de démarrer :

```bash
sudo apt install libfuse2
```

Alternative sans installation : lancez-le avec `./DM_Loremind-*.AppImage --appimage-extract-and-run`.
:::

## 3. Premier lancement

- Un **écran de démarrage** s'affiche le temps que le moteur démarre (quelques secondes), puis l'application **s'ouvre automatiquement dans votre navigateur** par défaut :

![écran de démarrage](/img/screenshots/executable/splashscreen.png)

- Au tout premier lancement, la langue par défaut est le français pour un système français, ou anglais pour tous les autres.
- Tout tourne **en local** : l'interface est servie sur `http://localhost:8080`.

## Contrôler l'application

Une **icône dans la zone de notification** (barre des tâches, sur Windows et la plupart des bureaux Linux) permet via un clic droit de :

- **Ouvrir** l'application dans le navigateur ;
- **Modifier la configuration** (port, identifiants admin) ;
- **Ouvrir le dossier** de données ;
- **Quitter** proprement (ce qui arrête aussi le moteur IA en arrière-plan).

![systray DM Loremin](/img/screenshots/executable/systray.png)

## Où sont mes données ?

Tout vit dans **`~/.loremind`** (`%USERPROFILE%\.loremind` sous Windows), **en dehors** du dossier d'installation — donc jamais touché par une mise à jour :

- la **base de données** (H2, en fichier) ;
- les **images** ;
- la configuration **`loremind.properties`** : port (`8080` par défaut) et identifiants admin (`admin` / `admin` par défaut).

Vous pouvez ajuster ces réglages via l'icône systray → **« Modifier la configuration »** (pris en compte au prochain démarrage).

## Et ensuite ?

- [Configuration Ollama](/docs/installation/ollama) — pour une IA **100 % locale**.
- [Mises à jour](/docs/installation/mises-a-jour) — l'application vous **notifie** des nouvelles versions.
- [Settings](/docs/configuration/settings) — les paramètres applicatifs (fournisseurs IA, etc.).
