import { ChangeEvent } from "react";
import { TextItem } from "../../types/textItem";
import { Button } from "../Button/Button";
import "./TextControl.css";

interface Props {
	id: string;
	value: string;
	updateText: (id: string, updatedProps: Partial<TextItem>) => void;
}

export const TextControl = ({ id, value, updateText }: Props) => {
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		updateText(id, { textContent: e.target.value });
	};
	return (
		<div className="text-control-tile">
			<textarea
				className="text-control-textarea"
				value={value}
				onChange={handleChange}
			/>
			<div className="edit-button-container">
				<Button
					variant="ghost"
					onClick={() => console.log("settings open")}
				>
					Edit
				</Button>
			</div>
		</div>
	);
};
