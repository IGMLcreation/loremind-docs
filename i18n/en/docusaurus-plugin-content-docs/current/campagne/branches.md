---
sidebar_position: 5
---

# Narrative branches

A **branch** is a possible exit from one scene to another scene
**within the same chapter**. It is the mechanic that turns a linear sequence
of scenes into a graph — useful for modeling player choices.

## Model

Each branch carries:

- A **label** — what triggers the exit (e.g. "If the fight is lost", "If negotiation succeeds")
- A **target scene** (referenced by ID within the same chapter)
- An optional **condition** — free text to spell out the game mechanic

## Example

Scene "Encounter with the Messenger":

- **Branch 1**: "If the PCs accept the mission" → "Journey to Vaeril"
- **Branch 2**: "If the PCs refuse" → "The Curious Innkeeper"
- **Branch 3**: "If combat breaks out" → "Ambush in the Alley"

## Graph visualization

The **scene map** of a chapter (or of a [quest](/docs/campagne/quetes))
displays the scenes as a directed graph with branches as edges — with
**pan/zoom** and **link editing directly in the graph**. Handy for checking
that no scene is orphaned (no entry) or a dead end (no exit).

For the graph of links to the Lore at the campaign scale (NPCs, scenes,
quests), see [Relationship graph](/docs/campagne/graphe-liens).

## Edit the scene map

Open **Scene map** from a chapter or a quest with its own scenes. In simple mode,
the **Scenes** branch opens the map.

1. Drag the connection dot under a node onto another node to create a directional link.
2. Click a link to edit its label, optional condition and type, then **Save**.
   The same panel can delete the link.
3. Click a node to open its scene. Drag it to arrange the map, or use its pencil
   to rename it (Enter confirms, Escape cancels).
4. Use the wheel to zoom, drag the background to pan, or use zoom and fit controls.

Link types are **Exit**, **Clue** and **Lead**, with Exit as the default. These
distinguish transitions, information pointing to another node and directions to
investigate. Conditions are GM guidance; they are not executed automatically.

Scene types — **Generic**, **Location**, **Encounter**, **NPC situation**, **Event**
and **Revelation** — determine node colours. Select them in the scene editor.

Add a reverse link when a connection works both ways. After reorganising, check
[Next steps](/docs/campagne/preparation) for missing targets, links outside the
chapter or self-links. For connections within one scene, see
[Dungeon rooms](/docs/campagne/donjons).

## Branching advice

- **Don't overuse branching.** 2-3 exits per scene are enough — beyond that, GM prep explodes.
- **"Fail forward" branches.** Avoid branches that lead to a game over; prefer forks that change the tone rather than ones that block progress.
- **Clear conditions.** "If Stealth check ≥ 15" is more actionable than "If the PCs are stealthy".
