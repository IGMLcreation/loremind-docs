---
sidebar_position: 7
---

# Bestiary (Enemies)

The **bestiary** gathers the reusable enemy sheets of your campaign.
You organize them freely into **folders** (by region, by creature type,
by chapter…) to keep a readable list.

## Fields of a sheet

- **Name** (required)
- **Level** — free text: it can be `5`, as well as `FP 8` or `Boss`. You
  choose the notation.
- **Folder** — entered with auto-completion: type an existing name to file the
  enemy into it, or a new name to create a folder.
- **Portrait** — square image (1:1)
- **Banner** — header image (3:1)

All other fields are driven by the **enemy template** defined in the
Game System linked to the campaign.

:::info[Without a linked system]
You can edit a sheet even if no system is attached: the template is simply
empty and you then only have the fields above.
:::

## Reusing an enemy in play

The point of the bestiary is **reuse**. A **scene** — or a dungeon **room** —
can reference one or more enemies from the bestiary through a selector. No need
to recreate the same goblin ten times: create it once, point to it everywhere
it appears.

## Importing your monsters from Foundry VTT

The **"Import Foundry monsters"** button, at the top of the list (dropping the
file on the toolbar also works), loads a **`.json` monster catalog exported
from Foundry** by the companion module
[LoreMind Importer](/docs/export/foundry).

For each monster in the catalog, a sheet is created with:

- its **name** and its **portrait**;
- its **folder**, mirroring the Foundry folder tree (prefixed with `Foundry/`);
- a read-only **"Foundry stats"** box: a *snapshot* of the stats, frozen at
  import time — the live sheet stays in Foundry.

The import is **duplicate-free**: re-importing the same catalog updates the
existing sheets (name, stats, folder) instead of creating new ones, and leaves
the existing portrait untouched. On [Foundry export](/docs/export/foundry),
imported monsters are **linked back to their original actor**.

## Matching the sheet to your Foundry system

In the **Game System** editor, *Enemy sheet fields* section, the **"Import a
Foundry structure"** button loads an actor structure exported by the module and
**replaces the enemy template** with the matching fields (the type is recalled:
*"Foundry actor: npc"*). Your hand-made enemies are then **automatically
adapted to that format** when exporting to Foundry.

## List and display

The list is **grouped by folder**, each sheet showing a **level badge** to
spot the difficulty at a glance.

Opening a sheet gives a **read-only view**, with the same polished rendering as
character sheets (banner, portrait, template sections).

:::tip[No AI generation here]
Unlike other campaign screens, the bestiary offers **no** AI generation. Enemy
sheets are filled in by hand.
:::
