import { useState } from 'react';
import { Header } from './components/Header';
import { MatrixSizeSelector } from './components/MatrixSizeSelector';
import { Matrix } from './components/Matrix';

export function App() {
	const [matrixSize, setMatrixSize] = useState(4);

	const handleIncreaseSize = () => {
		setMatrixSize(size => size + 1);
	};

	const handleDecreaseSize = () => {
		setMatrixSize(size => Math.max(size - 1, 0));
	};

	return (
		<main className="main">
			<Header />
			<MatrixSizeSelector
				size={matrixSize}
				onIncreaseSize={handleIncreaseSize}
				onDecreaseSize={handleDecreaseSize}
			/>
			<Matrix size={matrixSize} />
		</main>
	);
}
