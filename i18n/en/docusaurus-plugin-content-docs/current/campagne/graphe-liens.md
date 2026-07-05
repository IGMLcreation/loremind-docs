---
sidebar_position: 6
---

# Relationship graph

The **"Graph"** button on the campaign page opens an overview of the
**relationships** between your world and your campaign: who knows whom, which
scene takes place where, which quest touches which faction.

## What is displayed

- **Every page** of the world (Lore) linked to the campaign — even isolated
  ones;
- the campaign's **NPCs**, **scenes** and **quests** **that reference at least
  one Lore page**.

Each node type has its color, recalled in the legend. The subtitle sums up the
contents ("X page(s) · Y NPC · Z scene(s)…").

:::note[A world is required]
The graph relies on the Lore: without a world linked to the campaign, it shows
*"No world (Lore) is linked to this campaign: link one from the campaign header
to see the graph."*
:::

## Where the links come from

The graph's edges are your existing links — nothing to re-enter:

- **page ↔ page** — the **"Related pages"** field of a Lore page;
- **NPC / scene / quest → page** — the **"Linked Lore pages"** field of the
  sheet.

## Interactions

- **Zoom** with the mouse wheel, **pan** by dragging the background.
- **Drag a node** to reposition it: positions are **saved automatically** on
  the campaign — you'll find your layout back on the next visit.
- **"Auto layout"** recomputes an automatic placement (and forgets your manual
  moves).
- **Hover a node**: it and its direct neighbors stay sharp, the rest fades —
  handy for reading the connections of a central NPC.
- **Click a node** to open its sheet.
- **Click a legend entry** to hide/show an entity type (NPCs, scenes, quests);
  the preference is remembered in your browser.

:::info[Two different graphs]
This graph shows the **links to the Lore** at the campaign scale. For the graph
of a chapter's **scenes** (the narrative exits), see
[Narrative branches](/docs/campagne/branches).
:::
