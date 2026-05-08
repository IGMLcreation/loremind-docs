---
sidebar_position: 1
---

# Game System

Un **Game System** représente un système de JDR (D&D 5e, Nimble, Cthulhu,
votre homebrew…). Il porte deux choses :

1. **Les règles** — markdown structuré par titres H2, sélectivement injecté dans les prompts IA
2. **Les templates de fiches PJ et PNJ** — structure des champs (texte, nombre, images, listes clé/valeur)

Une campagne référence un Game System ; toutes les fiches PJ/PNJ de cette
campagne suivent les templates du système.

## Pourquoi séparer les systèmes ?

Vous pouvez :

- Avoir plusieurs campagnes sur le même système (D&D)
- Avoir plusieurs systèmes coexistant (D&D + Nimble en parallèle)
- Reseter un homebrew sans casser les anciennes campagnes

Le système est un **agrégat indépendant** dans le domaine — modifier ses
règles ou son template n'affecte pas instantanément les fiches existantes.

## Systèmes pré-livrés

Au premier démarrage, trois systèmes sont seedés :

- **Nimble (extrait)** — narratif léger, 4 classes, monstres simples
- **D&D 5e SRD (extrait)** — extrait libre du SRD 5.1
- **Homebrew Exemple** — squelette à dupliquer

## Pages détaillées

- [Règles markdown et sélection IA](/docs/game-system/regles) — comment l'IA exploite les règles
- [Templates de fiches PJ / PNJ](/docs/game-system/templates-fiches) — structure des fiches personnages
