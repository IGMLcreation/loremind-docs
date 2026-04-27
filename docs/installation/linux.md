---
sidebar_position: 2
title: Linux
---

# Installation sur Linux

Compatible Debian, Ubuntu, Fedora et Arch Linux.
Partie en cours de préparation, vous pouvez néanmoins utiliser l'installeur install.sh avec 
secure-host-ollama.sh dans le même esprit que l'installeur pour [Windows](/docs/installation/windows)

## Installation en une commande

```bash
curl -fsSL https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.sh | bash
```

## Ce que fait l'installeur

1. Installe **Docker** via le script officiel `get.docker.com` si absent.
2. Ajoute l'utilisateur courant au groupe `docker` (relogin nécessaire la 1ʳᵉ fois).
3. Installe LoreMind dans `~/.local/share/loremind`.
4. Génère un `.env` avec des mots de passe aléatoires.
5. Lance la stack et ouvre `http://localhost:8081`.