<script>
	import InputParameter from './InputParameter.svelte';
	import { formatTanggal, yearMonthID } from '../../lib/js/date';
	import { page } from '$app/stores';
	import { writeFile } from 'xlsx';
	import * as XLSX from 'xlsx/xlsx.mjs';

	export let parameter;
	export let satuan;
	export let jenis;
	export let dataHarian;
	export let dataHarianFix;

	const exportToExcel = () => {
		// membuat objek workbook baru
		const workbook = XLSX.utils.book_new();

		// mengubah nama key dari object
		const newData = dataHarianFix.map((obj) => ({
			'TANGGAL (YYYY-MM-DD)': obj.tanggal,
			'NILAI KONSENTRASI': obj.nilai
		}));

		// membuat worksheet baru
		const worksheet = XLSX.utils.json_to_sheet(newData, {
			header: ['TANGGAL (YYYY-MM-DD)', 'NILAI KONSENTRASI']
		});

		// menambahkan worksheet ke workbook
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

		// menyimpan file excel dengan nama 'data.xlsx'
		writeFile(workbook, 'data.xlsx');
	};

	$: searchParams = $page.url.search;
	$: valueSearch = searchParams.slice(7);
</script>

<section>
	<div class="text-center mb-3">
		<h2>LOGBOOK HARIAN</h2>
		<h5>PENGUKURAN {parameter.toUpperCase()} LIMBAH {jenis.toUpperCase()}</h5>
		<div class="d-flex align-items-center justify-content-between mt-3 mx-3">
			<div class="d-flex flex-column border p-2 rounded-2 w-100">
				<div class="d-flex align-items-center p-2">
					<h6 class="me-2">Periode</h6>
					<h6 class="py-1 px-2 bg-dark-subtle text-dark rounded-2">{yearMonthID(valueSearch)}</h6>
				</div>
				<form>
					<input
						type="month"
						class="form-control"
						name="bulan"
						bind:value={valueSearch}
						onchange="this.form.submit()"
					/>
				</form>
			</div>
			<div class="ms-2 d-flex flex-column">
				<div
					class="btn btn-primary w-100 mb-2"
					data-bs-toggle="offcanvas"
					data-bs-target="#parameter"
				>
					Input
				</div>
				<InputParameter {jenis} {parameter} />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="btn btn-success w-100" on:click={exportToExcel}>Export</div>
			</div>
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
						<td>{formatTanggal(dh.tanggal)}</td>
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
	h5 {
		font-size: 18px;
	}
	h6 {
		margin: 0px;
		font-size: 18px;
	}
</style>
