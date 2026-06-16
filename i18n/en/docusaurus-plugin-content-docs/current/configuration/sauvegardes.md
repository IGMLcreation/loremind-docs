---
sidebar_position: 3
---

# Backup and Restore

LoreMind stores its data in **PostgreSQL** (campaigns, lore, sheets,
image references) and on the **file system** (binaries of uploaded
images).

## Manual Backup

### PostgreSQL Data

```bash
docker compose exec db pg_dump -U loremind loremind > loremind-$(date +%Y%m%d).sql
```

### Uploaded Images

Images live in the Docker volume `loremind_images` (depending on your
docker-compose). Copy them at the same time as the SQL dump to stay consistent:

```bash
docker run --rm -v loremind_images:/source -v $(pwd):/backup alpine \
    tar czf /backup/images-$(date +%Y%m%d).tar.gz -C /source .
```

## Automatic Backup

If you want to automate this, you have two options:

1. **Cron on the host** — a `backup.sh` script that dumps SQL + tars images, plus a retention policy
2. **Third-party service** — Restic, Borg, or Duplicati pointing at the Docker volumes

## Restore

```bash
# Restore the database
docker compose exec -T db psql -U loremind loremind < loremind-20260101.sql

# Restore the images
docker run --rm -v loremind_images:/dest -v $(pwd):/backup alpine \
    tar xzf /backup/images-20260101.tar.gz -C /dest
```

Then restart the stack: `docker compose restart`.

## Best Practices

- **Back up before every major update** (release `0.X.0` → `0.Y.0`)
- **Quarterly restore test** — an untested backup is a fake backup
- **Off-site it** — copy backups off the LoreMind machine (NAS, encrypted cloud)
