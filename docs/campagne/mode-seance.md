---
sidebar_position: 12
---

# Mode séance

L'écran de séance est votre **cockpit pendant que vous jouez** : le journal de
la session à gauche, et un **panneau de référence** à droite qui met tout votre
contenu à portée de clic — scènes, PJ/PNJ, tables, dés, horloges et assistant IA.

## Lancer une séance

Depuis la page d'une [Partie](/docs/campagne/parties) : bouton **« Lancer une
session »** (ou **« Reprendre la session en cours »** s'il y en a une d'ouverte).
Chaque session porte un badge **En cours** / **Terminée** et sa date de démarrage.

## Accéder au jeu plus vite (bêta)

Depuis l'accueil de campagne, le bloc **Jouer** adapte son action :

- une séance est active : **Reprendre la séance**, avec le nom de la séance et de sa partie ;
- aucune séance active : choisir la partie si vous en avez plusieurs, puis **Démarrer une séance** ;
- aucune partie : **Créer une partie** avant de lancer la séance.

L'arbre de campagne donne aussi accès aux **Parties** dans la section **Jeu**.
Le raccourci **Séance en cours** du menu principal ramène directement à la séance.
S'il y en a plusieurs, il ouvre une liste avec leur contexte ; sans séance active,
il ne s'affiche pas. Sur mobile, ce raccourci est dans la barre haute.

## Le journal

La colonne principale est une **timeline horodatée**. Chaque entrée est typée :

- **Note** 📝 — préparation, aide-mémoire
- **Évènement** ✨ — ce qui s'est passé en jeu
- **Jet de dés** 🎲
- **Action joueur** ✓

Le formulaire d'ajout est en haut, la timeline se lit du plus récent au plus
ancien. Les entrées étant horodatées, vous pouvez aussi **journaliser après
coup**.

:::note[Session terminée = lecture seule]
Une fois la session terminée, son journal n'est plus modifiable.
:::

## La scène épinglée

Dans l'onglet **« Scènes »** du panneau de référence, chaque scène a un bouton
épingle : **« Épingler comme scène courante »**. Un bandeau **« Scène
courante »** s'affiche alors en haut du journal avec le nom de la scène, son
lieu 📍 et son timing 🕒, plus un bouton **« Afficher la narration joueurs »**
pour dérouler le texte à lire à la table sans quitter l'écran de séance.

Le bandeau propose aussi d'ouvrir la scène complète dans un nouvel onglet, ou de
retirer l'épingle.

## Le récap « précédemment… »

Le bouton **« Récap "précédemment…" »** demande à l'IA de rédiger un
récapitulatif de la **séance précédente** de la même partie, façon "previously
on…" : 4 à 8 phrases au ton narratif, terminées sur la situation où les joueurs
se sont arrêtés. L'IA s'appuie **strictement sur le journal** de la séance
précédente (plus l'état des quêtes et les faits actifs) — elle n'invente pas.

Le texte s'affiche dans un encadré **« Précédemment (nom de la séance) »** ; le
bouton **« Consigner au journal »** l'ajoute comme entrée Note 📜.

:::info[Prérequis]
Le récap nécessite un [fournisseur IA configuré](/docs/assistant-ia/fournisseurs)
et **au moins une séance précédente** dans la même partie. Si le service IA ne
répond pas, un message clair s'affiche : *« Échec du récap. Le Brain (IA) est-il
démarré ? »*.
:::

## Le panneau de référence

Huit onglets dans la bêta (sept en stable 1.0.3), pour garder le contenu à portée de main :

| Onglet | Contenu |
|--------|---------|
| **Partie** | Horloges et Faits de la partie (voir ci-dessous) |
| **Règles** *(bêta)* | Règles du système associé, recherche et sections épinglées (voir ci-dessous) |
| **IA** | Chat assistant en direct (univers, campagne, règles, journal en contexte) |
| **Dés** | Lanceur de dés avec modificateur et historique |
| **Tables** | Vos [tables aléatoires](/docs/campagne/tables-aleatoires), prêtes à tirer |
| **Objets** | Les [catalogues d'objets](/docs/campagne/catalogue-objets) (boutiques, butins) |
| **PJ/PNJ** | Fiches des personnages, repliables par dossier |
| **Scènes** | L'arborescence Arc → Chapitre → Scène, triée dans l'ordre de jeu, avec l'épingle |

:::note
L'onglet **Partie** n'a de contenu que si la session est rattachée à une
[Partie](/docs/campagne/parties).
:::

## Consulter les règles en séance (bêta)

L'onglet **Règles** lit les règles enregistrées du **Système de JDR associé à la
campagne**. Cette consultation et sa recherche ne nécessitent pas d'IA. Elle
n'interroge pas les PDF de l'Atelier.

![Onglet Règles dans le panneau de référence](/img/screenshots/beta/regles-seance.jpg)

- Le **Sommaire** ouvre et rejoint une section ; les sections sont repliables.
- **Chercher dans les règles…** filtre les passages et surligne les termes, sans
  distinguer majuscules ni accents. Les mots d'au moins deux caractères sont pris
  en compte ; plusieurs mots se combinent pour préciser la recherche.
- Les titres correspondent aux sections de règles. Une recherche dans le corps
  réduit l'affichage aux passages utiles ; un titre correspondant peut afficher
  toute sa section. **Effacer** ou **Échap** rétablit la vue complète.
- L'**épingle** conserve une section à portée de main : hors recherche, les sections
  épinglées passent en tête et sont ouvertes à leur prochain chargement.

Les épingles sont mémorisées **par système et par navigateur** : elles ne se
synchronisent pas entre PC et tablette.

**Demander à l'IA** bascule vers l'onglet IA avec une question préremplie depuis
la recherche ou le titre de section. Elle n'est **pas envoyée automatiquement** :
complétez-la et validez l'envoi. Cette action utilise votre fournisseur IA habituel.

Si aucun système n'est associé, **Choisir le système de la campagne** ouvre son
réglage dans un nouvel onglet. Si le système n'a pas de règles, **Ajouter des règles
au système** ouvre l'éditeur. Le lien **Modifier les règles du système** permet
également de le compléter sans quitter la séance.

## Horloges & menaces

Les **horloges à segments** (façon *Blades in the Dark*) matérialisent les
menaces qui avancent en arrière-plan. Elles se gèrent dans l'onglet **Partie**
en séance, ou dans la section **« Horloges de progression »** de la page de la
Partie.

Une horloge, c'est :

- un **nom** (ex : *« Le culte achève son rituel »*) ;
- un nombre de **segments** — 2, 4, 6, 8, 10 ou 12 ;
- un **déclencheur** :
  - **Manuel** — vous avancez/reculez l'horloge à la main (boutons + / −) ;
  - **Quand un Fait devient vrai** — avance d'un segment quand le fait bascule ;
  - **Quand une quête se termine** — avance quand la quête passe à « terminée » ;
  - **En fin de séance** — avance d'un segment à chaque clôture de session ;
- optionnellement, une **menace** (front) de rattachement.

Les **menaces** (fronts) regroupent plusieurs horloges qui avancent ensemble
(ex : *« La montée du Culte »*). Les horloges sans menace apparaissent dans
**« Horloges libres »**. Supprimer une menace ne supprime pas ses horloges :
elles redeviennent libres.

Quand une horloge approche de son terme, la
[préparation de séance](/docs/campagne/preparation) vous prévient : badge
**« presque pleine ! »** à 75 %, **« pleine ! »** à 100 %. À vous de faire
tomber la conséquence en jeu.

:::tip
Les déclencheurs automatiques n'avancent l'horloge **que d'un segment** à la
fois. Une horloge de 4 segments sur « En fin de séance » se remplit donc en
4 séances — dimensionnez le nombre de segments en fonction du rythme voulu.
:::

## Les Faits

Les **Faits** (flags) sont les interrupteurs vrai/faux de la partie
(*le_roi_est_mort*, *pont_détruit*…). Dans l'onglet **Partie** (sous-section
**« Faits »**), chacun se bascule d'un simple toggle.

Ils sont **découverts automatiquement** : un fait apparaît dès qu'il est
référencé par une condition « Quand un fait est vrai » — comme prérequis d'une
[quête](/docs/campagne/quetes) ou comme déclencheur d'horloge. Il n'y a pas de
création libre de faits : c'est voulu, pour éviter les faits orphelins.

## Terminer, puis préparer la suivante

En fin de séance, clôturez la session. La page de la Partie propose ensuite la
section **« Préparer la prochaine séance »** : où en sont les joueurs, quel
contenu ils vont probablement traverser, ce qu'il reste à combler et quelles
menaces bougent — voir [Préparation guidée](/docs/campagne/preparation).

:::warning[Par partie, pas par campagne]
Horloges, menaces, faits et progression de quêtes appartiennent à la **Partie**
(l'état de jeu d'une table), pas à la campagne. Deux tables qui jouent la même
campagne ont chacune leurs horloges et leurs faits.
:::

## Repères visuels et saisie rapide

![Journal et panneau de référence pendant une séance](/img/screenshots/guides/mode-seance.jpg)

Dans le formulaire du journal, **Ctrl + Entrée** ajoute l'entrée saisie. Complétez
les notes avant de terminer la session. Les instructions détaillées de création
et de déclenchement des horloges sont dans [Horloges et menaces](/docs/campagne/horloges).
