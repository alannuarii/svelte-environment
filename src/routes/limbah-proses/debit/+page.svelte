<script>
	import RekapHarian from '../../components/RekapHarian.svelte';

	let jenis = 'proses';
	let parameter = 'debit';
	let satuan = '(m' + String.fromCharCode(0x00b3) + '/hari)';

	export let data;
	const dataHarian = data.data;
</script>

<RekapHarian {parameter} {satuan} {jenis} {dataHarian} />
