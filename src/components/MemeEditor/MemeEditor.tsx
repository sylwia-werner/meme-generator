import { Button } from "../Button/Button";
import { FileInput } from "../Inputs/FileInput/FileInput";
import "./MemeEditor.css";

export const MemeEditor = () => {
	return (
		<div className="meme-editor">
			<div className="select-image-buttons">
				<FileInput />

				<Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("choose image from gallery")}
				>
					Choose preset
				</Button>
			</div>
			<div className="text-toolbar">
				Content
				{/* <Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("choose image")}
				>
					Choose image
				</Button>
				<Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("choose image from gallery")}
				>
					Choose image from gallery
				</Button>
				<Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("choose image")}
				>
					Choose image
				</Button>
				<Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("choose image from gallery")}
				>
					Choose image from gallery
				</Button>
				<Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("choose image")}
				>
					Choose image
				</Button> */}
			</div>
			<div className="action-buttons">
				<Button
					fullWidth
					variant="primary"
					onClick={() => console.log("download")}
				>
					Download
				</Button>
				<Button
					fullWidth
					variant="secondary"
					onClick={() => console.log("reset")}
				>
					Reset
				</Button>
			</div>
		</div>
	);
};
