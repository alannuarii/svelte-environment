<script>
	export let showError = false;
	export let label;
	export let inputValue = '';

	function validateInput(event) {
		const value = event.target.value;

		if (!/^\d+(\.\d+)?$/.test(value)) {
			showError = true;
		} else {
			showError = false;
			inputValue = value;
		}
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="form-label">{label}</label>
<input
	type="text"
	class="form-control"
	bind:value={inputValue}
	on:input={validateInput}
	name="jumlah"
	required
/>
{#if showError}
	<p class="text-danger mt-1">Masukkan angka</p>
{/if}
