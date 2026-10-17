# Documentation DM Loremind

Site Docusaurus de documentation utilisateur, en français et en anglais.
La configuration et les dépendances sont définies dans `docusaurus.config.ts`
et `package.json`. Le projet utilise Node.js 20 ou supérieur et npm.

## Installer et travailler localement

```bash
npm ci
npm start
```

Le serveur de développement affiche la langue française par défaut. Pour travailler
sur la traduction anglaise :

```bash
npm start -- --locale en
```

## Organisation

- `docs/` : documentation française ; `intro.mdx`, `prise-en-main.md` et
  `navigation.md` forment le point d'entrée.
- `i18n/en/docusaurus-plugin-content-docs/current/` : versions anglaises, avec les
  **mêmes chemins et identifiants** que les pages françaises.
- `sidebars.ts` : navigation principale ; les catégories génèrent leurs éléments
  depuis les dossiers. Le front matter `sidebar_position` ordonne les pages.
- `static/img/screenshots/` : captures réelles de l'application. Les captures
  complémentaires de prise en main sont dans `guides/`.
- `blog/` et `i18n/en/docusaurus-plugin-content-blog/` : devlogs et traductions.

Les pages couvrent l'installation, la configuration, le Lore, les systèmes de JDR,
les campagnes, l'assistant IA et les exports. Les guides distinguent le scénario
partagé de l'état propre à chaque partie.

## Ajouter ou actualiser un guide

1. Vérifier le comportement dans l'application et dans les composants / services
   correspondants du dépôt LoreMind.
2. Modifier la page française et son équivalent anglais. Conserver les chemins
   existants pour préserver les liens.
3. Ajouter les liens utiles depuis la page d'accueil de la catégorie ; ajouter
   une entrée dans `sidebars.ts` seulement pour une nouvelle page à la racine.
4. Rédiger les liens internes sous la forme `/docs/campagne/quetes` et les images
   sous la forme `/img/screenshots/guides/nom.jpg`.
5. Décrire les étapes, les validations qui enregistrent réellement le contenu et
   les limites observables. Identifier clairement les fonctions de développement
   qui ne sont pas présentes dans la version distribuée.

### Captures

Utiliser des noms descriptifs et une extension correspondant au fichier réel.
Contrôler chaque image : contenu chargé, commandes lisibles, aucune clé API ni
identifiant visible, aucun document privé sans rapport avec le guide. Certaines
vues de l'application utilisent un défilement interne : une capture de la fenêtre
visible peut être nécessaire si la capture pleine page produit une zone vide.

Les nouvelles captures sont en français et partagées par les deux langues ;
les textes alternatifs anglais le précisent. Pour une image partagée, décrire
le comportement dans le texte du guide, sans dépendre exclusivement de la capture.

## Vérifier et prévisualiser

```bash
npm run typecheck
npm run build
npm run serve -- --host 127.0.0.1 --port 3090 --no-open
```

La compilation construit les **deux langues**, contrôle les liens et produit
`build/` avec la version anglaise sous `build/en/`. Ouvrir ensuite
`http://127.0.0.1:3090/docs/prise-en-main` et
`http://127.0.0.1:3090/en/docs/prise-en-main` pour vérifier navigation, tableaux,
encadrés et captures. `build/` et `.docusaurus/` sont générés et ignorés par Git.

La prévisualisation locale ne publie pas le site. Le déploiement relève de la
configuration du dépôt et de son hébergement.

## Couverture de la bêta

La mise à jour des guides bêta couvre les ajouts applicatifs entre `main`
(`ad3ea0e`, stable 1.0.3) et `beta` (`9a7e93b`, 1.4.0-beta) : mentor M1–M3,
dix-sept règles de relecture, trois méthodes guidées, champs d'histoire des arcs,
scènes et PNJ, interface compacte avec navigation par niveaux, accès aux séances,
panneau Règles, appairage bureau et diagnostics réseau Windows / Linux,
fiche de publication et export PDF configurable (éditions, renvois, annexes, cartes).
La page `docs/configuration/nouveautes-beta.md` sert de point d'entrée ; chaque
guide indique la disponibilité bêta et les éventuelles limites bureau / Docker.
Les captures bêta sont dans `static/img/screenshots/beta/` ; la capture mobile
de l'arbre précède la navigation par niveaux et sa légende le précise.

Lors de la vérification du 17 octobre 2026, l'application servie sur localhost:8080
ouvrait encore directement le parcours Five-room et ne proposait pas Publication.
Les nouveaux comportements ont donc été vérifiés dans les composants, méthodes,
services et filtres PDF du commit ci-dessus. Les captures de l'ancienne interface
ne représentent pas le sélecteur et les champs de la version 1.4.0-beta.
