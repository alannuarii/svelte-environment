<script>
	import ParameterUkur from '../components/ParameterUkur.svelte';
	import { yearMonthNow } from '../../lib/js/date';

	const yearMonth = yearMonthNow();

	const debit = `/limbah-domestik/debit?bulan=${yearMonth}`;
	const ph = `/limbah-domestik/ph?bulan=${yearMonth}`;
</script>

<ParameterUkur {debit} {ph} />
