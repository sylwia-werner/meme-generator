import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { FileInput } from "../Inputs/FileInput/FileInput";
import "./MemeEditor.css";
import Modal from "../Modal/Modal";
import { MemePresets } from "../MemePresets/MemePresets";
import { useMemeContext } from "../../context/useMemeContext";
import { TextControl } from "../TextControl/TextControl";
import { useTextEditorContext } from "../../context/useTextEditorContext";

export const MemeEditor = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [memes, setMemes] = useState<string[]>([]);
	const { texts, addText, updateText, removeTexts } = useTextEditorContext();
	const { image, setImage } = useMemeContext();
	const isImageSelected = !!image;

	const handleMemeSelect = (image: string) => {
		setImage(image);
		setIsOpen(false);
	};

	const reset = () => {
		setImage(null);
		removeTexts();
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
				{isImageSelected && (
					<div className="text-toolbar">
						<Button variant="ghost" onClick={() => addText()}>
							Add Text
						</Button>
						<div className="text-tiles">
							{texts.map(text => (
								<TextControl
									key={text.id}
									id={text.id}
									value={text.textContent.toString()}
									updateText={updateText}
								/>
							))}
						</div>
					</div>
				)}
				<div className="action-buttons">
					<Button fullWidth variant="secondary" onClick={reset}>
						Reset
					</Button>
					<Button
						fullWidth
						variant="primary"
						onClick={() => console.log("download")}
					>
						Download
					</Button>
				</div>
			</div>
			{isOpen && (
				<Modal title="Choose preset" onClose={() => setIsOpen(false)}>
					{/* TODO: Load presets when needed */}
					<MemePresets
						memes={memes}
						onMemeSelect={handleMemeSelect}
					/>
				</Modal>
			)}
		</>
	);
};
