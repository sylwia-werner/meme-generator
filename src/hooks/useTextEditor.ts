import { useState } from "react";
import { TextItem } from "../types/textItem";

export const useTextEditor = () => {
	const [texts, setTexts] = useState<TextItem[]>([]);

	const addText = (text: string) => {
		const newText: TextItem = {
			id: Date.now().toString(),
			textContent: text,
			size: 20,
			color: "black",
			x: 0,
			y: 0,
		};

		setTexts(prevTexts => [...prevTexts, newText]);
	};

	const updateText = (id: string, updatedProps: Partial<TextItem>) => {
		setTexts(prevTexts =>
			prevTexts.map(text =>
				text.id === id ? { ...text, ...updatedProps } : text
			)
		);
	};

	const removeText = (id: string) => {
		setTexts(prevTexts => prevTexts.filter(text => text.id !== id));
	};

	const moveText = (id: string, x: number, y: number) => {
		updateText(id, { x, y });
	};

	return {
		texts,
		addText,
		updateText,
		removeText,
		moveText,
	};
};
