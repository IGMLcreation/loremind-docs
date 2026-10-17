---
sidebar_position: 1
---

# Export

DM Loremind offers three exports, all shipped: the **content backup /
sharing** (JSON + images), the **PDF booklet** of a campaign and the **Foundry
VTT export** to play at the virtual table. A **Markdown** export is under
consideration.

## Content backup and sharing (JSON)

The export is launched from **Settings → Data backup**. It produces a **`.zip`**
file containing the content in **JSON** format, along with the **images**. Two
scopes:

- **Full backup (everything)** — the whole instance: game systems, lores,
  pages and templates, campaigns (arcs, chapters, scenes, quests), PCs, NPCs,
  enemies, catalogs, random tables, playthroughs, and the images.
- **A single campaign** — a **selective** export of one campaign and its
  closure, with three options: include the linked **lore (world)**, the **play
  space** (playthroughs, sessions and journals, facts, quest progression,
  character sheets) and the **images**.

### Symmetric import

The same `.zip` can be re-imported on another instance, in **merge mode**:
the content is **added without replacing** the existing data. Ideal for:

- **sharing a campaign** or a module with another GM (selective export),
- **migrating** between two installations (full backup).

Exports from older versions can still be imported. The procedure is detailed
in [Configuration → Backups](/docs/configuration/sauvegardes).

### Limits

:::note
- Export and import are **disabled in demo mode**.
- Only the **images actually used** are included; orphan images
  are not bundled.
:::

## PDF booklet and publishing

From the campaign home, **Export to PDF** produces a printable booklet.
Recent beta builds offer **GM or player editions**, included parts, Lore scope,
**A4 / A5 / US Letter** paper and print mode. Numbered page references, GM
appendices and full-page maps help during play.

The **publishing sheet** adds a cover, technical page, presentation, GM background
and credits to share your adventure as a module.

- [Prepare a module to share](/docs/export/publication) — fill in the sheet and save credits.
- [Campaign PDF booklet](/docs/export/pdf) — select options, understand player filters and appendices.

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
