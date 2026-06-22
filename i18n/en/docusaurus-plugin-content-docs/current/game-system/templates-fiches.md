---
sidebar_position: 3
---

# PC / NPC / Enemy sheet templates

Each Game System carries three templates: one for **PCs** (players), one
for **NPCs**, and one for **Enemies**. The three are kept separate because
each type of sheet generally needs different fields — a PC typically has a
full sheet (stats, spells, equipment), an NPC a lighter sheet, and an Enemy
emphasizes combat. It is up to you to define the fields of each.

## Editing

In the Game System editor, three separate blocks:

- **PC sheet fields** — shown when creating/editing a PC
- **NPC sheet fields** — shown when creating/editing an NPC
- **Enemy sheet fields** — shown when creating/editing an Enemy

For the **Enemy** block, combat fields are suggested: **Stats**,
**Attacks**, **Abilities**, **Weaknesses**, **Loot**, **Tactics**.

Each field has:

- A **name** (unique within the template, case-insensitive)
- A **type**: TEXT, NUMBER, IMAGE, KEY_VALUE_LIST
- For IMAGE: a **layout** (GALLERY, HERO, MASONRY, CAROUSEL)
- For KEY_VALUE_LIST: a **list of fixed labels**

## Universal fields (hard-coded)

Whatever you put in the template, **three fields are always present**
on every PC/NPC/Enemy sheet and are not configurable:

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
The **Table** type exists in the engine but is **not offered** for the
sheets: stick to Text, Number, Image and Key/value list.
On display:

- ≤ 6 entries → compact 2-row table
- > 6 entries → 2-column list, like paper "skills"

## Best practices

- **Prefer 1 KEY_VALUE_LIST over 6 NUMBERs**. The 6 D&D stats in a single "Attributes" field render as a neat stat block; 6 separate NUMBERs render as individual, more cluttered cards.
- **Reserve NUMBER for standalone values** (Level, max HP). They display as discreet badges in the sheet's hero.
- **Pre-shipped systems**: three systems are provided to start with — **Nimble** (excerpt), **D&D 5e SRD** (excerpt) and **Homebrew Example**. Start from there to get a feel for the spirit, then adapt. Note that **no enemy template is pre-filled**: the Enemy block exists but stays empty until you configure it.

## Migrating existing sheets

Changing the template **does not delete values already entered** — they
remain in the database under their old name. If you rename a field "History" to
"Tale", existing sheets still display "History" until you
re-edit them.

This is intentional, to avoid accidental data loss. In the long run, an
assisted migration tool will be provided.
