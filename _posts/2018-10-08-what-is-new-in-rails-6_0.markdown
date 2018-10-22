---
layout: post
lang: "en"
title: "What is new in Rails 6.0"
image: "/images/posts/ruby/rails/what-is-new-in-rails-6_0/rails460x460.png"
date: 2018-10-08 11:42:00 +0300
categories: posts ruby rails
comments: true
permalink: /:categories/:title.html
---

<div class="picture">
  <img src="{{ "/images/posts/ruby/rails/what-is-new-in-rails-6_0/rails160x160.png" | absolute_url }}" title="Rails">
</div>

Hello!

This post about news and some changes that have been done in Rails 6.0.

I am [bogdanvlviv](https://github.com/bogdanvlviv) - [Rails Contributor](http://contributors.rubyonrails.org/contributors/bogdanvlviv/commits) and Ruby Programmer.

> Note that this post is being updated since Rails 6.0 has not been released yet.
> In order to be notified about new changes in this post, you can [subscribe to my mailing list]({{ site.mailchimp_signup_form_url }}), [follow me on Twitter](https://twitter.com/bogdanvlviv), or just refresh this page from time to time.
Stay tuned!

Links to sort out:

[Start Rails 6.0 development!!!](https://github.com/rails/rails/commit/1c383df324fdf0b68b3f54a649eb7d2a4f55bcb7)

[Rails 6 requires Ruby 2.4.1+](https://github.com/rails/rails/pull/32034)

[Parallel testing](https://github.com/rails/rails/pull/31900)

[Add Relation#pick as short-hand for single-value plucks](https://github.com/rails/rails/pull/31941)

[Add #create_or_find_by to lean on unique constraints](https://github.com/rails/rails/pull/31989)

[Introduce custom serializers to ActiveJob arguments](https://github.com/rails/rails/pull/30941)

[Deprecate update_attributes and update_attributes!](https://github.com/rails/rails/commit/5645149d3a27054450bd1130ff5715504638a5f5)

[`String#strip_heredoc` preserves frozenness`](https://github.com/rails/rails/pull/32037)

[String#truncate_bytes](https://github.com/rails/rails/pull/27319)

[Add support for timezones to Active Job](https://github.com/rails/rails/pull/32085)

[Add `:private` option to ActiveSupport's `Module#delegate`](https://github.com/rails/rails/pull/31944)

[Don't enforce UTF-8 by default](https://github.com/rails/rails/pull/32125)

[Support i18n key at translation of value in submit tag](https://github.com/rails/rails/pull/26799)

[Add "rails routes --expanded" mode](https://github.com/rails/rails/pull/32130)

[Enable select tag helper to mark `prompt` option as `selected` and/or `disabled` for `required` field](https://github.com/rails/rails/pull/32087)

[Introduce explicit rails server handler option](https://github.com/rails/rails/pull/32058)

[Add `before?` and `after?` methods to date and time classes](https://github.com/rails/rails/pull/32185)

[Disable ActionView::Template finalizers in test environment](https://github.com/rails/rails/pull/32418)

[Add AR::Base.base_class? predicate](https://github.com/rails/rails/pull/32417)

[Deprecate controller level force_ssl](https://github.com/rails/rails/pull/32277)

[Add #dig to ActionDispatch::Request::Session](https://github.com/rails/rails/pull/32446)

[Deprecate support for using `HOST` environment to specify server IP](https://github.com/rails/rails/pull/32540)

[Define callbacks on descendants](https://github.com/rails/rails/pull/31913)

[Introduce ActionDispatch::DebugExceptions interceptors](https://github.com/rails/rails/pull/23868)

[Add `touch_all` method to `ActiveRecord::Relation`](https://github.com/rails/rails/pull/31513)

[Part 1 Easy Multi db in Rails: Add basic rake tasks for multi db setup](https://github.com/rails/rails/pull/32274)
[Fix two-level database configurations with URLs](https://github.com/rails/rails/pull/32396)
[Fix structure:dump for multiple databases](https://github.com/rails/rails/commit/0a353a97869b2af256d4253533beeb38303cf753)
[Allow schema/structure load for multiple databases](https://github.com/rails/rails/commit/48d58494dbfaab759531c168f0103542e4f73614)
[Add multidb application test](https://github.com/rails/rails/commit/fa5a028ed9fccf54bb320e6a99a5a539de4c57ba)
[Don't create namespaced tasks if single db application](https://github.com/rails/rails/commit/5ddcda6d5f560d27bbae877d6ba8fb687d1b1a3b)

[Use ImageProcessing gem for ActiveStorage variants](https://github.com/rails/rails/pull/32471)

[Merge Arel](https://github.com/rails/arel)

[Update 'rails_welcome.png' to reflect a more diverse population](https://github.com/rails/rails/pull/32735)
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">rails link: Update &#39;rails_welcome.png&#39; to reflect a more diverse population<a href="https://t.co/oyUMkGwuBk">https://t.co/oyUMkGwuBk</a> <a href="https://t.co/LYKTsZ8NK4">pic.twitter.com/LYKTsZ8NK4</a></p>&mdash; Bogdan (@bogdanvlviv) <a href="https://twitter.com/bogdanvlviv/status/989618779628990464?ref_src=twsrc%5Etfw">April 26, 2018</a></blockquote>

[Changes Rails Welcome image on localhost:3000](https://github.com/rails/rails/pull/33191)

[Loaded associations should not run a new query when size is called](https://github.com/rails/rails/pull/32617)

[has_(one/many)_attached presence validation](https://github.com/rails/rails/pull/31956)

[Allow usage of strings as locals for partial renderer](https://github.com/rails/rails/pull/30647)

[Add Enumerable#index_with](https://github.com/rails/rails/pull/32523)

[Allow to override the full_message error format](https://github.com/rails/rails/pull/32956)

[Add `year_format` option to date_select tag.](https://github.com/rails/rails/pull/32190)

[Allow call `assert_enqueued_with` and `assert_enqueued_email_with` with no block ](https://github.com/rails/rails/pull/33258)

[Allow `queue` option to `assert_no_enqueued_jobs`](https://github.com/rails/rails/pull/33265)

[Allow configurable attribute name on `#has_secure_password`](https://github.com/rails/rails/pull/26764)

[Adds `Rails::Command::NotesCommand` and makes `rake notes` use it under the hood](https://github.com/rails/rails/pull/33220)

[Pass along arguments to underlying `get` method in `follow_redirect!`](https://github.com/rails/rails/pull/33299)

[Store newly-uploaded files on save rather than assignment](https://github.com/rails/rails/pull/33303)

[rails server: Allow to explicitly specify whether to output Rails's log to stdout](https://github.com/rails/rails/pull/28266)

[Add implicit to path conversion to uploaded file](https://github.com/rails/rails/pull/28676)

[Add a foreign-key constraint to the active_storage_attachments table for blobs](https://github.com/rails/rails/pull/33405)

[Show nested exceptions on the debug view](https://github.com/rails/rails/pull/32410)

[Add cpu time, idle time, and allocations features to log subscriber events](https://github.com/rails/rails/pull/33449)
[Add event object subscriptions to AS::Notifications](https://github.com/rails/rails/pull/33451)

[Bundler binstubs](https://github.com/rails/rails/pull/33202)

[Add Purpose Metadata to Cookies](https://github.com/rails/rails/pull/32937)

[33515 invert remove foreign key support "to_table"](https://github.com/rails/rails/pull/33530)

[Fix AM::Serializers::JSON#as_json method for timestamps](https://github.com/rails/rails/pull/31503)

[Add `Array#extract!`](https://github.com/rails/rails/pull/33137)

[Move `dev:cache` rake task to use Rails::Command](https://github.com/rails/rails/pull/33559)

[Allow `perform_enqueued_jobs` to be called without a block.](https://github.com/rails/rails/pull/33626)

[Improve Active Job test helpers](https://github.com/rails/rails/pull/33635)

[Deprecate calling private model methods from view helpers.](https://github.com/rails/rails/commit/047a893da7a43b8e115b854c73735b9e6475838e)

[Add database configuration to disable advisory locks](https://github.com/rails/rails/pull/33691)

[Action cable testing](https://github.com/rails/rails/pull/33659)

[Omit BEGIN/COMMIT statements for empty transactions](https://github.com/rails/rails/pull/32647)

[Fail more gracefully from ActiveStorage missing file exceptions](https://github.com/rails/rails/pull/33666)

[Part 2: Multi-db improvements, Refactor Active Record configurations](https://github.com/rails/rails/pull/33637)

[Part 3: Multi-db Improvements, identifying replica configurations](https://github.com/rails/rails/pull/33770)

[Emit warning for unknown inflection rule when generating model.](https://github.com/rails/rails/pull/33766)

[Make null_store the default cache store in test environment config ](https://github.com/rails/rails/pull/33773)

[Add hooks to ActiveJob around retries and discards](https://github.com/rails/rails/pull/33751)

[Deprecate most methods which were never used in `DatabaseLimits`](https://github.com/rails/rails/pull/33799)

[Maintain html_safe? on sliced HTML safe strings](https://github.com/rails/rails/pull/33808)

[https://github.com/rails/rails/pull/33798](ActionCable: add id option to redis adapter config )

[trace autoloads, and document hints for troubleshooting](https://github.com/rails/rails/commit/c03bba4f1f03bad7dc034af555b7f2b329cf76f5)

[update I18n fallbacks configuration to be compatible with i18n 1.1.0](https://github.com/rails/rails/pull/33574)

[Add `inspection_masks` to make values of sensitive database columns won't be exposed while call #inspect.](https://github.com/rails/rails/pull/33756)

[Add #unfreeze_time to ActiveSupport::Testing::TimeHelpers](https://github.com/rails/rails/pull/33813)

[Make sure there are no duplicated nested records with create_with](https://github.com/rails/rails/pull/33639)

[Use utf8mb4 character set by default for MySQL database](https://github.com/rails/rails/pull/33608)
[Bump minimum MySQL version to 5.5.8.](https://github.com/rails/rails/pull/33853)

[Skip delivery notification when perform_deliveries is false.](https://github.com/rails/rails/pull/33824)

[TaggedLogging to return a new logger instance](https://github.com/rails/rails/pull/27792)

[Include test helpers in ActionDispatch::IntegrationTest](https://github.com/rails/rails/pull/33849)

[Use faster globs for template resolving](https://github.com/rails/rails/pull/33860)

[Allow subclasses to redefine autosave callbacks for associated records.](https://github.com/rails/rails/pull/33378)

[SQLite3 adapter supports expression indexes.](https://github.com/rails/rails/pull/33874)
[SQLite3: Support multiple args function for expression indexes](https://github.com/rails/rails/commit/af653ef72190c6cd3e6b2a86786a981ad4bdb44e)

[Configure Active Storage route prefix](https://github.com/rails/rails/pull/33883)

[PostgreSQL: prepare for pg-1.1](https://github.com/rails/rails/pull/33188)

[Don't update counter cache unless the record is actually saved](https://github.com/rails/rails/pull/33913)

[Deprecate ActiveRecord::Result#to_hash in favor of #to_a](https://github.com/rails/rails/pull/33912)

[Add support for multi environment credentials.](https://github.com/rails/rails/pull/33521)

[Error when using "recyclable" cache keys with a store that does not support it](https://github.com/rails/rails/pull/33932)

[index option added for change_table migrations](https://github.com/rails/rails/pull/23593)

[Encode Content-Disposition filenames on send_data and send_file](https://github.com/rails/rails/pull/33829)

[Fix `transaction` reverting for migrations](https://github.com/rails/rails/pull/31604)

[Allow assert_enqueued_with/assert_performed_with methods to accept a proc for the args argument. This is useful to check if only a subset of arguments matches your expectations.](https://github.com/rails/rails/pull/33995)

[Add ActionCable::Channel::TestCase](https://github.com/rails/rails/pull/33969)

[Add `ActionController::Parameters#each_value`](https://github.com/rails/rails/pull/33979)

[Add migrations_paths option to migration generator](https://github.com/rails/rails/pull/33760)
[Add migrations_paths option to model generator](https://github.com/rails/rails/pull/33994)
[Refactor migrations_path command option to database](https://github.com/rails/rails/pull/34021)

[Treat `#delete_prefix`, `#delete_suffix` and `#unicode_normalize` results as non-`html_safe`. Ensure safety of arguments for `#insert`, `#[]=` and `#replace` calls on `html_safe` Strings.](https://github.com/rails/rails/pull/33990)

[Add deprecation warning when String#first and String#last receive negative integers](https://github.com/rails/rails/pull/33058)

[Remove undocumented `params` option from `url_for` helper](https://github.com/rails/rails/pull/33256)

[Make Webpacker the default JavaScript compiler for Rails 6](https://github.com/rails/rails/pull/33079)

[Deprecate the use of `LoggerSilence` in favor of `ActiveSupport::LoggerSilence`](https://github.com/rails/rails/pull/34045)

[Rename `Module#parent`, `Module#parents`, and `Module#parent_name` to `module_parent`, `module_parents`, and `module_parent_name`](https://github.com/rails/rails/pull/34051)
