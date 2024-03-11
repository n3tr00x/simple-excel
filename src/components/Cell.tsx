import { ChangeEvent, useState } from 'react';
import { CellData } from '../types/CellData';

type CellProps = {
	data: CellData;
	onChange: (cellData: CellData) => void;
};

export function Cell({ data, onChange }: CellProps) {
	const [isError, setIsError] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const number = +event.target.value;

		if (number > 999) {
			onChange({
				rowId: data.rowId,
				columnId: data.columnId,
				value: 999,
			});
			setIsError(true);
			return;
		}

		if (number < -999) {
			onChange({
				rowId: data.rowId,
				columnId: data.columnId,
				value: -999,
			});
			setIsError(true);
			return;
		}

		onChange({
			rowId: data.rowId,
			columnId: data.columnId,
			value: number,
		});
		setIsError(false);
	};

	return (
		<input
			type="number"
			className={`cell ${isError ? 'error' : ''}`}
			defaultValue={data.value}
			onChange={handleChange}
			min={-999}
			max={999}
		/>
	);
}
