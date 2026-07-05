---
sidebar_position: 3
---

# Quêtes

La **quête** est le fil narratif de première classe de DM Loremind : *« Sauver le
marchand disparu »*, *« Démasquer le traître »*… Là où les arcs et chapitres
structurent le récit, la quête porte un **objectif** — et sa **progression est
suivie par partie** : chaque table qui joue votre campagne avance à son rythme,
sans toucher au scénario.

## Créer une quête

Deux points d'entrée, pour deux usages :

- **Quête de hub** — depuis un **arc de structure Hub** : bouton **+** sur l'arc
  → **« Nouvelle quête »**. La quête apparaît sous l'arc dans la sidebar et
  reçoit automatiquement son propre espace de scènes : ses scènes s'affichent
  directement comme enfants du nœud quête.
- **Quête libre** — depuis la branche **« Quêtes »** de la sidebar (au niveau de
  la campagne) : **« Nouvelle quête »**. Transverse à la structure, elle peut
  soit **traverser** du contenu existant, soit vivre avec ses propres scènes
  (voir plus bas).

## Les champs

Seul le titre est requis — l'écran le rappelle : *« Seul le titre est requis.
Déplie et remplis uniquement les sections utiles — tout le reste est
optionnel. »*

- **Titre de la quête** *(obligatoire)*, **Description**, **Icône**
- **Illustrations** — portraits, ambiances et lieux marquants
- **Conditions de déblocage** — voir ci-dessous
- **Nœuds narratifs traversés** *(quêtes libres uniquement)* — voir ci-dessous
- **Notes du MJ** — privées : rebondissements, secrets ; jamais exportées vers Foundry
- **Objectifs des joueurs** et **Enjeux narratifs**
- **Pages Lore liées** *(si la campagne est adossée à un univers)* — PNJ, lieux
  ou éléments du Lore qui apparaissent dans la quête

## Conditions de déblocage

Les prérequis se combinent en **ET** : toutes les conditions doivent être
remplies pour que la quête se débloque dans une partie. **Vide = disponible dès
le départ.** Trois types de conditions :

- **Après une autre quête** — la quête cible doit être terminée ;
- **À partir d'une session** — la table doit avoir atteint la séance N ;
- **Quand un fait est vrai** — un [Fait](/docs/campagne/parties) de la partie
  doit être activé.

Les conditions sont définies sur le scénario, mais **évaluées en jeu, par
partie** : la même quête peut être débloquée à une table et verrouillée à une
autre.

## Progression par partie

Chaque quête porte, **par partie**, un statut :

- **Verrouillée** — les conditions de déblocage ne sont pas remplies
- **Disponible** — débloquée, pas encore commencée
- **En cours**
- **Terminée**

La progression se change depuis l'écran de la **Partie** — notamment dans la
section [« Préparer la prochaine séance »](/docs/campagne/preparation), avec les
boutons **« Marquer "en cours" »**, **« Marquer "terminée" »** et
**« Rouvrir »**.

## Quêtes et scènes

**Quête de hub** — ses scènes vivent directement sous le nœud quête dans la
sidebar (bouton **+** pour en ajouter). Le bouton **« Carte des scènes »** de la
vue quête ouvre le graphe des scènes pour visualiser et éditer les
[branches](/docs/campagne/branches).

**Quête libre** — deux possibilités :

- La section **« Nœuds narratifs traversés »** lie la quête à des chapitres ou
  scènes **existants** (*« la quête passe par ces endroits »*). Ce sont des
  liens : retirer un nœud ne supprime rien.
- Sans nœud renseigné, la quête reçoit **automatiquement son propre espace de
  scènes**, créées à la volée, avec sa carte — vous n'avez rien à faire.

:::tip[Sous surveillance de la préparation guidée]
Une quête sans contenu, un nœud qui pointe vers une scène supprimée ou un
prérequis qui référence une quête disparue remontent automatiquement dans le
panneau [« Prochaines étapes »](/docs/campagne/preparation) de la campagne.
:::
