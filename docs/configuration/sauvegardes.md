---
sidebar_position: 3
---

# Sauvegardes et restauration

La méthode recommandée pour sauvegarder, restaurer ou migrer vos données est
la **fonction d'export/import intégrée**, quel que soit votre mode
d'installation.

## Export / Import intégré (recommandé)

Dans **Paramètres → Sauvegarde / Restauration des données**, deux boutons :

- **Exporter les données** — produit un **fichier `.zip` portable** contenant
  toutes vos données ainsi que les images.
- **Importer un fichier** — recharge un `.zip` en **mode fusion** : le contenu
  est ajouté à l'existant **sans rien écraser**.

C'est la voie à privilégier pour sauvegarder votre travail ou le transférer
vers une autre installation.

:::note
La sauvegarde/restauration intégrée est désactivée en mode démo.
:::

Pour le détail du format du fichier d'export, voir [Export](/docs/export).

## Où vivent vos données ?

L'emplacement dépend de votre mode d'installation :

- **Installation bureau (local-first)** — base **H2 + fichiers** locaux. C'est
  exactement le cas où l'export `.zip` intégré est la bonne voie : il rassemble
  tout dans un seul fichier portable.
- **Déploiement Docker** — données dans **PostgreSQL** (campagnes, lore, fiches,
  images en référence) et binaires d'images sur le système de fichiers.

## Option avancée (Docker uniquement)

Si vous opérez un déploiement Docker et souhaitez un backup au niveau de la base,
vous pouvez utiliser `pg_dump`. Cette procédure **ne concerne pas** l'installation
bureau.

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

### Restauration

```bash
# Restaurer la base
docker compose exec -T db psql -U loremind loremind < loremind-20260101.sql

# Restaurer les images
docker run --rm -v loremind_images:/dest -v $(pwd):/backup alpine \
    tar xzf /backup/images-20260101.tar.gz -C /dest
```

Redémarrer ensuite le stack : `docker compose restart`.

### Automatisation (Docker)

Pour automatiser, deux options côté Docker :

1. **Cron sur l'hôte** — un script `backup.sh` qui dump SQL + tar images, plus une politique de rétention
2. **Service tiers** — Restic, Borg, Duplicati pointant vers les volumes Docker

## Bonnes pratiques

- **Sauvegarde avant chaque mise à jour majeure** (release `0.X.0` → `0.Y.0`)
- **Test de restauration trimestriel** — un backup non testé est un faux backup
- **Externalisez** — copier les backups hors de la machine DM Loremind (NAS, cloud chiffré)
