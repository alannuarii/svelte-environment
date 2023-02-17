<script>
	import InputParameter from './InputParameter.svelte';

	export let parameter;
	export let satuan;
</script>

<section>
	<div class="text-center mb-3">
		<h1>LOGBOOK HARIAN</h1>
		<h2>PENGUKURAN {parameter}</h2>
		<div class="d-flex align-items-center justify-content-between mt-3 mx-3">
			<div class="d-flex align-items-center bg-secondary p-2 rounded-2">
				<h6 class="me-2">Periode</h6>
				<input type="month" class="form-control" name="bulan" />
			</div>
			<div class="btn btn-primary ms-3" data-bs-toggle="offcanvas" data-bs-target="#parameter">
				Input
			</div>
			<InputParameter />
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
				<tr>
					<td>2023-02-01</td>
					<td>-1</td>
				</tr>
				<tr>
					<td>2023-02-02</td>
					<td>-1</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>

<style>
	* {
		color: #ffffff;
	}
</style>
