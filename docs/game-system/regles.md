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
> Le **Système de JDR** ne doit décrire que les **mécaniques de jeu**, pas le lore.
> Cette séparation est volontaire — l'IA injecte les règles dans des contextes
> différents du lore, mélanger les deux dégrade la pertinence des prompts.

## Sélection contextuelle pour l'IA

Quand vous demandez à l'IA de générer du contenu, l'application **n'injecte pas
tout le markdown** : elle ne retient que les sections pertinentes pour réduire la
taille du prompt et améliorer la qualité.

Il n'y a **ni détection sémantique d'intention, ni embeddings** ici. Le besoin est
simplement déduit du **type d'entité** que vous générez :

- **Scène** → injecte les sections **## Combat** + **## Monstres**
- **Chapitre** → injecte **## Combat** + **## Classes**
- **Arc** (et cas générique) → injecte **toutes** les sections

La correspondance se fait par **sous-chaîne sur le titre H2** (insensible à la
casse), avec des alias FR + EN limités à **combat / classe(s) / monstre(s)**.

:::warning
Conséquence : des sections comme **Stats**, **Magie** ou **Progression** ne sont
jamais sélectionnées seules. Elles ne remontent que via les **arcs**, qui
injectent toutes les sections.
:::

C'est pourquoi il faut **nommer vos sections H2 clairement** (Combat, Classes,
Monstres) pour bénéficier de cette sélection.
