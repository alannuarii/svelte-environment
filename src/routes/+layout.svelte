<script>
	import Header from './components/Header.svelte';
	import mobile from '../lib/img/mobile.svg';
</script>

<div id="master" class="bg-dark bg-opacity-100 d-sm-none">
	<Header />
	<main>
		<slot />
	</main>
</div>
<dir
	id="notmobile"
	class="d-none d-sm-block position-absolute top-50 start-50 translate-middle text-center border py-4 rounded-5 shadow-sm"
>
	<img src={mobile} class="img-fluid w-75 mb-5" alt="Open just for mobile" />
	<h3 class="text-dark">Akses hanya untuk <span class="text-primary">mobile!</span></h3>
</dir>

<style>
	#master {
		overflow-x: hidden;
		height: 100vh;
	}
	* {
		color: #ffffff;
	}
	#notmobile h3 {
		font-weight: 300;
	}
	#notmobile span {
		font-weight: 700;
	}
</style>
