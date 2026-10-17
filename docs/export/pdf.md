---
sidebar_position: 3
---

# Livret PDF de campagne

Le bouton **Exporter en PDF** de l'accueil de campagne produit un livret pour
préparer hors écran, jouer sur papier ou partager un module. Le fichier porte
le nom de la campagne ; la version joueurs ajoute le suffixe `_joueurs.pdf`.

:::info[Options de la bêta]
Le livret existe en stable. La **fiche de publication**, la version joueurs et les
options de format sont ajoutées dans **beta après 1.3.0-beta**, puis complétées
par les renvois paginés, annexes MJ et cartes en pleine page. Sur une version
antérieure, le bouton génère directement le livret MJ sans ces choix.
:::

## Générer le livret

1. Sur l'accueil de campagne, cliquez sur **Exporter en PDF**.
2. Complétez au besoin la [fiche de publication](/docs/export/publication) depuis
   **Compléter la fiche** ou **Modifier la fiche**. Elle reste facultative.
3. Choisissez **MJ (complète)** ou **Joueurs**, puis ajustez les **Parties incluses**.
4. Choisissez **A4**, **A5** ou **US Letter**. Activez **Mode impression** pour
   retirer les aplats de couleur et économiser l'encre.
5. Cliquez sur **Générer le PDF** et attendez le téléchargement.

Au moins une partie doit être cochée. Changer de version réapplique sa sélection
par défaut : choisissez la version avant de personnaliser les cases. Une nouvelle
ouverture de la fenêtre repart sur la sélection MJ complète.

## Version MJ ou joueurs

| Choix | Sélection de départ | Contenu |
|---|---|---|
| **MJ (complète)** | Toutes les parties, tout le lore | Contenu de préparation, secrets, notes et combats compris |
| **Joueurs** | Structure narrative, PNJ, lore lié et cartes | Narration à lire, ambiance, contexte de scène, illustrations et cartes ; champs réservés au MJ retirés |

En version joueurs, les résumés de préparation, notes secrètes, choix et
conséquences, sorties et combats des scènes sont retirés. Le contexte caché et
les accroches de publication, ainsi que les annexes MJ, ne sont jamais inclus.
Les cases restent modifiables : vous pouvez par exemple retirer aussi les PNJ.

:::note[Relire avant de partager]
Le filtre reconnaît les **champs MJ**, pas les secrets écrits dans du texte libre.
Les champs de template des PNJ et les champs du Lore sélectionnés sont rendus tels quels. Les
noms de scènes, narrations et cartes peuvent aussi révéler la suite de l'aventure.
Relisez le PDF destiné aux joueurs et décochez les parties qui ne leur conviennent pas.
:::

### Nouveaux champs d'histoire (bêta 1.4.0)

| Champs | PDF MJ | PDF joueurs |
|---|---|---|
| Histoire cachée et accroches de l'arc | Inclus | Retirés |
| Utilité de la scène, tactique et moral | Inclus | Retirés |
| Rôle, motivation et savoir du bloc narratif d'un PNJ | Inclus | Retirés |
| Signe distinctif du PNJ | Inclus | Inclus si la partie PNJ est retenue |

Ces filtres concernent les champs dédiés de
[l'arc et de la scène](/docs/campagne/arcs-chapitres-scenes) et le
[bloc narratif du PNJ](/docs/campagne/personnages). Ils n'analysent pas le texte
saisi dans les autres champs.

## Choisir les parties et le Lore

Les huit cases sont **Structure narrative**, **Quêtes**, **PNJ**, **Bestiaire**,
**Tables aléatoires**, **Lore**, **Annexes MJ (révélations, index)** et **Cartes en
pleine page**. Le livret utilise le contenu enregistré des parties retenues.

Pour le Lore, deux périmètres sont proposés :

- **Tout le lore** : toutes les pages de l'univers associé à la campagne ;
- **Seulement les pages liées à la campagne** : les pages référencées dans les
  arcs, chapitres, scènes, quêtes ou PNJ de cette campagne. Une page seulement citée
  dans du texte libre n'est pas ajoutée par ce filtre.

La sélection porte sur des **parties du document**, pas sur un arc ou une séance
particulière. Le PDF décrit la campagne préparée, pas le journal d'une partie.

## Lire et utiliser le document

Le livret assemble une couverture, une page de crédits si elle est renseignée,
un **sommaire paginé**, puis les parties retenues. Une fiche de publication
renseignée ajoute notamment une page technique et une introduction.

La structure suit les arcs, chapitres, quêtes intégrées et scènes ; une campagne
simple garde une présentation directe par scènes. PNJ, bestiaire et pages de Lore
sont groupés par dossier. Les tables aléatoires conservent leur formule de dés.

Les **renvois avec numéro de page** permettent de passer d'une sortie à la scène
cible, d'un combat à la fiche d'adversaire ou d'une scène à sa carte. Ils ne
pointent que vers les éléments effectivement présents dans le livret. Le PDF
possède aussi des signets pour se déplacer avec un lecteur compatible.

Dans l'édition MJ, les encadrés distinguent **À lire aux joueurs**, **Notes secrètes
MJ** et **Combat**. Les lieux explorables détaillent leurs pièces, sorties, butin,
pièges et notes.

## Annexes MJ

La case **Annexes MJ (révélations, index)** rassemble, lorsqu'il y a du contenu :

- **Révélations et indices** : chaque scène de type Révélation et les scènes du
  même chapitre qui y mènent, d'après les liens enregistrés ; une absence de lien
  est signalée. Ce tableau ne déduit pas les indices de votre prose.
- **Index des PNJ** : noms classés par ordre alphabétique, dossiers et pages.
- **Index des adversaires** : noms, dossiers, niveaux et scènes d'apparition,
  y compris les adversaires référencés dans les pièces.

Un index ne liste que les fiches incluses dans le document. Ces annexes sont
réservées à l'édition MJ, même si leur case est cochée en édition joueurs.
Pour retravailler les chemins vers les révélations, voir la
[relecture d'éditeur](/docs/campagne/relecture-editeur).

## Cartes en pleine page

Avec **Cartes en pleine page**, les battlemaps des scènes, leurs variantes et les
plans des pièces sont regroupés en fin de livret : **une carte par page paysage**,
avec son titre. Les scènes et pièces renvoient à ces pages au lieu d'afficher une
petite carte dans leur texte.

Sans cette case, les cartes restent illustrées dans la structure narrative.
Seules les **images** sont rendues ; une battlemap vidéo ne devient pas une image
fixe dans le PDF.

## Limites et conservation

Les images sont redimensionnées et recompressées. Une grosse campagne peut prendre
quelques secondes à générer et produire plusieurs Mo. Les titres et certains
libellés du livret sont actuellement en français, même depuis l'interface anglaise.

Le PDF ne remplace pas une [sauvegarde ZIP](/docs/configuration/sauvegardes) : il
n'est pas réimportable comme campagne modifiable. La fiche de publication prépare
le document ; elle ne le met pas en ligne.
