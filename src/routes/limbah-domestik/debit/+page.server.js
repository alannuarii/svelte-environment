import { convertPath } from '../../../lib/js/convertPath';

export const load = async (params) => {
	const tahunBulan = params.url.searchParams.get('bulan');
	const path = params.url.pathname;
	const newPath = convertPath(tahunBulan, path);

	const res = await fetch(`https://pltdktm.anpy.my.id/lingkungan/limbah/${newPath}`);
	const data = res.json();
	return data;
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('tanggal', data.get('tanggal'));
		formData.append('jenis', data.get('jenis'));
		formData.append('parameter', data.get('parameter'));
		formData.append('nilai', data.get('nilai'));

		const res = await fetch('https://pltdktm.anpy.my.id/lingkungan/limbah/input', {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};
