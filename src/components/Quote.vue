<template>
	<div class="quote">
		<p>{{quote}}</p>
	<button @click="getRandomQuote" class="button">Get More Sparkle</button>
	</div>
</template>

<script>
	import {quotes} from '../assets/quotes.json';

	export default {
		name: 'quote',
		props: [ 'getRandomNumber', 'getRandomColour' ],
		data: function() {
			return {
				quote: "",
			}
		},
		methods: {
			getRandomQuote: function() {
				let index = this.getRandomNumber(quotes);
				this.quote = `"${quotes[index]}"`;
				this.getRandomColour();
			}
		},
		mounted: function() {
			this.getRandomQuote();
		}
	}
</script>

<style lang="scss">
	@import '../assets/styles/_global.scss';
</style>
