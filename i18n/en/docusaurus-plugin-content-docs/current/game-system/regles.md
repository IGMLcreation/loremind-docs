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

When you ask the AI to generate content, the application **does not inject
all of the markdown**: it keeps only the sections relevant to reduce the
size of the prompt and improve quality.

There is **neither semantic intent detection nor embeddings** here. The need is
simply inferred from the **type of entity** you are generating:

- **Scene** → injects the **## Combat** + **## Monsters** sections
- **Chapter** → injects **## Combat** + **## Classes**
- **Arc** (and the generic case) → injects **all** sections

The match is made by **substring on the H2 heading** (case-insensitive),
with FR + EN aliases limited to **combat / class(es) / monster(s)**.

:::warning
Consequence: sections such as **Stats**, **Magic** or **Progression** are
never selected on their own. They only come up via **arcs**, which
inject all sections.
:::

This is why you should **name your H2 sections clearly** (Combat, Classes,
Monsters) to benefit from this selection.
