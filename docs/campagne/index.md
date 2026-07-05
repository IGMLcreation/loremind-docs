---
sidebar_position: 1
---

# Campagne

La **campagne** est le contenant de votre partie. Elle structure le récit en
**Arcs** → **Chapitres** → **Scènes**, complétés par des **[Quêtes](/docs/campagne/quetes)**
qui suivent les objectifs des joueurs, et regroupe les **personnages**
(joueurs et non-joueurs) qui y participent. Elle réunit aussi vos **ressources de
jeu** (bestiaire, objets, tables aléatoires), le **suivi de vos parties**, une
**[préparation guidée](/docs/campagne/preparation)** qui vous dit ce qu'il reste
à faire, et des **outils IA** (atelier RAG, import de PDF).

## Structure narrative

```
Campagne
├── Arc 1 : "L'éveil des cendres"
│   ├── Chapitre 1 : "Tavern du Pendu"
│   │   ├── Scène 1 : "Rencontre avec le messager"
│   │   ├── Scène 2 : "Combat dans la ruelle"
│   │   └── Scène 3 : "Fuite par les égouts"
│   └── Chapitre 2 : ...
├── Arc 2 (hub) : "Les factions de Vaeril"
│   ├── Quête : "Sauver le marchand disparu"
│   └── Quête : "Démasquer le traître"
├── Quêtes (transverses)
├── PJ : Aragorn, Legolas...
└── PNJ : Borin le forgeron, Dame Elara...
```

- **Arc** — un grand pan de l'histoire (10-30 séances). Porte un thème, des enjeux, une résolution. *Linéaire* (chapitres en séquence) ou *hub* (quêtes accessibles librement).
- **Chapitre** — une étape de l'arc (1-3 séances). Porte des objectifs joueurs et des notes MJ.
- **Scène** — une unité jouable (10 min à 1h de jeu). Lieu, ambiance, narration aux joueurs, secrets MJ.
- **Quête** — un objectif suivi **par partie** (disponible, en cours, terminée), rattaché à un arc hub ou transverse.

## Liens vers le Lore

Une campagne peut être adossée à un **Lore** (univers existant) et à un
**Système de JDR** (règles de jeu). Ces liens sont des références molles —
la campagne reste utilisable même si le Lore est supprimé, et vous pouvez la
ré-attribuer à un autre Lore à tout moment. Le
[graphe des liens](/docs/campagne/graphe-liens) visualise ces relations.

## Branches narratives

Les scènes peuvent porter des **branches** (sorties narratives) qui pointent
vers d'autres scènes du même chapitre. Utile pour modéliser les choix joueurs
ou les bifurcations conditionnelles.

## Pages détaillées

**Trame narrative**

- [Arcs, Chapitres et Scènes](/docs/campagne/arcs-chapitres-scenes) — la structure du récit
- [Quêtes](/docs/campagne/quetes) — les objectifs suivis par partie
- [Personnages (PJ / PNJ)](/docs/campagne/personnages) — fiches templatées
- [Branches narratives](/docs/campagne/branches) — graphe intra-chapitre
- [Graphe des liens](/docs/campagne/graphe-liens) — la carte des relations avec le Lore

**Ressources de jeu**

- [Bestiaire (Ennemis)](/docs/campagne/ennemis)
- [Catalogue d'objets](/docs/campagne/catalogue-objets)
- [Tables aléatoires](/docs/campagne/tables-aleatoires)

**Jouer**

- [Parties & suivi de session](/docs/campagne/parties)
- [Préparation guidée](/docs/campagne/preparation) — ce qu'il reste à faire avant de jouer
- [Mode séance](/docs/campagne/mode-seance) — le cockpit pendant la partie

**Outils IA**

- [Atelier IA (Notebooks)](/docs/campagne/notebooks)
- [Import de campagne (PDF)](/docs/campagne/import-campagne)
