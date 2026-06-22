---
sidebar_position: 4
---

# Bêta privée Patreon

Les soutiens Patreon de DM Loremind ont accès à un canal de **pré-release** :
les nouvelles fonctionnalités y sont déployées en avant-première, avant la
version stable.

## Comment ça marche

1. Vous souscrivez au **tier Patreon** donnant accès à la bêta.
2. Dans DM Loremind, ouvrez **Paramètres → section Mises à jour → canal bêta (Patreon)**.
3. Cliquez sur **Connecter Patreon** : une page d'autorisation OAuth s'ouvre. Après autorisation, un **token de licence** (clé JWT) vous est retourné.
4. **Collez le token** dans le champ prévu, puis **activez le canal bêta**.
5. Lancez la bascule avec **Passer en bêta** : l'application récupère les images bêta privées et **recrée les conteneurs** sur ce canal.

:::info[Le token vient du relais, pas de votre espace Patreon]
Vous ne récupérez pas le JWT « à la main » sur le site Patreon : c'est le relais OAuth qui le génère et vous le renvoie après autorisation. Vous n'avez qu'à le coller dans le champ.
:::

## Architecture (en bref)

- Un **relais Cloudflare Workers** signe et délivre les tokens JWT à partir des données Patreon
- DM Loremind valide la signature localement (clé publique embarquée) — pas d'appel réseau pour vérifier la licence
- Les images bêta sont sur un canal GHCR privé, accessibles via les credentials Docker injectés par le token

## Mise à jour automatique

Une fois sur le canal bêta, si vous utilisez **Watchtower** (recommandé), il
récupère la dernière image `:beta` à chaque check. La **bascule de canal**
(stable ↔ bêta), elle, passe par la recréation des conteneurs déclenchée depuis
**Paramètres → Mises à jour** — pas seulement par Watchtower.

## Revenir au canal stable

Deux possibilités depuis **Paramètres → section Mises à jour** :

- **Revenir au stable** — rebascule sur les images publiques `:latest` (recrée les conteneurs).
- **Déconnecter Patreon** — retire le token de licence de l'application.

:::warning
Les versions bêta peuvent contenir des bugs ou des *breaking changes*.
Sauvegardez vos données (voir [Sauvegardes et restauration](/docs/configuration/sauvegardes))
avant de basculer.
:::
