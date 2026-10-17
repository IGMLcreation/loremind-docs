---
sidebar_position: 5
---

# Données, confidentialité et partage

DM Loremind conserve votre contenu dans votre installation. L'usage d'une IA
cloud ajoute des transmissions vers le fournisseur choisi, selon la fonction
utilisée.

## Comprendre les traitements

| Fonction | Données utilisées |
|---|---|
| Édition manuelle et consultation | Contenu enregistré sur votre instance |
| Chat ou génération IA | Demande, historique et contexte sélectionné par l'application |
| Import de campagne ou de règles | Texte extrait du PDF, envoyé au modèle d'analyse |
| Indexation d'un PDF d'atelier | Extraits envoyés au fournisseur d'embeddings |
| Question dans un atelier | Question, historique et passages documentaires retenus ; davantage de texte en analyse approfondie |

**Ollama local** exécute les requêtes sur le service Ollama que vous configurez.
Pour un traitement documentaire local, choisissez aussi Ollama comme fournisseur
d'embeddings. Configurer Mistral pour les embeddings fait sortir les extraits à
indexer, même si le chat utilise Ollama.

## Notes MJ et accès joueurs

Les champs **notes MJ**, **secrets** et **narration joueurs** organisent le contenu.
Ils ne constituent pas des comptes joueurs avec des autorisations distinctes.
Un export ou un écran de préparation peut contenir des secrets.

| Support | Avant de partager |
|---|---|
| **ZIP de données** | Considérez-le comme une copie du contenu exporté, avec ses notes et éventuellement l'espace de jeu |
| **Livret PDF** | Relisez les encadrés MJ, pièges et secrets : le livret est destiné à la préparation du MJ |
| **Foundry** | Vérifiez les documents importés et leurs permissions dans Foundry avant de les montrer aux joueurs |

La sauvegarde sélective d'une campagne permet d'exclure son **espace de jeu** et
ses **images**. L'option **univers** inclut le Lore associé au complet : vérifiez
qu'il ne contient pas d'autres éléments que vous souhaitez garder pour vous.

## Sauvegarder aussi la configuration

Le ZIP de contenu ne remplace pas la sauvegarde de la configuration d'hébergement.
Les réglages IA sont stockés côté Brain dans `data/settings.json` et peuvent
contenir des clés API. Le déploiement Docker utilise également un `.env` ;
le bureau utilise `loremind.properties` dans son dossier de données.

Gardez ces fichiers à part, avec un accès limité, pour reconstruire votre
installation. Ne les joignez pas à un rapport de bug ni à un module partagé.
Voir [Sauvegardes et restauration](/docs/configuration/sauvegardes).

## Appareils appairés en bêta

L'[accès tablette du bureau](/docs/configuration/acces-tablette) autorise un
navigateur à lire et modifier le contenu du MJ. Ce n'est pas un compte joueur
avec un filtrage des secrets. Les réglages, les clés et l'administration restent
réservés au PC. Depuis celui-ci, **Retirer l'accès** révoque un appareil ; désactiver
l'accès réseau ferme le connecteur pour tous sans oublier les appareils autorisés.

Les brouillons de la méthode guidée et les épingles des règles sont mémorisés
par navigateur. Ils ne se retrouvent pas automatiquement sur la tablette et ne
remplacent pas une sauvegarde ZIP.
