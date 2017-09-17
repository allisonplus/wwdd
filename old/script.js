// Blank namespace
var wwdd = {};



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
	$('.button').on('click', function(){
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
