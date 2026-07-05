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

Five LLM providers can be configured in the **Settings → AI** — one local and four cloud:

- **Ollama** *(local)* — 100% private execution, your data never leaves your machine. Ideal with a GPU (works on CPU, but slowly).
- **1min.ai** *(cloud)* — aggregator (Anthropic, OpenAI, Google, Mistral…) through a single paid subscription.
- **Mistral** *(cloud)* — Mistral AI's API (European models, good in French).
- **Gemini / Google AI Studio** *(cloud)* — Google's Gemini models; **free API key** on aistudio.google.com.
- **OpenRouter** *(cloud)* — multi-provider router, with **free models** available.

The choice is made globally (one active provider at a time), with a model
selected by default. You can switch at any time. Details: [Provider configuration](/docs/assistant-ia/fournisseurs).

## The assistant proposes, you apply

Beyond chat, the assistant can also **write into your sheets** — always on the
same principle: it proposes, **nothing is applied without your validation**.

- **Field-by-field fleshing out** — on arcs, chapters and scenes, a ✨ button
  next to the text fields proposes content that builds on the rest of the
  sheet and the campaign context. You accept, regenerate or ignore.
- **Scene drafts** — on a chapter, the **"Generate scenes"** panel proposes
  complete scenes to insert into the chapter. It's also the shortcut opened by
  the "Fix" button of the [guided prep](/docs/campagne/preparation) when facing
  an empty chapter.
- **"Previously on…" recap** — during a [session](/docs/campagne/mode-seance),
  the assistant writes the recap of the previous session from your journal,
  logged in one click.
- **Lore page generation** — field by field or in wizard mode at creation time
  (see [Lore page generation](/docs/assistant-ia/generation-pages)).

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
- [Lore page generation](/docs/assistant-ia/generation-pages) — fill / regenerate template fields
- [Prompting best practices](/docs/assistant-ia/bonnes-pratiques) — for better results
