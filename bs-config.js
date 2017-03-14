'use strict';

const baseDir = process.env.SANDBOX ? `./sandbox/${process.env.SANDBOX}` : './src';

module.exports = () => ({
  port: 3000,
  files: [`${baseDir}/**/*.{html,htm,css,js}`],
  server: {
    baseDir
  }
});