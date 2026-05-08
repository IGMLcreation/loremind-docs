---
sidebar_position: 2
---

# Settings — paramètres applicatifs

L'écran **Settings** centralise les paramètres globaux de LoreMind.

## IA

Configuration du fournisseur LLM actif. Détails dans
[Assistant IA → Fournisseurs](/docs/assistant-ia/fournisseurs).

- **Fournisseur** : Ollama ou 1min.ai
- **Modèle par défaut** : modèle utilisé pour les chats
- **Paramètres avancés** : température, max tokens, seed (selon fournisseur)

## Langue

Pour le moment, l'interface est en français.
J'ajouterai bientôt aumoins une traduction pour l'anglais.

## Comportement

- **Mises à jour** : activer/désactiver la détection auto
- **Bannière "version disponible"** : afficher / masquer

## Persistence

Les settings sont stockés en base aux côtés de vos données. Pour les
réinitialiser : truncate de la table `app_settings` (à faire en connaissance
de cause).
