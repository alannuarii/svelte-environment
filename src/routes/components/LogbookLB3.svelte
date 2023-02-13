<script>
	import InputLb3 from './InputLB3.svelte';
	import { date } from '../../lib/js/date';
	import { onMount } from 'svelte';
	export let lb3;
	export let mutasi = [];
	export let saldo;

	const convert = (num) => {
		return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	};

	const calculate = (dataLB3) => {
		const arrayLB3 = [];
		for (const mutasi of dataLB3) {
			if (mutasi.status === 'masuk') {
				mutasi.jumlah *= 1;
			} else {
				mutasi.jumlah *= -1;
			}
			arrayLB3.push(mutasi.jumlah);
		}
		for (const lb3 of arrayLB3) {
			saldo += lb3;
		}
	};

	onMount(() => {
		calculate(mutasi);
	});
</script>

<section>
	<div class="mb-3">
		<h5 class="ps-3">LOGBOOK {lb3.toUpperCase()}</h5>
	</div>
	<div class="d-flex justify-content-between me-3 mb-3">
		<div class="btn btn-primary ms-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
			Input
		</div>
		<InputLb3 jenis={lb3.replace(/ /g, '_')} />
		<span class="badge text-dark bg-dark-subtle saldo"
			>Saldo saat ini <span class="badge text-bg-secondary ms-1">{saldo} Ton</span></span
		>
	</div>
	<div class="px-3 mb-3">
		<ol class="list-group list-group-numbered">
			{#each mutasi as mts}
				<li
					class="list-group-item bg-secondary text-light border-0 mb-1 d-flex justify-content-between align-items-center"
				>
					<div class="ms-2 me-auto">
						<div>{date(mts.tanggal)}</div>
					</div>
					<span
						class="badge rounded-pill px-3 py-2 {mts.status === 'masuk'
							? 'bg-danger'
							: 'bg-success'}">{convert(mts.jumlah)}</span
					>
				</li>
			{/each}
		</ol>
	</div>
	<div class="ms-3">
		<h6 class="mb-1">Keterangan:</h6>
		<span class="badge text-bg-danger">Masuk</span>
		<span class="badge text-bg-success">Keluar</span>
	</div>
</section>

<style>
	.saldo {
		font-size: 18px;
		font-weight: 300;
	}
	h6 {
		font-size: 15px;
		font-weight: 300;
		margin-bottom: -2px;
	}
</style>
