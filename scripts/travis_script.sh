#!/bin/bash
set -e
export DISPLAY=:99.0
sh -e /etc/init.d/xvfb start

npm run clean
npm run build
npm test
