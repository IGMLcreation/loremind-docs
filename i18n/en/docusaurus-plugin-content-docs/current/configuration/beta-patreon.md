---
sidebar_position: 4
---

# Patreon Private Beta

DM Loremind's Patreon supporters get access to a **pre-release** channel:
new features are deployed there as an early preview, before the
stable version.

## How it works

1. You subscribe to the Patreon tier that grants beta access
2. You obtain a **license token** (JWT key) from your Patreon space
3. In DM Loremind, **Settings → License**, you paste the token
4. The application automatically switches to the `:beta` channel on the next update check

## Architecture (in brief)

- A **Cloudflare Workers relay** signs and issues the JWT tokens from the Patreon data
- DM Loremind validates the signature locally (embedded public key) — no network call to verify the license
- Beta images are on a private GHCR channel, accessible through the Docker credentials injected by the token

## Automatic updates

If you use Watchtower (recommended), it pulls the latest `:beta` on
every check. No manual intervention.

## Returning to the stable channel

Remove the token in Settings → License. On the next check, the application
re-verifies the `:latest` channel and restores the public images.

> ⚠️ Beta versions may contain bugs or breaking changes.
> Back up before switching if it matters to you.
