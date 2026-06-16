---
sidebar_position: 4
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

A **chapter-graph** mode lets you visualize a chapter's scenes as
a directed graph with branches as edges. Handy for checking that
no scene is orphaned (no entry) or a dead end (no exit).

## Best practices

- **Don't overuse branching.** 2-3 exits per scene are enough — beyond that, GM prep explodes.
- **"Fail forward" branches.** Avoid branches that lead to a game over; prefer forks that change the tone rather than ones that block progress.
- **Clear conditions.** "If Stealth check ≥ 15" is more actionable than "If the PCs are stealthy".
