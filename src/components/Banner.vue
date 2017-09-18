<template>
	<header>
		<button
			class="about-button"
			v-bind:class="{ active: isActive }"
			v-on:click="isActive = !isActive"
		>
			<span class="mobile-menu-bar line-1"></span>
			<span class="mobile-menu-bar line-2"></span>
			<span class="mobile-menu-bar line-3"></span>
		</button>
		<h1>{{msg}}</h1>
	<div class="twitter">
		<a href="https://twitter.com/intent/tweet?text=%22It%27s%20hard%20to%20be%20a%20diamond%20in%20a%20rhinestone%20world.%22%20%20-%20What%20Would%20Dolly%20Do%3F%20-%20whatwoulddollydo.com%20via%20%40allisonplus%20%20%20%20%23wwdd" target="_"><i class="fa fa-twitter"></i></a>
	</div> <!--/.twitter-->
	</header>
</template>

<script>
	export default {
		name: 'banner',
		props: [ 'msg', 'isActive' ],
	}
</script>

<style lang="scss">
	@import '../assets/styles/_global.scss';
</style>
