---
sidebar_position: 2
---

# Foundry VTT export

DM Loremind exports your campaigns straight to **Foundry VTT** (v13) through
its companion module **LoreMind Importer**: you prep in DM Loremind, you play
in Foundry. Ready-to-play scenes (battlemaps with walls, doors and lights),
journals, roll tables, enemy tokens — everything lands in a single import.

## Step 1: install the module in Foundry

Once, in Foundry: **Add-on Modules → Install Module**, then paste the manifest
URL:

```
https://github.com/IGMLcreation/loremind-importer/releases/latest/download/module.json
```

Then enable **LoreMind Importer** in your world
(**Game Settings → Manage Modules**). Module updates are handled by Foundry
like any other module.

## Step 2: export the campaign from DM Loremind

On the **campaign page**, click **"Export for Foundry"**. A dialog lets you
pick what the module should import:

- **Maps & enemies** — one Foundry Scene per battlemap (Day/Night variants
  included), with tokens for the enemies linked to each scene;
- **Narrative journals** — arcs, chapters, quests and scenes as journals
  (texts + illustrations), plus NPC sheets and the bestiary;
- **Random tables** — your encounter and event tables as Foundry RollTables.

Two presets speed things up: **"Everything"**, or **"Maps & enemies only"** if
you just want combat support. The export produces a `.zip` file: the campaign
bundle.

:::tip
Walls, doors and lights come from the **Universal VTT** files
(`.uvtt` / `.dd2vtt`, Dungeondraft & co) or the "Foundry VTT" export of
**Dungeon Alchemist** attached to your scenes. A battlemap without a UVTT file
is imported flat (background + grid, no walls).
:::

## Step 3: import into Foundry

In your Foundry world, logged in as **GM**: **"Import LoreMind"** button at the
top of the *Journal* tab, then select the `.zip`. The module creates folders,
scenes, journals, tables and actors, and links each scene to its journal.

:::note[Re-importable]
You can re-export and re-import the same campaign as often as needed: the
previous import is cleaned up and recreated, but actors already imported and
stats entered by hand in Foundry are **kept**.
:::

## Going further: the monster bridge

The module also moves your monsters between Foundry and DM Loremind, by
**compendium reference** (works with every game system):

1. **Foundry → DM Loremind**: in Foundry, *Actors* tab →
   **"Export monsters → LoreMind"** → tick world actors and/or compendiums →
   a `.json` file is produced.
2. **In DM Loremind**: campaign Bestiary → "Import Foundry monsters" → enemies
   are created with portrait and folder tree, without duplicates.
3. Link those enemies to your scenes and export the campaign: on import, each
   referenced enemy is recreated from its compendium and its **token is placed
   on the battlemap**.

To get monsters **created in DM Loremind** out as real typed actors with their
stats (HP, armor, attributes), use structure mapping: in Foundry,
**"Export structure → LoreMind"** on a sample actor, then import the `.json`
into your DM Loremind **Game System** — the Enemy template is filled with the
system's fields.

## Known limits

:::note
- NPCs and enemies not linked to a scene remain **journals** in Foundry (no
  actor sheet).
- The **grid** is square, `distance = 5 ft` by default; the UVTT light scale
  is a heuristic to adjust for your system.
- The source compendium of a referenced monster must be **installed in the
  target world**.
:::

## Resources

The module is available on
[GitHub — loremind-importer](https://github.com/IGMLcreation/loremind-importer)
(detailed documentation, issues and releases).
