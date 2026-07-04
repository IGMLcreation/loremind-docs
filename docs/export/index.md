---
sidebar_position: 1
---

# Export

DM Loremind propose trois exports, tous livrés : la **sauvegarde globale**
(JSON + images), le **livret PDF** d'une campagne et l'**export Foundry VTT**
pour jouer à la table virtuelle. Un export **Markdown** est à l'étude.

## Sauvegarde globale (JSON)

L'export se lance depuis **Paramètres → Sauvegarde / Restauration des données →
Exporter**. Il produit un fichier **`loremind-export.zip`** contenant l'ensemble
de votre contenu au format **JSON**, accompagné des **images**.

### Périmètre : global et exhaustif

L'export est **global** — il embarque **tout** votre contenu, pas une fiche ou un
Lore isolé :

- systèmes de JDR, lores, pages, templates ;
- campagnes, arcs, chapitres, scènes ;
- PJ, PNJ, ennemis ;
- catalogues d'objets, tables aléatoires ;
- images.

### Import symétrique

Le même `.zip` peut être réimporté sur une autre instance, en **mode fusion** :
le contenu est **ajouté sans remplacer** l'existant. Idéal pour :

- **partager un module** avec un autre MJ,
- **migrer** entre deux installations.

La procédure d'import/export est détaillée dans
[Configuration → Sauvegardes](/docs/configuration/sauvegardes).

### Limites

:::note
- L'export et l'import sont **désactivés en mode démo**.
- Seules les **images réellement utilisées** sont incluses ; les images
  orphelines ne sont pas embarquées.
:::

## Livret PDF de campagne

Depuis la **page d'une campagne**, le bouton **« Exporter en PDF »** génère un
**livret imprimable** de la campagne : couverture, **sommaire paginé**, structure
narrative (arcs, chapitres, scènes avec leurs illustrations et battlemaps),
**quêtes**, **PNJ** et **bestiaire**, **tables aléatoires** et pages de **lore**
liées. Idéal pour préparer hors écran ou partager un support papier à la table.

## Export Foundry VTT

Toujours depuis la **page d'une campagne**, **« Exporter pour Foundry »** produit
un bundle `.zip` que le module compagnon **LoreMind Importer** importe dans
Foundry VTT : scènes prêtes à jouer (murs, portes, lumières), journaux, tables
aléatoires et tokens d'ennemis.

➡️ Voir la page dédiée : [Export Foundry VTT](/docs/export/foundry).

## Formats

| Format | Statut | Usage |
|--------|--------|-------|
| **JSON (+ images, .zip)** | Disponible | Sauvegarde structurée, partage de module, migration entre instances |
| **PDF** | Disponible | Livret de campagne imprimable |
| **Foundry VTT** | Disponible | Jouer sa campagne à la table virtuelle |
| **Markdown** | À l'étude | Sauvegarde lisible humainement, partage Git |
