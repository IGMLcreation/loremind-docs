---
sidebar_position: 2
---

# Règles markdown et sélection IA

Les règles d'un système sont stockées en **markdown monolithique**, structuré
par titres H2 (`##`). Chaque section H2 est extraite et indexée séparément.

## Structure attendue

```markdown
## Combat
- Initiative : 1d20 + mod Dex
- Action par tour : une action, une action bonus, une réaction, mouvement
- Critique sur 20 naturel (double dés)

## Classes
- **Barbare** : d12 PV, rage
- **Magicien** : d6 PV, livre de sorts
...

## Monstres
Stat block standard : CA, PV, FOR/DEX/CON/INT/SAG/CHA, FP.
```

## Sections suggérées

Côté UI, l'éditeur propose des sections par défaut :
**Combat**, **Classes**, **Stats**, **Magie**, **Monstres**, **Progression**.

Vous êtes libre d'en ajouter d'autres. Mais **gardez à l'esprit** :

> Le module **Lore** sert à décrire l'univers (factions, lieux, légendes).
> Le **Game System** ne doit décrire que les **mécaniques de jeu**, pas le lore.
> Cette séparation est volontaire — l'IA injecte les règles dans des contextes
> différents du lore, mélanger les deux dégrade la pertinence des prompts.

## Sélection contextuelle pour l'IA

Quand vous demandez à l'IA de générer une scène impliquant du combat, le
back-end **n'injecte pas tout le markdown** — il sélectionne automatiquement
les sections pertinentes (ex: `## Combat` + `## Monstres`) selon l'intention
détectée. Ça réduit drastiquement la taille du prompt et améliore la qualité.

Le mapping intention → sections est codé en dur côté backend
(`GameSystemContextSelector`). Les noms de sections H2 doivent donc rester
**cohérents avec les noms suggérés** pour bénéficier de cette sélection.
