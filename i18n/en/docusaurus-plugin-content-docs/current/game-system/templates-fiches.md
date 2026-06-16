---
sidebar_position: 3
---

# PC / NPC sheet templates

Each Game System carries two templates: one for **PCs** (players), one
for **NPCs**. The business invariants differ — a PC typically has a full
sheet (stats, spells, equipment), whereas an NPC may only have a
motivation and a faction.

## Editing

In the Game System editor, there are two separate blocks:

- **PC sheet fields** — shown when creating/editing a PC
- **NPC sheet fields** — shown when creating/editing an NPC

Each field has:

- A **name** (unique within the template, case-insensitive)
- A **type**: TEXT, NUMBER, IMAGE, KEY_VALUE_LIST
- For IMAGE: a **layout** (GALLERY, HERO, MASONRY, CAROUSEL)
- For KEY_VALUE_LIST: a **list of fixed labels**

## Universal fields (hard-coded)

Whatever you put in the template, **three fields are always present**
on every PC/NPC sheet and are not configurable:

- **Name** (required)
- **Portrait** (image, square ratio)
- **Banner** (image, landscape ratio)

This is intentional — these fields have a universal meaning regardless of
the game system, and their position in the WorldAnvil-style view is fixed.

## The KEY_VALUE_LIST type in detail

Particularly useful for **stat blocks**. You define the list of
labels at the template level:

```
Field "Attributes" (KEY_VALUE_LIST)
├── Label : STR
├── Label : DEX
├── Label : CON
├── Label : INT
├── Label : WIS
└── Label : CHA
```

Every PC sheet will have these 6 labels, and the GM just fills in the values.
On display:

- ≤ 6 entries → compact 2-row table
- > 6 entries → 2-column list, like paper "skills"

## Best practices

- **Prefer 1 KEY_VALUE_LIST over 6 NUMBERs**. The 6 D&D stats in a single "Attributes" field render as a neat stat block; 6 separate NUMBERs render as individual, more cluttered cards.
- **Reserve NUMBER for standalone values** (Level, max HP). They display as discreet badges in the sheet's hero.
- **Default templates provided** in Nimble and D&D — start from there to get a feel for the spirit, then adapt.

## Migrating existing sheets

Changing the template **does not delete values already entered** — they
remain in the database under their old name. If you rename a field "History" to
"Tale", existing sheets still display "History" until you
re-edit them.

This is intentional, to avoid accidental data loss. In the long run, an
assisted migration tool will be provided.
