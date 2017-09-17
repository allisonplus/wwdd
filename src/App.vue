<template>
	<div id="app">

		<div class="aboutButton"><i class="fa fa-bars fa-2x"></i>
		</div> <!-- end .aboutButton -->

		<div class="aboutDrop">
			<p class="close">&times;</p>
			<div class="innerWrapper">
				<h2>{{msg}}</h2>
				<h3>For the times in our lives when we need words of wisdom from a higher power that embraces big hair and rhinestones.</h3>
				<p>Made with <i class="fa fa-heart"></i> by <a href="http://www.allisontarr.com">Allison Tarr</a></p>
			</div>
		</div> <!--/.aboutDrop-->

		<div class="wrapper clearfix">
			<h1>{{msg}}</h1>
				<div class="content">

					<Quote></Quote>

						<div class="twitter">
							<a href="https://twitter.com/intent/tweet?text=%22It%27s%20hard%20to%20be%20a%20diamond%20in%20a%20rhinestone%20world.%22%20%20-%20What%20Would%20Dolly%20Do%3F%20-%20whatwoulddollydo.com%20via%20%40allisonplus%20%20%20%20%23wwdd" target="_"><i class="fa fa-twitter"></i></a>
						</div> <!--/.twitter-->
				</div> <!--/.content-->
		</div> <!--/.wrapper-->
	</div>
</template>

<script>
import Quote from './components/Quote.vue';

export default {
	name: 'app',
	data () {
		return {
			msg: 'What Would Dolly Do?'
		}
	},
	components: {
		Quote
	}

}
</script>

<style lang="scss" scoped>
	@import './assets/styles/_global.scss';
</style>
