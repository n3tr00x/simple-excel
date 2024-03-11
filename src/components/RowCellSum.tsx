import { calculateRowSum } from '../utilities/calculateRowSum';
import { CellData } from '../types/CellData';

type RowCellSumProps = {
	row: CellData[];
};

export function RowCellSum({ row }: RowCellSumProps) {
	const sum = calculateRowSum(row);

	return <div className="row-cell-sum">{sum}</div>;
}
