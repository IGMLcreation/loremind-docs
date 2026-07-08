---
sidebar_position: 4
---

# Templates et éditeur de blocs

Un template définit la structure d'un type de page — quels **blocs** la
composent et **comment ils sont disposés**. Si vous souhaitez définir une cité
avec un bloc "Histoire" et un bloc "Population" par exemple...

## Création d'un template

Afin de créer un template, cliquez sur le bouton "+" dans le header de template en bas de la liste
depuis votre lore :

![bouton nouveau template](/img/screenshots/lore/templates/bouton_new.png)

L'éditeur s'ouvre : nom, description, dossier par défaut, et surtout le
**builder de blocs** — une palette de types de blocs à gauche, et une toile en
**grille de 12 colonnes** où vous composez la mise en page de la fiche :

![builder](/img/screenshots/lore/templates/builder.png)

## Le builder de blocs

- **Ajouter un bloc** — glissez un type depuis la palette vers la grille.
- **Déplacer** — attrapez la poignée du bloc et déposez-le où vous voulez
  (placement libre, pas seulement empilé).
- **Redimensionner** — poignées sur le bord droit (largeur, de 1 à 12
  colonnes), le bord bas (hauteur) et le coin (les deux à la fois).
- **Renommer en place** — cliquez sur le nom du bloc et tapez. Renommer un bloc
  **ne perd pas le contenu** des pages existantes : les valeurs sont ancrées
  sur un identifiant stable, pas sur le nom.

### Types de blocs disponibles

| Type | Usage | Rendu |
|------|-------|-------|
| **Texte** | Texte libre, paragraphes (Histoire, Description) | Zone de texte |
| **Image** | Une ou plusieurs images recadrables | Carrousel plein cadre |
| **Liste clé/valeur** | Paires libellé → valeur, libellés figés au template (ex. Population, Superficie, Climat) | Liste de champs label/valeur |
| **Tableau** | Données tabulaires en lignes et colonnes (ex. ressources, statistiques) | Tableau éditable |

### Le bloc Image

Le bloc Image remplace l'ancienne galerie sur les pages de lore :

- **plusieurs images** par bloc, avec navigation en carrousel (précédente /
  suivante, points cliquables) ;
- **recadrage** : glissez l'image dans son cadre pour choisir ce qu'on voit
  (*« Glisser pour recadrer »*) ;
- **zoom** à la molette, de 40 % à 400 % ;
- le cadrage et le zoom sont **mémorisés par image et par page** — la même
  illustration peut être cadrée différemment sur deux pages.

:::info[Anciens templates]
Un template dont aucun bloc n'a encore été placé garde le rendu **empilé**
historique (une colonne). Dès que vous placez ou redimensionnez un premier bloc
dans l'éditeur, la mise en page en grille prend le relais.
:::

## Modification d'un template

Vous pouvez simplement modifier un template en cliquant sur ce dernier dans la section template.

## Suppression d'un template

Vous pouvez supprimer un template en cliquant sur le bouton "Supprimer" en haut à droite lorsque vous
êtes revenu sur la page de ce dernier.

## Bonnes pratiques

- **Commencez minimal** — 3-4 blocs suffisent pour démarrer ; vous pourrez en ajouter et raffiner la mise en page plus tard.
- **Nommez clairement** — "Histoire" est plus parlant que "Description longue".
- **Bloc Image en tête, pleine largeur** — donne du cachet visuel à la page.
- **Blocs courts côte à côte** — une Liste clé/valeur en 4 colonnes à côté d'un Texte en 8 colonnes fait une fiche très lisible.
