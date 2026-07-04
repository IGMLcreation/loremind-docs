---
sidebar_position: 1
---

# Export

DM Loremind offers three exports, all shipped: the **global backup**
(JSON + images), the **PDF booklet** of a campaign and the **Foundry VTT
export** to play at the virtual table. A **Markdown** export is under
consideration.

## Global backup (JSON)

The export is launched from **Settings → Data backup / restore →
Export**. It produces a **`loremind-export.zip`** file containing all
of your content in **JSON** format, along with the **images**.

### Scope: global and exhaustive

The export is **global** — it bundles **all** of your content, not a single
sheet or an isolated Lore:

- game systems, lores, pages, templates;
- campaigns, arcs, chapters, scenes;
- PCs, NPCs, enemies;
- item catalogs, random tables;
- images.

### Symmetric import

The same `.zip` can be re-imported on another instance, in **merge mode**:
the content is **added without replacing** the existing data. Ideal for:

- **sharing a module** with another GM,
- **migrating** between two installations.

The import/export procedure is detailed in
[Configuration → Backups](/docs/configuration/sauvegardes).

### Limits

:::note
- Export and import are **disabled in demo mode**.
- Only the **images actually used** are included; orphan images
  are not bundled.
:::

## Campaign PDF booklet

From a **campaign page**, the **"Export as PDF"** button generates a
**printable booklet** of the campaign: cover, **paginated table of contents**,
narrative structure (arcs, chapters, scenes with their illustrations and
battlemaps), **quests**, **NPCs** and **bestiary**, **random tables** and
linked **lore** pages. Ideal for prepping away from the screen or sharing a
paper handout at the table.

## Foundry VTT export

Also from a **campaign page**, **"Export for Foundry"** produces a `.zip`
bundle that the companion module **LoreMind Importer** imports into Foundry
VTT: ready-to-play scenes (walls, doors, lights), journals, random tables and
enemy tokens.

➡️ See the dedicated page: [Foundry VTT export](/docs/export/foundry).

## Formats

| Format | Status | Usage |
|--------|--------|-------|
| **JSON (+ images, .zip)** | Available | Structured backup, module sharing, migration between instances |
| **PDF** | Available | Printable campaign booklet |
| **Foundry VTT** | Available | Play your campaign at the virtual table |
| **Markdown** | Under consideration | Human-readable backup, Git sharing |
