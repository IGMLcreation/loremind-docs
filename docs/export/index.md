---
sidebar_position: 1
---

# Export

DM Loremind dispose d'un **export natif** livré et utilisable dès aujourd'hui.
D'autres formats (PDF, Markdown, Foundry VTT) sont à l'étude.

## Disponible aujourd'hui : export global

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

## Formats

| Format | Statut | Usage |
|--------|--------|-------|
| **JSON (+ images, .zip)** | Disponible | Sauvegarde structurée, partage de module, migration entre instances |
| **PDF** | À venir | Impression de fiches, livrets de campagne |
| **Markdown** | À venir | Sauvegarde lisible humainement, partage Git |
| **Foundry VTT** | À l'étude | Export vers Foundry pour usage en table virtuelle |

:::info[À venir]
Les exports **PDF**, **Markdown** et **Foundry VTT** ne sont pas encore livrés.
Ils figurent sur la roadmap et seront documentés au fil des releases.
:::
