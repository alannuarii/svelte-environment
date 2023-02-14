<script>
	import { date, getToday } from '../../lib/js/date';
	let today = getToday();
	import { onMount } from 'svelte';

	export let data;
	$: saldoSludge = 0;
	$: saldoOliBekas = 0;
	$: saldoMajunBekas = 0;
	$: saldoFilterBekas = 0;

	let mutasiLB3 = data.data;

	const calculate = (dataLB3) => {
		const arraySludge = [];
		const arrayOli = [];
		const arrayMajun = [];
		const arrayFilter = [];
		for (const mutasi of dataLB3) {
			if (mutasi.status === 'masuk') {
				mutasi.jumlah *= -1;
			} else {
				mutasi.jumlah *= 1;
			}
			if (mutasi.jenis === 'sludge') {
				arraySludge.push(mutasi.jumlah);
			} else if (mutasi.jenis === 'oli_bekas') {
				arrayOli.push(mutasi.jumlah);
			} else if (mutasi.jenis === 'majun_bekas') {
				arrayOli.push(mutasi.jumlah);
			} else if (mutasi.jenis === 'filter_bekas') {
				arrayOli.push(mutasi.jumlah);
			}
		}
		for (const sludge of arraySludge) {
			saldoSludge += sludge;
		}
		for (const oli of arrayOli) {
			saldoOliBekas += oli;
		}
		for (const majun of arrayMajun) {
			saldoMajunBekas += majun;
		}
		for (const filter of arrayFilter) {
			saldoFilterBekas += filter;
		}
	};

	onMount(() => {
		calculate(mutasiLB3);
	});
</script>

<section class="text-center px-5">
	<div class="mb-4">
		<h1>SALDO LIMBAH B3</h1>
		<h4><i class="bi-calendar3 me-2" /> {date(today)}</h4>
	</div>
	<div class="row mb-4">
		<div class="col-6">
			<div>
				<div
					class="saldo py-4 rounded-0 bg-secondary d-flex flex-column justify-content-center align-items-center"
				>
					<h6 class="text-light">{saldoSludge}</h6>
					<p>Ton</p>
				</div>
				<a href="/logbook-lb3/sludge"
					><h5 class="bg-primary text-light py-3">
						Sludge <i class="bi-arrow-right-circle ms-1" />
					</h5></a
				>
			</div>
		</div>
		<div class="col-6">
			<div>
				<div
					class="py-4 rounded-0 bg-secondary d-flex flex-column justify-content-center align-items-center"
				>
					<h6 class="text-light">{saldoOliBekas}</h6>
					<p>Ton</p>
				</div>
				<a href="/logbook-lb3/oli-bekas"
					><h5 class="bg-primary text-light py-3">
						Oli Bekas <i class="bi-arrow-right-circle ms-1" />
					</h5></a
				>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-6">
			<div>
				<div
					class="py-4 rounded-0 bg-secondary d-flex flex-column justify-content-center align-items-center"
				>
					<h6 class="text-light">{saldoMajunBekas}</h6>
					<p>Ton</p>
				</div>
				<a href="/logbook-lb3/majun-bekas"
					><h5 class="bg-primary text-light py-3">
						Majun Bekas <i class="bi-arrow-right-circle ms-1" />
					</h5></a
				>
			</div>
		</div>
		<div class="col-6">
			<div>
				<div
					class="py-4 rounded-0 bg-secondary d-flex flex-column justify-content-center align-items-center"
				>
					<h6 class="text-light">{saldoFilterBekas}</h6>
					<p>Ton</p>
				</div>
				<a href="/logbook-lb3/filter-bekas"
					><h5 class="bg-primary text-light py-3">
						Filter Bekas <i class="bi-arrow-right-circle ms-1" />
					</h5></a
				>
			</div>
		</div>
	</div>
</section>

<style>
	a {
		text-decoration: none;
	}
	h5 {
		font-size: 17px;
	}
	h6 {
		font-size: 30px;
		margin-bottom: -2px;
		font-weight: 700;
	}
	p {
		margin: 0px;
		font-size: 20px;
	}
</style>
