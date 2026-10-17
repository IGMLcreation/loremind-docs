---
sidebar_position: 11.6
---

# Editor review

:::info[Beta]
Review is part of the writing mentor added on **beta** after stable 1.0.3.
It works **without AI**, an API key or changes to your text.
:::

Review flags possible improvements to choices, stakes, pacing and narration.
Its suggestions never prevent saving or playing.

## Open the suggestions

On the campaign home, expand **Editor review**. Remarks are grouped by **Player
agency**, **Stakes**, **Pacing** and **Narration**. **Show more** reveals the rest
of a group.

![Review and links to relevant passages, French UI](/img/screenshots/beta/relecture-editeur.jpg)

Each remark explains the observation, a possible consequence and a question to
help revise it. **See** opens the relevant sheet or chapter, expanding the useful
section where possible. Arc, chapter and scene editors also show their own remarks.

## What it checks

| Observation | Possible improvement |
|---|---|
| At least three chapter scenes without branches or written choices | Add a decision that changes what follows |
| Multiple scene exits to the same target | Give options different consequences |
| Revelation reachable from fewer than three scenes in a chapter using links | Provide other discovery paths |
| At least three consecutive scenes of the same kind | Vary exploration, discussion, events… |
| Missing stakes in an arc or chapter with content | State what can be gained or lost |
| Narration longer than 1,200 characters | Keep essential read-aloud text and leave details to discover |
| Certain phrases imposing PC actions or emotions | Describe perceptions and let players decide |
| Combat without written choices, GM notes or tactics | Explain what the opponents want |
| Linear arc finale without choices or exits | Consider alternative outcomes |
| More than 70% generic scenes, with at least five scenes | Set scene types to make pacing visible |

Review uses **saved fields and links**. Save an edit and return to the campaign
home to check it again. It cannot infer alternatives planned elsewhere without
recording them here.

## Avoid blocked paths in the graph

Recent beta builds add **five patterns**, bringing the first series to fifteen. Beta 1.4.0 adds the two checks below,
for a total of **seventeen patterns**. They
examine [scene links](/docs/campagne/branches) and
[room exits](/docs/campagne/donjons) without changing the graph.

| Observation | When checked | Possible improvement |
|---|---|---|
| **Isolated scene** | A chapter using links; a scene without incoming or outgoing links, excluding the opening | Connect its entry and continuation |
| **Chokepoint** | At least four scenes; an intermediate scene lies on every path from the opening to reachable endings | Plan a continuation after failure or another path |
| **Dungeon without loops** | At least four rooms, all connected, with no alternative circuit | Add a passage between distant rooms |
| **Investigation without a proactive event** | At least three scenes in a linked chapter, with a Revelation but no Event | Prepare a counterattack, witness or threat that brings a new lead |
| **Clues of the same kind** | At least three distinct scenes lead to a revelation, all of the same non-generic type | Vary sources: discussion, exploration, a document or an event |

A revelation now expects **three distinct source scenes**: three links from one
scene do not count as three independent paths. Chapter graph checks assume links
are already used; review does not require you to draw every transition in a
campaign written without a graph.

For example, if every path runs through one witness, plan what happens if they
refuse to talk. A document or event can provide another way in. A chokepoint can
be intentional: the question is whether missing it would stop play. One remark
groups a chapter's chokepoints.

## NPC motivations and arc hooks (beta 1.4.0)

| Observation | Possible improvement |
|---|---|
| An **Opponent** or **Ally** NPC lacks motivation | Fill in what they want under Role in the story; **See** opens the NPC editor |
| A visible arc has **exactly one non-empty hook line** | Add another reason to get involved, of a different kind; **See** opens the Hooks section |

Use one hook per line for counting: several reasons in one paragraph still count
as one line. An arc with no hooks is not targeted by this check. Resource, Extra
and unspecified NPC roles are not flagged as unmotivated allies or opponents.

The combat-purpose check now considers **Enemy tactics and morale**: written
tactics are enough to avoid that remark. See
[Arcs, Chapters and Scenes](/docs/campagne/arcs-chapitres-scenes) and
[Characters](/docs/campagne/personnages) for these fields.

## Interpret a remark

[Next steps](/docs/campagne/preparation) checks missing content and broken
references; [mentor lightbulbs](/docs/campagne/mentor-ecriture) explain fields;
review flags patterns to examine.

A converging choice can be intentional, and a detected phrase may be a quotation.
Review applies simple rules rather than a complete literary analysis. “Nothing
to report” only means none of its known patterns were found.

