---
sidebar_position: 6
---

# Hiérarchie et navigation

Les nœuds permettent d'organiser le Lore en arborescence — utile dès que vous
dépassez la dizaine de pages.

## Structure type

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

## Conventions recommandées

- **Nœuds = catégories**, **pages = entités concrètes**. Évitez de créer une page "Cités" qui contiendrait du texte sur plusieurs cités — préférez un nœud "Cités" avec une page par cité.
- **Profondeur 3 maximum** dans 90% des cas. Au-delà, la navigation devient pénible.
- **Templates par type de page**, pas par localisation. Le template "Cité" est le même qu'on soit au Nord ou au Sud.

## Liens entre pages

Vous pouvez référencer une page depuis une autre via le picker `app-lore-link-picker`.
Les liens sont stockés par ID, donc résistants aux renommages.

## Sidebar et recherche

La sidebar du Lore présente l'arborescence repliable. Pour les gros volumes,
la recherche par nom (à venir) sera plus efficace que la navigation manuelle.
