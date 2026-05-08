---
sidebar_position: 3
---

# Personnages joueurs et non-joueurs

LoreMind sépare les **PJ** (Player Characters) des **PNJ** (Non-Player Characters)
en deux entités distinctes — leurs invariants métier diffèrent (un PNJ peut
avoir un statut "vivant/mort/disparu", une faction d'appartenance, une
visibilité côté joueurs… ce qui n'a pas de sens pour un PJ).

## Champs universels

Quel que soit le système de jeu, chaque fiche porte trois champs hard-codés :

- **Nom** (obligatoire)
- **Portrait** — image principale, ratio carré conseillé
- **Bandeau** — image de header, ratio paysage (3:1)

Tout le reste est piloté par le **template du Game System** associé à la campagne.

## Champs templates

Pour D&D 5e par défaut :
- Classe, Race, Historique, Alignement
- Niveau, PV max, CA
- **Caractéristiques** (KEY_VALUE_LIST avec labels FOR/DEX/CON/INT/SAG/CHA)
- Compétences, Équipement, Sorts, Histoire
- Galerie d'images

Pour Nimble : Classe, Blessures graves max, Capacités, Équipement, Histoire,
Objectifs personnels, Galerie.

Le MJ peut **éditer le template** depuis le Game System pour ajouter, retirer
ou réorganiser les champs.

## Création / édition

Depuis la campagne :

- **+ Personnage** ouvre l'éditeur PJ
- **+ PNJ** ouvre l'éditeur PNJ

Les deux écrans rendent dynamiquement le formulaire selon le template.
Tous les champs sont optionnels — vous pouvez créer une fiche avec juste un
nom, et la compléter au fil de l'eau (ou demander à l'IA de proposer).

## Affichage

Cliquer sur la carte d'un PJ ou PNJ depuis la vue campagne ouvre la
**fiche détaillée** :

- Bandeau pleine largeur en haut
- Portrait + nom + badges des stats numériques isolées (ex: "Niveau 2")
- Sections rendues dans l'**ordre du template** :
  - **TEXT** — paragraphes avec drop cap dorée sur le 1er
  - **KEY_VALUE_LIST** — tableau compact ou liste 2 colonnes selon le nombre
  - **IMAGE** — galerie selon le layout choisi
- Boutons toolbar : retour, Assistant IA, éditer

## Assistant IA dédié

Sur la fiche d'un PJ ou PNJ, le bouton ✨ ouvre un chat focalisé sur ce
personnage. L'IA reçoit automatiquement le contexte de la fiche — vous
pouvez lui demander : "Propose une backstory cohérente avec l'univers",
"Suggère 3 objectifs personnels", "Imagine 3 répliques signatures".
