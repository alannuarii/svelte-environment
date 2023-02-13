export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('jenis', data.get('jenis'));
		formData.append('tanggal', data.get('tanggal'));
		formData.append('status', data.get('status'));
		formData.append('jumlah', data.get('jumlah'));

		const res = await fetch(`https://pltdktm.anpy.my.id/lingkungan/${params}`, {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};

export const load = async (params) => {
	const param = params.url.pathname;
	const lb3 = param.split('/').pop();

	if (lb3.indexOf('-') !== -1) {
		const newLB3 = lb3.replace(/-/g, '_');
		const res = await fetch(`https://pltdktm.anpy.my.id/lingkungan/${newLB3}`);
		const data = res.json();

		return data;
	} else {
		const res = await fetch(`https://pltdktm.anpy.my.id/lingkungan/${lb3}`);
		const data = res.json();

		return data;
	}
};
