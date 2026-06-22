---
sidebar_position: 5
title: Désinstallation
---

# Désinstallation

La procédure dépend de votre mode d'installation.

## Mode bureau (installeur)

### Windows

Désinstallez **DM Loremind** comme une application classique : *Paramètres Windows → Applications → Applications installées → DM Loremind → Désinstaller*. L'installation étant par utilisateur, aucun droit administrateur n'est requis.

### Linux

L'AppImage n'installe rien dans le système : **supprimez simplement le fichier** `.AppImage`.

### Supprimer vos données

La désinstallation ne touche **pas** à vos données (elles vivent hors du dossier d'installation). Pour tout effacer, supprimez le dossier `~/.loremind` :

```bash
rm -rf ~/.loremind          # Linux / macOS
```

```powershell
Remove-Item -Recurse -Force "$env:USERPROFILE\.loremind"   # Windows
```

## Mode Docker

### Arrêter et supprimer la stack

Depuis le dossier d'installation :

```bash
cd <dossier d'install>
docker compose down -v
```

:::danger[Le flag `-v` supprime aussi les volumes]
Toutes les données (campagnes, fiches, lore, modèles Ollama téléchargés) seront définitivement effacées. Faites une sauvegarde au préalable si vous voulez conserver vos données.
:::

### Supprimer le dossier d'installation

#### Linux

```bash
rm -rf ~/.local/share/loremind
```

#### Windows

Supprimez le dossier `%LOCALAPPDATA%\DM Loremind\` via l'explorateur ou en PowerShell :

```powershell
Remove-Item -Recurse -Force "$env:LOCALAPPDATA\DM Loremind"
```

### Annuler la sécurisation Ollama (mode hôte uniquement)

Si vous aviez choisi le mode hôte sécurisé pour Ollama, voir la section [Annuler la configuration de sécurisation](./ollama#annuler-la-configuration-de-sécurisation).
