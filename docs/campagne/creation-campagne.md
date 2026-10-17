---
sidebar_position: 1.5
---

# Créer et organiser une campagne

## Créer la campagne

Depuis **Campagne**, cliquez sur **Nouvelle Campagne**. Le formulaire contient :

- **Nom** : obligatoire ;
- **Description / Pitch** : le point de départ et le ton de l'aventure ;
- **Nombre de joueurs** : une indication sur la table prévue ;
- **Univers associé** : optionnel, pour sélectionner les pages de Lore liées ;
- **Système de JDR** : optionnel, pour les règles IA et les templates de fiches.

Le sélecteur de système permet aussi de **créer un nouveau système** en saisissant
son nom. Complétez ensuite ses règles et ses templates depuis **Systèmes de JDR**.

![Créer une campagne et choisir ses associations](/img/screenshots/guides/creation-campagne.jpg)

## Commencer en mode simple

Vous n'avez pas à préparer toute une arborescence avant d'écrire. Dans une campagne
simple, une branche **Scènes** donne directement accès aux unités jouables.
Le bouton **Scène** de l'accueil permet d'en ajouter ; les conteneurs nécessaires
sont gérés par l'application.

![Accueil d'une campagne en mode simple](/img/screenshots/guides/campagne-mode-simple.jpg)

Ce mode est adapté à un one-shot ou à une aventure courte. L'affichage simplifié
dépend de la structure de la campagne ; ce n'est pas un réglage global à activer.

## Passer à une structure plus riche

Utilisez **Nouvel arc** pour organiser une campagne longue :

| Structure | Organisation | Usage |
|---|---|---|
| **Linéaire** | Arc → Chapitres → Scènes | Une progression par grandes étapes |
| **Hub** | Arc → Quêtes → Scènes | Des missions accessibles autour d'un point central |
| **Quêtes libres** | Quêtes transverses ou avec leurs propres scènes | Des objectifs qui ne dépendent pas d'un arc |

Les [quêtes](/docs/campagne/quetes) portent leurs conditions de déblocage ; leur
progression se suit par table dans une [partie](/docs/campagne/parties).
Les chapitres ne portent pas ces conditions.

Dans l'arbre, utilisez le **+** du parent pour créer au bon endroit et le
[glisser-déposer](/docs/navigation#réordonner-et-déplacer) pour réorganiser les
éléments compatibles. Vérifiez les branches après un déplacement : une sortie
de scène doit pointer dans le même chapitre.

## Modifier les associations

Le bouton **Modifier** de l'accueil permet d'ajuster les informations de campagne.
Un univers associé rend les pages disponibles dans les sélecteurs **Pages Lore
liées** ; il ne copie pas ces pages dans chaque fiche.

:::warning[Changer de système après avoir rempli des fiches]
Les fiches sont affichées selon les champs du système choisi. Changer de système
peut rendre des valeurs existantes invisibles. Elles restent stockées ; revenir
à l'ancien système permet de les retrouver. Préférez fixer le système en début
de campagne et sauvegarder avant de modifier les templates.
:::

## Scénario et parties

**Mes parties** permet de jouer le même scénario avec plusieurs groupes. Les PJ,
journaux, faits, horloges et progressions appartiennent à chaque partie. Les PNJ,
scènes et ressources de campagne restent communs au scénario.

Pour partager ou archiver votre campagne, choisissez ensuite entre le
[ZIP de données](/docs/configuration/sauvegardes), le [PDF](/docs/export/pdf) et
l'[export Foundry](/docs/export/foundry).
