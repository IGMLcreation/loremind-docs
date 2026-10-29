---
sidebar_position: 99
title: Privacy policy
---

# Privacy policy

DM Loremind collects no data: no account, no telemetry, no usage statistics, no
advertising. Your content (worlds, campaigns, characters, images) stays in your
installation: the `.loremind` folder of your user account in the desktop version,
or your server in the Docker version.

**DM Loremind does not transfer any information to other networked systems unless
specifically requested by the person using, installing or operating it.** The only
exception, the update check, is described below and can be turned off.

## AI provider (if you configure one)

The AI features send the text needed for a request to the provider **you** choose
in Settings: your message, the selected campaign context, the text extracted from
an imported PDF. Details per feature are in
[Data, privacy and sharing](/docs/configuration/donnees-confidentialite).

| Provider | Where the data goes | Privacy policy |
|---|---|---|
| Ollama | The Ollama service you configure (your own machine by default). Ollama downloads the models you install from its registry. | [ollama.com/privacy](https://ollama.com/privacy) |
| Mistral AI | Mistral AI API | [legal.mistral.ai](https://legal.mistral.ai/terms/privacy-policy) |
| Google AI Studio (Gemini) | Google's Gemini API | [policies.google.com/privacy](https://policies.google.com/privacy) |
| OpenRouter | OpenRouter API, then the chosen model | [openrouter.ai/privacy](https://openrouter.ai/privacy) |
| 1min.ai | 1min.ai API | [1min.ai/privacy](https://1min.ai/privacy) |

With no provider configured, or with Ollama on your own machine, nothing leaves it.

## Update check

- **Desktop version**: at startup, the app asks GitHub (`api.github.com`) for the
  latest version number. No personal data or content is sent; as with any web
  request, GitHub sees the IP address and the `LoreMind-Desktop` identifier. To
  turn it off, add `desktop.update.enabled=false` to the `loremind.properties` file
  in the `.loremind` folder, then restart the app.
  GitHub's policy: [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- **Docker version**: if automatic updates were enabled at install time, images are
  checked and downloaded from GitHub's registry (`ghcr.io`). Turn them off by
  removing the `autoupdate` profile.

## Access from a tablet

[Tablet access](/docs/configuration/acces-tablette) only opens the app to your
local network, and only if you turn it on. Nothing goes through the Internet.

## Questions

For any question about your data: [Discord](https://discord.gg/cPpFzCjEzQ)
or [GitHub issues](https://github.com/IGMLcreation/LoreMind/issues).
