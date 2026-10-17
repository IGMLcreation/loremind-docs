---
sidebar_position: 12
---

# Session mode

The session screen is your **cockpit while you play**: the session journal on
the left, and a **reference panel** on the right that puts all your content one
click away — scenes, PCs/NPCs, tables, dice, clocks and the AI assistant.

## Starting a session

From a [Playthrough](/docs/campagne/parties) page: **"Start a session"** button
(or **"Resume current session"** if one is open). Each session carries an **In
progress** / **Ended** badge and its start date.

## The journal

The main column is a **timestamped timeline**. Each entry is typed:

- **Note** 📝 — prep, reminders
- **Event** ✨ — what happened in play
- **Dice roll** 🎲
- **Player action** ✓

The entry form sits at the top, the timeline reads from newest to oldest. Since
entries are timestamped, you can also **log retroactively**.

:::note[Ended session = read-only]
Once a session is ended, its journal can no longer be modified.
:::

## The pinned scene

In the **"Scenes"** tab of the reference panel, every scene has a pin button:
**"Pin as current scene"**. A **"Current scene"** banner then shows at the top
of the journal with the scene's name, its location 📍 and timing 🕒, plus a
**"Show player narration"** button to unfold the read-aloud text without
leaving the session screen.

The banner also lets you open the full scene in a new tab, or unpin it.

## The "previously on…" recap

The **"“Previously…” recap"** button asks the AI to write a recap of the
**previous session** of the same playthrough, "previously on…" style: 4 to 8
sentences in a narrative tone, ending on the situation where the players left
off. The AI relies **strictly on the journal** of the previous session (plus
the quest states and active facts) — it doesn't make things up.

The text shows in a **"Previously (session name)"** box; the **"Add to
journal"** button logs it as a Note entry 📜.

:::info[Requirements]
The recap needs a [configured AI provider](/docs/assistant-ia/fournisseurs) and
**at least one previous session** in the same playthrough. If the AI service
doesn't respond, a clear message shows: *"Recap failed. Is the Brain (AI)
running?"*.
:::

## The reference panel

Seven tabs, designed so you never leave the screen mid-game:

| Tab | Contents |
|-----|----------|
| **Play** | Clocks and Facts of the playthrough (see below) |
| **AI** | Live assistant chat (world, campaign, rules, journal in context) |
| **Dice** | Dice roller with modifier and history |
| **Tables** | Your [random tables](/docs/campagne/tables-aleatoires), ready to roll |
| **Items** | The [item catalogs](/docs/campagne/catalogue-objets) (shops, loot) |
| **PCs/NPCs** | Character sheets, collapsible by folder |
| **Scenes** | The Arc → Chapter → Scene tree, sorted in play order, with the pin |

:::note
The **Play** tab only has content if the session is attached to a
[Playthrough](/docs/campagne/parties).
:::

## Clocks & fronts

**Segmented clocks** (*Blades in the Dark* style) materialize the threats
advancing in the background. They are managed in the **Play** tab during a
session, or in the **"Progress clocks"** section of the Playthrough page.

A clock is:

- a **name** (e.g. *"The cult completes its ritual"*);
- a number of **segments** — 2, 4, 6, 8, 10 or 12;
- an **auto trigger**:
  - **Manual** — you advance/roll back the clock by hand (+ / − buttons);
  - **When a Fact becomes true** — advances one segment when the fact flips;
  - **When a quest completes** — advances when the quest reaches "Completed";
  - **At session end** — advances one segment every time a session is closed;
- optionally, a **front** to attach it to.

**Fronts** group several clocks that advance together (e.g. *"The rise of the
Cult"*). Clocks without a front appear under **"Loose clocks"**. Deleting a
front doesn't delete its clocks: they become loose again.

When a clock nears its end, the [session prep](/docs/campagne/preparation)
warns you: **"nearly full!"** badge at 75%, **"full!"** at 100%. Bringing the
consequence into play is up to you.

:::tip
Auto triggers only advance the clock **one segment** at a time. A 4-segment
clock on "At session end" thus fills up in 4 sessions — size the number of
segments to the pacing you want.
:::

## Facts

**Facts** (flags) are the true/false switches of the playthrough
(*the_king_is_dead*, *bridge_destroyed*…). In the **Play** tab (**"Facts"**
subsection), each one flips with a simple toggle.

They are **discovered automatically**: a fact appears as soon as it is
referenced by a "When a fact is true" condition — as a
[quest](/docs/campagne/quetes) prerequisite or as a clock trigger. There is no
free-form fact creation: that's intentional, to avoid orphaned facts.

## Ending, then preparing the next one

At the end of the session, close it. The Playthrough page then offers the
**"Prepare the next session"** section: where the players are, what content
they will likely go through, what remains to fill in and which threats are
moving — see [Guided prep](/docs/campagne/preparation).

:::warning[Per playthrough, not per campaign]
Clocks, fronts, facts and quest progression belong to the **Playthrough** (one
table's game state), not to the campaign. Two tables playing the same campaign
each have their own clocks and facts.
:::

## Visual reference and quick entry

![Session journal and reference panel, French UI](/img/screenshots/guides/mode-seance.jpg)

**Ctrl + Enter** adds the journal entry being composed. Finish your notes before
ending the session. For clock creation and trigger details, see
[Clocks and threats](/docs/campagne/horloges).
