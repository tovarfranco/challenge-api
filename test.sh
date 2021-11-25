#!/bin/bash

# change cwd
cd "$(dirname "$0")"

# start infra
clear \
  && npm install \
  && npm test \
  && echo "Done!"