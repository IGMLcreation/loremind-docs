---
sidebar_position: 3
---

# Sauvegardes et restauration

La méthode recommandée pour sauvegarder, restaurer ou migrer vos données est
la **fonction d'export/import intégrée**, quel que soit votre mode
d'installation.

## Export / Import intégré (recommandé)

Dans **Paramètres → Sauvegarde des données**, choisissez d'abord le
**Périmètre** :

- **« Sauvegarde complète (tout) »** — toute l'instance : systèmes de JDR,
  univers, campagnes, parties et images ;
- ou **une campagne précise** — export ciblé, pour partager ou archiver une
  seule campagne.

Pour un export de campagne, trois cases **« À inclure »** (toutes cochées par
défaut) :

- **Univers (lore)** — l'univers associé au complet (pages, dossiers, templates) ;
- **Espace de jeu (parties, sessions, persos)** — les parties avec leurs
  séances et journaux, les faits, la progression des quêtes et les feuilles de
  personnages ;
- **Images** — les binaires des images référencées.

Puis deux boutons :

- **Exporter les données** — produit un **fichier `.zip` portable**
  (`loremind-<nom>.zip`).
- **Importer un fichier** — recharge un `.zip` (sélection ou glisser-déposer)
  en **mode fusion** : le contenu est ajouté à l'existant **sans rien écraser**.
  Une confirmation le rappelle : *« Le contenu sera ajouté à votre instance
  (rien n'est supprimé). »*

C'est la voie à privilégier pour sauvegarder votre travail ou le transférer
vers une autre installation.

:::note
- La sauvegarde/restauration intégrée est désactivée en mode démo.
- Taille maximale d'un fichier importé : **2 Go** en installation bureau,
  **128 Mo** par défaut en Docker (configurable côté serveur).
- Les exports créés avec des versions précédentes de DM Loremind restent
  importables — les sections absentes (ex. l'espace de jeu) sont simplement
  traitées comme vides.
:::

Pour le détail du format du fichier d'export, voir [Export](/docs/export).

## Où vivent vos données ?

L'emplacement dépend de votre mode d'installation :

- **Installation bureau (local-first)** — base **H2 + fichiers** locaux. C'est
  exactement le cas où l'export `.zip` intégré est la bonne voie : il rassemble
  tout dans un seul fichier portable.
- **Déploiement Docker** — données dans **PostgreSQL** (campagnes, lore, fiches,
  images en référence) et binaires dans **MinIO** avec le Compose fourni (volume `minio-data`).

## Option avancée (Docker uniquement)

Le Compose fourni utilise le service **postgres** et le stockage objet **MinIO**.
Les images et fichiers ne sont pas dans un volume `loremind_images`.
Une sauvegarde technique doit couvrir ensemble la base, les objets et la
configuration du Brain.

### Export PostgreSQL

Exemple **Bash**, depuis le dossier du Compose : les noms de base et d'utilisateur
sont lus dans l'environnement du conteneur.

```bash
docker compose exec -T postgres sh -c 'pg_dump -U "$POSTGRES_USER" "$POSTGRES_DB"' > loremind.sql
```

Ce dump couvre les données relationnelles. Il ne contient pas les binaires de
MinIO, les fichiers PDF des ateliers, leurs index ni les clés de configuration.

### Fichiers et volumes

Repérez les noms réels avec `docker volume ls` et votre fichier Compose : ils
peuvent avoir un préfixe de projet. Le Compose du dépôt déclare notamment
`postgres-data`, `minio-data` et `brain-data`.

- Sauvegardez les **objets MinIO** et les **données Brain** avec votre outil de
  sauvegarde habituel.
- Pour une copie brute de volumes, arrêtez les services qui y écrivent pendant
  la copie. Une copie brute du volume PostgreSQL exige aussi l'arrêt de PostgreSQL ;
  le dump logique ci-dessus est une autre méthode.
- Conservez séparément le Compose, le `.env` et les réglages IA. Ils peuvent contenir
  des secrets et ne doivent pas accompagner une campagne partagée.

### Restauration technique

Restaurez d'abord sur une installation isolée avec une version compatible :
base PostgreSQL, objets MinIO et données Brain issus du même point de sauvegarde.
Un import SQL brut ne possède pas le mode fusion de l'import ZIP Loremind ;
ne l'exécutez pas sur une base déjà remplie sans procédure de restauration adaptée.

Contrôlez ensuite une page illustrée, une fiche, une partie et un atelier avant
de considérer la restauration comme réussie.

## Bonnes pratiques

- **Sauvegarde avant chaque mise à jour majeure** (release `0.X.0` → `0.Y.0`)
- **Test de restauration trimestriel** — un backup non testé est un faux backup
- **Externalisez** — copier les backups hors de la machine DM Loremind (NAS, cloud chiffré)
