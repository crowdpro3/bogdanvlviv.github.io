---
layout: post
lang: "en"
title: "Decorator Pattern in Ruby"
date: 2016-10-02 16:30:00 +0300
categories: posts ruby patterns
comments: true
permalink: /:categories/:title.html
---

Decorators allow us to add behavior to objects without affecting other objects of the same class.
The decorator pattern is a useful alternative to creating sub-classes.

Read more about Decorator Pattern [here](https://en.wikipedia.org/wiki/Decorator_pattern).

I saw a many posts about *"Decorator Pattern in Ruby"*, such as

- [Evaluating Alternative Decorator Implementations In Ruby](https://robots.thoughtbot.com/evaluating-alternative-decorator-implementations-in)
- [Decorator Pattern in Ruby](http://nithinbekal.com/posts/ruby-decorators)

and asked myself - "What is the best realization of the Decorator Pattern in Ruby?".

I prefer to use [`SimpleDelegator`](https://docs.ruby-lang.org/en/2.3.0/SimpleDelegator.html) for building an Decorators in Ruby.
I think it is the best way.

You can ask me "Why do you think so?".
The main reasons to think so is - [`SimpleDelegator`](https://docs.ruby-lang.org/en/2.3.0/SimpleDelegator.html) is in standard library of Ruby, It deserves respect and gives confidence for using.
Everybody can care and help in improving it.
It is simple, just open pull pequest in [Ruby repository](https://github.com/ruby/ruby) on [GitHub](https://github.com). There is one pull request of mine [#1454](https://github.com/ruby/ruby/pull/1454). ;)

I think you will get correct thoughts for yourself after reading the docs about [`SimpleDelegator`](https://docs.ruby-lang.org/en/2.3.0/SimpleDelegator.html) in Ruby and some posts about *"Decorator Pattern in Ruby"*. This post only my thoughts about it. Thanks!

> NOTE: Please read about the Ruby class [`SimpleDelegator`](https://docs.ruby-lang.org/en/2.3.0/SimpleDelegator.html) and its parent class [`Delegator`](https://docs.ruby-lang.org/en/2.3.0/Delegator.html) to understand how it works.

Example:

```ruby
class User
  def initialize(first_name:, last_name:, birthday:)
    @first_name = first_name
    @last_name = last_name
    @birthday = birthday
  end

  attr_accessor :first_name, :last_name, :birthday
end
```

```ruby
class UserDecorator < SimpleDelegator
  def full_name
    "#{first_name} #{last_name}"
  end

  def age
    # 60 * 60 * 24 * 365.25 is 31557600
    # 31557600 is one year in seconds
    ((Time.now - birthday) / 31557600).floor
  end
end
```

```ruby
user = User.new(
  first_name: "Bogdan",
  last_name: "Denkovych",
  birthday: Time.new(1996, 6, 27, 6, 0, "+03:00")
)

user_decorator = UserDecorator.new(user)

user_decorator.class # => UserDecorator
user_decorator.first_name # => "Bogdan"
user_decorator.last_name # => "Denkovych"
user_decorator.full_name # => "Bogdan Denkovych"
user_decorator.birthday # => 1996-06-27 06:00:00 +0300
user_decorator.age # => 20
```
