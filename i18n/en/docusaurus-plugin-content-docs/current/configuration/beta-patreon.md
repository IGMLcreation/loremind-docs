---
sidebar_position: 4
---

# Patreon private beta

DM Loremind's Patreon supporters get access to a **pre-release** channel:
new features are deployed there as an early preview, before the
stable version.

## How it works

1. You subscribe to the **Patreon tier** that grants beta access.
2. In DM Loremind, open **Settings → Updates section → beta channel (Patreon)**.
3. Click **Connect Patreon**: an OAuth authorization page opens. After authorization, a **license token** (JWT key) is returned to you.
4. **Paste the token** into the dedicated field, then **enable the beta channel**.
5. Trigger the switch with **Switch to beta**: the application pulls the private beta images and **recreates the containers** on this channel.

:::info[The token comes from the relay, not from your Patreon space]
You do not retrieve the JWT "by hand" on the Patreon site: the OAuth relay is what generates it and returns it to you after authorization. All you have to do is paste it into the field.
:::

## Architecture (in brief)

- A **Cloudflare Workers relay** signs and issues the JWT tokens from the Patreon data
- DM Loremind validates the signature locally (embedded public key) — no network call to verify the license
- Beta images are on a private GHCR channel, accessible through the Docker credentials injected by the token

## Automatic updates

Once on the beta channel, if you use **Watchtower** (recommended), it
pulls the latest `:beta` image on every check. The **channel switch**
(stable ↔ beta) itself goes through the container recreation triggered from
**Settings → Updates** — not just through Watchtower.

## Returning to the stable channel

Two options from **Settings → Updates section**:

- **Back to stable** — switches back to the public `:latest` images (recreates the containers).
- **Disconnect Patreon** — removes the license token from the application.

:::warning
Beta versions may contain bugs or *breaking changes*.
Back up your data (see [Backups and restore](/docs/configuration/sauvegardes))
before switching.
:::
