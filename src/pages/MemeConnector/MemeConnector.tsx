import { Canvas } from "../../components/Canvas/Canvas";
import { MemeEditor } from "../../components/MemeEditor/MemeEditor";
import { useMemeContext } from "../../hooks/useMemeContext";
import { MainLayout } from "../../layouts/MainLayout";
import "./MemeConnector.css";

export const MemeConnector = () => {
	const { image } = useMemeContext();
	const isImageSelected = !!image;

	return (
		<MainLayout>
			<div className="row">
				<div className="item">
					{isImageSelected ? (
						<Canvas />
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
