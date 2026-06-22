---
sidebar_position: 2
---

# Settings — application settings

The **Settings** screen centralizes DM Loremind's global settings:
artificial intelligence, embeddings (RAG), language and data backup.

## AI

Configuration of the active AI provider. Details in
[AI Assistant → Providers](/docs/assistant-ia/fournisseurs).

- **Provider**: five providers are available — **Ollama** (local),
  **1min.ai**, **OpenRouter**, **Mistral** and **Gemini** (cloud).
- **Default model**: one model selected per provider, used for
  generations.

## Advanced settings

Beyond the choice of model, a few fine-grained settings are available:

- **Context window** (num_ctx) — for Ollama, defines how much text
  the model can take into account at once.
- **PDF import** — size of the chunks split at import time, and the
  timeout for AI calls.

## Embeddings (RAG Workshop)

Embeddings power the semantic search of the RAG Workshop:

- **Embeddings provider**: Ollama or Mistral.
- **Number of retrieved chunks** (top-K): how many relevant passages are
  retrieved to feed the context.
- **Auto-pull of the embeddings model**: automatic download of the
  embeddings model if needed.

## Language

The interface is available in **French** and **English**, with complete
translations. The selector is in **Settings → Language**; the change
applies on the fly, without a restart, and your choice is remembered.

## Data backup

From Settings, you can export and re-import all of your data. See
[Backups and restore](/docs/configuration/sauvegardes).

## Persistence

AI and embeddings settings do not live in the database: they
are kept in a configuration file on the Brain service side
(`data/settings.json`). Any change is taken into account starting from the
next request, without restarting the application.
