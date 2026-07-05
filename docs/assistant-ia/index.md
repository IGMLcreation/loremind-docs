---
sidebar_position: 1
---

# Assistant IA

DM Loremind embarque un assistant IA contextuel : sur n'importe quelle entité
(page Lore, scène, PJ, PNJ, arc, chapitre…), un bouton ✨ ouvre un panneau
latéral où vous pouvez dialoguer avec un modèle de langage qui **connaît
l'entité ouverte**.

## Philosophie

L'IA ne remplace pas le MJ — elle assiste. Cas d'usage typiques :

- **Combler les vides** : générer une description d'un lieu ou d'un PNJ vague
- **Propositions narratives** : "suggère 3 motivations pour ce PNJ", "comment ce combat pourrait basculer ?"
- **Cohérence** : "ce PNJ est-il cohérent avec le Lore de la cité de Vaeril ?"
- **Accélération** : générer le squelette d'un arc en quelques secondes, à raffiner ensuite

## Fournisseurs supportés

Cinq fournisseurs LLM sont configurables dans les **Settings → IA** — un local et quatre cloud :

- **Ollama** *(local)* — exécution 100% privée, vos données ne quittent jamais votre machine. Idéal avec un GPU (fonctionne sur CPU, mais lentement).
- **1min.ai** *(cloud)* — agrégateur (Anthropic, OpenAI, Google, Mistral…) via un seul abonnement payant.
- **Mistral** *(cloud)* — l'API de Mistral AI (modèles européens, bons en français).
- **Gemini / Google AI Studio** *(cloud)* — les modèles Gemini de Google ; **clé API gratuite** sur aistudio.google.com.
- **OpenRouter** *(cloud)* — routeur multi-fournisseurs, avec des **modèles gratuits** disponibles.

Le choix se fait globalement (un fournisseur actif à la fois), avec un modèle
sélectionné par défaut. Vous pouvez basculer à tout moment. Détails : [Configuration des fournisseurs](/docs/assistant-ia/fournisseurs).

## L'assistant propose, vous appliquez

Au-delà du chat, l'assistant sait aussi **écrire dans vos fiches** — toujours
sur le même principe : il propose, **rien n'est appliqué sans votre
validation**.

- **Étoffage champ par champ** — sur les arcs, chapitres et scènes, un bouton ✨
  à côté des champs texte propose un contenu qui s'appuie sur le reste de la
  fiche et le contexte de la campagne. Vous acceptez, régénérez ou ignorez.
- **Brouillons de scènes** — sur un chapitre, le panneau **« Générer des
  scènes »** propose des scènes complètes à insérer dans le chapitre. C'est
  aussi le raccourci qu'ouvre le bouton « Corriger » du
  [guidage de préparation](/docs/campagne/preparation) face à un chapitre vide.
- **Récap « précédemment… »** — en [séance](/docs/campagne/mode-seance),
  l'assistant rédige le résumé de la séance précédente à partir de votre
  journal, à consigner d'un clic.
- **Génération de pages Lore** — champ par champ ou en mode wizard à la
  création (voir [Génération de pages Lore](/docs/assistant-ia/generation-pages)).

## Contexte injecté automatiquement

Quand vous ouvrez le chat sur une entité, le backend construit un prompt qui
inclut :

1. **L'entité elle-même** — ses champs significatifs (pas les images ni les notes ultra-volumineuses)
2. **Le Lore relié** — pages liées, pour la cohérence d'univers
3. **Le Système de JDR** — sections de règles pertinentes (Combat, Classes…) selon l'intention détectée
4. **L'historique de conversation** — les messages précédents dans le drawer

Vous n'avez **pas besoin** de re-coller manuellement ce contexte — il est calculé.

## Pages détaillées

- [Configuration des fournisseurs](/docs/assistant-ia/fournisseurs) — Ollama, 1min.ai, Mistral, Gemini, OpenRouter
- [Génération de pages Lore](/docs/assistant-ia/generation-pages) — fill / regenerate des champs templates
- [Bonnes pratiques de prompts](/docs/assistant-ia/bonnes-pratiques) — pour de meilleurs résultats
