---
sidebar_position: 6
---

# Dépannage

Commencez par relever la **version**, votre mode d'installation (**bureau** ou
**Docker**) et le message exact. Les fonctions d'édition manuelle peuvent rester
utilisables lorsqu'un service IA est indisponible.

## L'application ne s'ouvre pas

**Bureau** : vérifiez que Loremind est démarré via son lanceur et son icône de
notification. L'adresse par défaut est `http://localhost:8080` ; si le port a été
modifié, utilisez celui de `loremind.properties`. Si le moteur ne démarre pas,
vérifiez qu'une autre application n'utilise pas déjà ce port.

**Docker** : utilisez le port `WEB_PORT` de votre `.env` (généralement `8081`).
Depuis le dossier contenant votre fichier Compose :

```bash
docker compose ps
docker compose logs --tail=100 web core brain
```

Ces commandes permettent de repérer un service arrêté, une erreur de connexion
à la base ou un Brain inaccessible. Ne diffusez pas les journaux sans retirer
les secrets et le contenu privé qui pourraient s'y trouver.

## Les paramètres IA sont inaccessibles

L'administration peut demander les identifiants configurés à l'installation.
Ne confondez pas ces identifiants avec une clé API de fournisseur. Les réglages
IA nécessitent aussi que le **Brain** réponde : consultez son état ou ses journaux.
Voir [Paramètres](/docs/configuration/settings).

## Le chat ou la génération échoue

1. Vérifiez le fournisseur actif, son modèle et **Sauvegarder** dans les Paramètres.
2. Avec Ollama, vérifiez que le service et le modèle sélectionné sont disponibles.
3. Avec un fournisseur cloud, vérifiez la clé, l'accès au modèle et les limites
   indiquées par votre fournisseur.
4. Essayez une demande courte dans un nouveau fil pour distinguer un problème
   de connexion d'un contexte trop long.

Dans Docker, `localhost` depuis le Brain désigne **son conteneur**. Pour l'Ollama
du Compose, utilisez l'adresse de service prévue (`http://ollama:11434`) ; pour
un Ollama sur l'hôte, l'installation utilise généralement
`http://host.docker.internal:11434`. Voir [Ollama](/docs/installation/ollama).

## L'import PDF est lent, vide ou tronqué

- Préférez un document dont le texte est sélectionnable ; l'OCR d'un scan prend
  davantage de temps et dépend de la lisibilité des pages.
- Réduisez la **taille des morceaux** si le texte ne tient pas dans le contexte.
- Augmentez le **timeout IA** si le modèle répond trop lentement.
- En cas d'attente liée au fournisseur, laissez les nouvelles tentatives
  automatiques se dérouler tant que la progression reste active.
- Relisez le résultat : les imports de règles doivent encore être **enregistrés**,
  et les imports de campagne doivent être **validés** dans l'écran de révision.

Voir [Import des règles](/docs/game-system/regles) et
[Import de campagne](/docs/campagne/import-campagne).

## L'Atelier ne trouve pas une information

Attendez l'état **Prêt** et cochez la source voulue. Vérifiez les
[embeddings](/docs/configuration/embeddings) si l'indexation échoue.
Utilisez l'analyse approfondie pour une demande exhaustive. Après un changement
de modèle d'embeddings, reconstruisez l'index avec le nouveau modèle.

## Un champ de fiche a disparu

Vérifiez le système associé à la campagne et le nom du champ dans le template.
Les fiches PJ / PNJ / Ennemi dépendent des noms des champs ; revenir au nom
d'origine peut faire réapparaître la valeur. Les blocs des templates de Lore
utilisent des identifiants stables. Voir [Templates de fiches](/docs/game-system/templates-fiches).

## Une sauvegarde ou une image est refusée

Pour la restauration, choisissez le **ZIP de données Loremind**, pas un export
Foundry ou un PDF. La limite de requête dépend du déploiement : **2 Go** en bureau,
**128 Mo par défaut** dans le Core Docker, avec une éventuelle limite plus basse
de votre proxy. Les images ordinaires doivent respecter les formats acceptés et
la limite de **10 Mo** ; voir [Illustrer les pages](/docs/lore/edition-pages).

## Signaler un problème

Joignez la version, le système d'exploitation, le mode d'installation, les étapes
pour reproduire, le résultat attendu et le message observé. Une capture et un
court extrait de journal nettoyé suffisent souvent. Utilisez les liens de support
ou du dépôt proposés par le site ; ne publiez pas votre `.env`, vos clés ou une
sauvegarde privée complète.
