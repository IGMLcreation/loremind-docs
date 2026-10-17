---
sidebar_position: 1.5
---

# Contextual chat and conversations

Open **AI Assistant** from a Lore page or campaign sheet offering that button.
The side panel uses that sheet's context. It requires a
[configured provider and model](/docs/assistant-ia/fournisseurs).

![Chat panel, conversation list and suggestions, French UI](/img/screenshots/guides/assistant-contextuel.jpg)

## Ask a question

Enter and send a request, or click a quick suggestion. Text arrives progressively.
Wait for the response to finish before sending the next question. Closing the panel
interrupts an active generation: wait until it finishes to retain the complete reply.

A chat exchange does not automatically replace sheet fields. Use the dedicated
generation and apply commands to transfer a suggestion into your content.

## Find previous conversations

In regular chat, the **Conversations** list lets you:

- start a **new conversation** with **+**;
- select a previous thread and resume its history;
- rename its title with the pencil (a title is also suggested automatically after
  the first exchange);
- delete a thread with its delete button.

Threads are filtered by context: setting or campaign, and possibly a particular
sheet. A thread opened on one scene may not appear from another. Return to the
original context to find it.

:::note[Creation wizard and Workshop]
The page creation wizard uses a temporary exchange without the same persistence.
The [AI Workshop](/docs/campagne/notebooks) has its own document chat and archives.
:::

## Adjust the panel

Drag the edge handle to resize the panel. Header controls hide the conversation
list and expand or shrink the chat.

When available, the **context gauge** estimates space used by system context,
history and the current message. It is not a bill or a guarantee that all documents
have been read. Start a fresh thread for a new task to avoid carrying irrelevant history.

## Supply useful context

Open the relevant sheet and fill its **related Lore pages**. Associate a game
system with the campaign when answers should follow its rules. What is sent depends
on the entry point and selected passages; the whole instance is not sent with every request.

Opening several sheets in succession does not create shared memory across threads.
Keep useful facts in saved content and links, or restate a constraint in the current conversation.
