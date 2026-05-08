---
sidebar_position: 1
---

# Lore

Le module **Lore** sert à documenter l'univers de votre campagne : géographie,
factions, religions, personnages historiques, légendes. C'est votre
encyclopédie privée — celle dont l'IA s'inspirera pour rester cohérente quand
vous générerez des scènes ou des PNJ.

Voici à quoi ressemble l'écran d'accueil :

![Lore](/img/screenshots/lore/Lore_accueil.png)

:::warning
Dans l'exemple ci-dessus, un univers existe mais de votre coté vous n'aurez pas d'univers existant
au lancement de l'application ce qui est normal (et donc juste le bouton "nouveau lore").
:::

## Concepts

- **Lore** — Le nom de l'univers lui-même (ex: "Vermoria", "Eberron homebrew"). Vous pouvez en avoir plusieurs.
- **Dossier** — un dossier dans la hiérarchie du Lore. Les dossiers sont des noeuds qui peuvent en contenir d'autres 
(sous-dossiers) ou des pages. Ils servent à l'organisation de votre monde.
- **Page** — une fiche typée par un **Template**. Une page "Cité de Vaeril" peut avoir des champs Histoire, Population, Factions, etc.
Le template sera un template "cité" pour une telle page par exemple.
- **Template** — la structure d'une page. Vous définissez les champs (texte, image, nombre, liste clé/valeur). Tous les templates appartiennent à un Lore.

## Pourquoi des templates ?

Au lieu de saisir du markdown libre, les pages sont structurées par champs.
Avantages :

1. **Cohérence visuelle** — toutes les "Cités" ont les mêmes sections.
2. **Génération IA ciblée** — vous pouvez demander à l'IA de générer juste le champ "Histoire" en s'appuyant sur les autres champs comme contexte.
3. **Réutilisation** — un template "Cité" sert pour toutes vos cités.

## Workflow type

1. Créer un Lore
2. Définir 2-3 templates de base : Continent, Cité, Faction
3. Construire l'arborescence par nœuds (ex: Royaumes/Nord/Vaeril)
4. Créer des pages dans les nœuds en choisissant un template
5. Remplir au fil de l'eau, ou demander à l'IA de générer

## Pages détaillées
- [Création de votre lore](/docs/lore/creation-lore) - Comment créer votre lore
- [Création d'un dossier](/docs/lore/creation-dossier) — organiser l'arborescence de votre Lore
- [Création d'une page](/docs/lore/creation-page) — créer une fiche manuellement ou avec l'IA
- [Templates et types de champs](/docs/lore/templates) — Création d'un template et utilité détaillée
- [Hiérarchie et navigation](/docs/lore/hierarchie) — organiser un gros volume de contenu
