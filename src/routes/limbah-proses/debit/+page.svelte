<script>
	import RekapHarian from '../../components/RekapHarian.svelte';

	let parameter = 'debit';
	let satuan = '(m' + String.fromCharCode(0x00b3) + '/hari)';
</script>

<RekapHarian parameter={parameter.toUpperCase()} {satuan} />
