---
sidebar_position: 5.5
---

# Accès depuis une tablette

:::info[Disponibilité]
Cette fonction concerne l'**application de bureau** et fait partie des sources de
développement. Si la section n'apparaît pas dans vos paramètres, votre version ne
l'embarque pas encore. Elle n'existe pas dans l'installation Docker.
:::

L'application de bureau peut être consultée depuis une tablette ou un téléphone
connecté au **même Wi-Fi** que le PC où elle est installée : pratique pour garder
vos scènes, vos horloges et votre journal sous la main à la table de jeu.
Aucune installation n'est nécessaire sur la tablette, son navigateur suffit.

## Activer l'accès

1. Sur le PC, ouvrez **Paramètres**, section **Accès depuis une tablette**.
   Raccourci : clic droit sur l'icône DM Loremind de la barre des tâches,
   puis **Connecter une tablette…**.
2. Cochez **Autoriser l'accès depuis le réseau local**.
3. Regardez le bloc **Vérification du réseau** qui apparaît. DM Loremind y contrôle
   les deux réglages de Windows qui peuvent empêcher la tablette de se connecter :
   - **Le pare-feu.** S'il ne laisse pas encore passer DM Loremind, cliquez sur
     **Autoriser dans le pare-feu**, puis confirmez dans la fenêtre administrateur
     de Windows. L'autorisation ne vaut que pour les réseaux privés.
   - **Le type de réseau.** Windows classe souvent un nouveau Wi-Fi en « Public »,
     ce qui bloque les autres appareils. S'il s'agit de votre réseau de maison,
     cliquez sur **Ouvrir les réglages réseau**, puis, dans les propriétés de votre
     Wi-Fi, choisissez le type de profil **Privé**.

   Cliquez sur **Vérifier à nouveau** : le bloc passe au vert quand tout est prêt.

L'adresse à ouvrir sur la tablette s'affiche alors, par exemple
`http://192.168.1.20:8765`.

:::warning[Réseau de confiance uniquement]
N'activez cet accès que sur votre réseau domestique. Sur un Wi-Fi public (hôtel,
convention, café), d'autres personnes partagent le même réseau.
:::

## Connecter un appareil

1. Sur le PC, cliquez sur **Connecter un appareil** : un QR code et un code à
   6 chiffres apparaissent, valables 5 minutes et pour un seul appareil.
2. Sur la tablette, scannez le QR code avec l'appareil photo, ou ouvrez l'adresse
   affichée et saisissez le code.
3. Donnez un nom à l'appareil (« Tablette de Léa »), puis touchez **Connecter**.

La tablette est ensuite reconnue durablement : plus besoin de code, même après un
redémarrage du PC. Pour connecter un second appareil, cliquez sur **Nouveau code**.

## Ce qu'une tablette peut faire

Une tablette connectée accède à vos campagnes, à votre lore et à vos séances, en
lecture comme en modification. Les **Paramètres** restent réservés au PC : une
tablette ne peut ni changer de fournisseur d'IA, ni lire vos clés, ni gérer les
sauvegardes ou les appareils.

Le PC doit rester allumé avec DM Loremind ouvert pendant que la tablette l'utilise.

## Retirer un accès

La liste **Appareils autorisés** indique chaque appareil et sa dernière connexion.
**Retirer l'accès** le déconnecte immédiatement ; il lui faudra un nouveau code
pour revenir. Décocher **Autoriser l'accès depuis le réseau local** coupe l'accès
de tous les appareils sans les oublier.

## Changer de port

Par défaut, l'accès utilise le port `8765`. Si une autre application l'occupe,
DM Loremind l'indique : choisissez-en un autre dans **Réglages avancés** >
**Port réseau**, puis **Appliquer**.

## La tablette charge sans fin

C'est presque toujours Windows qui bloque la connexion sans prévenir.

1. Dans **Paramètres** > **Accès depuis une tablette**, cliquez sur
   **Vérifier à nouveau** et suivez les indications du bloc **Vérification du réseau**.
2. Vérifiez que la tablette est sur le **même Wi-Fi** que le PC, et pas sur le réseau
   « invité » de votre box : ce dernier isole souvent les appareils entre eux.
3. Si le bouton **Autoriser dans le pare-feu** échoue, ajoutez la règle à la main dans
   un PowerShell lancé en administrateur (adaptez le chemin si DM Loremind est installé
   ailleurs) :

   ```powershell
   New-NetFirewallRule -DisplayName "DM Loremind (accès tablette)" -Direction Inbound -Program "$env:LOCALAPPDATA\DM Loremind\DM Loremind.exe" -Action Allow -Profile Private
   ```

## Hors de chez vous : Tailscale

L'accès est prévu pour le réseau local. Pour consulter vos campagnes en 4G ou
chez un ami, **n'ouvrez pas de port sur votre box** : utilisez plutôt
[Tailscale](https://tailscale.com), un réseau privé chiffré, gratuit pour un usage
personnel.

1. Installez Tailscale sur le PC et sur la tablette, et connectez-vous au même
   compte sur les deux.
2. Dans l'application Tailscale de la tablette, repérez l'adresse du PC
   (de la forme `100.x.y.z`).
3. Sur la tablette, ouvrez `http://100.x.y.z:8765` et connectez l'appareil avec un
   code, comme à la maison.

Si la tablette n'arrive pas à joindre le PC, vérifiez dans le pare-feu Windows que
DM Loremind est autorisé pour le réseau utilisé par Tailscale.
