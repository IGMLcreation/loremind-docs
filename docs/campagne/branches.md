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
- Un **type de lien** — **Sortie**, **Indice** ou **Piste** (Sortie par défaut).
  Une sortie représente une transition, un indice une information qui conduit
  à un autre nœud, et une piste une direction à explorer. Ces types aident à
  lire le graphe ; leurs conditions ne sont pas exécutées automatiquement.

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

## Éditer la carte des scènes

1. Ouvrez **Carte des scènes** depuis un chapitre ou une quête possédant ses
   propres scènes. En mode simple, la branche **Scènes** donne accès à cette carte.
2. **Glissez la pastille sous un nœud** vers un autre pour créer un lien orienté.
3. Cliquez sur le lien pour modifier son **libellé**, sa **condition** et son
   **type**, puis **Enregistrer**. Le même panneau permet de supprimer le lien.
4. Cliquez sur un nœud pour ouvrir sa scène. Glissez-le pour organiser la carte ;
   le crayon permet de renommer la scène (Entrée valide, Échap annule).
5. Utilisez la molette et le fond pour zoomer et déplacer la vue, ou les boutons
   **+ / −** et **Recadrer** pour retrouver l'ensemble des scènes.

Les scènes peuvent être typées **Scène générique**, **Lieu**, **Rencontre**,
**Situation PNJ**, **Événement** ou **Révélation** dans leur éditeur. Leur couleur
dans la carte suit ce type ; il ne remplace pas les champs de contenu.

Une branche n'est pas un passage bidirectionnel : ajoutez le lien inverse si
nécessaire. Après réorganisation, le panneau
[Prochaines étapes](/docs/campagne/preparation) permet de repérer une cible supprimée,
un lien hors chapitre ou une boucle sur la scène elle-même. Pour les portes entre
pièces d'une scène, voir [Lieux explorables](/docs/campagne/donjons).

## Bonnes pratiques

- **N'abusez pas du branching.** 2-3 sorties par scène suffisent — au-delà la prep MJ explose.
- **Branches "fail forward".** Évitez les branches qui mènent à un game over ; préférez des bifurcations qui changent le ton plutôt que celles qui bloquent.
- **Conditions claires.** "Si jet de Discrétion ≥ 15" est plus actionnable que "Si les PJ sont discrets".
