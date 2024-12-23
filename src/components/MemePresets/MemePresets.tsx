import "./MemePresets.css";

interface Props {
	memes: string[];
	onMemeSelect: (image: string) => void;
}
export const MemePresets = ({ memes, onMemeSelect }: Props) => {
	const handleKeyPress = (event: React.KeyboardEvent, meme: string) => {
		if (event.key === "Enter" || event.key === " ") {
			onMemeSelect(meme);
		}
	};
	return (
		<div className="meme-gallery" role="list" aria-label="Meme presets">
			{memes.map((meme, index) => (
				<div
					key={index}
					className="meme-gallery-item"
					role="button"
					tabIndex={0}
					aria-label={`Select meme ${index + 1}`}
					onClick={() => onMemeSelect(meme)}
					onKeyDown={event => handleKeyPress(event, meme)}
				>
					<img
						className="meme-gallery-item-img"
						src={meme}
						alt={`Meme ${index + 1}`}
						loading="lazy"
					/>
				</div>
			))}
		</div>
	);
};
