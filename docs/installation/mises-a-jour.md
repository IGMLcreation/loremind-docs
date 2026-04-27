---
sidebar_position: 4
title: Mises à jour automatiques
---

# Mises à jour automatiques (Watchtower)

Si vous avez répondu **oui** à la question *« Activer les mises à jour auto »* pendant l'installation, un container [Watchtower](https://containrrr.dev/watchtower/) tourne en parallèle. Il vérifie chaque nuit à 4h les nouvelles versions de `core`, `brain` et `web` sur le registry, télécharge et redémarre les conteneurs concernés.

:::warning Postgres et MinIO sont volontairement exclus
Les bases de données et le stockage objet contiennent des données persistantes. Une montée de version mineure ou majeure doit être validée manuellement pour éviter les incompatibilités de schéma.
:::

## Activer ou désactiver après coup

Éditez le `.env` dans le dossier d'installation :

```env
COMPOSE_PROFILES=autoupdate    # active Watchtower
COMPOSE_PROFILES=              # désactive Watchtower
```

Puis appliquez le changement :

```bash
docker compose up -d
docker compose stop watchtower  # uniquement si vous venez de le désactiver
```

## Changer l'horaire

`WATCHTOWER_SCHEDULE` dans `.env` accepte la syntaxe [cron 6 champs](https://pkg.go.dev/github.com/robfig/cron) : `sec min h jour mois j-sem`.

Exemples :
- `0 0 4 * * *` — tous les jours à 4h du matin (défaut).
- `0 30 3 * * 0` — tous les dimanches à 3h30.

## Mode "notification seulement"

Si vous préférez être notifié *sans* que les conteneurs redémarrent automatiquement la nuit :

```env
WATCHTOWER_MONITOR_ONLY=true
```

Puis `docker compose up -d watchtower`. Watchtower continuera à vérifier le registry chaque nuit, le badge **MAJ** apparaîtra dans la sidebar de l'UI, et un bouton **Mettre à jour maintenant** sera disponible dans *Paramètres → Mises à jour*.

## Mise à jour manuelle (à tout moment)

**Depuis l'interface** : *Paramètres → Mises à jour → Mettre à jour maintenant*.

**En CLI** :

```bash
docker compose pull && docker compose up -d
```
