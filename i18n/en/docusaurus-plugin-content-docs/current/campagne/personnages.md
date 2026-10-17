---
sidebar_position: 4
---

# Player and Non-Player Characters

DM Loremind separates **PCs** (Player Characters) from **NPCs** (Non-Player
Characters) into two distinct entities. They share the **same structure**
(driven by the Game System template); the difference: the **NPC** is filed into
**folders** and is **linked to the Lore** (factions, locations…), which the PC
is not.

## Universal Fields

Whatever the game system, every sheet carries three hard-coded fields:

- **Name** (required)
- **Portrait** — main image, square ratio recommended
- **Banner** — header image, landscape ratio (3:1)

Game statistics are driven by the **Game System template** associated with the
campaign. From **1.4.0-beta**, NPCs also have a system-independent story block,
described below.

## Template Fields

The rest of the fields come from the **Game System template**. DM Loremind
provides systems that are **pre-filled and editable**; for example, for D&D 5e:
- Class, Race, Background, Alignment
- Level, max HP, AC
- **Ability Scores** (KEY_VALUE_LIST with STR/DEX/CON/INT/WIS/CHA labels)
- Skills, Equipment, Spells, Story
- Image gallery

For Nimble: Class, max Serious Wounds, Abilities, Equipment, Story,
Personal Goals, Gallery.

The GM can **edit the template** from the Game System to add, remove,
or reorganize the fields.

## NPC role in the story (beta 1.4.0)

In an **NPC** editor, below the template fields, **Role in the story** contains
four optional fields:

| Field | What to prepare |
|---|---|
| **Role** | Opponent, Ally, Resource or Extra; leave unspecified if needed |
| **Motivation** | What they want and what they are willing to do to get it |
| **What they know** | Information they can reveal, and on what terms |
| **Distinctive trait** | A gesture, speech pattern or mannerism to play at the table |

Lightbulbs offer advice for each field. Click **Create** or **Save** to store the
block with the sheet. It also appears in the detailed view, regardless of the
game system.

For example, an ally wants to protect their sister, knows the tunnels' entrance
but expects a promise of safety, and counts their words on their fingers.
[Review](/docs/campagne/relecture-editeur) flags an **Opponent** or **Ally** without
motivation. Resources, extras and unspecified roles do not receive this suggestion.

The **GM PDF** includes role, motivation, knowledge and distinctive trait. The
**player PDF** keeps only the **distinctive trait** from this block. Review free
text in template fields before sharing. These story details are also preserved
by campaign export/import.

## Creation / Editing

From the campaign:

- **+ Character** opens the PC editor
- **+ NPC** opens the NPC editor

Both screens dynamically render the form according to the template.
Apart from the name, fields are optional — you can create a sheet with just a
name, and fill it in as you go (or ask the AI to suggest content).

## Display

Clicking a PC or NPC card from the campaign view opens the
**detailed sheet**:

- Full-width banner at the top
- Portrait + name + badges for isolated numeric stats (e.g. "Level 2")
- Sections rendered in the **template's order**:
  - **Text** — displayed as paragraphs
  - **Key/value list** — compact table or 2-column list depending on the count
  - **Image** — gallery according to the chosen layout
- Toolbar buttons: back, AI Assistant, edit

## Dedicated AI Assistant

On a PC or NPC sheet, the ✨ button opens a chat focused on that
character. The AI automatically receives the sheet's context — you
can ask it to: "Suggest a backstory consistent with the setting",
"Suggest 3 personal goals", "Imagine 3 signature lines".
