import { calculateTotalSum } from '../utilities/calculateTotalSum';
import { CellData } from '../types/CellData';

type TotalCellSumProps = {
	matrix: CellData[][];
};

export function TotalCellSum({ matrix }: TotalCellSumProps) {
	const sum = calculateTotalSum(matrix);

	return <div className="total-cell-sum">Total cell sum: {sum}</div>;
}
