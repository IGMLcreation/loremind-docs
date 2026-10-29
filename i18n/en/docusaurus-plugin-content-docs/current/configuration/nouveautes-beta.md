---
sidebar_position: 4.5
---

# Beta branch additions

This page covers **beta** additions after stable **1.0.3**. The mentor arrives
with **1.1.0-beta**, session and tablet workflows with **1.2.0-beta**, followed
by level navigation and network improvements through **1.3.0-beta**. Later changes
cover publishing, PDF export and graph review, then guided methods and story fields
in **1.4.0-beta**. Availability depends on your installed build.

## Beta 1.4.0: guided methods and story fields

The [method chooser](/docs/campagne/methodes-guidees), reached through **Guided
method** on the campaign home, now offers:

- **[Five-room dungeon](/docs/campagne/methode-cinq-salles)**: one chapter and five scenes;
- **[Node-based investigation](/docs/campagne/methode-enquete)**: one chapter,
  six scenes, three interconnected leads and twelve links;
- **[The villain's plan](/docs/campagne/methode-plan-mechant)**: six stages,
  discreet then visible, with an optional manual clock in existing playthroughs.

[Arcs and scenes](/docs/campagne/arcs-chapitres-scenes) gain dedicated fields:
**Hidden truth**, **Hooks**, **Purpose of the scene** and **Enemy tactics and morale**.
[NPCs](/docs/campagne/personnages) gain a system-independent **Role in the story**
block: role, motivation, knowledge and distinctive trait. Eight new lightbulbs
support writing these fields.

Review now has **seventeen patterns**: it flags an opponent or ally without
motivation and an arc with only one hook. Written tactics avoid the “combat
without purpose” suggestion. Export/import preserves the new fields. In the
player PDF, only the NPC story block's distinctive trait is kept; the other
new story fields remain GM-only.

## Publish a module and choose its PDF

The new **[publishing sheet](/docs/export/publication)** prepares a module to
share: subtitle, author, cover, version, system, levels, players, length,
presentation, warnings, hidden background, hooks, credits and licence. Everything
is optional and saved with the campaign. Filling it in does not publish online.

**[Export to PDF](/docs/export/pdf)** now opens options:

- **GM (complete)** or **Players** edition, filtering GM-only fields;
- eight selectable parts, including **GM appendix** and **Full-page maps**;
- the whole Lore or only pages linked to the campaign;
- **A4**, **A5** or **US Letter**, with print mode removing colour fills.

References give **page numbers** for scenes, opponents and maps present in the
booklet. Appendices collect revelations and clues, NPC and opponent indexes,
and opponent appearances. Maps and room plans can each occupy a landscape page.
The player edition always excludes GM appendices; still review free text and
maps before sharing.

These options follow the **1.3.0-beta** milestone. Earlier builds may still
download the usual booklet directly.

## Prepare and write

- **[Writing mentor](/docs/campagne/mentor-ecriture)**: lightbulbs explain fields
  with questions, examples and common pitfalls. The publishing sheet also has
  built-in guidance.
- **[Editor review](/docs/campagne/relecture-editeur)**: seventeen patterns cover
  choices, stakes, pacing, narration and paths through the graph.
- **[Guided methods](/docs/campagne/methodes-guidees)**: three workflows prepare
  a chapter and scenes, with links or a clock depending on the method.

The five graph review patterns flag an isolated scene, a chokepoint, a dungeon
without loops, an investigation without a proactive event and clues all coming
from the same kind of scene. Revelation checks now expect **three distinct source
scenes**. Review uses saved links without rewriting text or changing the graph.

All three aids work **without AI**, alongside chat and generation tools.

## Find and play a session

The campaign home has a **Play** block: resume an active session, choose a
playthrough to start one, or create a playthrough if needed. The tree has a
**Playthroughs** branch. **Session in progress** returns to play from other
pages, including the mobile top bar.

In [session mode](/docs/campagne/mode-seance), **Rules** shows the linked system:
highlighted search, collapsible sections, a contents list and pins. **Ask AI**
prepares a question for review before you send it.

## Use a phone or tablet

[Compact navigation](/docs/navigation#phone-and-tablet-beta) replaces permanent
sidebars with two drawers: main menu and tree. Recent builds display the tree
**one level at a time**: tap a branch to enter it, use the top back button to
return to its parent and **Open sheet** to view the container. Forms, dialogs
and session panels adapt to small screens.

In the **desktop app**, [tablet access](/docs/configuration/acces-tablette)
authorises a local-network browser with a QR code or six-digit code. Settings
remain restricted to the host.

- **Windows**: network-profile and firewall permission checks; detection of
  third-party antivirus firewalls whose rules must be checked in their own UI.
- **Linux**: `ufw` or `firewalld` detection and a command to open the port.
  The guide also covers accessing a Debian server through an SSH tunnel.

Desktop pairing is separate from Docker: responsive layout works in both modes,
but Docker does not include this pairing connector.

For the preview channel, see [Beta channel](/docs/configuration/canal-beta).
Back up content before switching versions; returning to stable is not a data restore.
