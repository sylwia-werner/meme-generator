import { Canvas } from "../../components/Canvas/Canvas";
import { MemeEditor } from "../../components/MemeEditor/MemeEditor";
import { useMemeContext } from "../../hooks/useMemeContext";
import { useTextEditor } from "../../hooks/useTextEditor";
import { MainLayout } from "../../layouts/MainLayout";
import "./MemeConnector.css";

export const MemeConnector = () => {
	const { image } = useMemeContext();
	const { texts } = useTextEditor();
	const isImageSelected = !!image;

	return (
		<MainLayout>
			<div className="row">
				<div className="item">
					{isImageSelected ? (
						<Canvas image={image} texts={texts} />
					) : (
						<div className="">Load an image to start.</div>
					)}
				</div>
				<div className="item">
					<MemeEditor />
				</div>
			</div>
		</MainLayout>
	);
};
