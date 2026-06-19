---
sidebar_position: 2
title: Linux
---

# Hardware requirements

:::warning
Please note, the following guide applies to users who have an Nvidia card in
their machine. I have not yet been able to test installing the app with
Ollama locally using an AMD card.
:::

# Installing on Linux

Compatible with Debian, Ubuntu, ZorinOS and other Ubuntu-based distributions.
I personally tested it on ZorinOS.

## Installing the Nvidia drivers

The Nvidia drivers are required for Ollama to launch smoothly and to avoid
installation errors.
To do this, we'll first configure the repository so we can get the drivers:

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
&& curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

Then, install the toolkit:

```bash
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
```

And finally, configure the Docker runtime for Nvidia:

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

## Installing DM Loremind

Grab the installer from the GitHub repository:

https://github.com/IGMLcreation/LoreMind/tree/main/installers

=> Get the install.sh and secure-host-ollama.sh files.
The install.sh file is the bash script we'll run for the installation, and secure-host-ollama.sh is a script that secures the communication
between DM Loremind and Ollama in case you installed Ollama separately.

## Allowing the .sh files to run
You need to make the .sh files executable on your machine in order to run them. In the terminal, go to wherever your files are and run:

```bash
chmod +x install.sh
chmod +x secure-host-ollama.sh
```

You can finally run install.sh with the following command:

```bash
./install.sh
```

:::warning
Make sure you have granted all the necessary permissions for the Docker part. If Docker is not installed on your
machine, you may encounter an initial error due to insufficient permissions for your user.
:::

## What the installer does

1. Installs **Docker** via the official `get.docker.com` script if absent.
2. Adds the current user to the `docker` group (relogin required the 1st time).
3. Installs DM Loremind in `~/.local/share/loremind`.
4. Generates a `.env` file with random passwords.
5. Starts the stack and opens `http://localhost:8081`.

## Configuring your user's permissions for Docker

As mentioned in the warning, if the permissions granted to your user do not allow you to run Docker commands,
here is the procedure to follow.

### Creating the docker group

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

### Enabling the permissions

```bash
newgrp docker
```

And normally there should no longer be any error.
