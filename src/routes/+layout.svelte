<script>
	import Header from './components/Header.svelte';
</script>

<div id="master" class="bg-dark bg-opacity-100">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	#master {
		overflow-x: hidden;
		height: 100vh;
	}
	* {
		color: #ffffff;
	}
</style>
