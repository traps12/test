FROM node

RUN apt-get update && \
DEBIAN_FRONTEND="noninteractive" \
apt-get install -y --no-install-recommends \
chromium \
libgconf-2-4 \
openjdk-8-jre-headless \
&& rm -rf /var/lib/apt/lists/*

# USER node

# RUN mkdir -p /protractor && \
# npm install -g protractor

# RUN webdriver-manager update

# WORKDIR /protractor
