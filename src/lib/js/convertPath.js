export const convertPath = (tahunBulan, path) => {
	const pathArray = path.split('/').filter(Boolean);
	const result = `${pathArray.join('-').slice(7)}-${tahunBulan}`;
	return result;
};
// tes 


