---
sidebar_position: 1
---

# AI Assistant

DM Loremind ships with a contextual AI assistant: on any entity
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

Five providers are available under **Settings → AI engine**: **Ollama**, **1min.ai**,
**Mistral**, **Gemini** and **OpenRouter**. One conversation provider is active at
a time. Available models depend on the configured catalogue and account.
Document embeddings have a separate setting.

Cloud providers receive the context relevant to each request. For local processing,
configure Ollama for chat and, when using the Workshop, for embeddings too.
See [Provider configuration](/docs/assistant-ia/fournisseurs).

## The assistant proposes, you apply

Beyond chat, the assistant can also **write into your sheets** — always on the
same principle: it proposes, **nothing is applied without your validation**.

- **Flesh out with AI** — on arcs, chapters and scenes, a panel proposes values
  field by field. Select which suggestions to apply, then review and save the sheet.
- **Scene drafts** — on a chapter, the **"Generate scenes"** panel proposes
  complete scenes to insert into the chapter. It's also the shortcut opened by
  the "Fix" button of the [guided prep](/docs/campagne/preparation) when facing
  an empty chapter.
- **"Previously on…" recap** — during a [session](/docs/campagne/mode-seance),
  the assistant writes the recap of the previous session from your journal,
  logged in one click.
- **Lore page generation** — fill text fields in the editor or use the creation
  wizard (see [Content generation](/docs/assistant-ia/generation-pages)).

## Context injected automatically

When you open the chat on an entity, the backend builds a prompt that
includes:

1. **The entity itself** — its significant fields (not images or extremely large notes)
2. **The linked Lore** — related pages, for universe consistency
3. **The Game System** — relevant rule sections (Combat, Classes…) depending on the detected intent
4. **The conversation history** — the previous messages in the drawer

You **don't need** to manually re-paste this context — it is computed for you.

## Detailed pages

- [Provider configuration](/docs/assistant-ia/fournisseurs) — Ollama, 1min.ai, Mistral, Gemini, OpenRouter
- [Lore page generation](/docs/assistant-ia/generation-pages) — Lore fill and campaign proposals
- [Prompting best practices](/docs/assistant-ia/bonnes-pratiques) — for better results

## Choose the right tool

- [Chat and conversations](/docs/assistant-ia/conversations) — context, history and thread management.
- [Generate sheet content](/docs/assistant-ia/generation-pages) — Lore fill, proposal selection and scene creation.
- [AI Workshop](/docs/campagne/notebooks) — PDF questions, citations and referenced archives.
- [Embeddings](/docs/configuration/embeddings) — configure indexing separately from chat.
- [Data and sharing](/docs/configuration/donnees-confidentialite) — understand provider transmissions.
