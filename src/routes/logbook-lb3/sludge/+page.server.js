export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('jenis', data.get('jenis'));
		formData.append('tanggal', data.get('tanggal'));
		formData.append('status', data.get('status'));
		formData.append('jumlah', data.get('jumlah'));

		const res = await fetch(`http://127.0.0.1:5000/lingkungan/${params}`, {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};

export const load = async (params) => {
	const param = params.url.pathname;
	const lb3 = param.split('/').pop();

	const res = await fetch(`http://127.0.0.1:5000/lingkungan/${lb3}`);
	const data = res.json();

	return data;
};
