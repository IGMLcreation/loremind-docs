---
sidebar_position: 1
---

# Assistant IA

LoreMind embarque un assistant IA contextuel : sur n'importe quelle entité
(page Lore, scène, PJ, PNJ, arc, chapitre…), un bouton ✨ ouvre un panneau
latéral où vous pouvez dialoguer avec un modèle de langage qui **connaît
l'entité ouverte**.

## Philosophie

L'IA ne remplace pas le MJ — elle assiste. Cas d'usage typiques :

- **Combler les vides** : générer une description d'un lieu ou d'un PNJ vague
- **Propositions narratives** : "suggère 3 motivations pour ce PNJ", "comment ce combat pourrait basculer ?"
- **Cohérence** : "ce PNJ est-il cohérent avec le Lore de la cité de Vaeril ?"
- **Accélération** : générer le squelette d'un arc en quelques secondes, à raffiner ensuite

## Fournisseurs supportés

Deux fournisseurs LLM sont configurables dans les **Settings** :

- **Ollama** — exécution locale (100% privée, vos données ne quittent pas votre machine). Demande une machine avec une carte graphique.
- **1min.ai** — service cloud agrégateur (Anthropic, OpenAI, Google, Mistral…). Compte payant requis chez 1min.ai.

Le choix se fait globalement (un fournisseur actif à la fois), avec un modèle
sélectionné par défaut. Vous pouvez basculer à tout moment.

## Contexte injecté automatiquement

Quand vous ouvrez le chat sur une entité, le backend construit un prompt qui
inclut :

1. **L'entité elle-même** — ses champs significatifs (pas les images ni les notes ultra-volumineuses)
2. **Le Lore relié** — pages liées, pour la cohérence d'univers
3. **Le Game System** — sections de règles pertinentes (Combat, Classes…) selon l'intention détectée
4. **L'historique de conversation** — les messages précédents dans le drawer

Vous n'avez **pas besoin** de re-coller manuellement ce contexte — il est calculé.

## Pages détaillées

- [Configuration des fournisseurs](/docs/assistant-ia/fournisseurs) — Ollama et 1min.ai
- [Génération de pages Lore](/docs/assistant-ia/generation-pages) — fill / regenerate des champs templates
- [Bonnes pratiques de prompts](/docs/assistant-ia/bonnes-pratiques) — pour de meilleurs résultats
