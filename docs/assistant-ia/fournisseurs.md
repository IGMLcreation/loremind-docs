---
sidebar_position: 2
---

# Configuration des fournisseurs

Le choix du fournisseur LLM se fait dans **Settings → IA**.

## Ollama (local)

[Ollama](https://ollama.com) tourne en local sur votre machine.

**Avantages** :

- 100% privé — vos données ne sortent jamais
- Pas de coût récurrent
- Fonctionne offline

**Contraintes** :

- Demande une machine avec GPU (ou patience sur CPU)
- Les modèles "8B" tournent confortablement sur 8 Go de VRAM ; "70B" demandent 40+ Go

**Configuration** :

1. Installer Ollama (un guide dédié existe : [Ollama](/docs/installation/ollama))
2. Télécharger un modèle : `ollama pull llama3.1:8b` (ou autre)
3. Dans DM Loremind → **Settings → IA → Ollama**, renseigner l'URL (par défaut `http://localhost:11434`)
4. Sélectionner le modèle dans la liste auto-détectée

Le pull du modèle peut aussi être déclenché depuis l'UI DM Loremind.

## 1min.ai (cloud)

[1min.ai](https://1min.ai) est un agrégateur qui donne accès à Anthropic Claude,
OpenAI GPT-4, Google Gemini, Mistral, etc. via un seul abonnement.

**Avantages** :

- Modèles haut-de-gamme accessibles sans hardware costaud
- Bascule entre fournisseurs sans changer d'abonnement
- Latence faible

**Contraintes** :

- Coût mensuel
- Vos prompts transitent par les serveurs 1min.ai et le fournisseur sous-jacent (Anthropic, OpenAI…)
- Dépend de votre connexion internet

**Configuration** :

1. Créer un compte 1min.ai et récupérer une clé API
2. Dans DM Loremind → **Settings → IA → 1min.ai**, coller la clé
3. La liste des modèles s'auto-charge, regroupée par fournisseur

## Mistral (cloud)

L'API de [Mistral AI](https://mistral.ai) — modèles européens, particulièrement bons en français et pour produire du JSON fidèle.

1. Créer un compte sur [console.mistral.ai](https://console.mistral.ai) et générer une clé API.
2. Dans DM Loremind → **Settings → IA → Mistral**, coller la clé.
3. Sélectionner le modèle (ex. `mistral-large-latest`).

## Gemini / Google AI Studio (cloud)

Les modèles **Gemini** de Google, via l'API de [Google AI Studio](https://aistudio.google.com).

**Avantage** : une **clé API gratuite** (sans carte bancaire), un quota généreux et un très grand contexte — pratique pour les imports volumineux.

1. Aller sur [aistudio.google.com](https://aistudio.google.com) → **Get API key**.
2. Dans DM Loremind → **Settings → IA → Gemini**, coller la clé.
3. Sélectionner le modèle (ex. `gemini-2.0-flash`).

## OpenRouter (cloud)

[OpenRouter](https://openrouter.ai) route vos requêtes vers des dizaines de modèles (Anthropic, OpenAI, Google, Meta…) via une seule clé.

**Avantage** : des **modèles gratuits** disponibles. Pour rester gratuit, choisissez un modèle marqué « gratuit », ou le routeur `openrouter/free` qui en sélectionne un automatiquement. Pour les imports (gros documents), préférez un modèle gratuit à **grand contexte**.

1. Créer un compte sur [openrouter.ai](https://openrouter.ai) et générer une clé API.
2. Dans DM Loremind → **Settings → IA → OpenRouter**, coller la clé.
3. Sélectionner le modèle.

## Quel modèle choisir ?

Pour DM Loremind, en pratique :

- **Tâches simples** (résumer une scène, proposer 3 idées) : Llama 3.1 8B, Claude Haiku 3.5, GPT-4o-mini suffisent
- **Tâches narratives** (écrire une backstory cohérente) : Claude Sonnet, GPT-4o donnent les meilleurs résultats
- **Génération longue** (générer un arc entier) : préférez Claude Sonnet — meilleur respect du contexte
