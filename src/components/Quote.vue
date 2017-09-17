<template>
	<div class="quote">
		{{quote}}
	</div>
</template>

<script>
	import {quotes} from '../assets/quotes.json';

	export default {
		name: 'quote',
		data: function() {
			return {
				quote: "",
			}
		},
		methods: {
			getRandomQuote: function() {
				let index = Math.floor( Math.random()*( quotes.length ) );
				this.quote = quotes[index];
			}
		},
		mounted: function() {
			this.getRandomQuote();
		}
	}
</script>
