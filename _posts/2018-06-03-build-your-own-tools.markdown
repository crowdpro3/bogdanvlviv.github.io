---
layout: post
lang: "en"
title: "Build your own tools"
image: "/images/posts/life/build-your-own-tools/example-of-slides.png"
date: 2018-06-03 01:47:00 +0300
categories: posts life
comments: true
permalink: /:categories/:title.html
---

There are a lot of tools for building some specific things.
If you need to build something, you should choose a tool.

> The main idea of this post is to say - "Choose or build tool that would work for you".

Sometimes you might feel that none of the tools you know don't satisfy all your needs, or just you feel that you don't enjoy the process by doing things with a tool.
You might feel that a tool isn't flexible enough or you have another reason not to use it.
In that case, <mark>build your own tool</mark>. At least it should be fun.

In 2017 I gave a [talk]({{ "/posts/talks/pivorak-28-rails-5_2.html" | absolute_url }}) for the first time.
I needed to choose a tool in order to prepare slides.
I tried out some tools like [Google Slides](https://www.google.com/slides/about/), and similar.
They work, but sometimes something that works for you well doesn't work for someone else.
It is totally fine.

These kinds of tools don't work for me.

Then I decided to find a tool for building slides in Open Source.
I focused on two tools - [impress.js](https://impress.js.org), and [Rabbit](http://rabbit-shocker.org/).
I went with Rabbit since I'm Rubyist, and this tool is "a presentation tool for Rubyist". ;)

I built [slides]({{ "/talks/rails-5_2.pdf" | absolute_url }}) with Rabbit.

I really enjoyed building slides with Rabbit.
It is flexible enough. It helps not only build slides but also present them.
There are two cons, it has a lot of dependencies, and lack of some information in the documentation.
The last one isn't really related to cons, because it is Open Source, so if you want better documentation, you can improve that.

Highly recommend Rabbit, especially if you are Rubyist.

> I realized that more important content of slides, not how they look.

Recently I decided to build own "tool" for building slides in order to be as flexible as I can during building slides, and prevent a lot of dependencies, one of them is a need in own laptop in order to present slides.

I prepared the [example]({{ "/talks/example.html" | absolute_url }}) of slides in order to show how my future slides might look and get feedback from you.

For me it is:
- much easier and more flexible to build slides
- ability to present slides form any laptop with internet connection
- ability to publish and share slides
- less dependencies
