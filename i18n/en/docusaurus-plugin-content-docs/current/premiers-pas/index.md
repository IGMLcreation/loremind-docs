---
sidebar_position: 1
---

# Getting started

This guide walks you through the main features of LoreMind in about ten
minutes: creating a world (Lore), a campaign, a character, and triggering your
first exchange with the AI.

> Prerequisite: LoreMind is installed and accessible. If that is not the case,
> start with the [installation guide](/docs/installation/windows).

:::warning
Don't forget: the application is accessible at localhost:8081 by default, unless
you go tinkering inside docker.
:::

## 1. Choose a game system

On first launch, LoreMind ships with three demo systems:

- **Nimble (excerpt)**
- **D&D 5e SRD (excerpt)**
- **Homebrew Example**

:::warning
For now these are not real systems but pre-loaded examples to show you the
structure of a game system with a character template (NPCs + PCs)
:::

If one of them suits you, move on to the next step. Otherwise, go to
**Game Systems** from the menu to create a new one or modify an existing one.

## 2. Create a Lore (world)

The Lore describes your world: geography, factions, background characters,
legends. It is **independent of campaigns** — the same Lore can be used for
several campaigns.

1. **Lore** menu → **Create a Lore**
2. Give it a name and a short description
3. Inside, create a first node (e.g. "Northern Kingdoms") then a page
   (e.g. "City of Vaeril")

You can open the **AI Assistant** at any time from a page so that it can
write or enrich the content.

## 3. Create a campaign

The campaign is the container for your game. It can be linked to an existing
Lore and to a Game System.

1. **Campaigns** menu → **Create a campaign**
2. Fill in the name, the game system, the associated Lore
3. Inside, you can create **Arcs**, **Chapters**, **Scenes**, **PCs** and **NPCs**

## 4. Add a player character (PC)

From your campaign, click **+ Character**. The form is **dynamic** — it adapts
to the template defined in your Game System: text fields, numbers, images, or
key/value lists (stat blocks).

Once saved, click the PC's card to open its **WorldAnvil-style character
sheet** — a detailed display with a banner, portrait and ornamented sections.

## 5. First chat with the AI Assistant

On any entity (Lore page, scene, PC, NPC), a **✨ AI Assistant** button opens a
side panel. The AI automatically receives the entity's context — no need to
retype everything.

> For the AI to work, first configure a provider in
> [Settings](/docs/configuration/): Ollama (local) or 1min.ai (cloud).

## Next steps

- Dive deeper into the [Lore](/docs/lore/) module for templates and hierarchy
- Understand the structure of a [Campaign](/docs/campagne/) (arcs, chapters, scenes, branches)
- Create your own [Game System](/docs/game-system/) with its character sheet templates
