---
sidebar_position: 6
---

# Troubleshooting

Record your **version**, installation type (**desktop** or **Docker**) and the
exact error. Manual editing may remain available when an AI service is unavailable.

## The application does not open

**Desktop**: check that Loremind is running through its launcher and tray icon.
The default address is `http://localhost:8080`; use the port in `loremind.properties`
if changed. If startup fails, check whether another application occupies that port.

**Docker**: use the `.env` file's `WEB_PORT` (usually `8081`). From the directory
containing your Compose file:

```bash
docker compose ps
docker compose logs --tail=100 web core brain
```

These reveal stopped services, database connection errors or an unreachable Brain.
Remove secrets and private content before sharing logs.

## AI settings are unavailable

Administration may request the credentials configured at installation. These
are separate from provider API keys. AI settings also require a responding
**Brain**: check its state or logs. See [Settings](/docs/configuration/settings).

## Chat or generation fails

1. Check the active provider and model, then **Save** in Settings.
2. With Ollama, check that the service and selected model are available.
3. With cloud AI, check the key, model access and limits reported by the provider.
4. Try a short request in a fresh thread to distinguish connection problems from
   an oversized context.

Inside Docker, `localhost` from Brain means **its own container**. For Compose's
Ollama, use the service address (`http://ollama:11434`); for host Ollama, installation
usually uses `http://host.docker.internal:11434`. See [Ollama](/docs/installation/ollama).

## PDF import is slow, empty or truncated

- Prefer selectable text; OCR on scans takes longer and depends on page legibility.
- Reduce **chunk size** when input does not fit the context.
- Increase **AI timeout** when the model responds too slowly.
- Let automatic retries proceed during provider throttling while progress is active.
- Review the result: imported rules still need to be **saved**, and campaign
  imports must be **confirmed** in the review screen.

See [Rules import](/docs/game-system/regles) and
[Campaign import](/docs/campagne/import-campagne).

## The Workshop cannot find information

Wait for **Ready** and select the relevant source. Check
[embeddings](/docs/configuration/embeddings) if indexing fails. Use deep analysis
for exhaustive requests. Rebuild the index after changing embedding models.

## A character sheet field disappeared

Check the campaign's game system and the template field name. PC / NPC / Enemy
sheets depend on field names; restoring the original name may restore the value's
display. Lore template blocks use stable IDs. See
[Sheet templates](/docs/game-system/templates-fiches).

## A backup or image is rejected

Restore a **Loremind data ZIP**, rather than a Foundry bundle or PDF. Request limits
depend on deployment: **2 GB** on desktop, **128 MB by default** in Docker Core,
with a potentially lower proxy limit. Regular images must meet supported formats
and the **10 MB** limit; see [Page illustrations](/docs/lore/edition-pages).

## Report a problem

Include version, operating system, installation type, steps to reproduce, expected
result and observed message. A screenshot and short sanitised log excerpt are
often sufficient. Use the site's support or repository links; do not publish
your `.env`, keys or a complete private backup.

## A beta feature is missing

Compare the installation with [Beta additions](/docs/configuration/nouveautes-beta).
After updating, reload the interface and check that backend and frontend versions
match. Tablet access is **desktop-only** and its firewall diagnostics are
available on **Windows** and, in recent builds, **Linux** (`ufw` or `firewalld`).
The session shortcut only appears when a session is active.

If **Rules** is empty, associate a system with the campaign and save its rules.
If text seems to disappear while searching, clear the filter: only matching
passages are shown. Rule pins and guided-method drafts are browser-specific.

For an unreachable PC or an expired or rejected pairing code, see the
[tablet troubleshooting guide](/docs/configuration/acces-tablette).
