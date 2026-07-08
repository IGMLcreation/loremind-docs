---
sidebar_position: 2
---

# Création, modification et règle pour système

## Création d'un système

Pour créer un système, cliquez sur le bouton "Nouveau système" dans la page d'accueil.

![creation_systeme](/img/screenshots/game-systeme/creation_systeme.png)

Remplissez le nom de votre système, décrivez de quel jeu il est tiré et vous pourrez mettre l'auteur.

## Sections suggérées
Comme dit dans la page d'accueil, les règles sont structurées dans différentes sections.

Côté UI, l'éditeur propose des sections par défaut :
**Combat**, **Classes**, **Stats**, **Magie**, **Monstres**, **Progression**.

![regles_systeme](/img/screenshots/game-systeme/regles_systeme.png)

Vous êtes libre d'en ajouter d'autres. Mais **gardez à l'esprit** :

> Le module **Lore** sert à décrire l'univers (factions, lieux, légendes).
> Le **Système de JDR** ne doit décrire que les **mécaniques de jeu**, pas le lore.
> Cette séparation est volontaire — l'IA injecte les règles dans des contextes
> différents du lore, mélanger les deux dégrade la pertinence des prompts.

## Importer un PDF de règles

Plutôt que de recopier vos règles à la main, vous pouvez **importer un PDF** :
l'application en extrait le texte, le découpe en morceaux, puis l'IA le structure
automatiquement en sections (Combat, Classes, Stats…) qu'elle ajoute à votre
éditeur.

### Lancer un import

1. Dans l'éditeur de règles, cliquez sur **Importer un PDF**.
2. Choisissez un fichier **au format PDF** (seul ce format est accepté).
3. L'analyse démarre. Elle peut durer de quelques secondes à plusieurs minutes
   selon la taille du document et le fournisseur d'IA utilisé.

![Import_IA](/img/screenshots/game-systeme/Import_IA.png)

Pendant le traitement, une progression s'affiche en deux temps :

- une phase **d'extraction** du texte du PDF (sans barre, la taille n'est pas
  encore connue) ;
- puis une **barre d'analyse** qui avance **morceau par morceau**, avec les
  **titres des sections détectées** qui apparaissent au fil de l'eau.

**Voici ce que ça donne à l'import en cours** : 
![Import_IA_encours](/img/screenshots/game-systeme/Import_IA_encours.png)

**Et pour le résultat** :

![Import_IA_resultat](/img/screenshots/game-systeme/Import_IA_resultat.png)

Si votre fournisseur d'IA est momentanément saturé, un message de statut vous
informe des nouvelles tentatives automatiques : laissez simplement l'import se
poursuivre.

:::warning[Privilégiez un modèle cloud]
A part si vraiment vous possédez une machine exceptionnelle capable de faire tourner des modèles
d'IA très lourds, je vous conseille d'utiliser un fournisseur cloud. En effet,
le traitement des PDFs est assez lourd et demande beaucoup de ressources. Même une machine capable de
faire tourner un gemma4:26b par exemple n'est généralement pas suffisant, pour le moment en tout cas.
:::

### Les sections sont fusionnées, pas remplacées

:::warning[Important]
L'import **ajoute** les sections extraites à celles déjà présentes dans l'éditeur,
il ne les remplace **pas**.

- Un titre de section **inédit** crée une nouvelle carte.
- Un titre **déjà présent** (ex. une section « Combat » qui existe déjà) voit le
  contenu importé **ajouté à la suite** de l'existant.

Réimporter le même PDF **empile** donc les contenus. Au besoin, videz les sections
concernées avant de relancer un import.
:::

Rien n'est enregistré automatiquement : les sections importées apparaissent dans
l'éditeur pour que vous puissiez **les relire, les corriger ou en supprimer**.
Cliquez sur **Enregistrer** pour valider — c'est à ce moment seulement que les
règles sont sauvegardées.

### PDF scannés (images)

:::info
Si le PDF est un **scan** (pages-images sans couche texte), l'application bascule
automatiquement sur une **reconnaissance de caractères (OCR)**. Les versions
récentes — **Docker** comme **installeur bureau** — embarquent le moteur OCR
(français + anglais), il fonctionne donc sans installation supplémentaire.

Cela dit, l'OCR reste plus lent et un peu moins fiable qu'un texte natif : pour le
meilleur résultat, privilégiez un **PDF dont le texte est sélectionnable** quand
vous en avez le choix.
:::

### Limites et cas d'erreur

- **Taille** : jusqu'à environ **60 Mo** par fichier.
- **PDF illisible ou corrompu** : l'import s'arrête avec un message d'erreur.
- **Aucun texte exploitable** (PDF vide, ou scan dont l'OCR ne parvient rien à
  lire) : message « aucune règle trouvée », rien n'est ajouté.
- **Un morceau qui échoue** : le passage problématique est ignoré et l'import
  continue avec le reste ; si **tous** les morceaux échouent, l'import est annulé.

### Local (Ollama) vs fournisseur cloud

Le résultat diffère légèrement selon le fournisseur d'IA configuré :

- **Ollama (local)** : l'IA se contente de **repérer les frontières** des sections
  et conserve votre texte **tel quel** — rapide, sans reformulation.
- **Fournisseur cloud** : l'IA **réécrit et met en forme** le contenu de chaque
  section — texte plus propre, mais légèrement remanié.

### Réglages

> Les paramètres d'import PDF — **taille des morceaux** et **délai d'expiration
> (timeout)** des appels à l'IA — sont configurables dans
> [Configuration → Settings](/docs/configuration/settings#paramètres-avancés).

Si un import **échoue par timeout** ou renvoie des sections tronquées, essayez de
**réduire la taille des morceaux** (ou d'augmenter le timeout — et la fenêtre de
contexte pour l'IA que vous utilisez).