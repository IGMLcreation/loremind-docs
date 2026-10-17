---
sidebar_position: 3
---

# Generate sheet content

A [configured AI provider](/docs/assistant-ia/fournisseurs) can suggest sheet
content. Lore pages and campaign entities use different commands, with explicit
final validation.

## Existing Lore page

1. Open the page in **Edit**, then **AI Assistant**.
2. Discuss the sheet or use **Automatically fill all fields**.
3. The panel closes while generating; suggestions appear directly in the form's
   **Text** fields.
4. Review and edit them, then **Save** to keep the result.

:::warning[Automatic fill can replace text]
A non-empty suggestion replaces the current form value. An empty suggestion keeps
it unchanged. Copy passages you want to keep before generating, or use **Cancel**
to return to the last saved version.
:::

This command does not fill **Image**, **Key/value list** or **Table** blocks.
Generation uses the saved page: save any information you want included as context first.

## New page with the wizard

In [Create a page](/docs/lore/creation-page), choose a title, template and folder,
then **Create with AI**. Describe your intention and follow the validation steps
to create the sheet. Review its content in the editor afterwards. This wizard
uses a temporary exchange rather than the history of
[regular chat](/docs/assistant-ia/conversations).

## Arcs, chapters and scenes: flesh out with AI

In the editor, open **Flesh out with AI**. Optionally add an instruction such as
“keep an unsettling tone and offer a non-combat outcome”, then **Generate**.

The panel shows each proposed field, its current value and the suggestion:

1. check the fields to keep and uncheck the others;
2. **Apply selection** to fill the form;
3. edit the text and **Save** the sheet.

**Regenerate** requests new suggestions. Applying a selection fills fields; it
does not save the sheet by itself.

## Generate scenes for a chapter

The **Generate scenes** panel accepts an instruction and a desired count.
Review the drafts, select those to keep and use the **create selection** command.
This validation **creates scenes** in the chapter. Open them afterwards to refine
content, define branches and check references.

## Get useful suggestions

Save a few starting facts, link relevant Lore pages and associate a game system
with the campaign. Ask for a specific scope: an atmosphere, two stakes, or three
choices with consequences. Check secrets, rules and names before confirming;
AI output remains a proposal.
