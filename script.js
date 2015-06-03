// Blank namespace
var wwdd = {};

// List of quotes inside array
wwdd.myQuotes = [
	"When someone shows you their true colors, believe them.", 
	"I'm not going to limit myself just because people won't accept the fact that I can do something else." ,
	"It takes a lot of strength to let yourself be truly vulnerable. & that is when you gain the most.",
	"A smart woman can take a man who thinks with his small head and quickly turn the would-be screwer into the screwee.",
	"I just love people who are bold enough to get out there and do what they do and do it without fear.",
	"The magic is in you. There ain't no crystal ball.",
	"You'll never do a whole lot unless you're brave enough to try.",
	"I feel glamorous on the inside, so I want to look like it on the outside.",
	"Leave something good in every day.",
	"Be whatever your dreams & your luck will let you be.",
	"We all have our drawbacks, but some of us are drawed back further than others.",
	"My spirit is too beautiful & alive to live in some dilapidated old body if it doesn't have to.",
	"If it weren't for laughter, I would have died years ago, so I try to find it in every situation.",
	"How can I not? How can I not sing, not dance, not feel this music?",
	"Don't fight change so much. Change is good.",
	"More important than the road itself are the people we meet along the way",
	"People are not perfect. They will sometimes take your love & give nothing back or, worse yet, use it against you. But they are still all there is.",
	"Just because you've lost your fuzz, don't mean you ain't a peach.",
	"Find out who you are and do it on purpose.", 
	"It's hard to be a diamond in a rhinestone world.",
	"I refuse to settle for something less than great.  & if it takes a lifetime, then that's how long I'll wait.",
	"I just don't feel like I have to explain myself. I love everybody.",
	"I will never retire unless I had to. As long as I'm able to get up in the morning, get that makeup on, get those high heels on.",
	"“After you reach a certain age, they think you’re over. Well, I will never be over.",
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
	"I won't miss a beat. I never have. I never will.",
	"Dreams are of no value if they're not equipped with wings.",
	"No dream you can’t accomplish. No mountain you can’t climb. So, activate your love and faith. You can change.",
	"Be true to yourself. You need to know what you will and won't put up with, and what you're willing to sacrifice.",
	"A desire, a wish and a dream are different things, and you've gotta figure out those little differences.",
	"I've been scared to death about a lot of things, but then I think, 'Okay, you gotta buckle up, girl. You've got yourself here, so get out there and just do it.'",
	"You can be rich in spirit, kindness, love and all those things that you can't put a dollar sign on.",
	"Mama just always said, 'you be what you are and you don't have to worry about nothing.'",
	"I'm not happy all the time, and I wouldn't want to be because that would make me a shallow person. But I do try to find the good in everybody.",
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