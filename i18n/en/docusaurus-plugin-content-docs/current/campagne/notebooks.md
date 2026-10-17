---
sidebar_position: 13
---

# AI workshop (Notebooks)

The **AI workshop** is a question-and-answer space grounded in the documents of
your campaign. On the left, your indexed **sources**; on the right, a **chat**
that answers relying only on those sources.

## Sources

### Create a workshop

Open **Workshops (AI + PDF)** from the campaign sidebar. Enter a name, click
**New workshop**, then open it. Use **Add PDF** and wait until indexing finishes
before asking questions. The workshop name can be edited in its header.

Chat and indexing need separate models: a conversation model and an
[embedding model](/docs/configuration/embeddings).

Sources are **PDF files only**. Each source displays its **status**:

- **indexing** in progress
- **ready**
- **failed**

Once ready, the source shows its **number of pages** and its **number of
extracts** analyzed.

## The grounded chat

The chat answers by **citing the source pages** (for example "p. 12, 47"),
which lets you check directly in the document. Before each query, you choose
the sources to query using **checkboxes**.

### Two search modes

- **Quick** (default) — targeted search within the documents, fast answer.
- **Deep** — reads the **entire** document: slower but exhaustive, ideal for
  requests like "list all the…". A progress bar tracks the progress.

## Archives and references

**Clear** archives the current conversation. Open **Archives** to read previous
threads in read-only mode and return to the active chat. Check an archive as a
reference to include its exchanges in future quick or deep questions; uncheck
it when it is no longer relevant.

Selected PDF sources and referenced conversation archives are separate inputs.
An archive provides conversation context, not a new documentary source. Check
cited pages and proposed fields before creating campaign content, including the
destination and possible duplicates.

## Action cards

In its answers, the AI can propose **action cards**. A **"Create in the
campaign"** button then directly creates the relevant entity. The possible
types are:

- **NPC**
- **Scene**
- **Chapter**
- **Arc**
- **Random table**

:::tip[Clearing the thread]
The **"Clear"** button doesn't really erase: it **archives** the discussion
thread, so you can set it aside without losing the history.
:::
