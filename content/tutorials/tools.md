---
title: "Tools"
# icon:
alt: "Wrench Icon"
description: "Descriptions for the most common tools in TASing"
weight: 13
toc: true
draft: true
---
Here is a list of commonly used tools in Minecraft TASing... While you may recognise some of these tools from emulator TASing, the implementation in Minecraft is most likely completely different.
## Tickratechanger
This is the name of the module used to slow down or speed up the game speed. As many games, Minecraft runs on a tick based system, which is different to for example SM64, which runs on a frame based system...  

In SM64 the framerate is constant and when the game lags, the game logic will slow down as well.

In Minecraft the framerate can vary, meaning Minecraft can have 1000 frames per second or 10 frames per second, but the game speed will still be the same.

And the tickrate in a vanilla Minecraft instance is 20 ticks/second, and one tick being 50 milliseconds.

With a tickratechanger we can modify the tickrate, which then slows down the game speed but still keeping the framerate consistent.
This has a few consequences:
- Looking around with the mouse is not tick based, it's frame based, which means the camera movement will not be slowed down.
- Processing keybindings is also slowed down, meaning you have to wait in low tickrates, until the key press is recognized by the game.

### Tickadvance
A subtool of the Tickratechanger is "Tickadvance", which you may better know from other games as "Frameadvance". As the name suggests, with a press of a button, you can advance one tick at a time, which allows for very precise movement. Additionally, since the camera is not slowed down, you can still look around and e.g. aim at a block.

## Savestates
A really common tool for TASing in general. The idea is to save the game state with a press of a button. This state can be loaded at any time as a "mini backup". This allows you to retry a section of a game over and over until you are satisfied.
Savestates in Minecraft are done using Minecraft's world system. 

The "ancient" way of doing savestates, is to save and quit to the main menu, then copying the world files to a different folder before resuming the run. Same with loading the savestate. This was quite tedious since a TASer may load savestates hundreds of times.

In modern TASing we use {{<newtablink "mods" "/downloads/non-playback/lotas/">}}, which automatically copy the folders to the correct location.

## Item Duplication
A common speedrunning glitches in Minecraft involve saving and quitting the game, reentering and hard quitting the game with `Alt+F4` or Task Manager. One effect is that you can duplicate items.

**The order is different for versions up to 1.12.2 and 1.14+ versions, since Minecraft changed it's systems starting with 1.14.4**

Also note that this duplication method does **NOT** work on servers, you can't use it on 2b2t stop asking please...
### 1.3 - 1.12.2 {#1.12.2}
**Minecraft Forge patched this duplication glitch, it will not work with forge modloader installed.**
1. Throw the item(s) you want to duplicate on the ground
2. Save and quit to the menu
3. Re enter the world and pick up the item(s)
4. Press `Alt+F4` to quit to hard quit the game
5. Open the game and enter the world. There should be an item in your inventory as well as an item lying on the ground

### 1.14.4+ {#1.14.4}
*Setup: Open task manager*
1. Save and quit with your item(s) in your inventory
2. Re enter throw the items on the ground
3. `Alt+F4` and kill the program with Task Manager, while the screen is black
5. Open the game and enter the world. There should be an item in your inventory as well as an item lying on the ground

## LoTAS duping
Duping in vanilla is quite tedious and highly inconsistent when doing it multiple times in a row, so we wrote a mod that emulates duping.