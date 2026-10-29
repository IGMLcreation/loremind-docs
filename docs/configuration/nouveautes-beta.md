---
sidebar_position: 4.5
---

# Nouveautés de la branche bêta

Cette page regroupe les ajouts de **beta** après la version stable **1.0.3**.
Le mentor arrive au jalon **1.1.0-beta**, les usages en séance et sur tablette au
jalon **1.2.0-beta**, puis la navigation par niveaux et les améliorations réseau
jusqu'à **1.3.0-beta**. Les ajouts suivants portent sur la publication, le PDF et
la relecture du graphe, puis les méthodes et champs d’histoire de **1.4.0-beta**.
Leur présence dépend de la version installée.

## Bêta 1.4.0 : méthodes guidées et champs d'histoire

Le [sélecteur de méthodes](/docs/campagne/methodes-guidees), accessible par
**Méthode guidée** sur l'accueil de campagne, propose maintenant :

- **[Donjon en 5 salles](/docs/campagne/methode-cinq-salles)** : un chapitre et cinq scènes ;
- **[Enquête en nœuds](/docs/campagne/methode-enquete)** : un chapitre, six scènes,
  trois pistes qui se recoupent et douze liens ;
- **[Plan du méchant](/docs/campagne/methode-plan-mechant)** : six étapes, d'abord
  discrètes puis visibles, et une horloge manuelle facultative dans les parties existantes.

Les [arcs et scènes](/docs/campagne/arcs-chapitres-scenes) reçoivent des champs
dédiés : **Histoire cachée**, **Accroches**, **Utilité de la scène** et **Tactique
et moral des adversaires**. Le [PNJ](/docs/campagne/personnages) possède un bloc
**Rôle dans l'histoire** indépendant du système : rôle, motivation, savoir et
signe distinctif. Huit nouvelles ampoules accompagnent leur rédaction.

La relecture compte **dix-sept motifs** : elle signale désormais un opposant ou
allié sans motivation, ainsi qu'un arc avec une seule accroche. Une tactique
renseignée évite le conseil « combat sans but ». Les nouveaux champs sont conservés
par l'export/import ; dans le PDF joueurs, seul le signe distinctif du bloc
narratif PNJ est conservé, les autres nouveaux champs d'histoire restent réservés au MJ.

## Publier un module et choisir son PDF

La nouvelle **[fiche de publication](/docs/export/publication)** prépare un module
à partager : sous-titre, auteur, couverture, version, système, niveaux, joueurs,
durée, présentation, avertissements, contexte caché, accroches, crédits et licence.
Tout est facultatif et enregistré avec la campagne. Remplir la fiche ne met rien
en ligne.

**[Exporter en PDF](/docs/export/pdf)** ouvre désormais des options :

- édition **MJ (complète)** ou **Joueurs**, avec filtres sur les champs réservés au MJ ;
- huit parties sélectionnables, dont **Annexes MJ** et **Cartes en pleine page** ;
- Lore complet ou seulement les pages liées à la campagne ;
- format **A4**, **A5** ou **US Letter**, avec mode impression sans aplats de couleur.

Les renvois donnent les **numéros de page** des scènes, adversaires et cartes
présents dans le livret. Les annexes rassemblent révélations et indices, index des
PNJ et des adversaires avec leurs apparitions. Les cartes et plans de pièces
peuvent occuper une page paysage chacun. La version joueurs exclut toujours les
annexes MJ ; relisez néanmoins les textes libres et les cartes avant de partager.

Ces options suivent le jalon **1.3.0-beta**. Avec une version plus ancienne,
le bouton peut encore télécharger directement le livret habituel.

## Préparer et écrire

- **[Mentor d'écriture](/docs/campagne/mentor-ecriture)** : les ampoules expliquent
  les champs avec questions, exemples et pièges fréquents. La fiche de publication
  dispose aussi de conseils intégrés.
- **[Relecture d'éditeur](/docs/campagne/relecture-editeur)** : dix-sept motifs
  portent sur les choix, enjeux, rythme, narration et chemins du graphe.
- **[Méthodes guidées](/docs/campagne/methodes-guidees)** : trois parcours pour
  préparer un chapitre et ses scènes, avec liens ou horloge selon la méthode.

Les cinq motifs de relecture du graphe signalent une scène isolée, un passage
obligé, un donjon sans boucle, une enquête sans relance et des indices tous issus
du même genre de scène. Pour une révélation, le contrôle attend maintenant
**trois scènes d'accès distinctes**. Il utilise les liens enregistrés, sans
réécrire le texte ni modifier le graphe.

Ces trois aides fonctionnent **sans IA**, en complément du chat et des générations.

## Retrouver et jouer une séance

L'accueil de campagne possède un bloc **Jouer** : reprise d'une séance active,
choix d'une partie pour en démarrer une, ou création de partie si nécessaire.
L'arbre comporte une branche **Parties**. Le raccourci **Séance en cours** permet
de revenir au jeu depuis les autres pages, y compris la barre haute mobile.

Dans le [mode séance](/docs/campagne/mode-seance), l'onglet **Règles** affiche
le système associé : recherche avec surlignage, sections repliables, sommaire et
épingles. **Demander à l'IA** prépare une question à relire avant de l'envoyer.

## Utiliser un téléphone ou une tablette

La [navigation compacte](/docs/navigation#téléphone-et-tablette-bêta) remplace les
volets permanents par deux tiroirs : menu principal et arborescence. Dans les
versions récentes, l'arborescence affiche **un niveau à la fois** : touchez une
branche pour y entrer, revenez au parent avec le bouton du haut et utilisez
**Ouvrir la fiche** pour consulter le conteneur. Les formulaires, dialogues et
panneaux de séance s'adaptent aux petits écrans.

En **application de bureau**, l'[accès tablette](/docs/configuration/acces-tablette)
autorise un navigateur du réseau local avec un QR code ou un code à six chiffres.
Les Paramètres restent réservés à l'hôte.

- **Windows** : contrôle du profil réseau et de l'autorisation du pare-feu ;
  détection des pare-feu antivirus tiers, dont les règles restent à vérifier
  dans leur propre interface.
- **Linux** : détection de `ufw` ou `firewalld` et indication de la commande pour
  ouvrir le port. Le guide décrit aussi l'accès à un serveur Debian par tunnel SSH.

L'appairage bureau est distinct de Docker : l'interface responsive fonctionne
dans les deux modes, mais Docker ne possède pas ce connecteur d'appairage.

Pour le canal de préversion, voir [Canal bêta](/docs/configuration/canal-beta).
Sauvegardez votre contenu avant de changer de version ; un retour au stable
n'est pas une restauration de données.
