---
sidebar_position: 2.5
---

# Lieux explorables et pièces de donjon

Une scène peut représenter un lieu entier : manoir, grotte, ruines ou navire.
Ajoutez des **pièces** dans son éditeur pour décrire l'exploration espace par
espace. Dès qu'une scène contient une pièce, sa vue utilise le rendu « donjon ».
Sans pièce, elle garde le rendu d'une scène classique.

## Construire le lieu

1. Créez ou modifiez une [scène](/docs/campagne/arcs-chapitres-scenes).
2. Dépliez la section des **pièces explorables**.
3. Utilisez **Ajouter une pièce**, puis renseignez son nom et éventuellement son étage.
4. Dépliez la pièce pour compléter ses détails.
5. Enregistrez la **scène** pour conserver vos modifications.

![Section de création d'un lieu explorable](/img/screenshots/guides/lieu-explorable.jpg)

| Champ | Contenu conseillé |
|---|---|
| **Description** | Ce que l'on perçoit à l'entrée et ce que l'on peut examiner |
| **Ennemis du bestiaire** | Les fiches de créatures réutilisables présentes |
| **Ennemis** | Les effectifs, positions ou particularités de la rencontre |
| **Butin** | Ce que l'on peut trouver et dans quelles conditions |
| **Pièges** | Détection, déclenchement et effets |
| **Notes MJ** | Secrets et réactions du lieu |

Les flèches **↑ / ↓** changent l'ordre des pièces. L'étage est une indication
numérique : par exemple `0` pour le rez-de-chaussée, `1` pour l'étage et `-1`
pour un sous-sol.

## Relier les pièces

Créez au moins deux pièces pour pouvoir ajouter une **sortie**. Une sortie porte
un **libellé**, une **pièce cible du même lieu** et une **condition** facultative.
Exemple : « Trappe sous le tapis » → « Cave », condition « repérer la trappe ».

Les sorties sont orientées : ajoutez le chemin de retour sur l'autre pièce s'il
est utile. Le texte de condition aide le MJ à arbitrer ; il ne lance pas de jet
et ne déplace pas automatiquement les personnages.

Les sorties entre pièces et les [branches entre scènes](/docs/campagne/branches)
sont distinctes. Pour quitter le manoir vers une autre scène, utilisez une
branche au niveau de la scène.

## Vérifier avant de jouer

Après suppression d'une pièce, vérifiez les sorties qui la ciblaient. Une porte
cassée remonte dans [Prochaines étapes](/docs/campagne/preparation). Contrôlez aussi
les références vers les ennemis du bestiaire.

Une [importation de campagne PDF](/docs/campagne/import-campagne) peut proposer
des pièces : relisez les noms, les liaisons et les secrets avant validation.

## Plans et exports

Les pièces décrivent le lieu ; les **battlemaps** sont attachées à la scène et
préparent son [export Foundry](/docs/export/foundry). L'éditeur de pièces ne
dessine pas de plan et n'aligne pas automatiquement les pièces sur une carte.

Le [livret PDF](/docs/export/pdf) présente les pièces avec leurs ennemis, butins,
pièges, notes et sorties. Vérifiez son contenu avant de le transmettre aux joueurs.

## Préparer plutôt cinq temps narratifs

La [méthode guidée Donjon en 5 salles](/docs/campagne/methode-cinq-salles) de la
bêta construit **un chapitre et cinq scènes**, à partir de vos réponses. Pour
obtenir des pièces dans un lieu unique, utilisez l'éditeur décrit dans ce guide.
