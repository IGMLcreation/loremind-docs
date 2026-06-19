---
sidebar_position: 1
---

# Export

> ⚠️ This section describes a **feature under development**.
> The content will be updated as releases progress.

Export lets you take data out of DM Loremind to:

- **Print** a PC sheet or a Lore entry (PDF)
- **Back up** your work (Markdown, JSON)
- **Share** a module with other GMs (structured export)
- **Migrate** to another tool

## Planned formats

| Format | Status | Usage |
|--------|--------|-------|
| **PDF** | Roadmap | Printing sheets, campaign booklets |
| **Markdown** | Roadmap | Human-readable backup, Git sharing |
| **JSON** | Roadmap | Structured backup, import/export between instances |
| **Foundry VTT** | Under consideration | Export to Foundry for use at a virtual table |

## Backing up your data today

Until native exports are available, your data is stored in **PostgreSQL**.
If you installed via Docker, the Postgres volume can be backed up:

```bash
docker compose exec db pg_dump -U loremind loremind > backup.sql
```

To restore:

```bash
docker compose exec -T db psql -U loremind loremind < backup.sql
```

> See [Configuration → Backups](/docs/configuration/) for more details.
