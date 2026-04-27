---
sidebar_position: 5
title: Désinstallation
---

# Désinstallation

## Arrêter et supprimer la stack

Depuis le dossier d'installation :

```bash
cd <dossier d'install>
docker compose down -v
```

:::danger Le flag `-v` supprime aussi les volumes
Toutes les données (campagnes, fiches, lore, modèles Ollama téléchargés) seront définitivement effacées. Faites une sauvegarde au préalable si vous voulez conserver vos données.
:::

## Supprimer le dossier d'installation

### Linux

```bash
rm -rf ~/.local/share/loremind
```

### Windows

Supprimez le dossier `%LOCALAPPDATA%\LoreMind\` via l'explorateur ou en PowerShell :

```powershell
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\LoreMind"
```

## Annuler la sécurisation Ollama (mode hôte uniquement)

Si vous aviez choisi le mode hôte sécurisé pour Ollama, voir la section [Annuler la configuration de sécurisation](./ollama#annuler-la-configuration-de-sécurisation).
