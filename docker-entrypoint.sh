#!/usr/bin/env bash

export NODE_ENV=development
npm install --silent
exec "$@"
