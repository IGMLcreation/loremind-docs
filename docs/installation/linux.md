---
sidebar_position: 2
title: Linux
---

# Prérequis matériel

:::warning
Attention, le guide suivant est valable pour les utilisateurs possédant une carte nvidia dans
leur machine. Je n'ai pas encore pu tester avec une carte AMD pour installer l'appli avec 
ollama en local
:::

# Installation sur Linux

Compatible Debian, Ubuntu, ZorinOS et autres distributions basées sur Ubuntu.
Je l'ai personnellement testé sur ZorinOS.

## Installation des drivers nvidia

Les drivers nvidia sont requis pour qu'Ollama puisse ce lancer sans encombre et éviter
les erreurs d'installation.
Pour cela, on va configurer le dépôt dans un premier temps pour avoir les drivers :

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

Et enfin, configurez le runtime docker pour nvidia :

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

## Installation de LoreMind

Prendre l'installeur sur le dépôt github :

https://github.com/IGMLcreation/LoreMind/tree/main/installers

=> Prendre les fichiers install.sh et secure-host-ollama.sh.
Le fichier install.sh est le bash qu'on va exécuter pour l'installation, le secure-host-ollama.sh est un script qui va sécuriser la communication
entre loremind et ollama si jamais vous avez installer ollama à part.

## Permettre l'exécution du .sh
Il faut rendre les .sh exécutables sur votre machine pour pouvoir les lancer. Dans le terminal, vous rendre là ou vous avez vos fichiers et faire :

```bash
chmod +x install.sh
chmod +x secure-host-ollama.sh
```

Vous pouvez enfin exécuter le install.sh avec la commande suivante :

```bash
./install.sh
```

:::warning
Attention de bien avoir donné tous les droits nécessaires pour la partie docker. Si docker n'est pas installé sur votre
machine, vous pouvez rencontrer une première erreur à cause des droits insuffisants pour votre utilisateur.
:::

## Ce que fait l'installeur

1. Installe **Docker** via le script officiel `get.docker.com` si absent.
2. Ajoute l'utilisateur courant au groupe `docker` (relogin nécessaire la 1ʳᵉ fois).
3. Installe LoreMind dans `~/.local/share/loremind`.
4. Génère un `.env` avec des mots de passe aléatoires.
5. Lance la stack et ouvre `http://localhost:8081`.

## Configuration des droits de votre user pour docker

Comme dit dans le warning, si les droits donner à votre utilisateur ne permettent pas d'exécuter les commandes docker,
voici la procédure à suivre.

### Création du groupe docker

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

### Activation des droits

```bash
newgrp docker
```

Et normalement il ne devrait plus y avoir d'erreur.