---
sidebar_position: 3
---

# Campaign PDF booklet

**Export to PDF** on the campaign home produces a booklet for offline preparation,
paper play or sharing a module. The file uses the campaign name; the player
edition adds the suffix `_joueurs.pdf`.

:::info[Beta options]
The booklet exists in stable. The **publishing sheet**, player edition and paper
options were added on **beta after 1.3.0-beta**, followed by page references, GM
appendices and full-page maps. On an earlier version, the button generates the
GM booklet directly without these choices.
:::

## Generate the booklet

1. On the campaign home, click **Export to PDF**.
2. Optionally complete the [publishing sheet](/docs/export/publication) through
   **Fill in the sheet** or **Edit the sheet**.
3. Choose **GM (complete)** or **Players**, then adjust **Included parts**.
4. Select **A4**, **A5** or **US Letter**. Enable **Print mode** to remove colour
   fills and save ink.
5. Click **Generate the PDF** and wait for the download.

At least one part must be checked. Switching edition reapplies its default
selection, so choose the edition before customising checkboxes. Reopening the
dialog starts again with the complete GM selection.

## GM or player edition

| Choice | Initial selection | Content |
|---|---|---|
| **GM (complete)** | All parts and the whole lore | Preparation content, secrets, notes and combat |
| **Players** | Narrative structure, NPCs, linked lore and maps | Read-aloud text, atmosphere, scene context, illustrations and maps; GM fields removed |

The player edition removes scene preparation summaries, secret notes, choices and
consequences, exits and combat. Hidden publication background, hooks and GM
appendices are never included. Checkboxes remain editable: you can also remove
NPCs, for example.

:::note[Review before sharing]
The filter recognises **GM fields**, not secrets written in free text. Selected
NPC template fields and Lore fields are rendered as written. Scene names, narration and
maps can also reveal later events. Read the player PDF and uncheck any parts
unsuitable for your players.
:::

### New story fields (beta 1.4.0)

| Fields | GM PDF | Player PDF |
|---|---|---|
| Arc hidden truth and hooks | Included | Removed |
| Scene purpose, tactics and morale | Included | Removed |
| NPC story role, motivation and knowledge | Included | Removed |
| NPC distinctive trait | Included | Included when the NPC part is selected |

These filters apply to dedicated [arc and scene fields](/docs/campagne/arcs-chapitres-scenes)
and the [NPC story block](/docs/campagne/personnages). They do not analyse text
entered in other fields.

## Choose parts and Lore

The eight checkboxes are **Narrative structure**, **Quests**, **NPCs**,
**Bestiary**, **Random tables**, **Lore**, **GM appendix (revelations, indexes)**
and **Full-page maps**. The booklet uses saved content from the selected parts.

Lore has two scopes:

- **The whole lore**: all pages in the setting linked to the campaign;
- **Only pages linked to the campaign**: pages referenced by the campaign's
  arcs, chapters, scenes, quests or NPCs. A page mentioned only in free text is
  not included by this filter.

Selection applies to **document parts**, rather than an individual arc or session.
The PDF describes the prepared campaign, not a playthrough's journal.

## Read and use the document

The booklet assembles a cover, a credits page when filled in, a **paginated table
of contents**, then the selected parts. A filled-in publishing sheet adds a
technical page and an introduction, among other details.

Narrative structure follows arcs, chapters, integrated quests and scenes; a simple
campaign keeps a direct scene presentation. NPCs, bestiary and Lore pages are
grouped by folder. Random tables retain their dice formula.

**Numbered page references** lead from exits to target scenes, from combat to an
opponent's sheet and from scenes to maps. They only point to elements actually
included in the booklet. PDF bookmarks also support navigation in compatible readers.

The GM edition distinguishes **Read aloud**, **Secret GM notes** and **Combat**
boxes. Explorable locations detail rooms, exits, loot, traps and notes.

## GM appendices

**GM appendix (revelations, indexes)** collects the following when content exists:

- **Revelations and clues**: each Revelation scene and the scenes in the same
  chapter leading to it, based on saved links. Missing links are flagged; the
  table does not infer clues from prose.
- **NPC index**: alphabetically sorted names, folders and pages.
- **Opponent index**: names, folders, levels and scene appearances, including
  opponents referenced in rooms.

Indexes only list sheets included in the booklet. These appendices remain
GM-only, even if checked in the player edition. To improve paths to revelations,
see [Editor review](/docs/campagne/relecture-editeur).

## Full-page maps

With **Full-page maps**, scene battlemaps, their variants and room plans are
collected at the end of the booklet: **one map per landscape page**, with its title.
Scenes and rooms refer to these pages instead of displaying small inline maps.

Without this checkbox, maps remain illustrated within the narrative structure.
Only **images** are rendered: a video battlemap does not become a still image
in the PDF.

## Limits and preservation

Images are resized and recompressed. A large campaign can take several seconds
to generate and produce several megabytes. Booklet headings and some labels
currently remain in French, even when using the English interface.

A PDF does not replace a [ZIP backup](/docs/configuration/sauvegardes): it cannot
be imported as an editable campaign. The publishing sheet prepares the document;
it does not publish it online.
