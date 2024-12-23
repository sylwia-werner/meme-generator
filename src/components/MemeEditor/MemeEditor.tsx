import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { FileInput } from "../Inputs/FileInput/FileInput";
import "./MemeEditor.css";
import Modal from "../Modal/Modal";
import { MemePresets } from "../MemePresets/MemePresets";
import { useMemeContext } from "../../hooks/useMemeContext";
import { useTextEditor } from "../../hooks/useTextEditor";

export const MemeEditor = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [memes, setMemes] = useState<string[]>([]);
	const { texts, addText } = useTextEditor();
	const { setImage } = useMemeContext();

	const handleMemeSelect = (image: string) => {
		setImage(image);
		setIsOpen(false);
	};

	useEffect(() => {
		const memeImport = import.meta.glob("/src/assets/memes/*.jpg", {
			eager: false,
		});

		const memePaths = Object.keys(memeImport);

		Promise.all(
			memePaths.map(async path => {
				const module = await memeImport[path]();
				return (module as { default: string }).default;
			})
		).then(loadedMemes => {
			setMemes(loadedMemes);
		});
	}, []);

	return (
		<>
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

				<div className="text-toolbar">
					<Button variant="secondary" onClick={() => addText}>
						Add Text
					</Button>
					<div className="text-tiles">
						{texts.map(text => (
							<div key={text.id} className="text-tile">
								<span>{text.textContent}</span>
								{/* Add buttons for text editing */}
							</div>
						))}
					</div>
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
			{isOpen && (
				<Modal title="Choose preset" onClose={() => setIsOpen(false)}>
					<MemePresets
						memes={memes}
						onMemeSelect={handleMemeSelect}
					/>
				</Modal>
			)}
		</>
	);
};
