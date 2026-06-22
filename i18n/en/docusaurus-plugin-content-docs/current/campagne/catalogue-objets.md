---
sidebar_position: 6
---

# Item catalog

An **item catalog** is a collection of items specific to your campaign:
a merchant's shop, a loot table, the contents of a chest… You create as many
catalogs as needed.

## The catalog

- **Name** (required)
- **Description**
- **Icon**

Each catalog then contains its own list of items.

## An item

- **Name** (required)
- **Price** — free text, for example `50 po` or `1 200 gold pieces`
- **Category** — used for grouping, for example `Weapons`, `Potions`,
  `Scrolls`
- **Description** — written in markdown

:::info[No rarity field]
There is no dedicated "rarity" field. If you want to distinguish rare items,
use the category or mention it in the description.
:::

## AI generation

A **prompt** field together with a **"Generate"** button lets the AI
pre-fill the catalog: name, description, and the **item list**. You can then
adjust, complete, or delete the proposed entries.

## Display

In view mode, items are **grouped by category**, which turns the catalog into
a readable shop inventory.

## Deleting a catalog

Deleting a catalog is done directly from the campaign's catalog list.
