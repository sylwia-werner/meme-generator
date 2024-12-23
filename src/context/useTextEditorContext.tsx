import { createContext, useContext } from "react";
import { useTextEditor } from "../hooks/useTextEditor";
import { TextItem } from "../types/textItem";

type TextEditorContextValue = {
	texts: TextItem[];
	addText: (text?: string) => void;
	updateText: (id: string, updatedProps: Partial<TextItem>) => void;
	removeText: (id: string) => void;
	removeTexts: () => void;
	moveText: (id: string, x: number, y: number) => void;
};

interface Args {
	children: React.ReactNode;
}

const TextEditorContext = createContext<TextEditorContextValue | undefined>(
	undefined
);

export const TextEditorProvider = ({ children }: Args) => {
	const textEditor = useTextEditor();

	return (
		<TextEditorContext.Provider value={textEditor}>
			{children}
		</TextEditorContext.Provider>
	);
};

export const useTextEditorContext = () => {
	const context = useContext(TextEditorContext);
	if (!context) {
		throw new Error(
			"useTextEditorContext must be used within a TextEditorProvider"
		);
	}
	return context;
};
