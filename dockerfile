FROM ruby:3.2.2
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get update -qq \
    && apt-get install -y nodejs npm yarn 

RUN mkdir /railsTest
WORKDIR /railsTest

COPY Gemfile /railsTest/Gemfile
COPY Gemfile.lock /railsTest/Gemfile.lock

RUN bundle install
COPY . /railsTest
# コンテナ起動時に実行させるスクリプト

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001
