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

## Livret PDF et publication

Depuis l'accueil de campagne, **Exporter en PDF** produit un livret imprimable.
Dans la bêta récente, choisissez une version **MJ ou joueurs**, les parties
incluses, le périmètre du Lore, le format **A4 / A5 / US Letter** et le mode
impression. Renvois paginés, annexes MJ et cartes pleine page facilitent le jeu.

La **fiche de publication** ajoute couverture, page technique, présentation,
contexte MJ et crédits pour partager votre aventure sous forme de module.

- [Préparer un module à partager](/docs/export/publication) — renseigner la fiche et enregistrer les crédits.
- [Livret PDF de campagne](/docs/export/pdf) — choisir les options, comprendre les filtres joueurs et les annexes.

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
