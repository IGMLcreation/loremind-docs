---
sidebar_position: 99
title: Politique de confidentialité
---

# Politique de confidentialité

DM Loremind ne collecte aucune donnée : pas de compte, pas de télémétrie, pas de
statistiques d'utilisation, pas de publicité. Votre contenu (univers, campagnes,
personnages, images) reste dans votre installation : le dossier `.loremind` de
votre utilisateur en version bureau, ou votre serveur en version Docker.

**DM Loremind ne transmet aucune information à d'autres systèmes en réseau, sauf
à la demande explicite de la personne qui l'utilise, l'installe ou l'exploite.**
La seule exception, la vérification des mises à jour, est décrite ci-dessous et
peut être désactivée.

## Fournisseur d'IA (si vous en configurez un)

Les fonctions d'IA envoient au fournisseur que **vous** choisissez dans les
Paramètres le texte nécessaire à la demande : votre message, le contexte de
campagne retenu, le texte extrait d'un PDF importé. Le détail par fonction est
dans [Données, confidentialité et partage](/docs/configuration/donnees-confidentialite).

| Fournisseur | Où partent les données | Politique de confidentialité |
|---|---|---|
| Ollama | Le service Ollama que vous configurez (votre machine par défaut). Ollama télécharge les modèles que vous installez depuis son registre. | [ollama.com/privacy](https://ollama.com/privacy) |
| Mistral AI | API de Mistral AI | [legal.mistral.ai](https://legal.mistral.ai/terms/privacy-policy) |
| Google AI Studio (Gemini) | API Gemini de Google | [policies.google.com/privacy](https://policies.google.com/privacy) |
| OpenRouter | API d'OpenRouter, puis le modèle choisi | [openrouter.ai/privacy](https://openrouter.ai/privacy) |
| 1min.ai | API de 1min.ai | [1min.ai/privacy](https://1min.ai/privacy) |

Sans fournisseur configuré, ou avec Ollama sur votre machine, rien ne sort.

## Vérification des mises à jour

- **Version bureau** : au démarrage, l'application demande à GitHub
  (`api.github.com`) le numéro de la dernière version. Aucune donnée personnelle
  ni aucun contenu n'est envoyé ; comme pour toute requête web, GitHub voit
  l'adresse IP et l'identifiant `LoreMind-Desktop`. Pour la désactiver, ajoutez
  `desktop.update.enabled=false` au fichier `loremind.properties` du dossier
  `.loremind`, puis relancez l'application.
  Politique de GitHub : [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- **Version Docker** : si les mises à jour automatiques sont activées à
  l'installation, les images sont vérifiées et téléchargées depuis le registre
  de GitHub (`ghcr.io`). Elles se désactivent en retirant le profil `autoupdate`.

## Accès depuis une tablette

L'[accès tablette](/docs/configuration/acces-tablette) n'ouvre l'application
qu'à votre réseau local, et seulement si vous l'activez. Rien ne passe par
Internet.

## Questions

Pour toute question sur vos données : [Discord](https://discord.gg/cPpFzCjEzQ)
ou [issues GitHub](https://github.com/IGMLcreation/LoreMind/issues).
