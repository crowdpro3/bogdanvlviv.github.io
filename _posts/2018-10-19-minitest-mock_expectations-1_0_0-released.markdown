---
layout: post
lang: "en"
title: "minitest-mock_expectations 1.0.0 released"
date: 2018-10-19 14:42:00 +0300
categories: posts ruby minitest
comments: true
permalink: /:categories/:title.html
---

Hello!

A few months ago, [utilum](https://github.com/utilum), and me([bogdanvlviv](https://github.com/bogdanvlviv)) were working on removing [Mocha](https://github.com/freerange/mocha) from [Rails](https://github.com/rails/rails). See our work in [rails/rails#33162](https://github.com/rails/rails/pull/33162), and related pull requests [https://github.com/rails/rails/pulls?q=Mocha](https://github.com/rails/rails/pulls?q=Mocha).
The main reason for removing this as mentioned in the Mocha's `README.md` file is that ["Mocha is currently not thread-safe"](https://github.com/freerange/mocha/blob/6c22196776477f19f6bf4177d13b81ff6b92bceb/README.md#thread-safety).

There were lots of Mocha's mocks, and stubs in the Rails's tests, so we needed to replace all of them.
We [replaced some stub-objects with Ruby classes](https://github.com/rails/rails/commit/f7bfb3db282f8333adb469b6d223b58523428d7d), [Mocha's `#stubs` method replaced with minitest's `#stub` method](https://github.com/rails/rails/commit/837d6031783c2fcf7920320d386f2ea7211f8cb1), [added new](https://github.com/rails/rails/commit/a72bca82301bc4851f40945f85711f5cefd10178), and [used already existed](https://github.com/rails/rails/blob/ac717d65a31d05458588b78ea7719b79f8ea69e5/activesupport/lib/active_support/testing/method_call_assertions.rb) custom method call assertions.

I thought these "method call assertions" could be useful for the Ruby community, so I decided to create a gem that would extend [minitest](https://github.com/seattlerb/minitest) with these, almost the same, assertions. It is how gem [minitest-mock_expectations](https://github.com/bogdanvlviv/minitest-mock_expectations) was born.

> NOTE: Module [`ActiveSupport::Testing::MethodCallAssertions`](https://github.com/rails/rails/blob/a72bca82301bc4851f40945f85711f5cefd10178/activesupport/lib/active_support/testing/method_call_assertions.rb) is marked as private API by `# :nodoc:` comment.


## minitest-mock_expectations 1.0.0

Provides method call assertions for minitest.

### Installation

Add this line to your application's Gemfile:

```ruby
gem "minitest-mock_expectations"
```

And then execute:

```bash
$ bundle
```

Or install it yourself as:

```bash
$ gem install minitest-mock_expectations
```

### Usage

```ruby
require "minitest/mock_expectations"
```

Imagine we have model `Post`:

```ruby
class Post
  attr_accessor :title, :body
  attr_reader :comments

  def initialize(title: "", body: "", comments: [])
    @title = title
    @body = body
    @comments = comments
  end

  def add_comment(comment)
    @comments << comment

    "Thank you!"
  end
end
```

And variable `@post` that reffers to instance of `Post`:

```ruby
def setup
  @post = Post.new(
    title: "What is new in Rails 6.0",
    body: "https://bogdanvlviv.com/posts/ruby/rails/what-is-new-in-rails-6_0.html",
    comments: [
      "Looking really good.",
      "I really like this post."
    ]
  )
end
```

#### assert_called(object, method_name, message = nil, times: 1, returns: nil)

Asserts that the method will be called on the `object` in the block

```ruby
assert_called(@post, :title) do
  @post.title
end
```

In order to assert that the method will be called multiple times on the `object` in the block set `:times` option:

```ruby
assert_called(@post, :title, times: 2) do
  @post.title
  @post.title
end
```

You can stub the return value of the method in the block via `:returns` option:

```ruby
assert_called(@post, :title, returns: "What is new in Rails 5.2") do
  assert_equal "What is new in Rails 5.2", @object.title
end

assert_equal "What is new in Rails 6.0", @object.title
```

#### refute_called(object, method_name, message = nil, &block)

Asserts that the method will not be called on the `object` in the block

```ruby
refute_called(@post, :title) do
  @post.body
end
```

#### assert_not_called

Alias for `refute_called`.

#### assert_called_with(object, method_name, arguments, returns: nil)

Asserts that the method will be called with the `arguments` on the `object` in the block

```ruby
assert_called_with(@post, :add_comment, ["Thanks for sharing this."]) do
  @post.add_comment("Thanks for sharing this.")
end
```

You can stub the return value of the method in the block via `:returns` option:

```ruby
assert_called_with(@post, :add_comment, ["Thanks for sharing this."], returns: "Thanks!") do
  assert_equal "Thanks!", @post.add_comment("Thanks for sharing this.")
end

assert_equal "Thank you!", @post.add_comment("Thanks for sharing this.")
```

You can also assert that the method will be called with different `arguments` on the `object` in the block:

```ruby
assert_called_with(@post, :add_comment, [["Thanks for sharing this."], ["Thanks!"]]) do
  @post.add_comment("Thanks for sharing this.")
  @post.add_comment("Thanks!")
end
```

#### assert_called_on_instance_of(klass, method_name, message = nil, times: 1, returns: nil)

Asserts that the method will be called on an instance of the `klass` in the block

```ruby
assert_called_on_instance_of(Post, :title) do
  @post.title
end
```

In order to assert that the method will be called multiple times on an instance of the `klass` in the block set `:times` option:

```ruby
assert_called_on_instance_of(Post, :title, times: 2) do
  @post.title
  @post.title
end
```

You can stub the return value of the method in the block via `:returns` option:

```ruby
assert_called_on_instance_of(Post, :title, returns: "What is new in Rails 5.2") do
  assert_equal "What is new in Rails 5.2", @post.title
end

assert_equal "What is new in Rails 6.0", @post.title
```

Use nesting of the blocks in order assert that the several methods will be called on an instance of the `klass` in the block:

```ruby
assert_called_on_instance_of(Post, :title, times: 3) do
  assert_called_on_instance_of(Post, :body, times: 2) do
    @post.title
    @post.body
    @post.title
    @post.body
    @post.title
  end
end
```

#### refute_called_on_instance_of(klass, method_name, message = nil, &block)

Asserts that the method will not be called on an instance of the `klass` in the block

```ruby
refute_called_on_instance_of(Post, :title) do
  @post.body
end
```

Use nesting of the blocks in order assert that the several methods will not be called on an instance of the `klass` in the block:

```ruby
refute_called_on_instance_of(Post, :title) do
  refute_called_on_instance_of(Post, :body) do
    @post.add_comment("Thanks for sharing this.")
  end
end
```

#### assert_not_called_on_instance_of

Alias for `refute_called_on_instance_of`.

### References

GitHub: [https://github.com/bogdanvlviv/minitest-mock_expectations](https://github.com/bogdanvlviv/minitest-mock_expectations).

RubyGems: [https://rubygems.org/gems/minitest-mock_expectations](https://rubygems.org/gems/minitest-mock_expectations).
