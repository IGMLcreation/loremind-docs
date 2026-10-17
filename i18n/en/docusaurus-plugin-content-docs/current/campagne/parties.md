---
sidebar_position: 10
---

# Playthroughs & session tracking

A **Playthrough** is a played instance of a campaign by a table of players. It
clearly separates two things:

- the **Scenario** — the campaign itself (arcs, chapters, scenes, quests),
  which stays **static**;
- the **game state** — the progression, the facts acquired, the clocks, the
  sessions, which is **specific to each playthrough**.

This way, **several tables** can play the same campaign independently, without
one's progression affecting the other.

## Contents of a playthrough

- **Name** and **Description** — the name can be renamed in place (pencil)
  from the playthrough list
- attached **characters**
- **sessions** with their journal
- **Facts** (flags)
- the **quest progression**
- **clocks** and **fronts** (see [Session mode](/docs/campagne/mode-seance))

## Facts

Facts are **boolean switches** (true / false) that drive conditional content:
they unlock [quests](/docs/campagne/quetes) through their **unlock
conditions**, and can advance **clocks** ("When a Fact becomes true" trigger).

They are **implicit**: a fact appears automatically as soon as a condition or a
trigger references it — you have nothing to declare manually. The playthrough's
**"Playthrough facts"** page (as well as the **Play** tab during a session)
lists all the facts and lets you **toggle them on / off**.

## Quest progression

Each [quest](/docs/campagne/quetes) carries, **per playthrough**, a status:

- **Locked** — unlock conditions not met
- **Available**
- **In progress**
- **Completed**

Progression is changed from the playthrough's
["Prepare the next session"](/docs/campagne/preparation) section
(**"Mark as in progress"**, **"Mark as completed"**, **"Reopen"** buttons).

## Sessions

You can **start** or **resume** a session, with its start and end date. Each
session keeps a **journal** whose entries are **typed**:

- **Note**
- **Event**
- **Dice roll**
- **Player action**

Each entry is **timestamped**, which also allows you to **log retroactively**
after the fact. The session screen — pinned scene, "previously on…" recap,
reference panel, clocks — is detailed in
[Session mode](/docs/campagne/mode-seance).

:::warning[Cascading deletion]
Deleting a playthrough **cascades** to delete its sessions, its attached
characters, its facts, its clocks and its progressions. A confirmation is
requested.
:::

## Direct access in beta

The tree's **Play → Playthroughs** branch opens each campaign playthrough. The
home's **Play** block offers active sessions to resume or starts one on the selected
playthrough. From another page, use **Session in progress**, or its list when several
are active. On mobile, it appears in the top bar. See [Session mode](/docs/campagne/mode-seance).
