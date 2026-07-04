---
sidebar_position: 2
---

# Export Foundry VTT

DM Loremind exporte vos campagnes directement vers **Foundry VTT** (v13) grâce à
son module compagnon **LoreMind Importer** : vous préparez dans DM Loremind,
vous jouez dans Foundry. Scènes prêtes à jouer (battlemaps avec murs, portes et
lumières), journaux, tables aléatoires, tokens d'ennemis — tout arrive en un
seul import.

## Étape 1 : installer le module dans Foundry

Une seule fois, dans Foundry : **Add-on Modules → Install Module**, puis collez
l'URL de manifeste :

```
https://github.com/IGMLcreation/loremind-importer/releases/latest/download/module.json
```

Activez ensuite **LoreMind Importer** dans votre monde
(**Game Settings → Manage Modules**). Les mises à jour du module sont ensuite
gérées par Foundry comme pour n'importe quel module.

## Étape 2 : exporter la campagne depuis DM Loremind

Sur la **page de la campagne**, cliquez sur **« Exporter pour Foundry »**. Un
dialogue vous laisse choisir ce que le module devra importer :

- **Cartes & ennemis** — une Scène Foundry par battlemap (variantes Jour/Nuit
  incluses), avec les tokens des ennemis liés à chaque scène ;
- **Journaux narratifs** — arcs, chapitres, quêtes et scènes en journaux
  (textes + illustrations), plus les fiches PNJ et le bestiaire ;
- **Tables aléatoires** — vos tables de rencontres et d'événements en
  RollTables Foundry.

Deux presets accélèrent le choix : **« Tout »**, ou **« Cartes & ennemis
seulement »** si vous ne voulez que le support de combat. L'export produit un
fichier `.zip` : le bundle de campagne.

:::tip
Les murs, portes et lumières des battlemaps proviennent des fichiers
**Universal VTT** (`.uvtt` / `.dd2vtt`, Dungeondraft & co) ou de l'export
« Foundry VTT » de **Dungeon Alchemist** attachés à vos scènes. Une battlemap
sans fichier UVTT est importée à plat (fond + grille, sans murs).
:::

## Étape 3 : importer dans Foundry

Dans votre monde Foundry, connecté en **MJ** : bouton **« Importer LoreMind »**
en haut de l'onglet *Journaux*, puis sélectionnez le `.zip`. Le module crée les
dossiers, scènes, journaux, tables et acteurs, et lie chaque scène à son
journal.

:::note[Réimportable]
Vous pouvez réexporter et réimporter la même campagne autant de fois que
nécessaire : l'import précédent est nettoyé et recréé, mais les acteurs déjà
importés et les stats saisies à la main dans Foundry sont **conservés**.
:::

## Aller plus loin : le pont monstres

Le module permet aussi de faire circuler vos monstres entre Foundry et
DM Loremind, par **référence de compendium** (compatible avec tous les systèmes
de jeu) :

1. **Foundry → DM Loremind** : dans Foundry, onglet *Acteurs* →
   **« Exporter monstres → LoreMind »** → cochez acteurs du monde et/ou
   compendiums → un `.json` est produit.
2. **Dans DM Loremind** : Bestiaire de la campagne → « Importer des monstres
   Foundry » → les ennemis sont créés avec portrait et arborescence de
   dossiers, sans doublon.
3. Liez ces ennemis à vos scènes, exportez la campagne : à l'import, chaque
   ennemi référencé est recréé depuis son compendium et son **token est posé
   sur la battlemap**.

Pour que vos monstres **créés dans DM Loremind** sortent en vrais acteurs typés
avec leurs stats (PV, armure, attributs), utilisez le mapping de structure :
dans Foundry, **« Exporter structure → LoreMind »** sur un acteur exemple, puis
importez le `.json` dans votre **Système de jeu** DM Loremind — le template
Ennemi se remplit avec les champs du système.

## Limites connues

:::note
- Les PNJ et ennemis non liés à une scène restent des **journaux** dans
  Foundry (pas de fiche d'acteur).
- La **grille** est carrée, `distance = 5 ft` par défaut ; l'échelle des
  lumières UVTT est une heuristique à ajuster selon votre système.
- Le compendium source d'un monstre référencé doit être **installé dans le
  monde cible**.
:::

## Ressources

Le module est disponible sur
[GitHub — loremind-importer](https://github.com/IGMLcreation/loremind-importer)
(documentation détaillée, tickets et versions).
