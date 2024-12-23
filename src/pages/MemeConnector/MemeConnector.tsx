import { useEffect } from "react";
import { Canvas } from "../../components/Canvas/Canvas";
import { MemeEditor } from "../../components/MemeEditor/MemeEditor";
import { useMemeContext } from "../../context/useMemeContext";
import { MainLayout } from "../../layouts/MainLayout";
import "./MemeConnector.css";
import { useTextEditor } from "../../hooks/useTextEditor";

export const MemeConnector = () => {
	const { image } = useMemeContext();
	const { texts } = useTextEditor();
	const isImageSelected = !!image;

	useEffect(() => {
		console.log(texts);
	}, [texts]);

	return (
		<MainLayout>
			<div className="row">
				<div className="item">
					{isImageSelected ? (
						<Canvas image={image} texts={texts} />
					) : (
						<div className="canvas-fallback-container">
							<p>Load an image to start.</p>
						</div>
					)}
				</div>
				<div className="item">
					<MemeEditor />
				</div>
			</div>
		</MainLayout>
	);
};
