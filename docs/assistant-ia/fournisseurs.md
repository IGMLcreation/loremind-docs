---
sidebar_position: 2
---

# Configurer les fournisseurs IA

Ouvrez **Paramètres → Moteur IA**. Un seul fournisseur de conversation est actif
à la fois. Il sert au chat, aux générations et aux analyses de PDF. Les
[embeddings](/docs/configuration/embeddings) de l'Atelier se règlent séparément.

## Procédure commune

1. Sélectionnez le fournisseur.
2. Renseignez sa connexion : URL pour Ollama, clé API pour le cloud.
3. Choisissez un modèle dans son catalogue.
4. Cliquez sur **Sauvegarder**.
5. Revenez à une fiche et essayez une question courte dans **Assistant IA**.

Les clés déjà enregistrées ne sont pas réaffichées. Un champ de clé vide conserve
la clé existante ; utilisez **Effacer la clé enregistrée** pour la retirer.

![Paramètres de l'application, clés masquées](/img/screenshots/guides/parametres.jpg)

## Ollama

Ollama doit être installé et accessible depuis le service Brain. Téléchargez
un modèle de conversation, puis sélectionnez-le dans les Paramètres. Le
[gestionnaire de modèles](/docs/installation/ollama) permet aussi de lancer
un téléchargement depuis l'application.

| Installation | Adresse habituelle depuis le Brain |
|---|---|
| Bureau, Ollama sur le même PC | `http://localhost:11434` |
| Ollama du Compose Docker | `http://ollama:11434` |
| Ollama sur l'hôte d'un déploiement Docker | `http://host.docker.internal:11434` |

La **fenêtre de contexte** détermine combien de texte le modèle peut prendre en
compte. L'augmenter consomme davantage de mémoire ; réduisez la taille des imports
ou l'historique si votre machine ne peut pas suivre. Voir [Dépannage](/docs/configuration/depannage).

## Fournisseurs cloud

| Fournisseur | Configuration dans Loremind |
|---|---|
| **1min.ai** | Clé API 1min.ai et modèle dans la liste regroupée par fournisseur |
| **OpenRouter** | Clé API OpenRouter, puis modèle ; filtre de modèles gratuits disponible |
| **Mistral** | Clé API Mistral et modèle de conversation |
| **Gemini** | Clé API Google AI Studio et modèle Gemini de conversation |

Obtenez votre clé depuis votre compte chez le fournisseur correspondant. Le
catalogue, les quotas, les tarifs et l'accès à chaque modèle dépendent de ce
compte. Un libellé « gratuit » ou une clé valide ne garantit pas une capacité
illimitée. Vérifiez également que le modèle choisi sait produire du texte :
un catalogue peut exposer des modèles spécialisés image, audio ou embeddings.

Le cloud reçoit les demandes et le contexte utiles à la fonction utilisée.
Voir [Données et partage](/docs/configuration/donnees-confidentialite).

## Choisir un modèle pour votre usage

Essayez d'abord une demande courte, puis un cas représentatif : texte narratif,
fiche structurée ou import. Pour les imports, vérifiez la capacité de contexte,
la qualité du résultat structuré et le temps de réponse. Réglez les morceaux
et le timeout selon les limites de votre modèle, puis relisez les propositions.
La liste disponible dans votre installation est préférable à un ancien exemple
de nom de modèle.
