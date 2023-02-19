<script>
	import ParameterUkur from '../components/ParameterUkur.svelte';
	import { yearMonthNow } from '../../lib/js/date';

	const yearMonth = yearMonthNow();

	const debit = `/limbah-proses/debit?bulan=${yearMonth}`;
	const ph = `/limbah-proses/ph?bulan=${yearMonth}`;
</script>

<ParameterUkur {debit} {ph} />
