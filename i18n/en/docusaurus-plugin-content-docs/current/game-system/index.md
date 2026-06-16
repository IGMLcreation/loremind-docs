---
sidebar_position: 1
---

# Game System

A **Game System** represents a TTRPG system (D&D 5e, Nimble, Cthulhu,
your own homebrew…). It carries two things:

1. **The rules** — markdown structured by H2 headings, selectively injected into AI prompts
2. **The PC and NPC sheet templates** — field structure (text, number, images, key/value lists)

A campaign references a Game System; all the PC/NPC sheets of that
campaign follow the system's templates.

## Why separate systems?

You can:

- Have several campaigns on the same system (D&D)
- Have several systems coexisting (D&D + Nimble in parallel)
- Reset a homebrew without breaking your old campaigns

The system is an **independent aggregate** within the domain — modifying its
rules or its template does not instantly affect existing sheets.

## Pre-shipped systems

On first startup, three systems are seeded:

- **Nimble (excerpt)** — lightweight narrative, 4 classes, simple monsters
- **D&D 5e SRD (excerpt)** — free excerpt from the SRD 5.1
- **Homebrew Example** — skeleton to duplicate

## Detailed pages

- [Markdown rules and AI selection](/docs/game-system/regles) — how the AI leverages the rules
- [PC / NPC sheet templates](/docs/game-system/templates-fiches) — character sheet structure
