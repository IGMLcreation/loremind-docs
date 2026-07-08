---
sidebar_position: 3
---

# Templates de fiches PJ / PNJ / Ennemi

Chaque Système de JDR porte trois templates : un pour les **PJ** (joueurs), un
pour les **PNJ**, et un pour les **Ennemis**. Les trois sont séparés parce que
chaque type de fiche a généralement besoin de champs différents — un PJ a
typiquement une fiche complète (stats, sorts, équipement), un PNJ une fiche plus
légère, un Ennemi met l'accent sur le combat. À vous de définir les champs de
chacun.

## Édition

Dans l'éditeur de Système de JDR, trois blocs séparés :

- **Champs de la fiche PJ** — affichés à la création/édition d'un PJ
- **Champs de la fiche PNJ** — affichés à la création/édition d'un PNJ
- **Champs de la fiche Ennemi** — affichés à la création/édition d'un Ennemi

Pour le bloc **Ennemi**, des champs de combat sont suggérés : **Stats**,
**Attaques**, **Capacités**, **Faiblesses**, **Butin**, **Tactique**.

Chaque champ a :

- Un **nom** (unique dans le template, insensible à la casse)
- Un **type** : TEXT, NUMBER, IMAGE, KEY_VALUE_LIST
- Pour IMAGE : un **layout** (GALLERY, HERO, MASONRY, CAROUSEL)
- Pour KEY_VALUE_LIST : une **liste de labels** figés

![Fiches_personnages](/img/screenshots/game-systeme/Fiches_personnages.png)

## Champs universels (hard-codés)

Quoi que vous mettiez dans le template, **trois champs sont toujours présents**
sur toutes les fiches PJ/PNJ/Ennemi et ne sont pas configurables :

- **Nom** (obligatoire)
- **Portrait** (image, ratio carré)
- **Bandeau** (image, ratio paysage)

C'est volontaire — ces champs ont un sens universel quel que soit le système
de jeu, et leur position dans la vue  est figée.

## Type Liste clé/valeur en détail

Particulièrement utile pour les **stat blocks**. Vous définissez la liste des
labels au niveau du template :

![cle_valeur_mise_en_place](/img/screenshots/game-systeme/cle_valeur_mise_en_place.png)

Résultat sur la fiche personnage : 

![cle_valeur_mise_en_place_resultat](/img/screenshots/game-systeme/cle_valeur_mise_en_place_resultat.png)

## Badges sous le nom du personnage

Un badge est un petit rectangle avec un nombre qui s'affiche sous le nom du personnage. Ils sont particulièrement utiles pour afficher des informations 
importantes comme le niveau, leur armure ou encore l'initiative.

Pour faire un badge, faire un champ de type Nombre entouré d'autres champs de texte.
Si vous faites deux champs de type Nombre, ils seront transformés en liste clé/valeur.
Par exemple pour la fiche ci-dessus, voici comment sont organisés les champs niveau, initiative et armure :

![badges](/img/screenshots/game-systeme/badges.png)

:::info[Limite du système]
Je me rend compte de la limite de ce système pour les badges. Je l'ai dev comme ça
dans un premier temps parce que c'était pratique, mais je vais essayé de mettre 
un type badge pour que ce soit explicite et laisser les nombres à part à l'avenir.
N'hésitez pas à me dire ce que vous en pensez.
:::
## Bonnes pratiques

- **Préférez 1 KEY_VALUE_LIST à 6 NUMBER**. 6 stats D&D dans 1 champ "Caractéristiques" se rendent en joli stat block ; 6 NUMBER séparés se rendent en cards individuelles plus chargées.
- **Réservez NUMBER aux valeurs isolées** (Niveau, PV max). Ils s'affichent comme des badges discrets dans le hero de la fiche.
- **Systèmes pré-livrés** : trois systèmes sont fournis au départ — **Nimble** (extrait), **D&D 5e SRD** (extrait) et **Homebrew Exemple**. Partez de là pour comprendre l'esprit, puis adaptez. Notez qu'**aucun template d'ennemi n'est pré-rempli** : le bloc Ennemi existe mais reste vide tant que vous ne le configurez pas.

## Renommer ou supprimer un champ

Modifier le template **ne détruit jamais les valeurs déjà saisies** en base de
données. En revanche, chaque valeur est reliée au **nom** du champ — ce qui a une
conséquence importante à connaître.

:::warning[Attention au renommage]
Si vous **renommez** un champ (ex. « Histoire » → « Récit ») ou le **supprimez**,
le contenu déjà saisi sous l'ancien nom **disparaît des fiches existantes** : le
champ renommé apparaît **vide**, et ré-éditer la fiche ne récupère pas l'ancien
texte (il faudrait le ressaisir).
:::

La donnée n'est pas perdue pour autant : elle reste stockée sous l'**ancien nom**.
Concrètement, **redonner au champ son nom d'origine exact** fait réapparaître le
contenu tel quel — c'est le moyen le plus simple de récupérer une valeur après un
renommage regretté.

En pratique : **stabilisez le nom de vos champs avant de remplir beaucoup de
fiches**. Un outil de migration assistée (renommage propagé aux fiches existantes)
est prévu à terme.
