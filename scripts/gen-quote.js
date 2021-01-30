const fs     = require('fs'),
      origin = `${__dirname}/../data/quotes.json`,
      log    = console.log;//,
      //merge  = `${__dirname}/../node_modules/jsonmerge-cli/bin/jsonmerge.js`;
let   file   = require(origin),
      args   = process.argv.slice(2),
      quote;


// use
switch (args[0]) {

  //////////////// add quote
  case '-a': case '--add':
    // clean option
    args = args.slice(1);
    if (args.length === 0 || args.length > 3) {
      log(`
      [home-addquote-error] Use at least 1 argument after the option (-a, -add), and at most 3.
      Respectively they can be the quote message, author and source.
      `);
      process.exit();
    }
    // push new quote
    quote = args;
    file['quotes'].push(quote);
    break;
  /////////////////

  /////////////////
  case '-rl': case '--remlast':
    file['quotes'].pop();
    break;  
  //////////////////

  // remove specific quote

  //////////////////
  default:
    log(`
    [home-error] Please, specify an option:
      -a  -add      : add a quote (1-3 arguments)
      -rl --remlast : remove last quote (no arguments)
    `);
  //////////////////|
}

// save to file
fs.writeFileSync(origin, JSON.stringify(file, null, 2), 'utf8');

// json-merge & build pug file
require('child_process').exec('npm run build:quote'); 
