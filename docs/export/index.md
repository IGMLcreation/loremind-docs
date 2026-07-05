---
sidebar_position: 1
---

# Export

DM Loremind propose trois exports, tous livrés : la **sauvegarde / le partage
de contenu** (JSON + images), le **livret PDF** d'une campagne et l'**export
Foundry VTT** pour jouer à la table virtuelle. Un export **Markdown** est à
l'étude.

## Sauvegarde et partage de contenu (JSON)

L'export se lance depuis **Paramètres → Sauvegarde des données**. Il produit un
fichier **`.zip`** contenant le contenu au format **JSON**, accompagné des
**images**. Deux périmètres :

- **Sauvegarde complète (tout)** — toute l'instance : systèmes de JDR, lores,
  pages et templates, campagnes (arcs, chapitres, scènes, quêtes), PJ, PNJ,
  ennemis, catalogues, tables aléatoires, parties, et les images.
- **Une campagne** — export **sélectif** d'une seule campagne et de sa clôture,
  avec trois options : inclure l'**univers (lore)** associé, l'**espace de
  jeu** (parties, séances et journaux, faits, progression de quêtes, feuilles
  de perso) et les **images**.

### Import symétrique

Le même `.zip` peut être réimporté sur une autre instance, en **mode fusion** :
le contenu est **ajouté sans remplacer** l'existant. Idéal pour :

- **partager une campagne** ou un module avec un autre MJ (export sélectif),
- **migrer** entre deux installations (sauvegarde complète).

Les exports d'anciennes versions restent importables. La procédure est
détaillée dans [Configuration → Sauvegardes](/docs/configuration/sauvegardes).

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

➡️ Voir la page dédiée : [Livret PDF de campagne](/docs/export/pdf).

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
