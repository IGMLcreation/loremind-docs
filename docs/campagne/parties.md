---
sidebar_position: 10
---

# Parties & suivi de session

Une **Partie** (playthrough) est une instance jouée d'une campagne par une
table de joueurs. Elle sépare nettement deux choses :

- le **Scénario** — la campagne elle-même (arcs, chapitres, scènes, quêtes),
  qui reste **statique** ;
- l'**état de jeu** — la progression, les faits acquis, les horloges, les
  sessions, qui est **propre à chaque partie**.

Ainsi, **plusieurs tables** peuvent jouer la même campagne indépendamment, sans
que la progression de l'une affecte l'autre.

## Contenu d'une partie

- **Nom** et **Description** — le nom se renomme en place (crayon) depuis la
  liste « Mes parties »
- des **personnages** rattachés
- des **sessions** avec leur journal
- des **Faits** (flags)
- la **progression des quêtes**
- des **horloges** et **menaces** (voir [Mode séance](/docs/campagne/mode-seance))

## Les Faits

Les Faits sont des **interrupteurs booléens** (vrai / faux) qui pilotent le
contenu conditionnel : ils débloquent des [quêtes](/docs/campagne/quetes) via
leurs **conditions de déblocage**, et peuvent faire avancer des
**horloges** (déclencheur « Quand un Fait devient vrai »).

Ils sont **implicites** : un fait apparaît automatiquement dès qu'une condition
ou un déclencheur le référence — vous n'avez rien à déclarer manuellement. La
page **« Faits »** de la partie (ainsi que l'onglet **Partie** en séance) liste
tous les faits et permet de les **activer / désactiver** d'un toggle.

## Progression des quêtes

Chaque [quête](/docs/campagne/quetes) porte, **par partie**, un statut :

- **Verrouillée** — conditions de déblocage non remplies
- **Disponible**
- **En cours**
- **Terminée**

La progression se change depuis la section
[« Préparer la prochaine séance »](/docs/campagne/preparation) de la partie
(boutons **« Marquer "en cours" »**, **« Marquer "terminée" »**,
**« Rouvrir »**).

## Sessions

Vous pouvez **lancer** ou **reprendre** une session, avec sa date de début et
de fin. Chaque session tient un **journal** dont les entrées sont **typées** :

- **Note**
- **Évènement**
- **Jet de dés**
- **Action joueur**

Chaque entrée est **horodatée**, ce qui permet aussi de **journaliser
rétroactivement** après coup. L'écran de session — scène épinglée, récap
« précédemment… », panneau de référence, horloges — est détaillé dans
[Mode séance](/docs/campagne/mode-seance).

:::warning[Suppression en cascade]
Supprimer une partie supprime **en cascade** ses sessions, ses personnages
rattachés, ses faits, ses horloges et ses progressions. Une confirmation est
demandée.
:::

## Accès direct en bêta

La branche **Jeu → Parties** de l'arbre ouvre chaque partie de la campagne.
Le bloc **Jouer** de l'accueil propose les séances à reprendre ou le démarrage
sur la partie sélectionnée. Depuis une autre page, utilisez **Séance en cours**
(ou la liste si plusieurs séances tournent). Sur mobile, ce raccourci est dans la
barre haute. Voir [Mode séance](/docs/campagne/mode-seance).
