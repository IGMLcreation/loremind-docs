---
sidebar_position: 1
---

# Premiers pas

Ce guide vous fait découvrir les principales fonctionnalités de LoreMind en
une dizaine de minutes : créer un univers (Lore), une campagne, un personnage,
et déclencher votre premier échange avec l'IA.

> Pré-requis : LoreMind est installé et accessible. Si ce n'est pas le cas,
> commencez par le [guide d'installation](/docs/installation/windows).

:::warning
N'oubliez pas : l'application est accessible au localhost:8081 par défaut, sauf
si vous allez bidouiller dans docker.
:::

## 1. Choisir un système de jeu

Au premier lancement, LoreMind est livré avec trois systèmes de démonstration :

- **Nimble (extrait)**
- **D&D 5e SRD (extrait)**
- **Homebrew Exemple**

:::warning
Pour le moment ce ne sont pas de vrai systèmes mais des exemples pré-chargés
pour vous montrer la structure d'un game système avec template personnages (PNJs + PJs)
:::

Si l'un d'eux convient, passez à l'étape suivante. Sinon, allez dans
**Game Systems** depuis le menu pour en créer un nouveau ou modifier un existant.

## 2. Créer un Lore (univers)

Le Lore décrit votre monde : géographie, factions, personnages d'arrière-plan,
légendes. Il est **indépendant des campagnes** — un même Lore peut servir à
plusieurs campagnes.

1. Menu **Lore** → **Créer un Lore**
2. Donnez-lui un nom et une description courte
3. À l'intérieur, créez un premier nœud (ex: "Royaumes du Nord") puis une page
   (ex: "Cité de Vaeril")

Vous pouvez à tout moment ouvrir l'**Assistant IA** depuis une page pour qu'il
rédige ou enrichisse le contenu.

## 3. Créer une campagne

La campagne est le contenant de votre partie. Elle peut être liée à un Lore
existant et à un Game System.

1. Menu **Campaigns** → **Créer une campagne**
2. Renseignez le nom, le système de jeu, le Lore associé
3. À l'intérieur, vous pouvez créer **Arcs**, **Chapitres**, **Scènes**, **PJ** et **PNJ**

## 4. Ajouter un personnage joueur (PJ)

Depuis votre campagne, cliquez sur **+ Personnage**. Le formulaire est
**dynamique** — il s'adapte au template défini dans votre Game System :
champs texte, nombres, images, ou listes clé/valeur (stat blocks).

Une fois sauvegardé, cliquez sur la carte du PJ pour ouvrir sa **fiche
WorldAnvil-style** — un affichage détaillé avec bandeau, portrait et sections
ornementées.

## 5. Premier chat avec l'Assistant IA

Sur n'importe quelle entité (page Lore, scène, PJ, PNJ), un bouton
**✨ Assistant IA** ouvre un panneau latéral. L'IA reçoit automatiquement
le contexte de l'entité — pas besoin de tout retaper.

> Pour que l'IA fonctionne, configurez d'abord un fournisseur dans
> [Settings](/docs/configuration/) : Ollama (local) ou 1min.ai (cloud).

## Prochaines étapes

- Approfondir le module [Lore](/docs/lore/) pour les templates et la hiérarchie
- Comprendre la structure d'une [Campagne](/docs/campagne/) (arcs, chapitres, scènes, branches)
- Créer son propre [Game System](/docs/game-system/) avec ses templates de fiches
