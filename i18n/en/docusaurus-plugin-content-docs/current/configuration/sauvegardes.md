---
sidebar_position: 3
---

# Backups and restore

The recommended way to back up, restore or migrate your data is the
**built-in export/import feature**, whatever your installation mode.

## Built-in export / import (recommended)

In **Settings → Data backup / restore**, two buttons:

- **Export data** — produces a **portable `.zip` file** containing
  all of your data as well as the images.
- **Import a file** — reloads a `.zip` in **merge mode**: the content
  is added to the existing data **without overwriting anything**.

This is the preferred path to back up your work or transfer it
to another installation.

:::note
The built-in backup/restore is disabled in demo mode.
:::

For details about the export file format, see [Export](/docs/export).

## Where does your data live?

The location depends on your installation mode:

- **Desktop installation (local-first)** — local **H2 + files**
  database. This is exactly the case where the built-in `.zip` export is the
  right path: it gathers everything into a single portable file.
- **Docker deployment** — data in **PostgreSQL** (campaigns, lore, sheets,
  image references) and image binaries on the file system.

## Advanced option (Docker only)

If you run a Docker deployment and want a database-level backup,
you can use `pg_dump`. This procedure **does not apply** to the desktop
installation.

### PostgreSQL data

```bash
docker compose exec db pg_dump -U loremind loremind > loremind-$(date +%Y%m%d).sql
```

### Uploaded images

Images live in the Docker volume `loremind_images` (depending on your
docker-compose). Copy them at the same time as the SQL dump to stay consistent:

```bash
docker run --rm -v loremind_images:/source -v $(pwd):/backup alpine \
    tar czf /backup/images-$(date +%Y%m%d).tar.gz -C /source .
```

### Restore

```bash
# Restore the database
docker compose exec -T db psql -U loremind loremind < loremind-20260101.sql

# Restore the images
docker run --rm -v loremind_images:/dest -v $(pwd):/backup alpine \
    tar xzf /backup/images-20260101.tar.gz -C /dest
```

Then restart the stack: `docker compose restart`.

### Automation (Docker)

To automate, two options on the Docker side:

1. **Cron on the host** — a `backup.sh` script that dumps SQL + tars images, plus a retention policy
2. **Third-party service** — Restic, Borg, or Duplicati pointing at the Docker volumes

## Best practices

- **Back up before every major update** (release `0.X.0` → `0.Y.0`)
- **Quarterly restore test** — an untested backup is a fake backup
- **Off-site it** — copy backups off the DM Loremind machine (NAS, encrypted cloud)
