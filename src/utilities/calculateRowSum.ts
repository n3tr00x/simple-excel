import { CellData } from '../types/CellData';

export const calculateRowSum = (row: CellData[]) => {
	return row.reduce((accumulator, cell) => accumulator + cell.value, 0);
};
