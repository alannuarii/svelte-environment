export const load = async () => {
	const res = await fetch('https://pltdktm.anpy.my.id/lingkungan/all');
	const data = res.json();
	return data;
};
