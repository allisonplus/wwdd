<template>
	<div id="app" class="transitional app" v-bind:class="current_colour">

		<div
			class="about-drop"
			v-bind:class="{ active: isActive }"
		>
			<div class="wrapper">
				<h2>{{msg}}</h2>
				<h3>For the times in our lives when we need words of wisdom from a higher power that embraces big hair and rhinestones.</h3>
				<p>Made with <i class="fa fa-heart"></i> by <a href="http://www.allisontarr.com">Allison Tarr</a></p>
			</div>
		</div> <!--/.about-drop-->

		<div class="wrapper">
				<Banner
					v-bind:msg="msg"
					v-bind:isActive="isActive"
				></Banner>

				<div class="content">

					<Quote
						v-bind:getRandomNumber="getRandomNumber"
						v-bind:getRandomColour="getRandomColour"
					>
					</Quote>
				</div> <!--/.content-->
		</div> <!--/.wrapper-->
	</div>
</template>

<script>
import Banner from './components/Banner.vue';
import Quote from './components/Quote.vue';

export default {
	name: 'app',
	data () {
		return {
			msg: 'What Would Dolly Do?',
			colours: 5,
			isActive: false,
			current_colour: ''
		}
	},
	methods: {
		getRandomNumber: function( arrayName ) {
			return Math.floor( Math.random()*( arrayName.length ) );
		},
		getRandomColour: function( arrayName ) {
			let index = this.getRandomNumber( this.background_colours );
			this.current_colour = this.background_colours[index];
		},
	},
	computed: {
		background_colours: function() {
			let bg_array = [];

			for (var i = 1; i <= this.colours; i++) {
				bg_array.push( `background_${i}` );
			}

			return bg_array;
		}
	},
	mounted: function() {
		this.getRandomColour();
	},
	components: {
		Banner,
		Quote
	}
}
</script>

<style lang="scss" scoped>
	@import './assets/styles/_global.scss';
</style>
