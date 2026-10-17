---
sidebar_position: 2
---

# Arcs, Chapitres et Scènes

Trois niveaux pour structurer votre récit, avec une granularité croissante.

## Arc

Un arc est une grande arche narrative. Champs disponibles :

- **Nom** et **synopsis** — le pitch de l'arc
- **Structure** — *Linéaire* (chapitres en séquence) ou *Hub* (des [quêtes](/docs/campagne/quetes) accessibles librement depuis un point central)
- **Thèmes** — les motifs récurrents (ex: "trahison", "descente aux enfers")
- **Enjeux** — ce qui est en jeu pour les PJ
- **Histoire cachée** *(bêta 1.4.0)* — la vérité que les joueurs reconstitueront
- **Accroches** *(bêta 1.4.0)* — plusieurs raisons de s'impliquer, une par ligne
- **Notes MJ** — secrets, twists, infos à ne pas révéler aux joueurs
- **Récompenses** — XP, objets, contacts gagnés
- **Résolution** — la fin attendue (à ajuster selon le jeu effectif)
- **Pages Lore liées** — références cross-context vers le Lore (factions, lieux)
- **Illustrations** — images d'ambiance

### Histoire cachée et accroches (bêta 1.4.0)

Dans l'éditeur de l'arc, dépliez **Histoire cachée et accroches**. L'histoire cachée
décrit ce qui s'est vraiment passé ; les accroches disent pourquoi les personnages
s'en mêlent. Préparez au moins deux accroches de nature différente, **une par ligne**,
puis enregistrez l'arc. Les ampoules près des champs donnent des exemples.

Exemple : la vérité est qu'un conseiller détourne la récolte ; une accroche vient
d'un proche disparu, une autre d'une récompense offerte pour retrouver les convois.
Une seule ligne d'accroche déclenche un conseil de la
[relecture d'éditeur](/docs/campagne/relecture-editeur).

Ces deux champs apparaissent dans la vue de l'arc et dans le **PDF MJ** ; ils sont
retirés du **PDF joueurs**. Les accroches de cet arc restent distinctes de celles
renseignées dans la [fiche de publication](/docs/export/publication).

## Chapitre

Subdivision d'un arc linéaire. Mêmes mécaniques de liens vers le Lore.
Champs spécifiques :

- **Notes MJ** — préparation, transitions
- **Objectifs joueurs** — ce que les PJ doivent accomplir / découvrir
- **Enjeux narratifs** — ce qui peut basculer dans ce chapitre

:::info[Le déblocage conditionnel vit sur les quêtes]
Les conditions de déblocage (un fait activé, une quête terminée, une séance
atteinte) se définissent désormais sur les [quêtes](/docs/campagne/quetes), pas
sur les chapitres.
:::

## Scène

L'unité jouable. C'est ce que l'IA exploite le plus quand vous lui demandez
de générer du contenu narratif. Champs spécifiques :

- **Utilité de la scène** *(bêta 1.4.0)* — ce que l'histoire perdrait si vous la coupiez
- **Lieu** et **timing** (jour/nuit/saison)
- **Ambiance** — descriptions sensorielles, ton
- **Narration aux joueurs** — texte à lire/improviser pour planter le décor
- **Notes MJ secrètes** — ne s'affichent que pour vous
- **Choix et conséquences** — alternatives possibles
- **Difficulté de combat** et **ennemis** — note libre, et/ou ennemis liés depuis le [bestiaire](/docs/campagne/ennemis)
- **Tactique et moral des adversaires** *(bêta 1.4.0)* — comment ils agissent, quand ils fuient, négocient ou se rendent
- **Illustrations** — galerie d'images d'ambiance
- **Battlemaps** — les cartes de combat de la scène (voir ci-dessous)
- **Branches** — sorties narratives vers d'autres scènes (voir [Branches narratives](/docs/campagne/branches))

:::info[Lieu explorable (mode donjon)]
Une scène peut contenir des **pièces** : dès qu'elle en a au moins une, elle bascule sur un rendu **donjon** — chaque pièce a ses propres ennemis, butin, pièges, étage et branches entre pièces.
:::

Un **Assistant IA** (bouton ✨) est disponible sur la scène pour générer ambiance, narration ou rebondissements.

### Donner une utilité et un comportement aux adversaires

**Utilité de la scène**, près de la description, aide à trier la préparation :
« découvrir qui finance le culte » ou « choisir quel allié aider ». Ce champ guide
le MJ ; la narration aux joueurs reste dans son champ habituel.

Dans la section combat, **Tactique et moral des adversaires** décrit le comportement
à jouer : « protègent la porte, fuient si leur chef tombe, négocient contre un
passage sûr ». Une tactique renseignée évite le conseil « combat sans but » même
si les champs de choix et de notes secrètes restent vides.

Après enregistrement, ces textes se retrouvent dans la vue de scène et le
[livret PDF MJ](/docs/export/pdf). Ils sont exclus de l'édition joueurs.

### Battlemaps

Une scène peut porter **plusieurs battlemaps étiquetées** — les variantes d'un
même lieu : le libellé est libre (*« Jour »*, *« Nuit »*, *« Étage 1 »*…).
Chaque carte a une **source** au choix :

- **Dungeon Alchemist (image/vidéo + JSON)** — le média de la carte, plus le
  fichier `.json` de l'export « Foundry VTT » de Dungeon Alchemist (murs,
  portes, lumières) ;
- **DungeonDraft (.dd2vtt)** — un seul fichier Universal VTT : l'**image
  embarquée est extraite automatiquement** à l'upload, les murs et lumières
  sont conservés.

Les battlemaps ne s'affichent pas dans l'appli : elles sont transportées vers
l'[export Foundry](/docs/export/foundry) — **une Scène Foundry par carte** — et
rendues avec leur légende dans le [livret PDF](/docs/export/pdf).

:::note
Un `.dd2vtt` sans image embarquée est accepté, mais la carte exportée n'aura
pas de fond — un avertissement s'affiche à l'upload.
:::

## Bonnes pratiques

- **Préparez en arc, jouez en scène.** Définissez le grand cadre une fois, puis ajoutez les scènes au fur et à mesure des séances.
- **N'attendez pas que tout soit "complet".** Une scène avec juste lieu + ambiance + narration courte est jouable — le panneau [« Prochaines étapes »](/docs/campagne/preparation) vous dit ce qui manque vraiment.
- **Notes MJ vs narration joueurs.** Séparez clairement — l'IA peut générer la narration sans révéler les secrets si vous lui passez les bons champs.

## Pour aller plus loin

Une aventure courte peut commencer en [mode simple](/docs/campagne/creation-campagne),
avec des scènes seules. Pour le détail du type de nœud et l'édition des liens,
voir [Branches narratives](/docs/campagne/branches). Le [guide des lieux explorables](/docs/campagne/donjons)
détaille les pièces, étages, portes et références au bestiaire.
