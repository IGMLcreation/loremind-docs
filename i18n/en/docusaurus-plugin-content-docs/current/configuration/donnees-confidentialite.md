---
sidebar_position: 5
---

# Data, privacy and sharing

DM Loremind stores your content in your installation. Using cloud AI adds
transmissions to the chosen provider, depending on the feature.

## Understand processing

| Feature | Data used |
|---|---|
| Manual editing and browsing | Content stored in your instance |
| AI chat or generation | Request, history and context selected by the application |
| Campaign or rules import | Extracted PDF text sent to the analysis model |
| Workshop PDF indexing | Passages sent to the embedding provider |
| Workshop question | Question, history and selected document passages; more text in deep analysis |

**Local Ollama** executes requests on the Ollama service you configure. For local
document processing, also select Ollama for embeddings. Mistral embeddings send
passages out for indexing even if chat uses Ollama.

## GM notes and player access

**GM notes**, **secrets** and **player narration** organise content. They are not
player accounts with separate permissions. An export or preparation screen may
contain secrets.

| Output | Before sharing |
|---|---|
| **Data ZIP** | Treat it as a copy of exported content, including notes and possibly playthrough data |
| **PDF booklet** | Review GM boxes, traps and secrets: this booklet is for GM preparation |
| **Foundry** | Check imported documents and their Foundry permissions before showing them to players |

A selective campaign backup can exclude **playthrough data** and **images**.
The **setting** option includes the entire associated Lore: check for unrelated
material you want to keep private.

## Back up configuration too

The content ZIP does not replace a hosting configuration backup. AI settings live
in Brain's `data/settings.json` and can contain API keys. Docker also uses a
`.env` file; desktop uses `loremind.properties` in its data directory.

Keep these files separately with restricted access so you can rebuild the
installation. Do not attach them to bug reports or shared modules. See
[Backups and restoration](/docs/configuration/sauvegardes).

## Paired devices in beta

[Desktop tablet access](/docs/configuration/acces-tablette) authorises a browser
to read and edit GM content. It is not a player account with filtered secrets.
Settings, keys and administration remain restricted to the PC. **Remove access**
revokes a device there; disabling network access closes the connector for everyone
without forgetting authorised devices.

Guided-method drafts and rule pins are stored per browser. They do not appear
automatically on a tablet or replace a ZIP backup.
