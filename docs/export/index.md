---
sidebar_position: 1
---

# Export

> ⚠️ Cette section décrit une **feature en cours de développement**.
> Le contenu sera mis à jour au fil des releases.

L'export permet de sortir de LoreMind pour :

- **Imprimer** une fiche PJ ou un Lore (PDF)
- **Sauvegarder** votre travail (markdown, JSON)
- **Partager** un module avec d'autres MJ (export structuré)
- **Migrer** vers un autre outil

## Formats prévus

| Format | Statut | Usage |
|--------|--------|-------|
| **PDF** | Roadmap | Impression de fiches, livrets de campagne |
| **Markdown** | Roadmap | Sauvegarde lisible humainement, partage Git |
| **JSON** | Roadmap | Backup structuré, import/export entre instances |
| **Foundry VTT** | À étudier | Export vers Foundry pour usage en table virtuelle |

## Sauvegarder vos données aujourd'hui

En attendant les exports natifs, vos données sont stockées dans **PostgreSQL**.
Si vous avez installé via Docker, le volume Postgres est sauvegardable :

```bash
docker compose exec db pg_dump -U loremind loremind > backup.sql
```

Pour restaurer :

```bash
docker compose exec -T db psql -U loremind loremind < backup.sql
```

> Cf. [Configuration → Sauvegardes](/docs/configuration/) pour plus de détails.
