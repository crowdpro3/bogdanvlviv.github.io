---
layout: post
lang: "en"
title: "Ruby 2.7 adds Array#extract, Hash#extract, and ENV.extract methods"
author: "bogdanvlviv"
date: 2019-05-19 08:30:00 +0300
categories: posts ruby
permalink: /:categories/:title.html
---

> Pull Request: [https://github.com/ruby/ruby/pull/2171](https://github.com/ruby/ruby/pull/2171)
>
> Feature #15831: [https://bugs.ruby-lang.org/issues/15831](https://bugs.ruby-lang.org/issues/15831)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Add `Hash#slice!` and `ENV.slice!`: <a href="https://t.co/YXS7laoOIh">https://t.co/YXS7laoOIh</a><br><br>Add `Array#extract`, `Hash#extract`, and `ENV.extract`: <a href="https://t.co/UaMZMJKR6K">https://t.co/UaMZMJKR6K</a><br><br>Status: Rejected<br><br>If you have a good argument why it should be rejected or why it should be added to Ruby, comment there.</p>&mdash; Bogdan (@bogdanvlviv) <a href="https://twitter.com/bogdanvlviv/status/1131299801612652546?ref_src=twsrc%5Etfw">May 22, 2019</a></blockquote>

## Array#extract

Initially, this method was added to Active Support as `Array#extract!`, read more about it in the post - ["Array#extract! to Active Support 6.0"]({{ "/posts/ruby/rails/array-extract-to-activesupport-6-0.html" | absolute_url }}).

Finally, this method found its place in Ruby as `Array#extract`:

> **ary.extract {\|item\| block}** -> **new_ary**
>
> **ary.extract** -> **Enumerator**
>
> Removes and returns the elements for which the block evaluates to `true`.
>
> If no block is given, an Enumerator is returned instead.

```ruby
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
odd_numbers = numbers.extract { |number| number.odd? } # => [1, 3, 5, 7, 9]
numbers # => [0, 2, 4, 6, 8]
```

Let's read test cases of this method for better understanding of how it works:

```ruby
def test_extract
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  array_id = numbers.object_id

  odd_numbers = numbers.extract(&:odd?)

  assert_equal [1, 3, 5, 7, 9], odd_numbers
  assert_equal [0, 2, 4, 6, 8], numbers
  assert_equal array_id, numbers.object_id

  numbers = [0, 1, 2, 3]
  assert_equal [], numbers.extract { false }
  assert_equal [0, 1, 2, 3], numbers

  assert_equal [0, 1, 2, 3], numbers.extract { true }
  assert_equal [], numbers
end

def test_extract_without_block
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  array_id = numbers.object_id

  extract_enumerator = numbers.extract

  assert_instance_of Enumerator, extract_enumerator
  assert_equal numbers.size, extract_enumerator.size

  odd_numbers = extract_enumerator.each(&:odd?)

  assert_equal [1, 3, 5, 7, 9], odd_numbers
  assert_equal [0, 2, 4, 6, 8], numbers
  assert_equal array_id, numbers.object_id
end

def test_extract_on_empty_array
  empty_array = []
  array_id = empty_array.object_id

  new_empty_array = empty_array.extract {}

  assert_equal [], new_empty_array
  assert_equal [], empty_array
  assert_equal array_id, empty_array.object_id
end
```

## Hash#extract

> **hsh.extract {\|key, value\| block}** -> **new_hash**
>
> **hsh.extract** -> **an_enumerator**
>
> Removes and returns the key/value pairs for which the block evaluates to `true`.
>
> If no block is given, an Enumerator is returned instead.

```ruby
h = {a: 100, b: 200, c: 300}
h.extract {|k, v| v > 150} # => {:b=>200, :c=>300}
h # => {:a=>100}
```

Test cases:

```ruby
def test_extract
  h = {a: 1, b: 2, c: 3, d: 4}
  hash_id = h.object_id

  assert_equal({c: 3, d: 4}, h.extract {|k, v| v > 2})
  assert_equal({a: 1, b: 2}, h)
  assert_equal hash_id, h.object_id

  h = {a: 1, b: 2, c: 3, d: 4}
  assert_equal({}, h.extract {false})
  assert_equal({a: 1, b: 2, c: 3, d: 4}, h)

  assert_equal({a: 1, b: 2, c: 3, d: 4}, h.extract {true})
  assert_equal({}, h)
end

def test_extract_without_block
  h = {a: 1, b: 2, c: 3, d: 4}
  hash_id = h.object_id

  extract_enumerator = h.extract

  assert_instance_of Enumerator, extract_enumerator
  assert_equal h.size, extract_enumerator.size

  extracted_hash = extract_enumerator.each {|k, v| v > 2}

  assert_equal({c: 3, d: 4}, extracted_hash)
  assert_equal({a: 1, b: 2}, h)
  assert_equal hash_id, h.object_id
end

def test_extract_on_empty_hash
  empty_hash = {}
  hash_id = empty_hash.object_id

  new_empty_hash = empty_hash.extract {}

  assert_equal({}, new_empty_hash)
  assert_equal({}, empty_hash)
  assert_equal hash_id, empty_hash.object_id
end
```

## ENV.extract

> **ENV.extract {\|key, value\| block}** -> **Hash**
>
> **ENV.extract** -> **Enumerator**
>
> Removes and returns the key/value pairs for which the block evaluates to `true`.
>
> If no block is given, an Enumerator is returned instead.

```ruby
ENV.extract {|k, v| k == "PORT"} # => {"PORT"=>"3000"}
```

Test cases:

```ruby
def test_extract
  ENV.clear
  ENV["foo"] = "bar"
  ENV["baz"] = "qux"
  ENV["bar"] = "rab"
  env_id = ENV.object_id

  assert_equal({"baz" => "qux"}, ENV.extract {|k, v| v == "qux"})
  assert_equal({"foo" => "bar", "bar" => "rab"}, ENV.to_hash)
  assert_equal env_id, ENV.object_id

  ENV.clear
  ENV["foo"] = "bar"
  ENV["baz"] = "qux"
  ENV["bar"] = "rab"
  assert_equal({}, ENV.extract {false})
  assert_equal({"foo" => "bar", "baz" => "qux", "bar" => "rab"}, ENV.to_hash)

  assert_equal({"foo" => "bar", "baz" => "qux", "bar" => "rab"}, ENV.extract {true})
  assert_equal({}, ENV.to_hash)
end

def test_extract_without_block
  ENV.clear
  ENV["foo"] = "bar"
  ENV["baz"] = "qux"
  ENV["bar"] = "rab"
  env_id = ENV.object_id

  extract_enumerator = ENV.extract

  assert_instance_of Enumerator, extract_enumerator
  assert_equal ENV.size, extract_enumerator.size

  extracted_hash = extract_enumerator.each {|k, v| v == "qux"}

  assert_equal({"baz" => "qux"}, extracted_hash)
  assert_equal({"foo" => "bar", "bar" => "rab"}, ENV.to_hash)
  assert_equal env_id, ENV.object_id
end

def test_extract_on_empty_env
  ENV.clear
  env_id = ENV.object_id

  new_empty_hash = ENV.extract {}

  assert_equal({}, new_empty_hash)
  assert_equal({}, ENV.to_hash)
  assert_equal env_id, ENV.object_id
end
```
