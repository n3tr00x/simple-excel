import { CellData } from '../types/CellData';
import { calculateRowSum } from './calculateRowSum';

export const calculateTotalSum = (matrix: CellData[][]) => {
	return matrix.reduce((accumulator, row) => accumulator + calculateRowSum(row), 0);
};
