---
sidebar_position: 1
title: Windows 10 / 11
---

# Installation sur Windows 10 / 11

L'installeur Windows automatise l'intégralité du setup : WSL2, Docker Desktop, génération du `.env` sécurisé, lancement de la stack.

## Prérequis

- Windows 10 (version 2004+) ou Windows 11.
- Compte avec droits administrateur.
- Connexion Internet pour télécharger Docker Desktop et les images.

## Procédure

1. **Téléchargez les fichiers** depuis le [repo GitHub](https://github.com/IGMLcreation/LoreMind/tree/main/installers) dans un même dossier (par exemple `Téléchargements\LoreMind\`) :
   - [`install.bat`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.bat) — lanceur
   - [`install.ps1`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/install.ps1) — script principal
   - [`secure-host-ollama.ps1`](https://raw.githubusercontent.com/IGMLcreation/LoreMind/main/installers/secure-host-ollama.ps1) — *uniquement si vous avez déjà Ollama installé sur votre PC*

2. **Clic-droit sur `install.bat`** → **Exécuter en tant qu'administrateur**.

3. Acceptez le prompt UAC.

## Ce que fait l'installeur

1. Vérifie / installe **WSL2** (un reboot peut être nécessaire — relancer le script après).
2. Vérifie / installe **Docker Desktop** via `winget`.
3. Vous demande quelques choix (compte admin, fournisseur LLM, mode Ollama, mises à jour auto).
4. Génère `%LOCALAPPDATA%\LoreMind\.env` avec des mots de passe aléatoires.
5. Lance la stack et ouvre `http://localhost:8081` dans votre navigateur.

:::info Pourquoi `install.bat` ?
Le `.bat` sert juste à lancer `install.ps1` proprement (UAC + ExecutionPolicy adaptée à la session, sans modifier les paramètres système). Il est purement déclaratif et auditable en quelques lignes.
:::

## Faux positifs antivirus

Certains antivirus peuvent flagger les scripts PowerShell. Si c'est le cas :

- Vérifiez que vous téléchargez bien depuis l'organisation officielle [`IGMLcreation/LoreMind`](https://github.com/IGMLcreation/LoreMind) sur GitHub.
- Le code source des installeurs est entièrement public et auditable.
- Vous pouvez ajouter une exception ponctuelle pour le dossier de téléchargement.

## Étapes suivantes

- [Configurer Ollama](./ollama) (moteur LLM local)
- [Activer les mises à jour automatiques](./mises-a-jour)
