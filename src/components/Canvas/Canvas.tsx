import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Canvas.css";
import { TextItem } from "../../types/textItem";

interface Props {
	image: string;
	texts: TextItem[];
}
export const Canvas = ({ image, texts }: Props) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [containerSize, setContainerSize] = useState<{
		width: number;
		height: number;
	}>({
		width: 0,
		height: 0,
	});

	const updateContainerSize = () => {
		const container = canvasRef.current?.parentElement;
		if (container) {
			setContainerSize({
				width: container.offsetWidth,
				height: container.offsetHeight,
			});
		}
	};

	useEffect(() => {
		updateContainerSize();
		window.addEventListener("resize", updateContainerSize);
		return () => {
			window.removeEventListener("resize", updateContainerSize);
		};
	}, []);

	useLayoutEffect(() => {
		if (!image) return;

		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (canvas && context && image) {
			const img = new Image();
			img.src = image;

			img.onload = () => {
				const scaleX = containerSize.width / img.width;
				const scaleY = containerSize.height / img.height;
				const scale = Math.min(scaleX, scaleY);

				canvas.width = img.width * scale;
				canvas.height = img.height * scale;

				context.clearRect(0, 0, canvas.width, canvas.height);
				context.drawImage(img, 0, 0, canvas.width, canvas.height);

				texts.forEach(text => {
					context.beginPath();
					context.font = `${text.size}px Arial`;
					context.fillStyle = text.color;
					context.fillText(text.textContent, 50, 50);
				});
			};

			img.onerror = () => {
				console.error("Failed to load image");
			};
		}
	}, [image, containerSize, texts]);

	return (
		<div className="canvas-container">
			<canvas ref={canvasRef} className="canvas" id="canvas" />
		</div>
	);
};
