---
sidebar_position: 3
---

# Quests

The **quest** is DM Loremind's first-class narrative thread: *"Save the missing
merchant"*, *"Unmask the traitor"*… Where arcs and chapters structure the
story, a quest carries an **objective** — and its **progression is tracked per
playthrough**: every table playing your campaign advances at its own pace,
without touching the scenario.

## Creating a quest

Two entry points, for two use cases:

- **Hub quest** — from an **arc with the Hub structure**: **+** button on the
  arc → **"New quest"**. The quest appears under the arc in the sidebar and
  automatically gets its own scene space: its scenes show up directly as
  children of the quest node.
- **Free-standing quest** — from the **"Quests"** branch of the sidebar (at the
  campaign level): **"New quest"**. Orthogonal to the structure, it can either
  **traverse** existing content or live with its own scenes (see below).

## The fields

Only the title is required — the screen reminds you: *"Only the title is
required. Expand and fill in only the sections you need — everything else is
optional."*

- **Quest title** *(required)*, **Description**, **Icon**
- **Illustrations** — portraits, moods and notable locations
- **Unlock conditions** — see below
- **Narrative nodes traversed** *(free-standing quests only)* — see below
- **GM notes** — private: twists, secrets; never exported to Foundry
- **Player objectives** and **Narrative stakes**
- **Linked Lore pages** *(if the campaign is backed by a world)* — NPCs, places
  or Lore elements that appear in the quest

## Unlock conditions

Prerequisites combine with **AND**: all conditions must be met for the quest to
unlock in a playthrough. **Empty = available from the start.** Three condition
types:

- **After another quest** — the target quest must be completed;
- **From a given session** — the table must have reached session N;
- **When a fact is true** — a [Fact](/docs/campagne/parties) of the playthrough
  must be switched on.

Conditions are defined on the scenario, but **evaluated in play, per
playthrough**: the same quest can be unlocked at one table and locked at
another.

## Progression per playthrough

Each quest carries, **per playthrough**, a status:

- **Locked** — the unlock conditions are not met
- **Available** — unlocked, not started yet
- **In progress**
- **Completed**

Progression is changed from the **Playthrough** screen — in particular in the
["Prepare the next session"](/docs/campagne/preparation) section, with the
**"Mark as in progress"**, **"Mark as completed"** and **"Reopen"** buttons.

## Quests and scenes

**Hub quest** — its scenes live directly under the quest node in the sidebar
(**+** button to add one). The **"Scene map"** button on the quest view opens
the scene graph to visualize and edit [branches](/docs/campagne/branches).

**Free-standing quest** — two options:

- The **"Narrative nodes traversed"** section links the quest to **existing**
  chapters or scenes (*"the quest passes through these places"*). These are
  links: removing a node deletes nothing.
- Without any node, the quest **automatically gets its own scene space**,
  created on the fly, with its map — nothing to do on your side.

:::tip[Watched by the guided prep]
A quest without content, a node pointing to a deleted scene, or a prerequisite
referencing a quest that no longer exists automatically show up in the
campaign's ["Next steps"](/docs/campagne/preparation) panel.
:::
