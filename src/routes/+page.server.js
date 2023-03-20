export const load = async () => {
	const res1 = await fetch('https://pltdktm.anpy.my.id/lingkungan/all');
	const data1 = res1.json();

	const res2 = await fetch('https://pltdktm.anpy.my.id/lingkungan/limbah/debit');
	const data2 = res2.json();

	return {
		data1,
		data2
	};
};
// tes
