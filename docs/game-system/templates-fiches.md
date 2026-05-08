---
sidebar_position: 3
---

# Templates de fiches PJ / PNJ

Chaque Game System porte deux templates : un pour les **PJ** (joueurs), un
pour les **PNJ**. Les invariants métier divergent — un PJ a typiquement une
fiche complète (stats, sorts, équipement), un PNJ peut n'avoir qu'une
motivation et une faction.

## Édition

Dans l'éditeur de Game System, deux blocs séparés :

- **Champs de la fiche PJ** — affichés à la création/édition d'un PJ
- **Champs de la fiche PNJ** — affichés à la création/édition d'un PNJ

Chaque champ a :

- Un **nom** (unique dans le template, insensible à la casse)
- Un **type** : TEXT, NUMBER, IMAGE, KEY_VALUE_LIST
- Pour IMAGE : un **layout** (GALLERY, HERO, MASONRY, CAROUSEL)
- Pour KEY_VALUE_LIST : une **liste de labels** figés

## Champs universels (hard-codés)

Quoi que vous mettiez dans le template, **trois champs sont toujours présents**
sur toutes les fiches PJ/PNJ et ne sont pas configurables :

- **Nom** (obligatoire)
- **Portrait** (image, ratio carré)
- **Bandeau** (image, ratio paysage)

C'est volontaire — ces champs ont un sens universel quel que soit le système
de jeu, et leur position dans la vue WorldAnvil-style est figée.

## Type KEY_VALUE_LIST en détail

Particulièrement utile pour les **stat blocks**. Vous définissez la liste des
labels au niveau du template :

```
Champ "Caractéristiques" (KEY_VALUE_LIST)
├── Label : FOR
├── Label : DEX
├── Label : CON
├── Label : INT
├── Label : SAG
└── Label : CHA
```

Toutes les fiches PJ auront ces 6 labels, et le MJ remplit juste les valeurs.
À l'affichage :

- ≤ 6 entrées → tableau compact 2 rangées
- > 6 entrées → liste 2 colonnes type "skills" papier

## Bonnes pratiques

- **Préférez 1 KEY_VALUE_LIST à 6 NUMBER**. 6 stats D&D dans 1 champ "Caractéristiques" se rendent en joli stat block ; 6 NUMBER séparés se rendent en cards individuelles plus chargées.
- **Réservez NUMBER aux valeurs isolées** (Niveau, PV max). Ils s'affichent comme des badges discrets dans le hero de la fiche.
- **Templates par défaut fournis** dans Nimble et D&D — partez de là pour comprendre l'esprit, puis adaptez.

## Migration des fiches existantes

Modifier le template **ne supprime pas les valeurs déjà saisies** — elles
restent en base sous leur ancien nom. Si vous renommez un champ "Histoire" en
"Récit", les fiches existantes affichent toujours "Histoire" jusqu'à ce que
vous les ré-éditiez.

C'est volontaire pour éviter une perte de données accidentelle. À terme, un
outil de migration assistée sera proposé.
