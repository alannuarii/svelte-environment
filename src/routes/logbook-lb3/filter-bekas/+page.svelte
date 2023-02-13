<script>
	import LogbookLb3 from '../../components/LogbookLB3.svelte';

	export let data;

	let mutasiLB3 = data.data;

	$: saldo = 0;
</script>

<LogbookLb3 lb3="filter bekas" mutasi={mutasiLB3} {saldo} />
