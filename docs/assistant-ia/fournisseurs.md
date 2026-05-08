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
3. Dans LoreMind → **Settings → IA → Ollama**, renseigner l'URL (par défaut `http://localhost:11434`)
4. Sélectionner le modèle dans la liste auto-détectée

Le pull du modèle peut aussi être déclenché depuis l'UI LoreMind.

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
2. Dans LoreMind → **Settings → IA → 1min.ai**, coller la clé
3. La liste des modèles s'auto-charge, regroupée par fournisseur

## Quel modèle choisir ?

Pour LoreMind, en pratique :

- **Tâches simples** (résumer une scène, proposer 3 idées) : Llama 3.1 8B, Claude Haiku 3.5, GPT-4o-mini suffisent
- **Tâches narratives** (écrire une backstory cohérente) : Claude Sonnet, GPT-4o donnent les meilleurs résultats
- **Génération longue** (générer un arc entier) : préférez Claude Sonnet — meilleur respect du contexte
