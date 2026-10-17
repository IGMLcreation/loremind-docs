---
sidebar_position: 10.5
---

# Horloges et menaces

Les horloges suivent une pression qui monte : arrivée de renforts, enquête du guet,
rituel ou réparation d'un navire. Elles appartiennent à une **partie**, avec une
progression indépendante pour chaque table.

## Créer une horloge

Ouvrez la partie depuis **Campagne → Mes parties**, puis la section **Horloges
de progression**. Les mêmes commandes se trouvent dans l'onglet **Partie** du
[mode séance](/docs/campagne/mode-seance).

![Préparation d'une partie et formulaire des horloges](/img/screenshots/guides/partie-horloges.jpg)

Renseignez un **nom**, choisissez **2, 4, 6, 8, 10 ou 12 segments**, puis un
déclencheur. Cliquez sur **Ajouter**. Le crayon permet de modifier une horloge ;
les boutons **+ / −** ajustent sa progression dans les limites de ses segments.

## Choisir un déclencheur

| Déclencheur | Effet |
|---|---|
| **Manuel** | Seuls vos ajustements font évoluer l'horloge |
| **Quand un Fait devient vrai** | Ajoute un segment lors de l'activation du fait choisi |
| **Quand une quête se termine** | Ajoute un segment lors du passage de la quête choisie à « terminée » |
| **En fin de séance** | Ajoute un segment quand une session de cette partie est clôturée |

Pour un fait, saisissez son nom ; pour une quête, sélectionnez-la dans la liste.
Les [faits](/docs/campagne/parties#les-faits) apparaissent automatiquement lorsqu'ils
sont référencés par une condition ou un déclencheur.

Une horloge automatique reste ajustable manuellement. Son déclencheur réagit à
un **évènement**, pas à l'écoulement du temps réel : « en fin de séance » ne
veut pas dire « tous les soirs ».

## Regrouper dans une menace

Saisissez un nom dans le formulaire de menace et cliquez sur **Ajouter une menace**.
Sélectionnez ensuite cette menace lors de la création ou de la modification
d'une horloge. Exemple : « Le culte s'organise » regroupe « Recrutement » et
« Préparation du rituel ».

La menace est un regroupement : chaque horloge garde son propre déclencheur et
son propre compteur. Supprimer une menace conserve ses horloges, qui rejoignent
**Horloges libres**.

## Faire jouer les conséquences

La [préparation de la prochaine séance](/docs/campagne/preparation) signale les
horloges proches du terme : **presque pleine** à partir de 75 %, **pleine** à 100 %.
Une horloge pleine n'écrit pas de scène et ne clôture pas une quête : appliquez
vous-même sa conséquence et consignez ce qui arrive dans le journal.

## Horloge d'un plan du méchant (bêta 1.4.0)

La [méthode Plan du méchant](/docs/campagne/methode-plan-mechant) peut ajouter
une horloge **manuelle de six segments** dans chaque partie existante. Avancez-la
quand l'adversaire progresse ; elle ne déclenche pas les scènes et n'avance pas
seule en fin de séance. Une partie créée après le plan demande une horloge
ajoutée manuellement.
