import { useCallback, useEffect, useState } from 'react';
import { Cell } from './Cell';
import { generateRandomNumber } from '../utilities/generateRandomNumber';
import { CellData } from '../types/CellData';

type MatrixProps = {
	size: number;
};

export function Matrix({ size }: MatrixProps) {
	const [matrix, setMatrix] = useState<CellData[][]>([]);

	const generateMatrix = useCallback(() => {
		setMatrix(prevMatrix => {
			return Array.from({ length: size }, (_, x) =>
				Array.from({ length: size }, (_, y) => {
					if (prevMatrix[x] && prevMatrix[x][y]) {
						return prevMatrix[x][y];
					}
					return {
						rowId: x,
						columnId: y,
						value: generateRandomNumber(),
					};
				})
			);
		});
	}, [size]);

	useEffect(() => {
		generateMatrix();
	}, [generateMatrix]);

	const handleCellValueChange = (cellData: CellData) => {
		setMatrix(prevMatrix => {
			const updatedMatrix = [...prevMatrix];
			updatedMatrix[cellData.rowId][cellData.columnId].value = cellData.value;
			return updatedMatrix;
		});
	};

	return (
		<div className="matrix">
			{matrix.map((row, rowIndex) => (
				<div className="row" key={rowIndex}>
					{row.map(cell => (
						<Cell
							key={`${cell.rowId}${cell.columnId}`}
							data={cell}
							onChange={handleCellValueChange}
						/>
					))}
				</div>
			))}
		</div>
	);
}
