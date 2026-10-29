---
sidebar_position: 98
title: Code signing policy
---

# Code signing policy

Free code signing provided by [SignPath.io](https://about.signpath.io),
certificate by [SignPath Foundation](https://signpath.org).

## What is signed

The DM Loremind Windows installers (`.msi`) and the `DM Loremind.exe` launcher
they install. They are published on the [Download](/download) page and on the
[GitHub releases](https://github.com/IGMLcreation/LoreMind/releases), stable
versions as well as beta pre-releases.

Every signed binary is built automatically by GitHub Actions from the
[public source code](https://github.com/IGMLcreation/LoreMind) (AGPL-3.0 license).
No binary built on a personal machine is ever signed.

## Team and roles

| Role | Members |
|---|---|
| Committers and reviewers | [IGMLcreation](https://github.com/IGMLcreation) |
| Approvers | [IGMLcreation](https://github.com/IGMLcreation) |

Each signing request is approved manually, release by release.
Team accounts use two-factor authentication.

## Privacy

See the [privacy policy](/docs/confidentialite): DM Loremind does not transfer
any information to other networked systems unless specifically requested by the
person using, installing or operating it, except for the update check, which can
be turned off.

## Report a problem

Does a signed binary look suspicious? Report it on
[Discord](https://discord.gg/cPpFzCjEzQ) or in the
[GitHub issues](https://github.com/IGMLcreation/LoreMind/issues).
