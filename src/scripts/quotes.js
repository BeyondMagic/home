(function (){

  if (TIME_NOW_COMPARE !== localStorage['time-old-quote']) {
    const quote = qts[qts.length * Math.random() | 0];
    localStorage['time-old-quote'] = loadDate(); // old quote to verify in next load page

    localStorage['old-quote'] = quote[0];
    localStorage['old-author'] = quote[1];
    localStorage['old-source'] = quote[2];

    console.log('New quote loaded! New day! New you!')
    // new time_now_compare
    // new me, baby
  }
  else
    console.log('No quotes loaded! Have a good day! You got this!');
  
  // quote
  document.getElementById('nowquote').innerHTML = localStorage['old-quote'];
  
  // author ( if there is )
  if (localStorage['old-author'] !== 'undefined')
    document.getElementById('nowauthor').innerHTML = localStorage['old-author']
  else
    document.getElementById('author-container').remove();
  
  // source ( if there is )
  if (localStorage['old-source'] !== 'undefined') 
    document.getElementById('nowsource').innerHTML = localStorage['old-source']
  else
    document.getElementById('source-container').remove();

})();
