---
sidebar_position: 3
---

# Sauvegardes et restauration

LoreMind stocke ses données dans **PostgreSQL** (campagnes, lore, fiches,
images en référence) et sur le **système de fichiers** (binaires des images
uploadées).

## Sauvegarde manuelle

### Données PostgreSQL

```bash
docker compose exec db pg_dump -U loremind loremind > loremind-$(date +%Y%m%d).sql
```

### Images uploadées

Les images sont dans le volume Docker `loremind_images` (selon votre
docker-compose). À copier au même moment que le dump SQL pour rester cohérent :

```bash
docker run --rm -v loremind_images:/source -v $(pwd):/backup alpine \
    tar czf /backup/images-$(date +%Y%m%d).tar.gz -C /source .
```

## Sauvegarde automatique

Si vous voulez automatiser, deux options :

1. **Cron sur l'hôte** — un script `backup.sh` qui dump SQL + tar images, plus une politique de rétention
2. **Service tiers** — Restic, Borg, Duplicati pointant vers les volumes Docker

## Restauration

```bash
# Restaurer la base
docker compose exec -T db psql -U loremind loremind < loremind-20260101.sql

# Restaurer les images
docker run --rm -v loremind_images:/dest -v $(pwd):/backup alpine \
    tar xzf /backup/images-20260101.tar.gz -C /dest
```

Redémarrer ensuite le stack : `docker compose restart`.

## Bonnes pratiques

- **Sauvegarde avant chaque mise à jour majeure** (release `0.X.0` → `0.Y.0`)
- **Test de restauration trimestriel** — un backup non testé est un faux backup
- **Externalisez** — copier les backups hors de la machine LoreMind (NAS, cloud chiffré)
