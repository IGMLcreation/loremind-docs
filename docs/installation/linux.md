---
sidebar_position: 2
title: Linux
---

# Installation sur Linux

Compatible Debian, Ubuntu, Fedora et Arch Linux.

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

## Mode non-interactif

Pour automatiser l'installation (CI, provisioning) sans aucune question :

```bash
NON_INTERACTIVE=1 bash install.sh
```

Toutes les valeurs par défaut sont utilisées.

## Variables d'environnement

| Variable          | Défaut                    | Effet                                       |
|-------------------|---------------------------|---------------------------------------------|
| `WEB_PORT`        | `8081`                    | Port HTTP de l'UI                           |
| `INSTALL_DIR`     | `~/.local/share/loremind` | Dossier d'installation                      |
| `NON_INTERACTIVE` | `0`                       | `1` = aucune question, valeurs par défaut   |

**Exemple** — installation sur le port 9000 sans aucune question :

```bash
WEB_PORT=9000 NON_INTERACTIVE=1 bash install.sh
```

## Étapes suivantes

- [Configurer Ollama](./ollama) (moteur LLM local)
- [Activer les mises à jour automatiques](./mises-a-jour)
