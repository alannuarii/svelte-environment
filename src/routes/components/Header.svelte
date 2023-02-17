<script>
	import Menu from './Menu.svelte';
</script>

<nav class="navbar bg-dark mb-4">
	<div class="container-fluid">
		<a href="/"><span class="navbar-brand mb-0 h1 text-light">EnvironApp</span></a>
		<div>
			<i
				class="bi-list text-light"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight"
			/>
			<Menu />
		</div>
	</div>
</nav>

<style>
	nav {
		height: 70px;
	}
	.bi-list {
		font-size: 30px;
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}
</style>
