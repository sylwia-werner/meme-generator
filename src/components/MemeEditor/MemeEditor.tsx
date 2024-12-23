import { useState } from "react";
import { Button } from "../Button/Button";
import { FileInput } from "../Inputs/FileInput/FileInput";
import "./MemeEditor.css";
import Modal from "../Modal/Modal";

export const MemeEditor = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="meme-editor">
			<div className="select-image-buttons">
				<FileInput />

				<Button
					fullWidth
					variant="secondary"
					onClick={() => setIsOpen(true)}
				>
					Choose preset
				</Button>
			</div>
			{isOpen && (
				<Modal title="Choose preset" onClose={() => setIsOpen(false)}>
					ELKO
				</Modal>
			)}
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
