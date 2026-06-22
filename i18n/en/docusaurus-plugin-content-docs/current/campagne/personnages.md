---
sidebar_position: 3
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

Everything else is driven by the **Game System template** associated with the campaign.

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

## Creation / Editing

From the campaign:

- **+ Character** opens the PC editor
- **+ NPC** opens the NPC editor

Both screens dynamically render the form according to the template.
All fields are optional — you can create a sheet with just a
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
