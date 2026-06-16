---
sidebar_position: 1
---

# AI Assistant

LoreMind ships with a contextual AI assistant: on any entity
(Lore page, scene, PC, NPC, arc, chapter…), a ✨ button opens a side
panel where you can chat with a language model that **knows
the open entity**.

## Philosophy

The AI does not replace the GM — it assists them. Typical use cases:

- **Filling the gaps**: generate a description for a vague location or NPC
- **Narrative suggestions**: "suggest 3 motivations for this NPC", "how could this fight turn around?"
- **Consistency**: "is this NPC consistent with the Lore of the city of Vaeril?"
- **Speed**: generate the skeleton of an arc in a few seconds, to refine afterwards

## Supported providers

Two LLM providers can be configured in the **Settings**:

- **Ollama** — local execution (100% private, your data never leaves your machine). Requires a machine with a graphics card.
- **1min.ai** — aggregator cloud service (Anthropic, OpenAI, Google, Mistral…). A paid 1min.ai account is required.

The choice is made globally (one active provider at a time), with a model
selected by default. You can switch at any time.

## Context injected automatically

When you open the chat on an entity, the backend builds a prompt that
includes:

1. **The entity itself** — its significant fields (not images or extremely large notes)
2. **The linked Lore** — related pages, for universe consistency
3. **The Game System** — relevant rule sections (Combat, Classes…) depending on the detected intent
4. **The conversation history** — the previous messages in the drawer

You **don't need** to manually re-paste this context — it is computed for you.

## Detailed pages

- [Provider configuration](/docs/assistant-ia/fournisseurs) — Ollama and 1min.ai
- [Lore page generation](/docs/assistant-ia/generation-pages) — fill / regenerate template fields
- [Prompting best practices](/docs/assistant-ia/bonnes-pratiques) — for better results
