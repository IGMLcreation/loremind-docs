---
sidebar_position: 2
---

# Arcs, Chapters and Scenes

Three levels for structuring your story, with increasing granularity.

## Arc

An arc is a large narrative arch. Available fields:

- **Name** and **synopsis** — the arc's pitch
- **Structure** — *Linear* (chapters in sequence) or *Hub* ([quests](/docs/campagne/quetes) freely accessible from a central point)
- **Themes** — recurring motifs (e.g. "betrayal", "descent into hell")
- **Stakes** — what is at stake for the PCs
- **GM notes** — secrets, twists, info not to reveal to the players
- **Rewards** — XP, items, contacts gained
- **Resolution** — the expected ending (to be adjusted based on actual play)
- **Linked Lore pages** — cross-context references to the Lore (factions, locations)
- **Illustrations** — mood images

## Chapter

A subdivision of a linear arc. Same linking mechanics to the Lore.
Specific fields:

- **GM notes** — preparation, transitions
- **Player objectives** — what the PCs must accomplish / discover
- **Narrative stakes** — what may tip over in this chapter

:::info[Conditional unlocking lives on quests]
Unlock conditions (an activated fact, a completed quest, a session count
reached) are now defined on [quests](/docs/campagne/quetes), not on chapters.
:::

## Scene

The playable unit. This is what the AI draws on the most when you ask it
to generate narrative content. Specific fields:

- **Location** and **timing** (day/night/season)
- **Atmosphere** — sensory descriptions, tone
- **Narration to players** — text to read out/improvise to set the scene
- **Secret GM notes** — only displayed to you
- **Choices and consequences** — possible alternatives
- **Combat difficulty** and **enemies** — free note, and/or enemies linked from the [bestiary](/docs/campagne/ennemis)
- **Illustrations** — gallery of mood images
- **Battlemaps** — the scene's combat maps (see below)
- **Branches** — narrative exits toward other scenes (see [Narrative branches](/docs/campagne/branches))

:::info[Explorable location (dungeon mode)]
A scene can contain **rooms**: as soon as it has at least one, it switches to a **dungeon** rendering — each room has its own enemies, loot, traps, floor, and branches between rooms.
:::

An **AI Assistant** (✨ button) is available on the scene to generate atmosphere, narration, or plot twists.

### Battlemaps

A scene can carry **several labeled battlemaps** — the variants of a single
place: the label is free text (*"Day"*, *"Night"*, *"Floor 1"*…). Each map has
a **source** of your choice:

- **Dungeon Alchemist (image/video + JSON)** — the map's media, plus the
  `.json` file from Dungeon Alchemist's "Foundry VTT" export (walls, doors,
  lights);
- **DungeonDraft (.dd2vtt)** — a single Universal VTT file: the **embedded
  image is extracted automatically** on upload, walls and lights are kept.

Battlemaps are not displayed in the app: they are carried over to the
[Foundry export](/docs/export/foundry) — **one Foundry Scene per map** — and
rendered with their caption in the [PDF booklet](/docs/export/pdf).

:::note
A `.dd2vtt` without an embedded image is accepted, but the exported map will
have no background — a warning shows at upload time.
:::

## Best practices

- **Prepare by arc, play by scene.** Define the big picture once, then add scenes as your sessions progress.
- **Don't wait for everything to be "complete".** A scene with just a location + atmosphere + a short piece of narration is playable — the ["Next steps"](/docs/campagne/preparation) panel tells you what's actually missing.
- **GM notes vs. player narration.** Keep them clearly separated — the AI can generate the narration without revealing the secrets if you pass it the right fields.

## More detail

A short adventure can start in [simple mode](/docs/campagne/creation-campagne),
with standalone scenes. See [Narrative branches](/docs/campagne/branches) for node
types and link editing, and [Explorable locations](/docs/campagne/donjons) for
rooms, floors, doors and bestiary references.
