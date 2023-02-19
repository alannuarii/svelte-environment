<script>
	import InputParameter from './InputParameter.svelte';
	import { tanggal } from '../../lib/js/date';
	import { page } from '$app/stores';

	export let parameter;
	export let satuan;
	export let jenis;
	export let dataHarian;

	$: searchParams = $page.url.search;
	$: valueSearch = searchParams.slice(7)
</script>

<section>
	<div class="text-center mb-3">
		<h1>LOGBOOK HARIAN</h1>
		<h2>PENGUKURAN {parameter.toUpperCase()}</h2>
		<div class="d-flex align-items-center justify-content-between mt-3 mx-3">
			<div class="d-flex align-items-center bg-secondary p-2 rounded-2">
				<h6 class="me-2">Periode</h6>
				<form>
					<input type="month" class="form-control" name="bulan" bind:value={valueSearch} onchange="this.form.submit()" />
				</form>
			</div>
			<div class="btn btn-primary ms-3" data-bs-toggle="offcanvas" data-bs-target="#parameter">
				Input
			</div>
			<InputParameter {jenis} {parameter} />
		</div>
	</div>
	<div class="mx-3">
		<table class="table table-bordered text-center">
			<thead>
				<tr>
					<th scope="col">Tanggal</th>
					<th scope="col">Nilai {satuan}</th>
				</tr>
			</thead>
			<tbody>
				{#each dataHarian as dh}
					<tr>
						<td>{tanggal(dh.tanggal)}</td>
						<td>{dh.nilai}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	* {
		color: #ffffff;
	}
	h6 {
		margin: 0px;
	}
</style>
