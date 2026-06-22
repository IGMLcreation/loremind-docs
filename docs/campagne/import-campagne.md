---
sidebar_position: 10
---

# Import de campagne (PDF)

L'**import de campagne** permet de partir d'un PDF de module ou d'aventure :
l'**IA** en extrait une arborescence prête à jouer, que vous validez avant
création.

## Ce que l'IA extrait

À partir du PDF, l'IA reconstruit une structure **Arc → Chapitre → Scène**, et
en plus :

- détecte les **PNJ** présents dans le module ;
- propose, pour les scènes de type donjon, des **pièces** optionnelles.

:::info[PDF uniquement]
L'import accepte uniquement des fichiers **PDF**.
:::

## Traitement streamé

Le traitement est **streamé** : la progression s'affiche en temps réel — nombre
d'extraits analysés, compteurs d'**arcs**, **chapitres**, **scènes** et **PNJ**.
Si le fournisseur IA est temporairement saturé, des **messages d'attente** vous
tiennent informé sans interrompre le traitement.

## Étape de révision

Avant toute création, une **étape de révision** vous laisse vérifier et ajuster
le résultat. La fusion avec l'existant est **non destructive** :

- les nœuds **déjà présents** dans la campagne apparaissent en **lecture seule**,
  signalés par un badge **« déjà présent »** ;
- le reste de l'arbre est **éditable** ;
- vous pouvez régler le type de chaque arc : **Linéaire** ou **Hub** ;
- une **checklist** vous laisse choisir quels PNJ créer.

:::tip[Seuls les nouveaux éléments sont créés]
« Créer dans la campagne » ne crée **que les nouveaux éléments**. Vos contenus
existants ne sont jamais écrasés.
:::
