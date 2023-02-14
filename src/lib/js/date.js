export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
}

export const getToday = () => {
	let today = new Date();
	today.setHours(today.getHours() + 8);
	today = today.toISOString().slice(0, 10);
	return today;
};
