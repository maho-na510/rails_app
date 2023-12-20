// esbuild.js
const esbuild = require('esbuild');
const path = require('path');

const config = require('./esbuild.config.js');

esbuild.build(config).catch(() => process.exit(1));