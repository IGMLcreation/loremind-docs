---
sidebar_position: 3
title: Configuration Ollama
---

# Configuration d'Ollama

[Ollama](https://ollama.com) est le moteur qui permet de faire tourner des modèles LLM en local sur votre machine. LoreMind propose trois modes selon votre setup.

## Quel mode choisir ?

Pendant l'installation, l'installeur pose deux questions successives.

### 1. *« Avez-vous déjà Ollama installé sur cette machine ? »*

#### Réponse : **Oui** → mode hôte sécurisé

L'installeur appelle automatiquement le helper `secure-host-ollama.{sh,ps1}` qui configure votre Ollama existant pour qu'il soit joignable par le conteneur Docker LoreMind **sans être exposé sur le réseau local ni Internet**.

- **Linux** : Ollama écoute sur l'IP de la passerelle Docker (`172.17.0.1` par défaut). Cette IP n'est jamais routée hors de la machine. Override systemd écrit dans `/etc/systemd/system/ollama.service.d/loremind-host.conf`.
- **Windows** : Ollama écoute sur `0.0.0.0` (techniquement nécessaire avec Docker Desktop) mais le pare-feu Windows est configuré pour ne **laisser passer que** le loopback et les sous-réseaux Docker Desktop. Règles ajoutées préfixées `LoreMind-Ollama-*`.

L'URL configurée dans `.env` est `OLLAMA_BASE_URL=http://host.docker.internal:11434`.

### 2. *« Voulez-vous installer Ollama via Docker maintenant ? »* (si la 1ʳᵉ réponse était Non)

#### Réponse : **Oui (défaut)** → mode embarqué

Un service `ollama` est ajouté à la stack via le profile Docker `local-ollama`. Ollama tourne dans un conteneur dédié, sur le réseau interne Docker, **jamais exposé au LAN ni à Internet**. Les modèles sont stockés dans le volume Docker `ollama-data` (persistants entre redémarrages et mises à jour).

- URL : `OLLAMA_BASE_URL=http://ollama:11434` (DNS interne Docker).
- Aucune configuration réseau ou pare-feu requise.
- Support GPU NVIDIA automatique si disponible.

**Pour télécharger un modèle** :

```bash
docker exec -it loremind-ollama ollama pull gemma3:27b
docker exec -it loremind-ollama ollama list
```

#### Réponse : **Non** → mode différé

Aucune configuration Ollama n'est appliquée. L'installeur termine sans Ollama. Vous configurez Ollama plus tard via la page **Paramètres** de LoreMind en y indiquant l'URL de votre serveur Ollama.

## Lancer le helper de sécurisation manuellement

Si vous avez choisi le mode différé puis installé Ollama plus tard sur votre poste, ou si vous voulez basculer du mode embarqué vers le mode hôte :

### Linux

```bash
bash secure-host-ollama.sh
# Puis dans .env du dossier d'installation :
#   OLLAMA_BASE_URL=http://host.docker.internal:11434
# Et : docker compose up -d
```

### Windows (PowerShell admin)

```powershell
.\secure-host-ollama.ps1
# Puis editez .env (dans %LOCALAPPDATA%\LoreMind\) :
#   OLLAMA_BASE_URL=http://host.docker.internal:11434
# Et : docker compose up -d
```

:::tip Réexécutable sans risque
Les helpers suppriment leurs anciennes règles avant de les recréer. Utile par exemple si vous avez réinitialisé Docker Desktop et que les sous-réseaux ont changé.
:::

## Annuler la configuration de sécurisation

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
