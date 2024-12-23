import { useEffect, useRef } from "react";
import { useMemeContext } from "../../hooks/useMemeContext";

export const Canvas = () => {
	const { image } = useMemeContext();
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	console.log(image, "image canva");
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (canvas && context && image) {
			const img = new Image();
			img.src = image; // Ustawiamy źródło obrazu

			img.onload = () => {
				// Dopasowujemy wielkość canvas do rozmiaru obrazu
				canvas.width = img.width;
				canvas.height = img.height;

				// Rysujemy obraz na canvasie
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.drawImage(img, 0, 0);
			};
		}
	}, [image]); // Wywołanie przy zmianie `image`

	return (
		<div className="canvas-container">
			<canvas ref={canvasRef} className="canvas" id="canvas" />
		</div>
	);
};
