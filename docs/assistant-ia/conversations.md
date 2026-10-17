---
sidebar_position: 1.5
---

# Chat contextuel et conversations

Ouvrez **Assistant IA** depuis une page de Lore ou une fiche de campagne qui
propose ce bouton. Le panneau latéral s'appuie sur le contexte de cette fiche.
Il nécessite un [fournisseur et un modèle configurés](/docs/assistant-ia/fournisseurs).

![Panneau de chat, liste des conversations et suggestions](/img/screenshots/guides/assistant-contextuel.jpg)

## Poser une question

Saisissez votre demande puis envoyez-la, ou cliquez sur une suggestion rapide.
Le texte arrive progressivement. Attendez la fin de la réponse avant de poser
la question suivante. Fermer le panneau interrompt une génération en cours :
attendez sa fin si vous souhaitez conserver la réponse complète.

Un échange de chat ne remplace pas automatiquement les champs de la fiche.
Utilisez les commandes dédiées de génération / application pour reporter une
proposition dans votre contenu.

## Retrouver le fil

Dans le chat habituel, la liste **Conversations** permet de :

- démarrer une **nouvelle conversation** avec le bouton **+** ;
- sélectionner un fil précédent et reprendre son historique ;
- renommer le titre avec le crayon (un titre est aussi proposé automatiquement
  après le premier échange) ;
- supprimer un fil depuis son bouton de suppression.

Les fils sont filtrés selon leur contexte : univers ou campagne, et éventuellement
fiche précise. Un fil ouvert sur une scène n'apparaît donc pas nécessairement
depuis une autre scène. Revenez à son contexte pour le retrouver.

:::note[Assistant de création et Atelier]
Le wizard de création d'une page utilise un échange temporaire, sans la même
persistance. L'[Atelier IA](/docs/campagne/notebooks) possède son propre chat
documentaire et son mécanisme d'archives.
:::

## Ajuster le panneau

Glissez la poignée du bord pour redimensionner le panneau. Les commandes de
l'en-tête permettent de masquer la liste des conversations et d'agrandir ou
réduire le chat.

Quand elle est disponible, la **jauge de contexte** estime la place utilisée
par le contexte système, l'historique et le message courant. Ce n'est ni une
facture ni une garantie que tous vos documents sont lus. Pour une nouvelle tâche,
un fil neuf évite d'emporter un historique devenu inutile.

## Fournir le bon contexte

Ouvrez la fiche sur laquelle porte la question et renseignez ses **pages de Lore
liées**. Associez aussi le système de JDR à la campagne si la réponse doit respecter
ses règles. Les éléments envoyés dépendent du point d'entrée et des passages
sélectionnés par l'application ; l'ensemble de votre instance n'est pas transmis
à chaque requête.

Ouvrir successivement plusieurs fiches ne donne pas une mémoire commune à tous
les fils. Gardez les informations utiles dans le contenu enregistré et dans les
liens, ou rappelez une contrainte dans la conversation courante.
