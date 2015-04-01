// Blank namespace
var wwdd = {};

// List of quotes inside array
wwdd.myQuotes = [
	"When someone shows you their true colors, believe them.", 
	"I'm not going to limit myself just because people won't accept the fact that I can do something else." ,
	"Find out who you are and do it on purpose.", 
	"It's hard to be a diamond in a rhinestone world.",
	"I refuse to settle for something less than great.  & if it takes a lifetime, then that's how long I'll wait.",
	"...sometimes a failure is just a success dressed in different clothes.",
	"If you want the rainbow, you have to put up with the rain.",
	"As far as people who act like they know what is best for me - I know there is no greater expert on me than me.",
	"If something is broken, then let's fix it. If it's wrong, then let's make it right.",
	"If you don't like the road you're walking, start paving another one.",
	"It's a good thing I was born a girl; otherwise I'd be a drag queen.",
	"I never let a rhinestone go unturned.",
	"I'll take a sandwich and a shake over a joint and a jug anytime.",
	"I can tell you where to put it if I don't like where you've  got it.",
	"You just have to figure out where the unhappiness is coming from and then set about fixing it.",
	"Do not confuse dreams with wishes. There is a difference.",
	"You have to work hard at being happy, just like you have to work hard at being miserable.",
	"Don't get so busy making a living that you forget to make a life.",
	"You'd be surprised how much it costs to make a person look this cheap.",
	"So when something doesn't go my way or I stumble, I pick myself up, make sure I brush off my rhinestones, & try not to harden my heart over it.",
	"They think I'm simple-minded because I seem to be happy. Why shouldn't I be happy? I have everything I ever wanted and more.  Maybe I am simple-minded. Maybe that's the key: simple.",
	"If I see something saggin', baggin', or draggin', I'm gone have it nipped, tucked, or sucked!"
];

// Function that loads first quote on page load
$(document).ready(function() {
	$(".quote").html("“" + wwdd.myQuotes[wwdd.random()] + "”");
});

// Function that finds a random number using rounding & the length of the array
wwdd.random = function() {
	return Math.floor(Math.random()*(wwdd.myQuotes.length));
};

// When button is clicked, fades out current quote, then fades in next quote
$(function(){
	$('button').on('click', function(){
		$(".quote").fadeOut(function() {
			$(".quote").fadeIn().html("“" + wwdd.myQuotes[wwdd.random()] + "”");
		});
	});
});

// Drop Down Section

$('.aboutButton').on('click', function(){
	$('.aboutDrop').slideToggle(500);
});

$('.close').on('click', function(){
	$('.aboutDrop').slideToggle(500);
});