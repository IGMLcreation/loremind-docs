---
sidebar_position: 13
---

# Atelier IA (Notebooks)

L'**Atelier IA** est un espace de questions-réponses ancré sur les documents de
votre campagne. À gauche, vos **sources** indexées ; à droite, un **chat** qui
répond en s'appuyant uniquement sur ces sources.

## Les sources

### Créer un atelier

Dans la sidebar de campagne, ouvrez **Ateliers (IA + PDF)**. Saisissez un nom
et cliquez sur **Nouvel atelier**, puis ouvrez-le. Utilisez **Ajouter un PDF**
pour importer une source et attendez la fin de son indexation avant de l'interroger.
Le nom de l'atelier reste modifiable dans son en-tête.

Le chat et l'indexation nécessitent deux réglages distincts : un modèle de
conversation et un modèle d'[embeddings](/docs/configuration/embeddings).

Les sources sont des fichiers **PDF uniquement**. Chaque source affiche son
**état** :

- **indexation** en cours
- **prêt**
- **échec**

Une fois prête, la source indique son **nombre de pages** et son **nombre
d'extraits** analysés.

## Le chat ancré

Le chat répond en **citant les pages source** (par exemple « p. 12, 47 »), ce
qui vous permet de vérifier directement dans le document. Avant chaque requête,
vous choisissez les sources à interroger grâce à des **cases à cocher**.

### Deux modes de recherche

- **Rapide** (par défaut) — recherche ciblée dans les documents, réponse rapide.
- **Approfondi** — lit le document **entier** : plus lent mais exhaustif, idéal
  pour des demandes du type « liste tous les… ». Une barre de progression suit
  l'avancement.

## Action cards

Dans ses réponses, l'IA peut proposer des **cartes d'action**. Un bouton
**« Créer dans la campagne »** crée alors directement l'entité concernée. Les
types possibles sont :

- **PNJ**
- **Scène**
- **Chapitre**
- **Arc**
- **Table aléatoire**

:::tip[Effacer le fil]
Le bouton **« Vider »** n'efface pas vraiment : il **archive** le fil de
discussion, que vous pouvez ainsi mettre de côté sans perdre l'historique.
:::

## Relire et réutiliser une archive

Le bouton **Archives** ouvre les anciens fils. Vous pouvez les consulter en
**lecture seule**, puis revenir au chat courant. Cochez une archive comme
**référence** pour fournir ses échanges comme contexte aux prochaines réponses,
en mode rapide comme approfondi. Décochez-la quand elle n'est plus utile.

Les sources PDF et les archives de conversation sont deux sélections différentes :
une archive apporte du contexte d'échange, pas une nouvelle source documentaire.
Contrôlez les pages citées et les propositions avant de créer une fiche. Un clic
sur **Créer dans la campagne** crée du contenu ; relisez aussi la cible et les
champs proposés pour éviter les doublons.
