<script>
	import { dataKonversi } from '../../lib/js/konversi';
	import InputDecimal from '../components/InputDecimal.svelte';

	let inputValue = 0;
	let index = 0;

	const kalkulasi = (input, satuan) => {
		if (index === 5 || index === 6 || index === 11) {
			const result = (input * satuan * 0.9) / 1000;
			return result;
		} else {
			const result = (input * satuan) / 1000;
			return result;
		}
	};
</script>

<section>
	<div class="mx-3 p-3">
		<div class="mb-5">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="form-label">Jenis LB3</label>
			<select class="form-select" aria-label="Default select example" bind:value={index}>
				{#each dataKonversi as lb3, index}
					<option value={index}>{lb3.jenis}</option>
				{/each}
			</select>
		</div>
		<div class="row text-center">
			<div class="col-6">
				<InputDecimal label="Jumlah" bind:inputValue />
			</div>
			<div class="col-6">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="form-label">Hasil Konversi (Ton)</label>
				<input
					type="text"
					class="form-control"
					value={kalkulasi(inputValue, dataKonversi[index].nilaiSatuan)}
                    disabled
				/>
			</div>
		</div>
	</div>
</section>
