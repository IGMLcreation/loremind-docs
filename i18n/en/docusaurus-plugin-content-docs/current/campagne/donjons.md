---
sidebar_position: 2.5
---

# Explorable locations and dungeon rooms

A scene can represent a whole location: a manor, cave, ruin or ship. Add **rooms**
in its editor to describe exploration space by space. As soon as a scene contains
a room, its view uses the dungeon layout. Without rooms, it remains a normal scene.

## Build the location

1. Create or edit a [scene](/docs/campagne/arcs-chapitres-scenes).
2. Expand the **explorable location** section.
3. Click **Add room**, enter its name and optionally its floor.
4. Expand the room to fill in its details.
5. Save the **scene** to keep your changes.

![Explorable location section, French UI](/img/screenshots/guides/lieu-explorable.jpg)

| Field | Suggested content |
|---|---|
| **Description** | What characters perceive on entering and can examine |
| **Bestiary enemies** | Reusable creature sheets present in the room |
| **Enemies** | Numbers, positions and encounter specifics |
| **Loot** | What can be found, and under which conditions |
| **Traps** | Detection, triggers and effects |
| **GM notes** | Secrets and location reactions |

Use **↑ / ↓** to reorder rooms. Floors are numeric: for example `0` for ground
level, `1` upstairs and `-1` for a basement.

## Connect rooms

Create at least two rooms before adding an **exit**. Each exit has a **label**,
a **target room in the same location** and an optional **condition**. For example,
“Trapdoor under the rug” → “Cellar”, condition “notice the trapdoor”.

Exits are directional: add a return connection on the other room when useful.
Conditions guide the GM; they do not roll dice or move characters automatically.

Room exits and [scene branches](/docs/campagne/branches) are separate. To leave the
manor for another scene, add a branch at the scene level.

## Check before playing

After deleting a room, check exits targeting it. Broken doors appear in
[Next steps](/docs/campagne/preparation). Also check bestiary enemy references.

[PDF campaign import](/docs/campagne/import-campagne) can suggest rooms: review
their names, connections and secrets before confirming.

## Maps and exports

Rooms describe the location; **battlemaps** are attached to the scene for
[Foundry export](/docs/export/foundry). The room editor does not draw a map or
automatically align rooms with map coordinates.

The [PDF booklet](/docs/export/pdf) includes rooms with enemies, loot, traps,
notes and exits. Review it before sharing with players.

## Prepare five narrative highlights instead

Beta's [Five-room dungeon method](/docs/campagne/methode-cinq-salles) builds **one
chapter and five scenes** from your answers. To create rooms within one location,
use the editor described in this guide.
