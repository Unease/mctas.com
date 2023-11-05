---
title: "Installation"
#icon:
alt: ""
description: "How to setup the TAS-Battle mod"
weight: 03001000
toc: true
---

In contrast to plugins, TAS-Battle requires a "clientside" mod to enable slow motion in Minecraft.  
For that reason you need to install this mod yourself.

## Installing in the vanilla launcher
1. Head over to https://fabricmc.net/use/installer/
2. Click "Download for Windows". {{<figure class="screenshot" src="chrome_l3kI2GxWQa.png">}}
3. Open the downloaded file.
4. Select "1.19.4" as the Minecraft version. The loader version should be always kept at the newest {{<figure src="javaw_cbhrXLYhqa.png" class="screenshot">}}
5. Next we need to download the required mods:
	* TAS-Battle: https://data.mgnet.work/tasbattle/client.jar
6. Put them into `.minecraft/mods/`.  
  **Remove mods from other Minecraft Versions from this folder, otherwise the game might not start!**
7. Start the Minecraft launcher, select the correct profile and start the game.

## Installing for MultiMC
MultiMC is an alternative Minecraft-Launcher that allows you to create seperate .minecraft folders/instances.

A great portion on how to set it up is described in the {{<newtablink "tutorials section" "/tutorials/installation/setup_multimc">}},
the difference is, that you don't have to create a new instance, you can import an already existing instance into MultiMC.

If you have set up MultiMC and finished {{<newtablink "setting up your Minecraft account" "/tutorials/installation/setup_multimc/#adding-your-minecraft-account">}}, follow these steps to quickly import an instance:
1. Click on "Add Instance" in the top left of MultiMC.
2. Select "Import from zip" and paste `https://data.mgnet.work/tasbattle/TAS-Battle%20for%20MultiMC.zip` in the field. {{<figure class="screenshot" src="MultiMC_ifgO4jsO2p.png">}}
(*You can also download it from the link and load it as a file from your PC*)
3. Click OK and wait for it to download
4. Start the instance by doubleclicking