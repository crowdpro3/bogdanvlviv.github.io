---
layout: post
lang: "en"
title: "How to upgrade a big Rails application"
author: "bogdanvlviv"
image: "/images/posts/talks/ruby/rails/how-to-upgrade-a-big-rails-application/dmitrij-paskevic-631210-unsplash.jpg"
date: 2019-02-22 19:05:00 +0200
categories: posts talks ruby rails
comments: true
permalink: /:categories/:title.html
---

<div class="picture">
  <img src="{{ "/images/posts/talks/ruby/rails/how-to-upgrade-a-big-rails-application/dmitrij-paskevic-631210-unsplash.jpg" | absolute_url }}" title="https://unsplash.com/photos/6ZFtDDRW82w">
</div>

\- Hello everyone!

\- In this presentation, I'm going to talk about why we should upgrade applications, *long-running branch* and *dual boot* strategies as approaches for upgrading Rails applications.

\- But first, let me introduce myself.

## About me

<div class="picture">
  <img src="{{ "/images/posts/talks/ruby/rails/how-to-upgrade-a-big-rails-application/rails_contributors-bogdanvlviv-2019-02-26.png" | absolute_url }}" title="https://contributors.rubyonrails.org/contributors/bogdanvlviv/commits">
</div>

[https://contributors.rubyonrails.org/contributors/bogdanvlviv/commits](https://contributors.rubyonrails.org/contributors/bogdanvlviv/commits)

\- My name is [Bogdan]({{ "/index.html" | absolute_url }}). I'm a Ruby developer. And yeah, I enjoy collaborating with people from around the world on Open Source. Usually, I contribute to [Ruby on Rails](https://rubyonrails.org/).

\- Back to the topic.

## Why should we upgrade applications?

\- Let's find out why we should upgrade applications.

\- There are lots of reasons to do so.

\- The most important reason is *security issues* because if an application is vulnerable, someone can cause damage or destroy a business. It is likely to cause lots of troubles for clients. It makes clients vulnerable as well.

\- Also, there are other *software development issues* like:

- [Dependency hell](https://en.wikipedia.org/wiki/Dependency_hell): For instance, you might need to upgrade some dependency but you can't because of incompatibilities with some other dependencies.
- New software: You might need to use some new software, but you can't because a software you use doesn't support it or isn't compatible with it.
- Improved APIs: You would like to improve API of a library you use.
- New features: You would like to use new features that are added to a newer version of a library you use.
- Perfomance: For instance, an application has got performance issues and upgrading of software would solve it.

\- Another important reason to upgrade is *involving new people* to a project. *Developers* prefer to work with technologies on the latest versions so it is easier to hire them on a project that upgrades. Just imagine that in 2019, someone tries to hire you on a project that uses Rails 2.3. Also, it is easier to involve *novice developers* to a project that upgrades because, usually, they've only studied technologies on the latest versions.

\- Upgrading an application is also a *chance to contribute to Open Source*.










## Long-Running Branches Considered Harmful - New Relic Blog

[https://blog.newrelic.com/culture/long-running-branches-considered-harmful/](https://blog.newrelic.com/culture/long-running-branches-considered-harmful/)

## Shopify's Rails upgrade story

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">In &#39;17 it took us 1y to upgrade from <a href="https://twitter.com/rails?ref_src=twsrc%5Etfw">@rails</a> 4.2 to 5.0. <a href="https://twitter.com/kirshatrov?ref_src=twsrc%5Etfw">@kirshatrov</a> <a href="https://twitter.com/rafaelfranca?ref_src=twsrc%5Etfw">@rafaelfranca</a> <a href="https://twitter.com/DaroudeDudek?ref_src=twsrc%5Etfw">@DaroudeDudek</a> were happy but not satisfied. Why doesn&#39;t this take a week instead of a year? Today, we are running <a href="https://twitter.com/rails?ref_src=twsrc%5Etfw">@rails</a> 6.0 in production *before* it releases.</p>&mdash; Jean-Michel Lemieux (@jmwind) <a href="https://twitter.com/jmwind/status/1100759716022636545?ref_src=twsrc%5Etfw">February 27, 2019</a></blockquote>

## RailsConf 2017: Upgrading a big application to Rails 5 by [Rafael França](https://github.com/rafaelfranca)

<iframe src="https://www.youtube.com/embed/I-2Xy3RS1ns" frameborder="0" allowfullscreen></iframe>

Link: [https://www.youtube.com/watch?v=I-2Xy3RS1ns](https://www.youtube.com/watch?v=I-2Xy3RS1ns)

## Shopify/bootboot

Dualboot your Ruby app made easy

Link: [https://github.com/Shopify/bootboot](https://github.com/Shopify/bootboot)

## RailsConf 2018: Upgrading Rails at Scale by [Edouard Chin](https://github.com/Edouard-chin)

<iframe src="https://www.youtube.com/embed/N2B5V4ozc6k" frameborder="0" allowfullscreen></iframe>

Link: [https://www.youtube.com/watch?v=N2B5V4ozc6k](https://www.youtube.com/watch?v=N2B5V4ozc6k)

## Thanks!

## Links

Slides: ["How to upgrade a big Rails application"]({{ "/talks/ruby/rails/how-to-upgrade-a-big-rails-application.html" | absolute_url }}).

## Pivorak 38

"Pivorak 38 : Spring Edition": [https://www.facebook.com/events/399347927493363](https://www.facebook.com/events/399347927493363).
