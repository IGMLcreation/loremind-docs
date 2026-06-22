---
sidebar_position: 1
---

# Campaign

The **campaign** is the container for your game. It structures the story into
**Arcs** → **Chapters** → **Scenes**, and gathers the **characters**
(players and non-players) who take part in it. It also brings together your
**game resources** (bestiary, items, random tables), the **tracking of your
playthroughs** and **AI tools** (RAG workshop, PDF import).

## Narrative structure

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

- **Arc** — a major part of the story (10-30 sessions). Carries a theme, stakes, and a resolution.
- **Chapter** — a stage within the arc (1-3 sessions). Carries player objectives and GM notes.
- **Scene** — a playable unit (10 min to 1h of play). Setting, mood, narration for the players, GM secrets.

## Links to the Lore

A campaign can be backed by a **Lore** (an existing universe) and a
**Game System** (the game rules). These links are soft references —
the campaign remains usable even if the Lore is deleted, and you can
reassign it to another Lore at any time.

## Narrative branches

Scenes can carry **branches** (narrative exits) that point to other scenes
within the same chapter. Useful for modeling player choices or conditional
forks.

## Detailed pages

**Narrative framework**

- [Arcs, Chapters and Scenes](/docs/campagne/arcs-chapitres-scenes) — the story structure
- [Narrative branches](/docs/campagne/branches) — intra-chapter graph
- [Characters (PCs / NPCs)](/docs/campagne/personnages) — templated sheets

**Game resources**

- [Bestiary (Enemies)](/docs/campagne/ennemis)
- [Item catalog](/docs/campagne/catalogue-objets)
- [Random tables](/docs/campagne/tables-aleatoires)

**Playing & AI tools**

- [Playthroughs & session tracking](/docs/campagne/parties)
- [AI workshop (Notebooks)](/docs/campagne/notebooks)
- [Campaign import (PDF)](/docs/campagne/import-campagne)
