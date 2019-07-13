#!/usr/bin/env node

const { Compose } = require('./lib');

const [, , ...args] = process.argv;

Compose(args);
