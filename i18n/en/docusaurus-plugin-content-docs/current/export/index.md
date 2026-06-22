---
sidebar_position: 1
---

# Export

DM Loremind ships a **native export** that is delivered and usable today.
Other formats (PDF, Markdown, Foundry VTT) are under consideration.

## Available today: global export

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

## Formats

| Format | Status | Usage |
|--------|--------|-------|
| **JSON (+ images, .zip)** | Available | Structured backup, module sharing, migration between instances |
| **PDF** | Coming soon | Printing sheets, campaign booklets |
| **Markdown** | Coming soon | Human-readable backup, Git sharing |
| **Foundry VTT** | Under consideration | Export to Foundry for use at a virtual table |

:::info[Coming soon]
The **PDF**, **Markdown** and **Foundry VTT** exports are not yet delivered.
They are on the roadmap and will be documented as releases progress.
:::
