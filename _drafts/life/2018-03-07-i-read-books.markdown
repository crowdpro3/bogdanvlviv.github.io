---
layout: post
lang: "en"
title: "I read books"
author: "bogdanvlviv"
date: 2018-03-07 23:23:00 +0200
categories: posts life
permalink: /:categories/:title.html
---

I have read books:
<ul>
  {%- assign i_have_read_books = site.data.books | where_exp: "book", "book.progress == 100" -%}
  {%- for book in i_have_read_books -%}
  <li>
    <a href="{{ book.link }}">{{ book.title }}</a>
  </li>
  {%- endfor -%}
</ul>

I am reading books:
<ul>
  {%- assign i_am_reading_books = site.data.books | where_exp: "book", "book.progress > 0" | where_exp: "book", "book.progress < 100" -%}
  {%- for book in i_am_reading_books -%}
  <li>
    <a href="{{ book.link }}">{{ book.title }}</a>
  </li>
  {%- endfor -%}
</ul>

I am going to read books:
<ul>
  {%- assign i_am_going_to_read_books = site.data.books | where_exp: "book", "book.progress < 1" -%}
  {%- for book in i_am_going_to_read_books -%}
  <li>
    <a href="{{ book.link }}">{{ book.title }}</a>
  </li>
  {%- endfor -%}
</ul>
