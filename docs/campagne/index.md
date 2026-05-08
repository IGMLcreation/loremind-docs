---
sidebar_position: 1
---

# Campagne

La **campagne** est le contenant de votre partie. Elle structure le récit en
**Arcs** → **Chapitres** → **Scènes**, et regroupe les **personnages**
(joueurs et non-joueurs) qui y participent.

## Structure narrative

```
Campagne
├── Arc 1 : "L'éveil des cendres"
│   ├── Chapitre 1 : "Tavern du Pendu"
│   │   ├── Scène 1 : "Rencontre avec le messager"
│   │   ├── Scène 2 : "Combat dans la ruelle"
│   │   └── Scène 3 : "Fuite par les égouts"
│   └── Chapitre 2 : ...
├── Arc 2 : ...
├── PJ : Aragorn, Legolas...
└── PNJ : Borin le forgeron, Dame Elara...
```

- **Arc** — un grand pan de l'histoire (10-30 séances). Porte un thème, des enjeux, une résolution.
- **Chapitre** — une étape de l'arc (1-3 séances). Porte des objectifs joueurs et des notes MJ.
- **Scène** — une unité jouable (10 min à 1h de jeu). Lieu, ambiance, narration aux joueurs, secrets MJ.

## Liens vers le Lore

Une campagne peut être adossée à un **Lore** (univers existant) et à un
**Game System** (règles de jeu). Ces liens sont des références molles —
la campagne reste utilisable même si le Lore est supprimé, et vous pouvez la
ré-attribuer à un autre Lore à tout moment.

## Branches narratives

Les scènes peuvent porter des **branches** (sorties narratives) qui pointent
vers d'autres scènes du même chapitre. Utile pour modéliser les choix joueurs
ou les bifurcations conditionnelles.

## Pages détaillées

- [Arcs, Chapitres et Scènes](/docs/campagne/arcs-chapitres-scenes) — la trame narrative
- [Personnages joueurs (PJ) et non-joueurs (PNJ)](/docs/campagne/personnages) — fiches templatées
- [Branches narratives](/docs/campagne/branches) — graphe intra-chapitre
