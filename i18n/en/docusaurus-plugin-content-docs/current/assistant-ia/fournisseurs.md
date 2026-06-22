---
sidebar_position: 2
---

# Provider configuration

The LLM provider is selected in **Settings → AI**.

## Ollama (local)

[Ollama](https://ollama.com) runs locally on your machine.

**Advantages**:

- 100% private — your data never leaves your machine
- No recurring cost
- Works offline

**Constraints**:

- Requires a machine with a GPU (or patience on CPU)
- "8B" models run comfortably on 8 GB of VRAM; "70B" models require 40+ GB

**Configuration**:

1. Install Ollama (a dedicated guide is available: [Ollama](/docs/installation/ollama))
2. Download a model: `ollama pull llama3.1:8b` (or another)
3. In DM Loremind → **Settings → AI → Ollama**, enter the URL (default `http://localhost:11434`)
4. Select the model from the auto-detected list

The model pull can also be triggered from the DM Loremind UI.

## 1min.ai (cloud)

[1min.ai](https://1min.ai) is an aggregator that gives access to Anthropic Claude,
OpenAI GPT-4, Google Gemini, Mistral, etc. through a single subscription.

**Advantages**:

- High-end models accessible without powerful hardware
- Switch between providers without changing your subscription
- Low latency

**Constraints**:

- Monthly cost
- Your prompts pass through the 1min.ai servers and the underlying provider (Anthropic, OpenAI, etc.)
- Depends on your internet connection

**Configuration**:

1. Create a 1min.ai account and obtain an API key
2. In DM Loremind → **Settings → AI → 1min.ai**, paste the key
3. The model list loads automatically, grouped by provider

## Mistral (cloud)

[Mistral AI](https://mistral.ai)'s API — European models, particularly good in French and at producing faithful JSON.

1. Create an account on [console.mistral.ai](https://console.mistral.ai) and generate an API key.
2. In DM Loremind → **Settings → AI → Mistral**, paste the key.
3. Select the model (e.g. `mistral-large-latest`).

## Gemini / Google AI Studio (cloud)

Google's **Gemini** models, through the [Google AI Studio](https://aistudio.google.com) API.

**Advantage**: a **free API key** (no credit card), a generous quota and a very large context — handy for large imports.

1. Go to [aistudio.google.com](https://aistudio.google.com) → **Get API key**.
2. In DM Loremind → **Settings → AI → Gemini**, paste the key.
3. Select the model (e.g. `gemini-2.0-flash`).

## OpenRouter (cloud)

[OpenRouter](https://openrouter.ai) routes your requests to dozens of models (Anthropic, OpenAI, Google, Meta…) through a single key.

**Advantage**: **free models** available. To stay free, choose a model marked "free", or the `openrouter/free` router which selects one automatically. For imports (large documents), prefer a free model with a **large context**.

1. Create an account on [openrouter.ai](https://openrouter.ai) and generate an API key.
2. In DM Loremind → **Settings → AI → OpenRouter**, paste the key.
3. Select the model.

## Which model should you choose?

For DM Loremind, in practice:

- **Simple tasks** (summarizing a scene, suggesting 3 ideas): Llama 3.1 8B, Claude Haiku 3.5, GPT-4o-mini are enough
- **Narrative tasks** (writing a coherent backstory): Claude Sonnet, GPT-4o give the best results
- **Long-form generation** (generating an entire arc): prefer Claude Sonnet — better context adherence
