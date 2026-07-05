---
sidebar_position: 3
---

# Backups and restore

The recommended way to back up, restore or migrate your data is the
**built-in export/import feature**, whatever your installation mode.

## Built-in export / import (recommended)

In **Settings → Data backup**, first choose the **Scope**:

- **"Full backup (everything)"** — the whole instance: game systems, worlds,
  campaigns, playthroughs and images;
- or **a specific campaign** — a targeted export, to share or archive a single
  campaign.

For a campaign export, three **"Include"** checkboxes (all checked by default):

- **Lore (world)** — the full linked world (pages, folders, templates);
- **Play space (playthroughs, sessions, characters)** — the playthroughs with
  their sessions and journals, the facts, the quest progression and the
  character sheets;
- **Images** — the binaries of the referenced images.

Then two buttons:

- **Export data** — produces a **portable `.zip` file**
  (`loremind-<name>.zip`).
- **Import a file** — reloads a `.zip` (file picker or drag & drop) in **merge
  mode**: the content is added to the existing data **without overwriting
  anything**. A confirmation reminds you: *"Its content will be added to your
  instance (nothing is deleted)."*

This is the preferred path to back up your work or transfer it
to another installation.

:::note
- The built-in backup/restore is disabled in demo mode.
- Maximum size of an imported file: **2 GB** on the desktop installation,
  **128 MB** by default on Docker (configurable server-side).
- Exports created with previous versions of DM Loremind can still be
  imported — missing sections (e.g. the play space) are simply treated as
  empty.
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
