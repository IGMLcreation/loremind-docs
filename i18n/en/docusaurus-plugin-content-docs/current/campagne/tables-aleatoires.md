---
sidebar_position: 9
---

# Random tables

**Random tables** are used to improvise through a roll: encounters,
loot, complications, tavern rumors… You roll the dice, and the table gives you
a result.

## The table

- **Name** (required)
- **Description**
- **Dice formula** (required) — for example `1d20`, `2d6`, `d100`
- **Entries** — the possible results

## An entry

- **min** and **max** — the roll bounds that trigger the entry
  (**inclusive**)
- **Label** — the short result
- **Detail** — optional markdown text

:::info[Probability depends on range width]
There is **no** "weight" field. An entry is more likely the wider its range is.
On a `d20`, an entry `1–10` is **five times** as likely as an entry `11–12` (50% versus 10%). With multiple dice, such as
`2d6`, totals are not equally likely: range width alone does not determine probability.
:::

## Auto-ranges

The **"Auto-ranges"** button spreads the dice range **uniformly** across
your entries. This balances result ranges as closely as possible, rather than
guaranteeing equal probabilities; adjust them to suit your dice formula.

## Rolling a result

The view offers a **roll button** that actually rolls the dice of the formula,
shows the **total** obtained, and highlights the **matching entry**.

:::tip[AI generation]
An **AI generation** is available to quickly propose a complete table from an
intent.
:::
