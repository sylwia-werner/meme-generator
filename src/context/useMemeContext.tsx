import { createContext, useContext, useState } from "react";
import DEFAULT_MEME_SRC from "../assets/memes/meme-1.jpg";

interface MemeContextType {
	image: string | null;
	setImage: (image: string | null) => void;
	reset: () => void;
}

interface Args {
	children: React.ReactNode;
}

const MemeContext = createContext<MemeContextType | undefined>(undefined);

export const MemeProvider = ({ children }: Args) => {
	const [image, setImage] = useState<string | null>(DEFAULT_MEME_SRC);
	// const [texts, setTexts] = useState<TextStyle[]>([]);

	// const addText = (text: TextStyle) => {
	// 	setTexts(prev => [...prev, text]);
	// };

	const reset = () => {
		setImage(null);
		// setTexts([]);
	};

	return (
		<MemeContext.Provider value={{ image, setImage, reset }}>
			{children}
		</MemeContext.Provider>
	);
};

export const useMemeContext = () => {
	const context = useContext(MemeContext);
	if (!context) {
		throw new Error("useMemeContext must be used within a MemeProvider");
	}
	return context;
};
