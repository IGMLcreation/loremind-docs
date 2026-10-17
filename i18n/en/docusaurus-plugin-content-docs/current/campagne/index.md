---
sidebar_position: 1
---

# Campaign

The **campaign** is the container for your game. It structures the story into
**Arcs** → **Chapters** → **Scenes**, complemented by **[Quests](/docs/campagne/quetes)**
that track the players' objectives, and gathers the **characters** (players and
non-players) who take part in it. It also brings together your **game
resources** (bestiary, items, random tables), the **tracking of your
playthroughs**, a **[guided prep](/docs/campagne/preparation)** that tells you
what's left to do, and **AI tools** (RAG workshop, PDF import).

## Narrative structure

```
Campaign
├── Arc 1: "The Awakening of Ashes"
│   ├── Chapter 1: "The Hanged Man's Tavern"
│   │   ├── Scene 1: "Meeting the messenger"
│   │   ├── Scene 2: "Fight in the alley"
│   │   └── Scene 3: "Escape through the sewers"
│   └── Chapter 2: ...
├── Arc 2 (hub): "The factions of Vaeril"
│   ├── Quest: "Save the missing merchant"
│   └── Quest: "Unmask the traitor"
├── Quests (free-standing)
├── PCs: Aragorn, Legolas...
└── NPCs: Borin the blacksmith, Lady Elara...
```

- **Arc** — a major part of the story (10-30 sessions). Carries a theme, stakes, and a resolution. *Linear* (chapters in sequence) or *hub* (freely accessible quests).
- **Chapter** — a stage within the arc (1-3 sessions). Carries player objectives and GM notes.
- **Scene** — a playable unit (10 min to 1h of play). Setting, mood, narration for the players, GM secrets.
- **Quest** — an objective tracked **per playthrough** (available, in progress, completed), attached to a hub arc or free-standing.

## Links to the Lore

A campaign can be backed by a **Lore** (an existing universe) and a
**Game System** (the game rules). These links are soft references —
the campaign remains usable even if the Lore is deleted, and you can
reassign it to another Lore at any time. The
[relationship graph](/docs/campagne/graphe-liens) visualizes these connections.

## Narrative branches

Scenes can carry **branches** (narrative exits) that point to other scenes
within the same chapter. Useful for modeling player choices or conditional
forks.

## Detailed pages

**Narrative framework**

- [Arcs, Chapters and Scenes](/docs/campagne/arcs-chapitres-scenes) — the story structure
- [Quests](/docs/campagne/quetes) — objectives tracked per playthrough
- [Characters (PCs / NPCs)](/docs/campagne/personnages) — templated sheets
- [Narrative branches](/docs/campagne/branches) — intra-chapter graph
- [Relationship graph](/docs/campagne/graphe-liens) — the map of links to the Lore

**Game resources**

- [Bestiary (Enemies)](/docs/campagne/ennemis)
- [Item catalog](/docs/campagne/catalogue-objets)
- [Random tables](/docs/campagne/tables-aleatoires)

**Playing**

- [Playthroughs & session tracking](/docs/campagne/parties)
- [Guided prep](/docs/campagne/preparation) — what's left to do before playing
- [Session mode](/docs/campagne/mode-seance) — the cockpit during the game

**AI tools**

- [AI workshop (Notebooks)](/docs/campagne/notebooks)
- [Campaign import (PDF)](/docs/campagne/import-campagne)

## More workflows

- [Create and organise a campaign](/docs/campagne/creation-campagne) — start with scenes, then add arcs and quests.
- [Explorable locations and dungeon rooms](/docs/campagne/donjons) — prepare rooms and exits.
- [Clocks and threats](/docs/campagne/horloges) — track pressure and automatic triggers per playthrough.
- [Writing mentor](/docs/campagne/mentor-ecriture) — field tips, editor review and the guided method on beta.
- [Your first game](/docs/prise-en-main) — from creation to a session.

## Writing aids in beta

- [Editor review](/docs/campagne/relecture-editeur) — ten writing and structural patterns to examine.
- [Five-room dungeon method](/docs/campagne/methode-cinq-salles) — prepare an adventure step by step without AI.

The **Play** block and **Playthroughs** tree branch shorten session access.
[Session mode](/docs/campagne/mode-seance) explains these entry points and the new Rules tab.
