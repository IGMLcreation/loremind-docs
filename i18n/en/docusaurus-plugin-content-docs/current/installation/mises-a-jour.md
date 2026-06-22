---
sidebar_position: 4
title: Updates
---

# Updates

DM Loremind notifies you of new versions. How you update depends on your installation mode.

## Desktop mode (installer)

The application checks in the background for new versions on the [GitHub releases](https://github.com/IGMLcreation/LoreMind/releases). When a newer version is available:

- a **notification bubble** appears, and the notification-area (systray) icon offers a **"⬇ Download the update"** item;
- clicking it opens the release page to get the new installer.

The update is **manual**: re-download the `.msi` (Windows) or the `.AppImage` (Linux) from the [Download](/download) page, then:

- **Windows**: double-click the new `.msi` — it **updates the existing installation in place**.
- **Linux**: replace the old `.AppImage` with the new one.

Your data (`~/.loremind`) is **kept** in all cases.

## Docker mode (Watchtower)

If you answered **yes** to the *"Enable auto-updates"* question during the Docker installation, a [Watchtower](https://containrrr.dev/watchtower/) container runs alongside the others. Every night at 4 a.m. it checks the registry for new versions of `core`, `brain`, and `web`, downloads them, and restarts the affected containers.

:::warning[Postgres and MinIO are deliberately excluded]
The databases and object storage hold persistent data. A minor or major version bump must be validated manually to avoid schema incompatibilities.
:::

### Enabling or disabling later

Edit the `.env` file in the installation directory:

```env
COMPOSE_PROFILES=autoupdate    # enables Watchtower
COMPOSE_PROFILES=              # disables Watchtower
```

Then apply the change:

```bash
docker compose up -d
docker compose stop watchtower  # only if you have just disabled it
```

### Changing the schedule

`WATCHTOWER_SCHEDULE` in `.env` accepts the [6-field cron](https://pkg.go.dev/github.com/robfig/cron) syntax: `sec min h day month weekday`.

Examples:
- `0 0 4 * * *` — every day at 4 a.m. (default).
- `0 30 3 * * 0` — every Sunday at 3:30 a.m.

### "Notify only" mode

If you prefer to be notified *without* the containers restarting automatically at night:

```env
WATCHTOWER_MONITOR_ONLY=true
```

Then run `docker compose up -d watchtower`. Watchtower will keep checking the registry every night, the **UPDATE** badge will appear in the UI sidebar, and an **Update now** button will be available under *Settings → Updates*.

### Manual update (at any time)

**From the interface**: *Settings → Updates → Update now*.

**From the CLI**:

```bash
docker compose pull && docker compose up -d
```
