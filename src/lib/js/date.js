export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

export const getToday = () => {
	let today = new Date();
	today.setHours(today.getHours() + 8);
	today = today.toISOString().slice(0, 10);
	return today;
	// 2023-02-21 tanggal hari ini
};

export const tanggal = (format) => {
	const date = new Date(format);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
	// 2023-02-21
};

export const yearMonthNow = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const dateString = `${year}-${month.toString().padStart(2, '0')}`;
	return dateString;
};
