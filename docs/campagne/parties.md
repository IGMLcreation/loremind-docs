---
sidebar_position: 8
---

# Parties & suivi de session

Une **Partie** (playthrough) est une instance jouée d'une campagne par une
table de joueurs. Elle sépare nettement deux choses :

- le **Scénario** — la campagne elle-même (arcs, chapitres, scènes), qui reste
  **statique** ;
- l'**état de jeu** — la progression, les faits acquis, les sessions, qui est
  **propre à chaque partie**.

Ainsi, **plusieurs tables** peuvent jouer la même campagne indépendamment, sans
que la progression de l'une affecte l'autre.

## Contenu d'une partie

- **Nom** et **Description**
- des **personnages** rattachés
- des **sessions**
- des **Faits** (flags)

## Les Faits

Les Faits sont des **interrupteurs booléens** (vrai / faux) qui servent à
débloquer des chapitres via leurs **prérequis**.

Ils sont **implicites** : un fait apparaît automatiquement dès qu'un chapitre le
référence dans ses prérequis — vous n'avez rien à déclarer manuellement. Une
page dédiée **« Faits »** liste tous les faits de la partie et permet de les
**activer / désactiver**.

## Progression des chapitres

Chaque chapitre porte, **par partie**, un statut de progression :

- **Non démarré**
- **En cours**
- **Terminé**

## Sessions

Vous pouvez **démarrer** ou **reprendre** une session, avec sa date de début et
de fin. Chaque session tient un **journal** dont les entrées sont **typées** :

- **Note**
- **Événement**
- **Jet de dés**
- **Action joueur**

Chaque entrée est **horodatée**, ce qui permet aussi de **journaliser
rétroactivement** après coup.

:::warning[Suppression en cascade]
Supprimer une partie supprime **en cascade** ses sessions, ses personnages
rattachés, ses faits et ses progressions. Une confirmation est demandée.
:::
