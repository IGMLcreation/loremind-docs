---
sidebar_position: 4
---

# Beta channel

The beta channel gives early access to new DM Loremind features, before the
stable version. It is **free and open to everyone**: no account or sign-in is
needed.

:::warning
Beta versions may contain bugs or *breaking changes*.
Back up your data (see [Backups and restore](/docs/configuration/sauvegardes))
before switching.
:::

## Docker installation

1. In DM Loremind, open **Settings → Updates → Beta channel**.
2. Click **Switch to the beta channel**, then confirm with **Switch to beta**.
3. The `core`, `brain` and `web` containers are recreated with the beta images.
   The application is unavailable for 10 to 30 seconds, then the page reloads
   automatically.

The `ghcr.io/igmlcreation/loremind-beta-*` beta images are **public**: there is
nothing to configure on the registry side. Your data (DB, images) is **preserved**
during the switch.

The **Current channel** line shows whether you are on **Stable** or **Beta**.

### Automatic updates

Once on the beta channel, if you use **Watchtower** (recommended), it pulls new
beta images on every check. The **channel switch** (stable ↔ beta) itself goes
through the container recreation triggered from **Settings → Updates** — not
just through Watchtower.

### Returning to the stable channel

From **Settings → Updates → Beta channel**, click **Switch back to the stable
channel**, then confirm with **Switch back to stable**: the containers are
recreated with the stable images. You can switch back at any time.

:::info[Channel switcher sidecar not installed?]
Older installations do not have the switching service. Fetch the latest
`docker-compose.yml` from the repository and run
`docker compose pull && docker compose up -d` once. Otherwise, switch manually by
editing `IMAGE_NAMESPACE` in your `.env`: `igmlcreation/loremind-` for stable,
`igmlcreation/loremind-beta-` for beta.
:::

## Desktop application

Each beta is published as a **pre-release** on
[GitHub Releases](https://github.com/IGMLcreation/LoreMind/releases). To install
it, download the `.msi` (Windows) or `.AppImage` (Linux) of the pre-release you
want, as for an [update](/docs/installation/mises-a-jour).

A beta installation is notified **of the next beta** as well as **of the stable
version that replaces it**. A stable installation is never notified of betas.

Your data (`~/.loremind`) is kept. Going back to stable means installing the next
stable version; it is not a data restore.

## Use the additions

[What's new on beta](/docs/configuration/nouveautes-beta) links to mentor, review,
guided methods, session and mobile guides. Tablet access belongs to desktop
installations.
