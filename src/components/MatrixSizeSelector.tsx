type MatrixSizeSelectorProps = {
	size: number;
	onIncreaseSize: () => void;
	onDecreaseSize: () => void;
};

export function MatrixSizeSelector({ size, onIncreaseSize, onDecreaseSize }: MatrixSizeSelectorProps) {
	return (
		<div className="size-selector">
			<button onClick={onDecreaseSize}>-</button>
			<span>Size: {size}</span>
			<button onClick={onIncreaseSize}>+</button>
		</div>
	);
}
