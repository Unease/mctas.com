---
title: "Setup with MultiMC"
icon: "/icons/MultiMC.png"
alt: "MultiMC Logo"
description: "Setup mods with the open-source MultiMC launcher"
weight: 01040200
toc: true
---
MultiMC is an open source Minecraft launcher with additional functionalities compared to the [vanilla launcher]({{<ref "/tutorials/installation/setup_mclauncher">}})
  
We suggest checking out the {{<newtablink "official Website" "https://multimc.org">}}

The main differences is that you can create multiple "instances" or minecraft, each with their own .minecraft/ folder.
This means each instance can have a completely different minecraft installation, be it a different version, forge, fabric, different mods as opposed to only one mods folder in the vanilla launcher.  
  
## Prerequisites
A downside is, that MultiMC doesn't include java like the vanilla launcher. This means **you have to install java yourself!**.  
If you plan on using 1.8-1.12.2 and 1.14+ versions you also need to install multiple java versions. A full guide can be found {{<newtablink "here" "../setup_java">}}

## Downloading and installing MultiMC
1. Download MultiMC from {{<newtablink "MultiMC.org" "https://multimc.org/#Download">}}
2. Extract the zip to a folder of your choice
3. In the extracted folder you'll find a "MultiMC.exe", run that
4. Select your language  
{{<figure class="screenshot" src="MultiMC_2liiFowVXC.png">}}
5. Next, select the java installation. If you have nothing here, check {{<newtablink "Setting up Java" "../setup_java">}}  
{{<figure class="screenshot" src="MultiMC_wZu08AygSk.png">}}
6. At the bottom you can allocate more memory to Minecraft. 2 GB is usually enough, 4 GB for extreme uses (Playing modpacks).  
7. Accept or deny the analytics and click "Finish"  
{{<figure class="screenshot" src="MultiMC_dTJHLOQ8Ws.png">}}

## Adding your Minecraft Account
This requires you to know your Microsoft Account Details.

1. Click on Profiles > Manage Accounts  
{{<figure class="screenshot" src="NVIDIA_Share_229WlteNtw.png">}}
2. Click on "Add Microsoft"  
{{<figure class="screenshot" src="MultiMC_soR5t7YW5X.png">}}
3. Follow the instructions and enter the code you see in the pop-up  
{{<figure class="screenshot" src="MultiMC_UIqP5EO55L.png">}}
4. Log in with your Microsoft account
5. Your account should've been added to the list. You can also add more than one account.  
{{<figure class="screenshot" src="MultiMC_MJbmPpNT9O.png">}}
6. When closing the settings you should see your skin appear in the top right. If you added multiple accounts you can switch between them by clicking on the top right  
{{<figure class="screenshot" src="MultiMC_s271kGyQ6e.png">}}

## Adding an instance
1. Click on "Add instance" in the top left
2. Here you can select the minecraft version, or choose a modpack from other mod launchers. You can also write a cool name for your instance and/or add your instance to a group
{{<figure class="screenshot" src="MultiMC_qz0jPNe9N7.png">}}
3. You can also choose an icon for your instance
4. To start your instance, doubleclick or click "launch" on the right

## Installing Fabric
*Scroll down for forge installation.*
1. Rightclick your instance and click "Edit instance" (You can also click Edit instance in the right panel)
{{<figure class="screenshot" src="MultiMC_Pl83R3Ntd2.png">}}
2. Click "Install Fabric"
{{<figure class="screenshot" src="MultiMC_SEJilY6P7a.png">}}
3. Select a fabric mod loader version.
{{<figure class="screenshot" src="MultiMC_7VmZ1gVSkP.png">}}
4. Click ok. Fabric should automatically download and install

## Installing Forge
*Scroll up for fabric installation.*
1. Rightclick your instance and click "Edit instance" (You can also click Edit instance in the right panel)
{{<figure class="screenshot" src="MultiMC_Pl83R3Ntd2.png">}}
2. Click "Install Forge"
{{<figure class="screenshot" src="MultiMC_1aG2xspMoh.png">}}
3. Select a forge mod loader version. The one with the star is usually the best.
{{<figure class="screenshot" src="MultiMC_PBgDKnKDch.png">}}
4. Click ok. Fabric should automatically download and install.

## Adding mods
- This process is the same for forge and fabric mods. BUT: **You can't mix forge and fabric mods together**.
- All mods have to match the Minecraft version you want to play in, unless the mod author says something different. Mods for 1.11 don't work on 1.12!

1. Rightclick your instance and click "Edit instance" (You can also click Edit instance in the right panel)  
{{<figure class="screenshot" src="MultiMC_Pl83R3Ntd2.png">}}
2. Select "Loader Mods" on the left
{{<figure class="screenshot" src="MultiMC_oO1AJS5EMV.png">}}
3. Add your mods to this instance by
   1. Clicking "Add" in the top right or
   2. Dragging and dropping files into the window  
   {{<figure class="screenshot" src="explorer_d56osZ2cMP.gif">}}
4. You can disable mods by unticking the checkbox next to the mod