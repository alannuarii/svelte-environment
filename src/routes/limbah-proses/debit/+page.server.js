import { convertPath } from '../../../lib/js/convertPath';

export const load = async (params) => {
	const tahunBulan = params.url.searchParams.get('bulan');
	const path = params.url.pathname;
	const newPath = convertPath(tahunBulan, path);

	const res = await fetch(`https://pltdktm.anpy.my.id/lingkungan/limbah/${newPath}`);
	const data = res.json();
	return data;
};
