---
sidebar_position: 2
---

# Settings — application settings

The **Settings** screen centralizes LoreMind's global settings.

## AI

Configuration of the active LLM provider. Details in
[AI Assistant → Providers](/docs/assistant-ia/fournisseurs).

- **Provider**: Ollama or 1min.ai
- **Default model**: model used for chats
- **Advanced settings**: temperature, max tokens, seed (depending on the provider)

## Language

For the moment, the interface is in French.
I will soon add at least an English translation.

## Behavior

- **Updates**: enable/disable automatic detection
- **"Version available" banner**: show / hide

## Persistence

Settings are stored in the database alongside your data. To reset them:
truncate the `app_settings` table (do this with full awareness of the
consequences).
