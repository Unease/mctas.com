---
title: "Setup with Minecraft Launcher"
icon: "/icons/Launcher.png"
alt: "Minecraft Launcher icon"
description: "Setup mods with the vanilla Minecraft launcher"
weight: 01040100
toc: true
---
## MC version 1.14+ {#1-14-4}
(For versions below 1.14 click [here](#1-12-2))
We use the Fabric modloader for mods in 1.14+ 

### Installing Fabric
1. Download the installer from {{<newtablink "FabricMC" "https://fabricmc.net/use/installer/">}}. (**Only download from this website!**)
{{<figure class="screenshot" src="chrome_ytdtqQQCTa.png">}}
2. Run the installer
3. A window should appear
{{<figure class="screenshot" src="javaw_3wDzbdLJaS.png">}}
4. Here you can select your Minecraft version as well as the `Loader Version`. The Loader should always be set to the newest version, some bugs may occur on old versions. `Create Profile` will automatically create a new profile in your Minecraft launcher.
5. Open your Minecraft launcher, a new profile should've been added to the dropdown menu
{{<figure class="screenshot" src="Minecraft_j4svmjk50e.png">}}

### Installing Fabric mods
1. Download the mods you want. If you are here for Tool Assisted Speedrunning, you can head to {{<newtablink "downloads" "/downloads/">}}).   
**All mods have to match the Minecraft version you want to play in. Mods for 1.17 don't work on 1.18!**
2. Go to the `.minecraft/` directory
3. Put the .jar files in the `mods/` folder. If there is no folder, create one and name it `mods/`
4. **You can't mix Fabric and Forge mods! Remove all Forge mods from the mods folder!**
5. Start Minecraft from the launcher on the new profile.

---
## MC versions 1.8.9 - 1.12.2 {#1-12-2}
We use the MinecraftForge modloader for mods in 1.12.2-
In this, we will install it for MC Version 1.12.2

### Installing Forge
1. Download the installer from {{<newtablink "MinecraftForge" "https://files.minecraftforge.net/net/minecraftforge/forge/index_1.12.2.html">}}. (**Only download from this website!**)
{{<figure class="screenshot" src="chrome_BHFDr3kiIf.png">}}
2. A website with ads will open. **Don't click any of them**. The correct button is labelled "Skip" and is in the **top right**. It will show up after 5 seconds  
{{<figure class="screenshot" src="chrome_IjG9ESvhLu.png">}}
3. Run the installer. Everything should be correctly set up, so just click "Ok"  
   * *Optional*: If you can't open the downloaded file, the you need to install Java. A guide to that can be found {{<newtablink "here" "/tutorials/installation/setup_java/">}}"
{{<figure class="screenshot" src="desktop_vIpTz4PJyt.png">}}
1. Open your Minecraft launcher, a new profile should've been added to the dropdown menu
{{<figure class="screenshot" src="Minecraft_XfldEqbGXi.png">}}

### Installing Forge mods
1. Download the mods you want. If you are here for Tool Assisted Speedrunning, you can head to {{<newtablink "downloads" "/downloads/">}}).   
**All mods have to match the Minecraft version you want to play in, unless the mod author says something different. Mods for 1.11 don't work on 1.12!**
2. Go to the `.minecraft/` directory
3. Put the .jar files in the `mods/` folder. If there is no folder, create one and name it `mods/`
4. **You can't mix Fabric and Forge mods! Remove all Fabric mods from the mods folder!**
5. Start Minecraft from the launcher on the new profile.