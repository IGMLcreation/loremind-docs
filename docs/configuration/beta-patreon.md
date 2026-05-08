---
sidebar_position: 4
---

# Bêta privée Patreon

Les soutiens Patreon de LoreMind ont accès à un canal de **pré-release** :
les nouvelles fonctionnalités y sont déployées en avant-première, avant la
version stable.

## Comment ça marche

1. Vous souscrivez au tier Patreon donnant accès à la bêta
2. Vous obtenez un **token de licence** (clé JWT) sur votre espace Patreon
3. Dans LoreMind, **Settings → Licence**, vous collez le token
4. L'application bascule automatiquement sur le canal `:beta` au prochain check de mise à jour

## Architecture (en bref)

- Un **relais Cloudflare Workers** signe et délivre les tokens JWT à partir des données Patreon
- LoreMind valide la signature localement (clé publique embarquée) — pas d'appel réseau pour vérifier la licence
- Les images bêta sont sur un canal GHCR privé, accessibles via les credentials Docker injectés par le token

## Mise à jour automatique

Si vous utilisez Watchtower (recommandé), il pull la dernière `:beta` à
chaque check. Pas d'intervention manuelle.

## Revenir au canal stable

Retirez le token dans Settings → Licence. Au prochain check, l'application
re-vérifie le canal `:latest` et restaure les images publiques.

> ⚠️ Les versions bêta peuvent contenir des bugs ou des breaking changes.
> Sauvegardez avant de basculer si vous y tenez.
