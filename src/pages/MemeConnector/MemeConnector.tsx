import { Canvas } from "../../components/Canvas/Canvas";
import { MemeEditor } from "../../components/MemeEditor/MemeEditor";
import { useMemeContext } from "../../context/useMemeContext";
import { MainLayout } from "../../layouts/MainLayout";
import "./MemeConnector.css";
import { useTextEditorContext } from "../../context/useTextEditorContext";

export const MemeConnector = () => {
	const { image } = useMemeContext();

	const { texts } = useTextEditorContext();
	const isImageSelected = !!image;

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
