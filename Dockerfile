FROM ruby:2.5.1

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile /app/
COPY Gemfile.lock /app/
RUN bundle install

COPY . /app/

ENTRYPOINT ["bundle", "exec"]

CMD ["jekyll", "serve", "--drafts", "--host", "0.0.0.0"]
