---
sidebar_position: 4
---

# Canal bêta

Le canal bêta propose les nouveautés de DM Loremind en avant-première, avant la
version stable. Il est **gratuit et ouvert à tout le monde** : aucun compte ni
aucune connexion n'est nécessaire.

:::warning
Les versions bêta peuvent contenir des bugs ou des *breaking changes*.
Sauvegardez vos données (voir [Sauvegardes et restauration](/docs/configuration/sauvegardes))
avant de basculer.
:::

## Installation Docker

1. Dans DM Loremind, ouvrez **Paramètres → Mises à jour → Canal bêta**.
2. Cliquez sur **Passer sur le canal beta**, puis confirmez avec **Passer en beta**.
3. Les conteneurs `core`, `brain` et `web` sont recréés avec les images bêta.
   L'application est indisponible 10 à 30 secondes, puis la page se recharge
   automatiquement.

Les images bêta `ghcr.io/igmlcreation/loremind-beta-*` sont **publiques** : rien
à configurer côté registry. Les données (base, images) sont **conservées** lors
de la bascule.

La ligne **Canal actuel** indique si vous êtes en **Stable** ou en **Bêta**.

### Mise à jour automatique

Une fois sur le canal bêta, si vous utilisez **Watchtower** (recommandé), il
récupère les nouvelles images bêta à chaque vérification. La **bascule de canal**
(stable ↔ bêta), elle, passe par la recréation des conteneurs déclenchée depuis
**Paramètres → Mises à jour** — pas seulement par Watchtower.

### Revenir au canal stable

Depuis **Paramètres → Mises à jour → Canal bêta**, cliquez sur **Repasser sur le
canal stable**, puis confirmez avec **Repasser en stable** : les conteneurs sont
recréés avec les images stables. Vous pouvez refaire le chemin inverse à tout
moment.

:::info[Le sidecar de bascule n'est pas installé ?]
Les installations anciennes n'ont pas le service de bascule. Récupérez le dernier
`docker-compose.yml` du dépôt et lancez une fois
`docker compose pull && docker compose up -d`. À défaut, basculez à la main en
modifiant `IMAGE_NAMESPACE` dans votre `.env` : `igmlcreation/loremind-` pour le
stable, `igmlcreation/loremind-beta-` pour la bêta.
:::

## Application de bureau

Chaque bêta est publiée en **pré-version** (*pre-release*) sur les
[Releases GitHub](https://github.com/IGMLcreation/LoreMind/releases). Pour
l'installer, téléchargez le `.msi` (Windows) ou l'`.AppImage` (Linux) de la
pré-version voulue, comme pour une [mise à jour](/docs/installation/mises-a-jour).

Une installation bêta est prévenue **de la bêta suivante** comme **de la version
stable qui la remplace**. Une installation stable, elle, n'est jamais notifiée des
bêtas.

Vos données (`~/.loremind`) sont conservées. Un retour au stable consiste à
installer la version stable suivante ; ce n'est pas une restauration de données.

## Utiliser les nouveautés

Le [récapitulatif de la branche bêta](/docs/configuration/nouveautes-beta) mène aux
guides du mentor, de la relecture, des méthodes guidées, du mode séance et du mobile.
Les fonctions d'accès tablette sont propres à l'application de bureau.
