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

Cinq fournisseurs sont disponibles dans **Paramètres → Moteur IA** : **Ollama**,
**1min.ai**, **Mistral**, **Gemini** et **OpenRouter**. Un fournisseur de conversation
est actif à la fois. Les modèles disponibles dépendent du catalogue et du compte
configurés. Les embeddings documentaires ont un réglage distinct.

Avec un fournisseur cloud, le contexte utile est envoyé à ce fournisseur. Pour
un traitement local, configurez Ollama pour le chat et, si vous utilisez l'Atelier,
pour les embeddings. Voir [Configuration des fournisseurs](/docs/assistant-ia/fournisseurs).

## L'assistant propose, vous appliquez

Au-delà du chat, l'assistant sait aussi **écrire dans vos fiches** — toujours
sur le même principe : il propose, **rien n'est appliqué sans votre
validation**.

- **Étoffer avec l'IA** — sur les arcs, chapitres et scènes, un panneau propose
  plusieurs valeurs, champ par champ. Vous cochez les propositions à appliquer,
  puis relisez et sauvegardez la fiche.
- **Brouillons de scènes** — sur un chapitre, le panneau **« Générer des
  scènes »** propose des scènes complètes à insérer dans le chapitre. C'est
  aussi le raccourci qu'ouvre le bouton « Corriger » du
  [guidage de préparation](/docs/campagne/preparation) face à un chapitre vide.
- **Récap « précédemment… »** — en [séance](/docs/campagne/mode-seance),
  l'assistant rédige le résumé de la séance précédente à partir de votre
  journal, à consigner d'un clic.
- **Génération de pages Lore** — remplissage des champs texte dans l'éditeur ou
  wizard à la création (voir [Génération de contenu](/docs/assistant-ia/generation-pages)).

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
- [Génération de pages Lore](/docs/assistant-ia/generation-pages) — remplissage du Lore et propositions de campagne
- [Bonnes pratiques de prompts](/docs/assistant-ia/bonnes-pratiques) — pour de meilleurs résultats

## Utiliser le bon outil

- [Chat et conversations](/docs/assistant-ia/conversations) — contexte, historique et gestion des fils.
- [Générer le contenu des fiches](/docs/assistant-ia/generation-pages) — remplissage du Lore, sélection des propositions et création de scènes.
- [Atelier IA](/docs/campagne/notebooks) — interroger des PDF, relire les citations et référencer les archives.
- [Embeddings](/docs/configuration/embeddings) — configurer l'indexation séparément du chat.
- [Données et partage](/docs/configuration/donnees-confidentialite) — comprendre les transmissions au fournisseur.
