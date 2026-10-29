---
sidebar_position: 98
title: Politique de signature du code
---

# Politique de signature du code (Code signing policy)

Signature de code gratuite fournie par [SignPath.io](https://about.signpath.io),
certificat de [SignPath Foundation](https://signpath.org).

## Ce qui est signé

Les installeurs Windows de DM Loremind (`.msi`) et le lanceur `DM Loremind.exe`
qu'ils installent. Ils sont publiés sur la page [Télécharger](/download) et sur
les [versions GitHub](https://github.com/IGMLcreation/LoreMind/releases),
versions stables comme pré-versions bêta.

Chaque binaire signé est construit automatiquement par GitHub Actions, à partir
du [code source public](https://github.com/IGMLcreation/LoreMind) (licence AGPL-3.0).
Aucun binaire construit sur une machine personnelle n'est signé.

## Équipe et rôles

| Rôle | Membres |
|---|---|
| Auteurs (committers) et relecteurs | [IGMLcreation](https://github.com/IGMLcreation) |
| Approbateurs | [IGMLcreation](https://github.com/IGMLcreation) |

Chaque demande de signature est approuvée manuellement, version par version.
Les comptes de l'équipe utilisent l'authentification à deux facteurs.

## Confidentialité

Voir la [politique de confidentialité](/docs/confidentialite) : DM Loremind
ne transmet aucune information à d'autres systèmes en réseau, sauf à la demande
explicite de la personne qui l'utilise, l'installe ou l'exploite, et sauf la
vérification des mises à jour, qui peut être désactivée.

## Signaler un problème

Un binaire signé vous semble suspect ? Signalez-le sur le
[Discord](https://discord.gg/cPpFzCjEzQ) ou dans les
[issues GitHub](https://github.com/IGMLcreation/LoreMind/issues).
