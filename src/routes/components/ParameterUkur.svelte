<script>
	export let debit;
	export let ph;
</script>

<section class="text-center px-5">
	<div class="list-group text-start">
		<div
			class="list-group-item list-group-item-action bg-secondary text-light border border-0 mb-2 position-relative"
		>
			<span class="kode">Logbook Harian</span>
			<h6>Pengukuran Debit</h6>

			<a href={debit} class="position-absolute top-50 end-0 translate-middle-y me-4 "
				><i class="bi-chevron-right text-light" /></a
			>
		</div>
		<div
			class="list-group-item list-group-item-action bg-secondary text-light border border-0 mb-2 position-relative"
		>
			<span class="kode">Logbook Harian</span>
			<h6>Pengukuran ph</h6>
			<a href={ph} class="position-absolute top-50 end-0 translate-middle-y me-4 "
				><i class="bi-chevron-right text-light" /></a
			>
		</div>
	</div>
</section>

<style>
	.list-group-item {
		padding: 20px;
	}
	h6 {
		font-size: 20px;
		font-weight: 700;
	}
	.kode {
		font-size: 15px;
	}
	i {
		font-size: 17px;
		cursor: pointer;
	}
</style>
