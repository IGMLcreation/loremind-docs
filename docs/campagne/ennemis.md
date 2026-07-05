---
sidebar_position: 7
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

## Importer vos monstres depuis Foundry VTT

Le bouton **« Importer des monstres Foundry »**, en haut de la liste (le
glisser-déposer du fichier fonctionne aussi), charge un **catalogue `.json` de
monstres exporté depuis Foundry** par le module compagnon
[LoreMind Importer](/docs/export/foundry).

Pour chaque monstre du catalogue, une fiche est créée avec :

- son **nom** et son **portrait** ;
- son **dossier**, calqué sur l'arborescence Foundry (préfixé `Foundry/`) ;
- un encart **« Statistiques Foundry »** en lecture seule : un *instantané*
  des stats, figé à l'import — la fiche vivante reste côté Foundry.

L'import est **sans doublon** : réimporter le même catalogue met à jour les
fiches existantes (nom, stats, dossier) au lieu d'en créer de nouvelles, et ne
touche pas au portrait déjà en place. À l'[export Foundry](/docs/export/foundry),
les monstres importés sont **reliés à leur acteur d'origine**.

## Caler la fiche sur votre système Foundry

Dans l'éditeur du **Système de JDR**, section *Champs de la fiche Ennemi*, le
bouton **« Importer une structure Foundry »** charge une structure d'acteur
exportée par le module et **remplace le template d'ennemi** par les champs
correspondants (le type est rappelé : *« Acteur Foundry : npc »*). Vos ennemis
créés à la main sont alors **automatiquement adaptés à ce format** lors de
l'export vers Foundry.

## Liste et affichage

La liste est **groupée par dossier**, chaque fiche affichant un **badge de
niveau** pour repérer la difficulté en un coup d'œil.

L'ouverture d'une fiche donne une **vue en lecture seule**, avec le même rendu
soigné que les fiches de personnages (bandeau, portrait, sections du template).

:::tip[Pas de génération IA ici]
Contrairement à d'autres écrans de la campagne, le bestiaire ne propose **pas**
de génération IA. Les fiches d'ennemis se remplissent à la main.
:::
