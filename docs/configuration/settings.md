---
sidebar_position: 2
---

# Settings — paramètres applicatifs

L'écran **Paramètres** centralise les réglages globaux de DM Loremind :
intelligence artificielle, embeddings (RAG), langue et sauvegarde des données.

## IA

Configuration du fournisseur d'IA actif. Détails dans
[Assistant IA → Fournisseurs](/docs/assistant-ia/fournisseurs).

- **Fournisseur** : cinq fournisseurs sont disponibles — **Ollama** (local),
  **1min.ai**, **OpenRouter**, **Mistral** et **Gemini** (cloud).
- **Modèle par défaut** : un modèle sélectionné par fournisseur, utilisé pour
  les générations.

## Paramètres avancés

Au-delà du choix du modèle, quelques réglages fins sont disponibles :

- **Fenêtre de contexte** (num_ctx) — pour Ollama, définit la quantité de texte
  que le modèle peut prendre en compte à la fois.
- **Import PDF** — taille des morceaux (chunks) découpés à l'import, et délai
  d'expiration (timeout) des appels à l'IA.

## Embeddings (Atelier RAG)

Les embeddings alimentent la recherche sémantique de l'Atelier RAG :

- **Fournisseur d'embeddings** : Ollama ou Mistral.
- **Nombre d'extraits récupérés** (top-K) : combien de passages pertinents sont
  remontés pour nourrir le contexte.
- **Auto-pull du modèle d'embeddings** : téléchargement automatique du modèle
  d'embeddings si nécessaire.

## Langue

L'interface est disponible en **français** et en **anglais**, traductions
complètes. Le sélecteur se trouve dans **Paramètres → Langue** ; le changement
s'applique à chaud, sans redémarrage, et votre choix est mémorisé.

## Sauvegarde des données

Depuis les Paramètres, vous pouvez exporter et réimporter l'intégralité de vos
données. Voir [Sauvegardes et restauration](/docs/configuration/sauvegardes).

## Persistance

Les réglages d'IA et d'embeddings ne vivent pas dans la base de données : ils
sont conservés dans un fichier de configuration côté service Brain
(`data/settings.json`). Toute modification est prise en compte dès la requête
suivante, sans redémarrage de l'application.
