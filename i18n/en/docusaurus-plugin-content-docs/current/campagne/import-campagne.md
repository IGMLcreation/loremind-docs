---
sidebar_position: 10
---

# Campaign import (PDF)

**Campaign import** lets you start from a module or adventure PDF: the **AI**
extracts a ready-to-play tree from it, which you validate before creation.

## What the AI extracts

From the PDF, the AI rebuilds an **Arc → Chapter → Scene** structure, and on
top of that:

- detects the **NPCs** present in the module;
- proposes, for dungeon-type scenes, optional **rooms**.

:::info[PDF only]
The import only accepts **PDF** files.
:::

## Streamed processing

The processing is **streamed**: progress is shown in real time — number of
extracts analyzed, counters of **arcs**, **chapters**, **scenes**, and
**NPCs**. If the AI provider is temporarily overloaded, **waiting messages**
keep you informed without interrupting the processing.

## Review step

Before any creation, a **review step** lets you check and adjust the result.
The merge with what already exists is **non-destructive**:

- nodes **already present** in the campaign appear as **read-only**, flagged
  with an **"already present"** badge;
- the rest of the tree is **editable**;
- you can set the type of each arc: **Linear** or **Hub**;
- a **checklist** lets you choose which NPCs to create.

:::tip[Only new elements are created]
"Create in the campaign" creates **only the new elements**. Your existing
content is never overwritten.
:::
