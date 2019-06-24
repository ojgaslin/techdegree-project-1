

/***
  Created array of objects containing ten objects named 'quotes.'
  Each object of the array has quote, year, source, citation, and tags property.
  Console.log() used to log the array of quotes to the console for testing.
***/
let quotes = [
  {
    quote: "The only real mistake is the one from which we learn nothing.",
    year: 1930,
    source: "Henry Ford",
    citation: "BrainyQuote",
    tags: "Inspirational"
  },
  {
    quote: "Whether you think that you can, or that you can't, you are usually right.",
    year: 1930,
    source: "Henry Ford",
    citation: "BrainyQuote",
    tags: "Inspirational"
  },
  {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    year: null,
    source: "Henry Ford",
    citation: "BrainyQuote",
    tags: "Inspirational"
  },
  {
    quote: "War is peace. Freedom is slavery. Ignorance is strength.",
    year: 1949,
    source: "George Orwell",
    citation: "BrainyQuote",
    tags: "Famous Author"
  },
  {
    quote:'Power is in tearing human minds to pieces and putting them together again in new shapes of your own choosing.',
    year: 1949,
    source: "George Orwell",
    citation: "BrainyQuote",
    tags: "Famous Author"
  },
  {
    quote: "History doesn't repeat itself but it often rhymes.",
    year: 1884,
    source: "Mark Twain",
    citation: "BrainyQuote",
    tags: "Famous Author"
  },
  {
    quote: "I will honor Christmas in my heart, and try to keep it all the year.",
    year: 1843,
    source: "Charles Dickens",
    citation: "BrainyQuote",
    tags: "Famous Author"
  },
  {
    quote: "May the forces of evil become confused on the way to your house.",
    year: 1990,
    source: "George Carlin",
    citation: "BrainyQuote",
    tags: "Comedian"
  },
  {
    quote: "You're only given a little spark of madness. You mustn't lose it.",
    year: 1997,
    source: "Robin Williams",
    citation: "BrainyQuote",
    tags: "Comedian"
  },
  {
    quote: "I’m not funny. What I am is brave.",
    year: 1955,
    source: "Lucille Ball",
    citation: "BrainyQuote",
    tags: "Comedian"
  }
];

/***
  'getRandomQuote' function created.
  The variable randomNumber stores a random whole number zero to nine.
  The corresponding object in the 'quotes' array is returned according
  to random number generated previously
***/
function getRandomQuote(){
  var randomNumber = Math.floor( Math.random() * 9 );
  return quotes[randomNumber];
}

/***
'Colors' array created for 'getRandomColor' function.
***/

let colors = [
'DeepPink','MediumSeaGreen','FireBrick','LightSeaGreen','Aquamarine',
'RoyalBlue', 'Chocolate', 'Salmon', 'RebeccaPurple' ];

/***
'getRandomColor' function created to generate a random number and select a
random color from the 'colors' array.
***/

function getRandomColor() {
  var randomColor = Math.floor( Math.random() * 8);
  return colors[randomColor];
}
/***
'changeBackground' function created which changes background color when
'Show another quote' button is clicked.
***/
function changeBackground() {
   document.body.style.background = getRandomColor();
}



   //Change quote every 10 seconds
   //source: https://www.w3schools.com/js/js_timing.asp

window.setInterval(printQuote, 10000);

/***
  'printQuote' function created.
  'getRandomQuote' function is assigned to 'randomQuote' variable.
  'randomQuoteString' variable created for the empty HTML string.
  HTML string is built by first using dot notation to add the quote property of
  the object and then the source property of the object.
  if statement used to check for the 'citation'property.
  if statement used to check for the 'year' property.
  if statement used to check for the 'tags' property.
  HTML string 'randomQuoteString' is printed into the HTML file.
***/
function printQuote() {
var randomQuote = getRandomQuote();
var randomQuoteString = '';
randomQuoteString = '<p class="quote">'+ randomQuote.quote + '</p>';
randomQuoteString += '<p class="source">' + randomQuote.source;
if ( randomQuote.citation ) {
  randomQuoteString += '<span class = "citation"> ' + randomQuote.citation + '</span>';
}
if ( randomQuote.year ) {
  randomQuoteString += '<span class ="year">' + randomQuote.year + '</span>';
}
if ( randomQuote.tags ) {
  randomQuoteString += '<span class = "tags">' + randomQuote.tags + ' </span>';
}
randomQuoteString += '</p>';
var div = document.getElementById("quote-box");
div.innerHTML = randomQuoteString;
};



/***
  Pushing the "Show another quote" button  triggers the event listener, and
  invokes the 'printQuote' function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBackground, false);
