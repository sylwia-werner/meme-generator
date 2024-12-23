import { useState } from "react";
import { TextItem } from "../types/textItem";

export const useTextEditor = () => {
	const [texts, setTexts] = useState<TextItem[]>([
		{
			id: "1",
			color: "#000",
			size: 32,
			textContent: "",
			x: 0,
			y: 0,
		},
	]);

	const addText = (text?: string) => {
		const newText: TextItem = {
			id: Date.now().toString(),
			textContent: text || "",
			size: 32,
			color: "white",
			x: 50,
			y: 50,
		};

		setTexts(prevTexts => [...prevTexts, newText]);
	};

	const updateText = (id: string, updatedProps: Partial<TextItem>) => {
		setTexts(prevTexts =>
			prevTexts.map(text =>
				text.id === id
					? {
							...text,
							...updatedProps,
							textContent: updatedProps.textContent || "",
					  }
					: text
			)
		);
	};

	const removeText = (id: string) => {
		setTexts(prevTexts => prevTexts.filter(text => text.id !== id));
	};

	const removeTexts = () => {
		setTexts([]);
	};

	const moveText = (id: string, x: number, y: number) => {
		updateText(id, { x, y });
	};

	return {
		texts,
		addText,
		updateText,
		removeText,
		removeTexts,
		moveText,
	};
};
