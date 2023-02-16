---
title: "Theme Test"
#icon:
alt: ""
description: "A page to see how the theme looks"
weight: 20
toc: false
---

## Second heading

### Third heading

#### Fourth heading

##### Fith heading

###### Sixth heading

This site is for testing the theming of the website... The theme is completely custom and was mainly created by Scribble. You can find this here: https://github.com/ScribbleLP/mctas.com

1. An ordered list
2. The numbers should be golden and a bit bigger to better distinguish something
	1. An ordered list under an ordered list
		1. Again

* Unordered list
	* Same deal here
		* Again

**Bold**, *italic*, `code`

## Discord invite
{{<discordinvite "minecraft">}}

## Codeblock!
```java
package com.example.examplemod.mixin.test;

import java.util.Random;

import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

import net.minecraft.entity.passive.EntitySquid;

@Mixin(EntitySquid.class)
public class MixinEntitySquid {
	
	@Redirect(method = "<init>", at = @At(value = "INVOKE", target = "Ljava/util/Random;setSeed(J)V"))

	public void inject_Init(Random rand, long seed) {
		System.out.println("Squids are evil!");
		rand.setSeed(seed);
	}
}
```