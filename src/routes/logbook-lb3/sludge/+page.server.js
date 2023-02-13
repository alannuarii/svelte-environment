export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('jenis', data.get('jenis'));
		formData.append('tanggal', data.get('tanggal'));
		formData.append('status', data.get('status'));
		formData.append('jumlah', data.get('jumlah'));

		console.log(formData);
		// const res = await fetch('http://pltdktm.anpy.my.id/lingkungan/lb3', {
		// 	method: 'POST',
		// 	body: formData
		// });

		// return res.json();
	}
};
