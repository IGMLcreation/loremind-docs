---
sidebar_position: 5.5
---

# Access from a tablet

:::info[Beta — desktop installation]
Tablet access is part of **beta**, at **1.2.0-beta** and its subsequent network
fixes. It is absent from stable 1.0.3. It applies to the **desktop application**,
not Docker hosting.
:::

The desktop application can be used from a tablet or phone connected to the
**same Wi-Fi** as the PC it is installed on: handy for keeping your scenes, clocks
and journal at hand at the gaming table. Nothing needs to be installed on the
tablet; its browser is enough.

## Turn access on

1. On the PC, open **Settings**, section **Access from a tablet**.
   Shortcut: right-click the DM Loremind icon in the taskbar, then
   **Connecter une tablette…** (the tray menu is in French).
2. Check **Allow access from the local network**.
3. Look at the **Network check** block that appears. DM Loremind checks there the two
   Windows settings that can stop the tablet from connecting (for Linux, see
   the dedicated section below):
   - **The firewall.** If it doesn't let DM Loremind through yet, click
     **Allow through the firewall**, then confirm in the Windows administrator
     prompt. The permission only applies to private networks.
   - **The network type.** Windows often classifies a new Wi-Fi as "Public", which
     blocks other devices. If it's your home network, click
     **Open network settings**, then, in your Wi-Fi properties, choose the
     **Private** network profile type.

   Click **Check again**: the block turns green when everything is ready.

The address to open on the tablet is then shown, for example
`http://192.168.1.20:8765`.

:::warning[Trusted network only]
Only turn this on at home. On public Wi-Fi (hotel, convention, café), other people
share the same network.
:::

## Connect a device

1. On the PC, click **Connect a device**: a QR code and a 6-digit code appear,
   valid for 5 minutes and for a single device.
2. On the tablet, scan the QR code with the camera, or open the address shown and
   enter the code.
3. Give the device a name ("Lea's tablet"), then tap **Connect**.

The tablet is then remembered: no code needed anymore, even after the PC restarts.
To connect another device, click **New code**.

## What a tablet can do

A connected tablet can access your campaigns, your lore and your sessions, to read
and to edit. **Settings** stay on the PC: a tablet can't change the AI provider,
read your keys, or manage backups and devices.

The PC must stay on, with DM Loremind open, while the tablet uses it.

## Remove access

The **Authorized devices** list shows each device and its last connection.
**Remove access** disconnects it immediately; it will need a new code to come
back. Unchecking **Allow access from the local network** cuts access for every
device without forgetting them.

## Change the port

By default, access uses port `8765`. If another application uses it, DM Loremind
says so: pick another one in **Advanced settings** > **Network port**, then
**Apply**.

## The tablet loads forever

A firewall, guest network or device isolation can block the connection. The
steps below apply to Windows; for a Linux host, see
[On Linux or a Debian server](#on-linux-or-a-debian-server).

1. In **Settings** > **Access from a tablet**, click **Check again** and follow the
   **Network check** block.
2. Check that the tablet is on the **same Wi-Fi** as the PC, not on your router's
   "guest" network: guest networks often isolate devices from each other.
3. If **Allow through the firewall** fails, add the rule manually in a PowerShell
   started as administrator (adjust the path if DM Loremind is installed elsewhere):

   ```powershell
   New-NetFirewallRule -DisplayName "DM Loremind (accès tablette)" -Direction Inbound -Program "$env:LOCALAPPDATA\DM Loremind\DM Loremind.exe" -Action Allow -Profile Private
   ```

### Antivirus with its own firewall

Some antivirus products (Bitdefender, Norton, Kaspersky, ESET…) install a firewall
that filters connections **on top of** the Windows one, with their own rules.
DM Loremind detects them and says so in **Network check**, but can't read their
settings: the Windows permission is then not enough.

In the antivirus firewall settings:

1. Classify your Wi-Fi as a **home network** ("Home/Office", "Private"…), not a public
   network, and turn off **stealth mode** if there is one.
2. Add a rule that **allows** DM Loremind (`DM Loremind.exe`, in
   `%LOCALAPPDATA%\DM Loremind`) for **incoming connections** on that network type.

Example with Bitdefender: **Protection** > **Firewall** > **Settings**, **Network
adapters** tab for the network type, then **Rules** tab > **Add rule**. Labels vary
between versions.

To confirm the antivirus is the cause, turn its firewall off for a minute (not the
antivirus) and try again from the tablet; turn it back on afterwards.

## On Linux or a Debian server

The desktop application also exists for Linux (AppImage file) and can run on a server
without a screen: your devices connect to it just like to a Windows PC.

1. **Start the application** on the server:

   ```bash
   chmod +x DM_Loremind*.AppImage
   ./DM_Loremind*.AppImage --appimage-extract-and-run
   ```

   `--appimage-extract-and-run` avoids installing FUSE. Without a screen, messages about
   the tray icon or the browser not opening are expected.
2. **Change the admin password**: on first launch, DM Loremind creates
   `~/.loremind/loremind.properties` with `admin` / `admin`. Edit `admin.password`, then
   restart.
3. **Open Settings from your PC.** Settings only open from the machine itself: go
   through an SSH tunnel, then open `http://localhost:8080` on your PC.

   ```bash
   ssh -L 8080:localhost:8080 user@your-server
   ```

   If port 8080 was taken on the server, DM Loremind picked another one: it's written in
   `~/.loremind/.port`.
4. **Turn access on** in **Access from a tablet**. The **Network check** block says
   whether a `ufw` or `firewalld` firewall is active and gives the command to run on the
   server to open the port, for example `sudo ufw allow 8765/tcp`. With `ufw`,
   DM Loremind can't read the rules without administrator rights: it shows the command
   as a precaution.
5. **Connect your devices** with the server's address, for example
   `http://192.168.1.50:8765`, and a pairing code.

## Away from home: Tailscale

Access is designed for the local network. To browse your campaigns on 4G or at a
friend's, **don't open a port on your router**: use
[Tailscale](https://tailscale.com) instead, an encrypted private network, free for
personal use.

1. Install Tailscale on the PC and on the tablet, and sign in to the same account
   on both.
2. In the tablet's Tailscale app, find the PC's address (looks like `100.x.y.z`).
3. On the tablet, open `http://100.x.y.z:8765` and connect the device with a code,
   just like at home.

If the tablet can't reach the PC, check in the Windows firewall that DM Loremind
is allowed for the network used by Tailscale.

## Beta details

- The PC keeps **localhost:8080** unless changed. The tablet uses the displayed
  network address and separate port **8765** by default. Its own localhost does
  not refer to your PC.
- Checks cover the firewall and network profile **on Windows**, and detect third-party
  antivirus firewalls without reading their rules. **On Linux**, they check `ufw`
  or `firewalld` and suggest the appropriate command. Use system tools elsewhere.
  A green verdict does not rule out Wi-Fi device isolation.
- **New code** invalidates the previous one. Codes expire after five minutes,
  work once and are invalidated after five incorrect attempts. Generate another
  code on the PC if rejected.
- Authorisation is stored in the **paired browser**, in a cookie lasting up to one
  year. Clearing cookies, changing browsers or using private browsing may require
  pairing again. If the PC address changes, reopen the displayed address and
  reconnect the browser if needed.
- An authorised device is a **GM tool** with read and edit access, rather than a
  player account limited to public material. See
  [Data and sharing](/docs/configuration/donnees-confidentialite).

Once connected, use [mobile navigation](/docs/navigation#phone-and-tablet-beta)
and [session mode](/docs/campagne/mode-seance). Access can be enabled or disabled
on the PC without restarting or changing its usual local viewing port.
