---
layout: post
lang: "en"
title: "I contribute to Open Source"
date: 2016-08-30 15:23:00 +0300
categories: posts work
comments: true
permalink: /:categories/:title.html
---

I have contributed to open source projects:
<ul>
  {%- for project in site.data.projects -%}
  <li>
    <a href="{{ project.link }}">{{ project.title }}</a>
  </li>
  {%- endfor -%}
</ul>
