<script>
	import RekapHarian from '../../components/RekapHarian.svelte';
	import {formatTanggal} from '../../../lib/js/date'

	let jenis = 'domestik';
	let parameter = 'ph';
	let satuan = '';

	export let data;
	const dataHarian = data.data;
	const dataHarianFix = dataHarian.map(({ tanggal, nilai }) => ({ tanggal:formatTanggal(tanggal), nilai }));
</script>

<RekapHarian {parameter} {satuan} {jenis} {dataHarian} {dataHarianFix} />
