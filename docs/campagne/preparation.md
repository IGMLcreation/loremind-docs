---
sidebar_position: 11
---

# Préparation guidée

DM Loremind vous dit **ce qu'il reste à préparer avant de jouer** — sans IA :
tout est dérivé de règles simples appliquées à votre contenu, recalculées en
permanence. Deux outils complémentaires :

- le panneau **« Prochaines étapes »**, sur la page de la campagne — l'état de
  santé du **scénario** ;
- la section **« Préparer la prochaine séance »**, sur la page d'une
  [Partie](/docs/campagne/parties) — ce qui compte pour **votre prochaine
  session** à cette table.

## Prochaines étapes (campagne)

Le panneau s'affiche en tête de la page campagne, repliable (l'état est
mémorisé). Il donne un **statut global** :

- **Brouillon** — il reste au moins un manque *bloquant* ;
- **Jouable** — plus rien de bloquant, mais des manques *recommandés* ;
- **Peaufiné** — rien à signaler.

Des compteurs (« 2 bloquant(s) », « 1 recommandé(s) ») résument la situation,
puis chaque manque est listé avec sa pastille de sévérité, son message et un
bouton **« Corriger »** qui ouvre **directement l'éditeur au bon endroit** —
parfois avec le bon panneau déjà déplié (un chapitre vide ouvre par exemple le
générateur de scènes).

### Ce qui est détecté

**Bloquant** (pastille rouge) — la campagne ne se joue pas sans corriger :

- **Arc vide** — aucun chapitre (arc linéaire) ou aucune quête (arc hub)
- **Chapitre vide** — aucune scène
- **Scène sans titre**
- **Branche cassée** — une sortie de scène pointe dans le vide, hors du
  chapitre, ou sur elle-même
- **Porte cassée** — une sortie de pièce pointe hors de la scène
- **Quête sans contenu** — ni chapitre ni scène rattachés
- **Nœud de quête cassé** — la quête référence un chapitre ou une scène supprimé
- **Prérequis cassé** — une condition de déblocage dépend d'une quête qui
  n'existe plus
- **Campagne vide** — aucune scène jouable et aucune quête

**Recommandé** (pastille orange) — jouable, mais vous risquez d'improviser :

- **Combat annoncé sans adversaire** — une difficulté de combat est renseignée
  mais aucun ennemi n'est décrit ni lié
- **Ennemi introuvable** — une scène ou une pièce référence une fiche du
  [bestiaire](/docs/campagne/ennemis) supprimée

Quand tout va bien : *« Tout est prêt : cette campagne peut être jouée sans
accroc. »*

## Les pastilles dans l'arbre

Dans la sidebar, chaque nœud concerné porte une **pastille** rouge (bloquant)
ou orange (recommandé) devant son nom. Les manques **remontent** : un arc
s'allume si l'une de ses scènes, en profondeur, a un manque. Le survol de la
pastille affiche le détail des manques (et « + n autre(s) manque(s) » s'il y en
a davantage).

## Préparer la prochaine séance (partie)

Sur la page d'une Partie, la section **« Préparer la prochaine séance »**
croise l'état du scénario avec la progression de **cette table** :

- **Où en sont-ils ?** — les [quêtes](/docs/campagne/quetes) **En cours**,
  **Disponibles** et **Terminées**, avec les boutons de progression
  (**« Marquer "en cours" »**, **« Marquer "terminée" »**, **« Rouvrir »**) ;
- **Contenu probable de la prochaine séance** — les chapitres et scènes que les
  joueurs vont vraisemblablement traverser, déduits des quêtes actives ;
- **À combler avant de jouer** — les manques du guidage **restreints à ce
  contenu probable**, chacun avec son bouton **« Corriger »**, plus un lien
  *« + n autre(s) manque(s) ailleurs dans la campagne »* ;
- **Menaces en mouvement** — les [horloges](/docs/campagne/mode-seance)
  partiellement remplies, avec les badges **« presque pleine ! »** (≥ 75 %) et
  **« pleine ! »**.

Et si tout est calme : *« Rien à signaler : pas de quête active ni de manque
sur le contenu à venir. Lancez la prochaine séance quand vous voulez. »*

:::note[Sans quêtes]
Le « contenu probable » est déduit des quêtes actives. Si votre campagne
n'utilise pas les quêtes, l'ensemble du contenu est considéré comme probable.
:::

## Complétude et relecture

La bêta ajoute une [Relecture d'éditeur](/docs/campagne/relecture-editeur) distincte
de **Prochaines étapes**. Une campagne peut être structurellement prête et recevoir
encore des conseils d'écriture sur ses choix, son rythme ou ses enjeux. Ces
remarques ne sont pas des blocages de préparation.
