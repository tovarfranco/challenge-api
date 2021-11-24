#!/bin/bash

# change cwd
cd "$(dirname "$0")"

# start infra
clear \
  && npm install \
  && npm start \
  && echo "Done!"