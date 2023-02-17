<script>
	import InputDecimal from './InputDecimal.svelte';
	export let jenis;

	let showError = false;
</script>

<div
	class="offcanvas offcanvas-bottom text-bg-dark"
	tabindex="-1"
	id="offcanvasBottom"
	aria-labelledby="offcanvasBottomLabel"
>
	<div class="offcanvas-header">
		<h5 class="offcanvas-title" id="offcanvasBottomLabel">Mutasi LB3</h5>
		<button type="button" class="btn-close bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close" />
	</div>
	<div class="offcanvas-body small">
		<form method="POST">
			<input type="hidden" name="jenis" value={jenis} />
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Tanggal</label>
				<input type="date" class="form-control" name="tanggal" required />
			</div>
			<div class="mb-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Status</label>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="status"
						id="flexRadioDefault1"
						value="masuk"
						required
					/>
					<label class="form-check-label" for="flexRadioDefault1">Masuk</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="status"
						id="flexRadioDefault2"
						value="keluar"
						required
					/>
					<label class="form-check-label" for="flexRadioDefault2">Keluar</label>
				</div>
			</div>
			<div class="mb-4">
				<InputDecimal bind:showError label='Jumlah (Ton)' />
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
		min-height: 420px;
	}
</style>
