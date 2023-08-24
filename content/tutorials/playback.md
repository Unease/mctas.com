---
title: "Playback"
icon: "/icons/PotionIconPrev.png"
alt: "Potion"
description: "General information about playback TASes and mods"
weight: 01020000
toc: true
---

## What are playback TASes? {#what-are-pb-tases}

Most TASes that you will see are made using some form of playback using an {{< newtablink "emulator" "https://en.wikipedia.org/wiki/Emulator">}} with an option called movie playback which allows you to directly playback your TASes in _real time_.

Playback of these movies require no external tampering (e.g hacks/cheats), to run properly as it is the emulator/console reading a series of inputs from an input file like a {{<newtablink "player piano" "https://www.youtube.com/watch?v=aseMAEctM1s&t=15s">}}.

## What are the benefits of playback TASing? {#benefits}

### 1. Ease of modification

Non-playback TASes are unable to modify any inputs in specific sections without having to restart from a savestate. This can be frustrating, especially in places where you can't savestate (Such as in chests or in your inventory). With playback, you can redo specific parts of savestates to refine it however you like through a GUI.

### 2. Easy to share and verify

Inputs when using playback are stored using an input file so it's easy to share progress or certain strats with others due to the fact you can easily send over an input file. Others can also check out why certain events happen more easily during playback compared to non-playback and verify if the TAS is replicable. This is how many TASes are {{<newtablink "console-verified" "https://youtu.be/vbjhjIwgJoY">}}.

### 3. Brute forcing

You can use other tools to help you such as scripts to automate certain parts of the TAS to find the perfect outcome such as the best possible angle, or the best RNG possible.


## Downsides

*   As mentioned in [non-playback]({{<relref "non-playback">}}), our current tools for playback are not ready (at least for newer versions), so there are many bugs you may expierence while trying to make a playback TAS.

*   Hard to manipulate RNG or certain events in Minecraft. This is a problem since Minecraft is *heavily* RNG dependant so this will lead to a lot of desyncs.

*   Current tools are not as user friendly as other TAS making programs such as TAStudio.
