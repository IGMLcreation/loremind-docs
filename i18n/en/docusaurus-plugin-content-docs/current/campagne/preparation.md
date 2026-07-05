---
sidebar_position: 11
---

# Guided prep

DM Loremind tells you **what is left to prepare before playing** — without AI:
everything is derived from simple rules applied to your content, recomputed
constantly. Two complementary tools:

- the **"Next steps"** panel, on the campaign page — the health of the
  **scenario**;
- the **"Prepare the next session"** section, on a
  [Playthrough](/docs/campagne/parties) page — what matters for **your next
  session** at that table.

## Next steps (campaign)

The panel sits at the top of the campaign page, collapsible (its state is
remembered). It gives a **global status**:

- **Draft** — at least one *blocking* gap remains;
- **Playable** — nothing blocking left, but some *recommended* gaps;
- **Polished** — nothing to report.

Counters ("2 blocking", "1 recommended") sum up the situation, then each gap is
listed with its severity dot, its message and a **"Fix"** button that opens
**the right editor at the right place** — sometimes with the relevant panel
already expanded (an empty chapter opens the scene generator, for instance).

### What gets detected

**Blocking** (red dot) — the campaign cannot be played without fixing it:

- **Empty arc** — no chapter (linear arc) or no quest (hub arc)
- **Empty chapter** — no scene
- **Untitled scene**
- **Broken branch** — a scene exit points to nothing, outside the chapter, or
  to itself
- **Broken door** — a room exit points outside the scene
- **Quest without content** — no chapter or scene attached
- **Broken quest node** — the quest references a deleted chapter or scene
- **Broken prerequisite** — an unlock condition depends on a quest that no
  longer exists
- **Empty campaign** — no playable scene and no quest

**Recommended** (orange dot) — playable, but you may end up improvising:

- **Combat announced without opponents** — a combat difficulty is set but no
  enemy is described or linked
- **Enemy not found** — a scene or room references a deleted
  [bestiary](/docs/campagne/ennemis) sheet

When everything is fine: *"All set: this campaign is ready to play."*

## The dots in the tree

In the sidebar, each affected node carries a red (blocking) or orange
(recommended) **dot** before its name. Gaps **bubble up**: an arc lights up if
one of its scenes, deep down, has a gap. Hovering the dot shows the gap details
(and "+ n more gap(s)" if there are more).

## Prepare the next session (playthrough)

On a Playthrough page, the **"Prepare the next session"** section crosses the
scenario's state with **this table's** progression:

- **Where the players are** — the [quests](/docs/campagne/quetes) **In
  progress**, **Available** and **Completed**, with the progression buttons
  (**"Mark as in progress"**, **"Mark as completed"**, **"Reopen"**);
- **Likely content for the next session** — the chapters and scenes the
  players will probably go through, inferred from the active quests;
- **To fill in before playing** — the guidance gaps **restricted to that
  likely content**, each with its **"Fix"** button, plus a *"+ n other gap(s)
  elsewhere in the campaign"* link;
- **Threats in motion** — the partially filled
  [clocks](/docs/campagne/mode-seance), with the **"nearly full!"** (≥ 75%) and
  **"full!"** badges.

And if all is calm: *"All clear: no active quest and no gap in upcoming
content. Start the next session whenever you like."*

:::note[Without quests]
The "likely content" is inferred from active quests. If your campaign doesn't
use quests, all content is considered likely.
:::
