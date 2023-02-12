<script>
	import InputLb3 from './InputLB3.svelte';
	export let lb3;
</script>

<section>
	<div class="d-flex align-items-center mb-3">
		<h5 class="px-3 me-auto">LOGBOOK {lb3.toUpperCase()}</h5>
		<div class="btn btn-primary me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
			Input
		</div>
		<InputLb3 jenis={lb3.replace(/ /g, '_')} />
	</div>
	<div class="px-3">
		<ol class="list-group list-group-numbered">
			<li
				class="list-group-item bg-secondary text-light border-0 mb-1 d-flex justify-content-between align-items-center"
			>
				<div class="ms-2 me-auto">
					<div>Subheading</div>
				</div>
				<span class="badge bg-primary rounded-pill px-3 py-2">14</span>
			</li>
			<li
				class="list-group-item bg-secondary text-light border-0 mb-1 d-flex justify-content-between align-items-center"
			>
				<div class="ms-2 me-auto">
					<div>Subheading</div>
				</div>
				<span class="badge bg-primary rounded-pill px-3 py-2">14</span>
			</li>
			<li
				class="list-group-item bg-secondary text-light border-0 mb-1 d-flex justify-content-between align-items-center"
			>
				<div class="ms-2 me-auto">
					<div>Subheading</div>
				</div>
				<span class="badge bg-primary rounded-pill px-3 py-2">14</span>
			</li>
		</ol>
	</div>
</section>
