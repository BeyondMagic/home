const fs     = require('fs'),
      origin = `${__dirname}/../data/quotes.json`,
      log    = console.log;
let   file   = require(origin),
      args   = process.argv.slice(2),
      quote,
      save = true;

if (args[0] === '-n') {
  args.sice(1);
  save = false;
}

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
  case '-rl': case '--remlast': case '--removelast':
    file['quotes'].pop();
    break;  
  //////////////////

  ////////////////// remove specific quote
  case '-r': case '--remove': case '--rem':
    value = parseInt(args[0]);
    if (typeof === 'number')
      file['quotes'] = arr.filter(item => item !== args[0]);
    else {
      log('[home-remove-error] Use one integer (ID) of your quote to remove it.');
      process.exit();
    }
    break;

  //////////////////
  default:
    log(`
    [home-error] Please, specify an option:
      -a  -add      : add a quote (1-3 arguments)
      -rl --remlast : remove last quote (no arguments)
      -r  --remove  : remove a quote (number - one argument)
    Or add the following in the begging to not build (only save):
      -n
    `);
  //////////////////|
}

// save to file
fs.writeFileSync(origin, JSON.stringify(file, null, 2), 'utf8');

// json-merge & build pug file
if (save)
  require('child_process').exec('npm run build:quote'); 
