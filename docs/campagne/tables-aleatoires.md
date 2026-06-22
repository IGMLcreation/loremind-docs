---
sidebar_position: 7
---

# Tables aléatoires

Les **tables aléatoires** servent à improviser par un tirage : rencontres,
butin, complications, rumeurs de taverne… Vous lancez les dés, la table vous
donne un résultat.

## La table

- **Nom** (obligatoire)
- **Description**
- **Formule de dés** (obligatoire) — par exemple `1d20`, `2d6`, `d100`
- **Entrées** — les résultats possibles

## Une entrée

- **min** et **max** — les bornes de tirage qui déclenchent l'entrée
  (**incluses**)
- **Libellé** — le résultat court
- **Détail** — texte markdown optionnel

:::info[La probabilité dépend de la largeur de plage]
Il n'y a **pas** de champ « poids ». Une entrée est d'autant plus probable que
sa plage est large. Sur un `d20`, une entrée `1–10` est **deux fois** plus
probable qu'une entrée `11–12`.
:::

## Auto-ranges

Le bouton **« Auto-ranges »** répartit **uniformément** la plage des dés sur
vos entrées. Pratique pour partir d'une probabilité égale, quitte à ajuster
ensuite quelques bornes à la main.

## Tirer un résultat

La vue propose un **bouton de tirage** qui lance réellement les dés de la
formule, affiche le **total** obtenu et met en avant l'**entrée correspondante**.

:::tip[Génération IA]
Une **génération IA** est disponible pour proposer rapidement une table
complète à partir d'une intention.
:::
