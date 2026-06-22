---
sidebar_position: 6
---

# Hierarchy and navigation

Nodes let you organize your Lore as a tree — useful as soon as you go beyond
a dozen pages.

## Typical structure

```
Vermoria (Lore)
├── Géographie
│   ├── Royaumes du Nord
│   │   ├── Cité de Vaeril (page, template "Cité")
│   │   └── Forêt des Murmures (page, template "Lieu")
│   └── Mers du Sud
├── Factions
│   ├── Ordre du Lys (page, template "Faction")
│   └── Cabale des Cendres
└── Personnages historiques
    └── Aelendir le Conquérant (page, template "Personnage")
```

## Recommended conventions

- **Nodes = categories**, **pages = concrete entities**. Avoid creating a "Cities" page that would contain text about several cities — prefer a "Cities" node with one page per city.
- **Maximum depth of 3** in 90% of cases. Beyond that, navigation becomes cumbersome.
- **Templates by page type**, not by location. The "City" template is the same whether you are in the North or the South.

## Links between pages

You can reference one page from another via the **link selector**.
Links are stored by identifier, so they are resilient to renames.

## Sidebar and search

The Lore sidebar presents the collapsible tree. For large volumes,
the **global search** (shortcut `Ctrl + K`) is more efficient than manual
navigation: it searches across lores, folders and pages.
