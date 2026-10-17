---
sidebar_position: 4
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

Les caractéristiques sont pilotées par le **template du Système de JDR** associé
à la campagne. Depuis **1.4.0-beta**, les PNJ possèdent en plus un bloc narratif
indépendant du système, décrit ci-dessous.

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

## Rôle du PNJ dans l'histoire (bêta 1.4.0)

Dans l'éditeur d'un **PNJ**, après les champs du template, le bloc **Rôle dans
l'histoire** comporte quatre champs facultatifs :

| Champ | À préparer |
|---|---|
| **Rôle** | Opposant, Allié, Ressource ou Figurant ; laissez-le non précisé si nécessaire |
| **Motivation** | Ce qu'il veut et ce qu'il est prêt à faire pour l'obtenir |
| **Ce qu'il sait** | Les informations qu'il peut révéler, et à quelle condition |
| **Signe distinctif** | Un geste, une façon de parler ou un tic à jouer à la table |

Les ampoules donnent des conseils pour chaque champ. Cliquez sur **Créer** ou
**Enregistrer** pour conserver le bloc avec la fiche ; il apparaît aussi dans
la vue détaillée, quel que soit le système de JDR.

Exemple : un allié veut protéger sa sœur, connaît l'entrée des souterrains mais
attend qu'on lui garantisse sa sécurité, et compte ses mots sur ses doigts.
La [relecture](/docs/campagne/relecture-editeur) signale un **Opposant** ou un
**Allié** sans motivation. Les ressources, figurants et rôles non précisés ne
reçoivent pas ce conseil.

Dans le **PDF MJ**, rôle, motivation, savoir et signe distinctif sont présents.
Dans le **PDF joueurs**, seul le **signe distinctif** de ce bloc est conservé.
Les champs libres du template restent à relire avant de partager. Ces données
narratives sont également conservées par l'export/import de campagne.

## Création / édition

Depuis la campagne :

- **+ Personnage** ouvre l'éditeur PJ
- **+ PNJ** ouvre l'éditeur PNJ

Les deux écrans rendent dynamiquement le formulaire selon le template.
Hormis le nom, les champs sont optionnels — vous pouvez créer une fiche avec juste un
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
