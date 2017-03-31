
'use strict';

const chalk = require('chalk');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, './src')));
app.use('/rafa', express.static(path.join(__dirname, './sandbox/rafa')));

app.listen(port, () => {
  console.log(chalk.bold.cyan(`Server listening on port ${3000}!`))
});
