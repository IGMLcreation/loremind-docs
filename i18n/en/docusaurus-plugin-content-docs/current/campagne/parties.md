---
sidebar_position: 8
---

# Playthroughs & session tracking

A **Playthrough** is a played instance of a campaign by a table of players. It
clearly separates two things:

- the **Scenario** — the campaign itself (arcs, chapters, scenes), which stays
  **static**;
- the **game state** — the progression, the flags acquired, the sessions, which
  is **specific to each playthrough**.

This way, **several tables** can play the same campaign independently, without
one's progression affecting the other.

## Contents of a playthrough

- **Name** and **Description**
- attached **characters**
- **sessions**
- **Flags**

## Flags

Flags are **boolean switches** (true / false) used to unlock chapters through
their **prerequisites**.

They are **implicit**: a flag appears automatically as soon as a chapter
references it in its prerequisites — you have nothing to declare manually. A
dedicated **"Flags"** page lists all the flags of the playthrough and lets you
**toggle them on / off**.

## Chapter progression

Each chapter carries, **per playthrough**, a progression status:

- **Not started**
- **In progress**
- **Completed**

## Sessions

You can **start** or **resume** a session, with its start and end date. Each
session keeps a **journal** whose entries are **typed**:

- **Note**
- **Event**
- **Dice roll**
- **Player action**

Each entry is **timestamped**, which also allows you to **log retroactively**
after the fact.

:::warning[Cascading deletion]
Deleting a playthrough **cascades** to delete its sessions, its attached
characters, its flags, and its progressions. A confirmation is requested.
:::
