---
sidebar_position: 5
---

# Bestiaire (Ennemis)

Le **bestiaire** regroupe les fiches d'ennemis réutilisables de votre campagne.
Vous les organisez librement dans des **dossiers** (par région, par type de
créature, par chapitre…) pour garder une liste lisible.

## Champs d'une fiche

- **Nom** (obligatoire)
- **Niveau** — texte libre : aussi bien `5`, que `FP 8` ou `Boss`. C'est vous
  qui choisissez la notation.
- **Dossier** — saisi avec auto-complétion : tapez un nom existant pour ranger
  l'ennemi dedans, ou un nouveau nom pour créer un dossier.
- **Portrait** — image carrée (1:1)
- **Bandeau** — image de header (3:1)

Tous les autres champs sont pilotés par le **template d'ennemi** défini dans le
Système de JDR lié à la campagne.

:::info[Sans système lié]
Vous pouvez éditer une fiche même si aucun système n'est rattaché : le template
est simplement vide et vous ne disposez alors que des champs ci-dessus.
:::

## Réutiliser un ennemi dans le jeu

Le principe du bestiaire est la **réutilisation**. Une **scène** — ou une
**pièce** de donjon — peut référencer un ou plusieurs ennemis du bestiaire via
un sélecteur. Inutile de recréer le même gobelin dix fois : créez-le une fois,
pointez vers lui partout où il apparaît.

## Liste et affichage

La liste est **groupée par dossier**, chaque fiche affichant un **badge de
niveau** pour repérer la difficulté en un coup d'œil.

L'ouverture d'une fiche donne une **vue en lecture seule**, avec le même rendu
soigné que les fiches de personnages (bandeau, portrait, sections du template).

:::tip[Pas de génération IA ici]
Contrairement à d'autres écrans de la campagne, le bestiaire ne propose **pas**
de génération IA. Les fiches d'ennemis se remplissent à la main.
:::
