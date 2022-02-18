---
title: "Non Playback"
icon: "/images/SplashPotion.png"
alt: "Potion"
draft: false
---

# Non-playback TASing

## The basics

Instead of choosing each input per frame and play back the TAS at the end, non-playback TASing is the act of screen recording *yourself* speedrunning, but setting the game to *slow motion*.

Later in video editing, you _speed up_ the footage from slow motion to normal speed.

The result is a video in normal speed, but the player has better rection times.

Additionally you may use **savestates**, which is the ability to create a restore point at any time during your run and if you fail at something, you can reload the savestate to try again.

## Why?

This is a fair question if you are already experienced with TASing in some form. You may also argue that this is not a real form of TASing at all. However, there are several reasons why we may prefer to use non-playback.

### 1. It is easier and quicker to make

Playback TASing requires way more time and effort than non-playback. Longer TASes take months or even years to complete.

### 2. The tools for playback are not there yet

Tool development is extremely time consuming, especially with Minecraft mods. Using existing tools like [libTAS](https://tasvideos.org/EmulatorResources/LibTAS) proved to [not work on Minecraft Java Edition](https://github.com/clementgallet/libTAS/issues/47).

For that reason we are using Minecraft mods to implement the tools.  
And writing non-playback tools is also easier than writing playback tools.

### 3. RNG

Minecraft is really undeterministic. If you start an instance of minecraft the rng is already random, since it is based on system time in nanoseconds. In theory, you can make it deterministic if you have nanosecond precision, which is basically impossible in reality.

And playing the game yourself lets you react to RNG much easier.

RNG is why playback is much harder to implement into Minecraft due to the fact it is near impossible to manipulate it. Many playback TASes often manipulate luck in their runs so they can have the best outcomes possible.

However, since we cannot manipulate Minecraft RNG easily, most playback TASes would desync, which is why almost every Minecraft TAS uses non-playback.

## The downside

*   Non-playback is not as precise as playback TASing
*   Not as accurate to the vanilla game
*   Requires editing knowledge
*   TASing has to be in video form
*   Difficult for multiple people to collaborate on one TAS

## For downloading non-playback tools, go to [Downloads](/downloads/).