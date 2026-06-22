---
sidebar_position: 3
---

# Personnages joueurs et non-joueurs

DM Loremind sépare les **PJ** (personnages joueurs) des **PNJ** (personnages
non-joueurs) en deux entités distinctes. Elles partagent la **même structure**
(pilotée par le template du Système de JDR) ; la différence : le **PNJ** se range
en **dossiers** et se **relie au Lore** (factions, lieux…), ce que le PJ ne fait pas.

## Champs universels

Quel que soit le système de jeu, chaque fiche porte trois champs hard-codés :

- **Nom** (obligatoire)
- **Portrait** — image principale, ratio carré conseillé
- **Bandeau** — image de header, ratio paysage (3:1)

Tout le reste est piloté par le **template du Système de JDR** associé à la campagne.

## Champs templates

Le reste des champs vient du **template du Système de JDR**. DM Loremind fournit
des systèmes **pré-remplis et modifiables** ; par exemple, pour D&D 5e :
- Classe, Race, Historique, Alignement
- Niveau, PV max, CA
- **Caractéristiques** (KEY_VALUE_LIST avec labels FOR/DEX/CON/INT/SAG/CHA)
- Compétences, Équipement, Sorts, Histoire
- Galerie d'images

Pour Nimble : Classe, Blessures graves max, Capacités, Équipement, Histoire,
Objectifs personnels, Galerie.

Le MJ peut **éditer le template** depuis le Système de JDR pour ajouter, retirer
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
  - **Texte** — affiché en paragraphes
  - **Liste clé/valeur** — tableau compact ou liste 2 colonnes selon le nombre
  - **Image** — galerie selon le layout choisi
- Boutons toolbar : retour, Assistant IA, éditer

## Assistant IA dédié

Sur la fiche d'un PJ ou PNJ, le bouton ✨ ouvre un chat focalisé sur ce
personnage. L'IA reçoit automatiquement le contexte de la fiche — vous
pouvez lui demander : "Propose une backstory cohérente avec l'univers",
"Suggère 3 objectifs personnels", "Imagine 3 répliques signatures".
