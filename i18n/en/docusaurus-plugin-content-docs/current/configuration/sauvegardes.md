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
  image references) and binaries in **MinIO** with the supplied Compose (`minio-data` volume).

## Advanced option (Docker only)

The supplied Compose uses the **postgres** service and **MinIO** object storage.
Images and files are not stored in a `loremind_images` volume. A technical backup
must cover the database, objects and Brain configuration together.

### PostgreSQL dump

**Bash** example from the Compose directory, reading database and user names
from the container's environment:

```bash
docker compose exec -T postgres sh -c 'pg_dump -U "$POSTGRES_USER" "$POSTGRES_DB"' > loremind.sql
```

This dumps relational data. It does not contain MinIO binaries, Workshop PDF
files, their indexes or configuration keys.

### Files and volumes

Check actual names with `docker volume ls` and your Compose file: names can
include a project prefix. The repository's Compose declares `postgres-data`,
`minio-data` and `brain-data`, among others.

- Back up **MinIO objects** and **Brain data** with your usual backup tool.
- For raw volume copies, stop services writing to them during the copy. A raw
  PostgreSQL volume copy also requires stopping PostgreSQL; the logical dump
  above is an alternative.
- Keep Compose, `.env` and AI settings separately. They may contain secrets and
  should not accompany shared campaign content.

### Technical restoration

Restore to an isolated installation with a compatible version first, using a
PostgreSQL database, MinIO objects and Brain data from the same backup point.
Raw SQL restoration does not have the Loremind ZIP import's merge mode; do not
run it against a populated database without an appropriate restore procedure.

Then check an illustrated page, a character sheet, a playthrough and a Workshop
before considering restoration successful.

## Best practices

- **Back up before every major update** (release `0.X.0` → `0.Y.0`)
- **Quarterly restore test** — an untested backup is a fake backup
- **Off-site it** — copy backups off the DM Loremind machine (NAS, encrypted cloud)
