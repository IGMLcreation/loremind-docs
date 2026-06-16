---
sidebar_position: 2
---

# Markdown rules and AI selection

A system's rules are stored as **monolithic markdown**, structured
by H2 headings (`##`). Each H2 section is extracted and indexed separately.

## Expected structure

```markdown
## Combat
- Initiative : 1d20 + mod Dex
- Action par tour : une action, une action bonus, une réaction, mouvement
- Critique sur 20 naturel (double dés)

## Classes
- **Barbare** : d12 PV, rage
- **Magicien** : d6 PV, livre de sorts
...

## Monstres
Stat block standard : CA, PV, FOR/DEX/CON/INT/SAG/CHA, FP.
```

## Suggested sections

On the UI side, the editor offers default sections:
**Combat**, **Classes**, **Stats**, **Magic**, **Monsters**, **Progression**.

You are free to add others. But **keep in mind**:

> The **Lore** module is used to describe the universe (factions, places, legends).
> The **Game System** should only describe the **game mechanics**, not the lore.
> This separation is intentional — the AI injects rules into contexts
> different from the lore, and mixing the two degrades the relevance of the prompts.

## Contextual selection for the AI

When you ask the AI to generate a scene involving combat, the
back-end **does not inject all of the markdown** — it automatically selects
the relevant sections (e.g., `## Combat` + `## Monstres`) based on the detected
intent. This drastically reduces the size of the prompt and improves quality.

The intent → sections mapping is hard-coded on the backend side
(`GameSystemContextSelector`). The names of the H2 sections must therefore stay
**consistent with the suggested names** in order to benefit from this selection.
