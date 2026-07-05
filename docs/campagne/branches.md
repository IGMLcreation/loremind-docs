---
sidebar_position: 5
---

# Branches narratives

Une **branche** est une sortie possible d'une scène vers une autre scène
**du même chapitre**. C'est la mécanique qui transforme une suite linéaire
de scènes en un graphe — utile pour modéliser les choix joueurs.

## Modèle

Chaque branche porte :

- Un **label** — ce qui déclenche la sortie (ex: "Si combat perdu", "Si négociation réussit")
- Une **scène cible** (référence par ID dans le même chapitre)
- Une **condition** optionnelle — texte libre pour expliciter la mécanique de jeu

## Exemple

Scène "Rencontre avec le messager" :

- **Branche 1** : "Si les PJ acceptent la mission" → "Voyage vers Vaeril"
- **Branche 2** : "Si les PJ refusent" → "Tavernier curieux"
- **Branche 3** : "Si combat" → "Embuscade dans la ruelle"

## Visualisation graphe

La **carte des scènes** d'un chapitre (ou d'une [quête](/docs/campagne/quetes))
affiche les scènes comme un graphe orienté avec les branches comme arêtes —
avec **pan/zoom** et **édition des liens directement dans le graphe**. Pratique
pour vérifier qu'aucune scène n'est orpheline (sans entrée) ou impasse (sans
sortie).

Pour le graphe des liens vers le Lore à l'échelle de la campagne (PNJ, scènes,
quêtes), voir [Graphe des liens](/docs/campagne/graphe-liens).

## Bonnes pratiques

- **N'abusez pas du branching.** 2-3 sorties par scène suffisent — au-delà la prep MJ explose.
- **Branches "fail forward".** Évitez les branches qui mènent à un game over ; préférez des bifurcations qui changent le ton plutôt que celles qui bloquent.
- **Conditions claires.** "Si jet de Discrétion ≥ 15" est plus actionnable que "Si les PJ sont discrets".
