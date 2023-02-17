<script>
	import InputDecimal from './InputDecimal.svelte';

	let showError = false;
</script>

<div
	class="offcanvas offcanvas-bottom text-bg-dark"
	tabindex="-1"
	id="parameter"
	aria-labelledby="offcanvasBottomLabel"
>
	<div class="offcanvas-header">
		<h5 class="offcanvas-title" id="offcanvasBottomLabel">Input Data Harian</h5>
		<button
			type="button"
			class="btn-close bg-secondary"
			data-bs-dismiss="offcanvas"
			aria-label="Close"
		/>
	</div>
	<div class="offcanvas-body small text-start">
		<form method="POST">
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Tanggal</label>
				<input type="date" class="form-control" name="tanggal" required />
			</div>
			<div class="mb-4">
				<InputDecimal bind:showError label="Nilai Konsentrasi" />
			</div>
			<div class="d-flex justify-content-center">
				<button type="reset" class="btn btn-outline-primary me-1">Reset</button>
				<button type="submit" class="btn btn-primary" disabled={showError}>Submit</button>
			</div>
		</form>
	</div>
</div>

<style>
	.offcanvas {
		min-height: 320px;
	}
</style>
