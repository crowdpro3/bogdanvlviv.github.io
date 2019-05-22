---
layout: post
lang: "en"
title: "Ruby 2.7 adds Hash#slice! and ENV.slice! methods"
author: "bogdanvlviv"
date: 2019-05-19 18:30:00 +0300
categories: posts ruby
permalink: /:categories/:title.html
---

> Pull Request: [https://github.com/ruby/ruby/pull/2195](https://github.com/ruby/ruby/pull/2195)
>
> Feature #15863: [https://bugs.ruby-lang.org/issues/15863](https://bugs.ruby-lang.org/issues/15863)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Add `Hash#slice!` and `ENV.slice!`: <a href="https://t.co/YXS7laoOIh">https://t.co/YXS7laoOIh</a><br><br>Add `Array#extract`, `Hash#extract`, and `ENV.extract`: <a href="https://t.co/UaMZMJKR6K">https://t.co/UaMZMJKR6K</a><br><br>Status: Rejected<br><br>If you have a good argument why it should be rejected or why it should be added to Ruby, comment there.</p>&mdash; Bogdan (@bogdanvlviv) <a href="https://twitter.com/bogdanvlviv/status/1131299801612652546?ref_src=twsrc%5Etfw">May 22, 2019</a></blockquote>

## Hash#slice!

> **hsh.slice!(*keys)** -> **new_hash**
>
> Removes and returns the key/value pairs matching the given keys.

```ruby
h = {a: 100, b: 200, c: 300}
h.slice!(:a) # => {:a=>100}
h # => {:b=>200, :c=>300}
h.slice!(:b, :c, :d) # => {:b=>200, :c=>300}
h # => {}
```

Let's read test cases of this method for better understanding of how it works:

```ruby
def test_slice!
  original = { a: 1, b: 2, c: 3, d: 4 }

  assert_equal({ a: 1, b: 2 }, original.slice!(:a, :b, :x))
  assert_equal({ c: 3, d: 4 }, original)
end

def test_slice_bang_nils
  original = { a: nil, b: nil }

  assert_equal({a: nil}, original.slice!(:a, :x))
  assert_equal({b: nil}, original)
end
```

## ENV.slice!

> **ENV.slice!(*keys)** -> **new_hash**
>
> Removes and returns the key/value pairs matching the given keys.

```ruby
ENV.slice!("PORT", "RAILS_ENV") # => {"PORT"=>"3000", "RAILS_ENV"=>"development"}
```

Test case:

```ruby
def test_slice!
  ENV.clear
  ENV["foo"] = "bar"
  ENV["baz"] = "qux"
  ENV["bar"] = "rab"

  assert_equal({ "foo" => "bar", "baz" => "qux" }, ENV.slice!("foo", "baz", "xxx"))
  assert_equal({ "bar"=> "rab" }, ENV.to_hash)
end
```
