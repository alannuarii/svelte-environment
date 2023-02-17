<script>
	import InputParameter from './InputParameter.svelte';
</script>

<section>
	<div class="text-center mb-3">
		<h1>LOGBOOK HARIAN</h1>
		<h2>PENGUKURAN PH</h2>
		<div class="d-flex align-items-center mt-3 mx-3">
			<h5 class="me-2">Periode</h5>
			<input type="month" class="form-control" name="bulan" />
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
					<th scope="col">Nilai Konsentrasi</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<td>Thornton</td>
					<td>@fat</td>
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
